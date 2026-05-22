const express = require('express');
const router  = express.Router();
const {
  generateQuestions,
  generateStrategy,
  generateCompetitorAnalysis,
  regenerateSection,
} = require('../services/claude');

// ── Generate 5 questions ───────────────────────────────────────────────────
router.post('/questions', async (req, res) => {
  try {
    const { businessDescription } = req.body;
    if (!businessDescription?.trim()) {
      return res.status(400).json({ error: 'Business description is required' });
    }
    const questions = await generateQuestions(businessDescription.trim());
    res.json({ questions });
  } catch (err) {
    console.error('Questions error:', err.message);
    res.status(500).json({ error: 'Failed to generate questions. Please try again.' });
  }
});

// ── Generate full strategy (SSE streaming) ────────────────────────────────
//
// Responds with Content-Type: text/event-stream.  Each event is a JSON
// object on a `data:` line followed by two newlines (standard SSE format).
//
// Event shapes:
//   { type: 'chunk',  text: string }   — one token delta from the model
//   { type: 'done',   strategy: string } — full assembled text; stream ends
//   { type: 'error',  message: string }  — generation failed; stream ends
//
router.post('/strategy', async (req, res) => {
  const { businessDescription, answers } = req.body;
  if (!businessDescription?.trim() || !Array.isArray(answers) || answers.length === 0) {
    // Validation errors must be sent before switching to SSE mode.
    return res.status(400).json({ error: 'Business description and answers are required' });
  }

  // Switch to SSE mode — do this before any await so headers go out immediately.
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const send = (data) => res.write(`data: ${JSON.stringify(data)}\n\n`);

  try {
    const strategy = await generateStrategy(
      businessDescription.trim(),
      answers,
      (chunk) => send({ type: 'chunk', text: chunk }),
    );
    send({ type: 'done', strategy });
  } catch (err) {
    console.error('Strategy error:', err.message);
    send({ type: 'error', message: 'Failed to generate strategy. Please try again.' });
  } finally {
    res.end();
  }
});

// ── Competitor analysis ────────────────────────────────────────────────────
router.post('/competitor', async (req, res) => {
  try {
    const { businessDescription, answers = [], competitorName } = req.body;
    if (!businessDescription?.trim() || !competitorName?.trim()) {
      return res.status(400).json({ error: 'Business description and competitor name are required' });
    }
    const analysis = await generateCompetitorAnalysis(
      businessDescription.trim(),
      answers,
      competitorName.trim()
    );
    res.json({ analysis });
  } catch (err) {
    console.error('Competitor error:', err.message);
    res.status(500).json({ error: 'Failed to generate competitor analysis. Please try again.' });
  }
});

// ── Regenerate one section ─────────────────────────────────────────────────
router.post('/regenerate', async (req, res) => {
  try {
    const { businessDescription, answers = [], sectionKey } = req.body;
    if (!businessDescription?.trim() || !sectionKey) {
      return res.status(400).json({ error: 'Business description and section key are required' });
    }
    const content = await regenerateSection(
      businessDescription.trim(),
      answers,
      sectionKey
    );
    res.json({ content });
  } catch (err) {
    console.error('Regenerate error:', err.message);
    res.status(500).json({ error: 'Failed to regenerate section. Please try again.' });
  }
});

module.exports = router;
