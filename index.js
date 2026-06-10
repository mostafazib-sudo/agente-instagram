const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const VERIFY_TOKEN = 'agente123';
const IG_TOKEN = process.env.IG_TOKEN;
const GPT_TOKEN = process.env.GPT_TOKEN;
const GPT_AGENT_ID = '3E9BC482CF4E20829D4F5E1A0F471CE6';
const MY_IG_USER_ID = '17841445197809665';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'minhasenha123';

const respondidos = new Set();
let pausado = false;

// Pausar o agente
app.get('/pausar/:token', (req, res) => {
  if (req.params.token !== ADMIN_TOKEN) return res.sendStatus(403);
  pausado = true;
  console.log('Agente PAUSADO');
  res.send('✅ Agente pausado com sucesso!');
});

// Retomar o agente
app.get('/retomar/:token', (req, res) => {
  if (req.params.token !== ADMIN_TOKEN) return res.sendStatus(403);
  pausado = false;
  console.log('Agente RETOMADO');
  res.send('✅ Agente retomado com sucesso!');
});

// Status do agente
app.get('/status/:token', (req, res) => {
  if (req.params.token !== ADMIN_TOKEN) return res.sendStatus(403);
  res.send(`Status: ${pausado ? '⏸ PAUSADO' : '▶️ ATIVO'}`);
});

app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === VERIFY_TOKEN && req.query['hub.mode'] === 'subscribe') {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', async (req, res) => {
  res.sendStatus(200);
  if (pausado) return;

  try {
    const entry = req.body.entry?.[0];
    const change = entry?.changes?.[0];
    if (change?.field !== 'comments') return;

    const commentId = change.value.id;
    const commentText = change.value.text;
    const userId = change.value.from?.id;

    if (!commentText || !commentId) return;
    if (userId === MY_IG_USER_ID) return;
    if (respondidos.has(commentId)) return;
    respondidos.add(commentId);

    console.log('Comentário recebido:', commentText);

    const gptRes = await axios.post(
      `https://api.gptmaker.ai/v2/agent/${GPT_AGENT_ID}/conversation`,
      { contextId: userId || commentId, prompt: `Você está respondendo um comentário público no Instagram. Seja breve, simpático e natural — no máximo 1 ou 2 frases. Não se apresente, não faça perguntas, não mande links. Só responda de forma humana e direta ao comentário abaixo:\n\n"${commentText}"` },
      { headers: { Authorization: `Bearer ${GPT_TOKEN}` } }
    );

    const reply = gptRes.data.message;
    if (!reply) return;
    console.log('Resposta gerada:', reply);

    await axios.post(
      `https://graph.instagram.com/v21.0/${commentId}/replies`,
      null,
      {
        params: {
          message: reply,
          access_token: IG_TOKEN
        }
      }
    );

    console.log('Respondido com sucesso!');
  } catch (err) {
    console.error('Erro:', err.response?.data || err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor rodando na porta', PORT));
