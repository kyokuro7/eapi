const express = require('express');
const app = express();

app.use(express.json());

// Izinkan CORS agar bisa dipanggil dari domain/aplikasi manapun
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

const AM_BASE_URL = 'https://am.noxxyrorr.biz.id';

// Helper Fetch dengan Timeout 45 Detik
async function fetchWithTimeout(url, options = {}, timeoutMs = 45000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    if (err.name === 'AbortError') {
      throw new Error('Request ke server target mengalami timeout (melebihi 45 detik).');
    }
    throw err;
  }
}

// Route: Generate Akun
app.post('/api/generate', async (req, res) => {
  try {
    const apiRes = await fetchWithTimeout(${AM_BASE_URL}/api/am/generate, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body  {})
    });
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(504).json({ success: false, error: err.message });
  }
});

// Route: Kirim Magic Link
app.post('/api/send-link', async (req, res) => {
  try {
    const apiRes = await fetchWithTimeout(`${AM_BASE_URL}/api/send-link`, {
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
    const apiRes = await fetchWithTimeout(${AM_BASE_URL}/api/verify-link, {
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
    const apiRes = await fetchWithTimeout(${AM_BASE_URL}/api/stats, { method: 'GET' });
    const data = await apiRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = app;