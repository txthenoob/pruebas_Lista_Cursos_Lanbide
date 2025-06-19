import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/cursos', async (req, res) => {
  try {
    const response = await fetch('https://www.lanbide.euskadi.eus/lanbide-apps/servlet/cursoServlet?accion=getCursos&idioma=es');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching Lanbide:', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 API proxy at http://localhost:${PORT}/api/cursos`);
});
