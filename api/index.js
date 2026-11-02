const express = require('express');
const app = express();

app.use(express.json());

const AM_BASE_URL = 'https://am.noxxyrorr.biz.id';

// Route: Generate Akun
app.post('/api/generate', async (req, res) => {
  try {
    const apiRes = await fetch(${AM_BASE_URL}/api/am/generate, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body  {})
    });
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Route: Kirim Magic Link
app.post('/api/send-link', async (req, res) => {
  try {
    const apiRes = await fetch(`${AM_BASE_URL}/api/send-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body  {})
    });
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Route: Verifikasi Magic Link
app.post('/api/verify-link', async (req, res) => {
  try {
    const apiRes = await fetch(${AM_BASE_URL}/api/verify-link, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body || {})
    });
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Route: Cek Statistik
app.get('/api/stats', async (req, res) => {
  try {
    const apiRes = await fetch(${AM_BASE_URL}/api/stats);
    const data = await apiRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = app;