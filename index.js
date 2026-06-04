const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const VERIFY_TOKEN = 'agente123';
const IG_TOKEN = process.env.IG_TOKEN;
const GPT_TOKEN = process.env.GPT_TOKEN;
const GPT_AGENT_ID = '3E9BC482CF4E20829D4F5E1A0F471CE6';

// Verificação do webhook
app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === VERIFY_TOKEN && req.query['hub.mode'] === 'subscribe') {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

// Recebe comentários
app.post('/webhook', async (req, res) => {
  res.sendStatus(200);
  try {
    const entry = req.body.entry?.[0];
    const change = entry?.changes?.[0];
    if (change?.field !== 'comments') return;

    const commentId = change.value.id;
    const commentText = change.value.text;
    const userId = change.value.from?.id;

    if (!commentText || !commentId) return;

    // Manda para o GPT Maker
    const gptRes = await axios.post(
      `https://api.gptmaker.ai/v2/agent/${GPT_AGENT_ID}/conversation`,
      { contextId: userId || commentId, prompt: commentText },
      { headers: { Authorization: `Bearer ${GPT_TOKEN}` } }
    );

    const reply = gptRes.data.message;
    if (!reply) return;

    // Posta a resposta no comentário
    await axios.post(
      `https://graph.facebook.com/v19.0/${commentId}/replies`,
      { message: reply, access_token: IG_TOKEN }
    );

    console.log('Respondido:', commentText, '->', reply);
  } catch (err) {
    console.error('Erro:', err.response?.data || err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor rodando na porta', PORT));
