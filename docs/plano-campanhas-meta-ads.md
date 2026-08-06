# Plano de Campanhas Meta Ads — Prime Hair Cascavel

**Status:** rascunho para aprovação do cliente. Nada vai ao ar até aprovação explícita + acesso ao Business Manager + verba mensal confirmada.

## 1. Objetivo e lógica do funil

Ticket alto + decisão de risco percebido = jornada longa. Estrutura em 3 camadas rodando **simultaneamente**, não em sequência, com públicos e criativos específicos para cada etapa da jornada (Descoberta → Educação → Confiança → Decisão).

| Camada | Etapa da jornada | Objetivo de campanha (Meta) | KPI primário |
|---|---|---|---|
| Topo | Descoberta | Alcance / ThruPlay (vídeo) | Custo por lead |
| Meio | Educação + Confiança | Engajamento / Tráfego / ThruPlay | Custo por lead qualificado |
| Fundo | Decisão | Conversão (Leads / WhatsApp) | Custo por agendamento + taxa de comparecimento |

Sugestão inicial de split de verba (ajustar quando o valor mensal for informado): **Topo 40% / Meio 30% / Fundo 30%**. Nas primeiras 2-3 semanas priorizo aprendizado (topo maior); depois de sair da fase de aprendizado, realoco para o que estiver trazendo agendamento mais barato.

---

## 2. Camada de Topo — Alcançar quem tem queda mas não pesquisa clínica ainda

**Objetivo Meta:** Awareness/Alcance ou Vídeo (ThruPlay) — não usar Conversão aqui, o público ainda não está pronto pra converter.

**Restrição importante:** Meta não permite segmentar por "condição de saúde" (calvície não existe como interesse direto de "atributo pessoal sensível"). Vamos segmentar por **interesses proxy** e **lookalike**, nunca por atributo de saúde.

### Públicos
- Interesses proxy: cuidados masculinos/skincare masculino, barbearias premium, produtos capilares, marcas de estética masculina, fitness/autoestima.
- Lookalike 1-3% de: base de agendados (quando existir), base de leads que compareceram, engajadores do Instagram/Facebook da Prime Hair.
- Broad (sem interesse) + otimização por evento, deixando o algoritmo achar o público — testar em paralelo com os interesses, geralmente broad performa melhor em contas com pixel maduro.
- Geo: Cascavel + raio configurável (ex: 80-150km) para cobrir região que viaja até a clínica; testar também capitais próximas se a clínica atender fora de Cascavel.
- Idade: 25-55 (faixa onde calvície androgenética é mais comum e há poder de compra).

### Criativos necessários (2-3 alternativas, risco de reprovação é alto no nicho)
1. Vídeo educativo curto (15-30s) explicando causas da queda de cabelo, sem prometer resultado — tom informativo, não clínico.
2. Antes/depois **discreto** (ângulo, iluminação natural, sem contraste exagerado) com legenda educativa, não promessa de garantia.
3. Depoimento/bastidor de paciente ou da equipe explicando a metodologia PH7 de forma acessível.

**Evitar:** "resultado garantido", "cura", antes/depois muito chocante/dramático, close-up cirúrgico.

---

## 3. Camada de Meio — Remarketing vencendo objeção

**Objetivo Meta:** Engajamento, Tráfego para landing/WhatsApp, ou Vídeo — dependendo do sub-público.

### Públicos (remarketing)
- Quem assistiu ≥50% dos vídeos de topo (engajamento de vídeo).
- Quem interagiu com posts/perfil do Instagram/Facebook nos últimos 30-90 dias.
- Visitantes do site/landing page que não converteram (pixel).
- Quem iniciou conversa no WhatsApp mas não confirmou agendamento (se rastreável via CAPI/CRM).

### Criativos necessários
1. Depoimentos reais de pacientes (vídeo, com autorização de imagem) — foco em jornada emocional, não só resultado físico.
2. FAQ em carrossel ou vídeo: dor, tempo de recuperação, resultado realista, diferença da metodologia PH7 vs. técnicas tradicionais.
3. Bastidores da clínica/equipe médica — gera confiança, mostra estrutura e profissionalismo (importante pra reduzir risco percebido).

**Evitar:** reforçar promessas de resultado; focar em "tirar dúvida" e "mostrar prova social", não em vender agressivamente ainda.

---

## 4. Camada de Fundo — Conversão em avaliação agendada

**Objetivo Meta:** Geração de Cadastro (Lead Ads/formulário) e/ou Conversão para WhatsApp (clique para WhatsApp com evento de conversa iniciada).

### Públicos
- Remarketing quente: engajou com conteúdo de meio, visitou landing de agendamento, iniciou e não concluiu formulário.
- Lookalike 1% de agendados que compareceram (alta prioridade assim que houver volume de dados suficiente).

### Criativos necessários
1. CTA direto de agendamento de avaliação (gratuita/com condição, a confirmar com cliente) — foco em "avaliação" como próximo passo de baixo risco, não em "cirurgia".
2. Prova social forte (depoimento + antes/depois moderado) + urgência/escassez leve (ex: vagas limitadas na agenda do mês) — sem ser agressivo.
3. Vídeo curto do médico/especialista convidando para avaliação, reforçando metodologia PH7 e os +700 procedimentos.

**Evitar:** formulários longos (fricção reduz volume e sobe custo por lead); sempre oferecer WhatsApp como alternativa ao formulário.

---

## 5. Mensuração e loop de otimização

O KPI que mais importa (custo por agendamento) e o de qualidade (taxa de comparecimento) **não nascem no Meta** — são eventos que acontecem depois do clique. Preciso que o cliente me ajude a fechar esse loop:

1. **Pixel + Conversions API (CAPI)** na landing page de agendamento — essencial pra otimizar por "Lead" e não só por clique.
2. **Evento de WhatsApp** rastreado (clique para WhatsApp / conversa iniciada) via integração Meta-WhatsApp Business.
3. **Feedback de agendamento e comparecimento**: preciso saber quais leads viraram agendamento e quais compareceram, para alimentar de volta como "conversão offline" (CRM → Meta Offline Conversions ou CAPI manual). Sem isso, otimizo às cegas pelo custo por lead, que mede volume, não qualidade.

**Pergunta pro cliente:** como é feito hoje o controle de agendamento/comparecimento (planilha, CRM, sistema da clínica)? Isso define como vamos integrar o feedback.

---

## 6. Compliance / guard-rails do nicho (saúde e estética)

- Nunca segmentar por atributo de saúde direto — só interesse/comportamento proxy e lookalike.
- Anúncios de saúde entram em revisão mais rígida no Meta — sempre ter **2-3 criativos alternativos** prontos por camada (checklist acima) para não ficar sem ar no caso de reprovação.
- Evitar linguagem de garantia de resultado ("cura", "resultado garantido") e imagens de antes/depois excessivamente dramáticas.
- Toda imagem/depoimento de paciente precisa de autorização de uso de imagem documentada antes de subir como anúncio.

---

## 7. Nomenclatura de campanhas (para rastreabilidade)

`PH_[Camada]_[Objetivo]_[Público]_[DataInício]`
Exemplo: `PH_Topo_ThruPlay_LAL1-Agendados_ago26`

---

## 8. O que falta para colocar no ar

- [ ] Acesso ao Business Manager / conta de anúncios da Prime Hair.
- [ ] Valor de verba mensal aprovado (e se é fixo ou pode escalar conforme performance).
- [ ] Pixel/CAPI instalado na landing page de agendamento (ou acesso para eu configurar).
- [ ] Definição de como o comparecimento é hoje registrado (planilha/CRM), pra fechar o loop de otimização.
- [ ] Assets de criativo: vídeos de depoimento com autorização de imagem, fotos antes/depois aprovadas pela equipe médica, vídeo institucional da metodologia PH7.
- [ ] Aprovação da copy de cada camada (evitar reprovação por linguagem de saúde).

Assim que os itens acima estiverem prontos, crio as campanhas já estruturadas nas 3 camadas e libero para revisão final antes de ativar.
