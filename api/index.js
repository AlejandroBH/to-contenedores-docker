const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir peticiones desde el frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint GET - Hola Mundo
app.get('/', (req, res) => {
  res.json({
    message: '¡Hola Mundo!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Endpoint de health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
