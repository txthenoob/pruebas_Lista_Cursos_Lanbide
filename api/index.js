import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/lanbide', async (req, res) => {
  try {
    const lanbideUrl = 'https://opendata.euskadi.eus/contenidos/ds_eventos/cursos_jornadas_ivap/opendata/cursos.json';

    const response = await fetch(lanbideUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'application/json',
  }
});

//fetch de datos y guardar en BBDD MongoDB
//Install mongo dentro de Express

    // Si la respuesta no es OK, lanza error
    if (!response.ok) {
      throw new Error(`Lanbide responded with status ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.items) {
      console.warn('No se encontraron cursos en la respuesta.');
      return res.status(204).json([]); // No Content, pero sin error
    }

    res.json(data.items);
  } catch (err) {
    console.error('❌ Error fetching Lanbide data:', err.message);
    res.status(500).json({ error: 'Error fetching Lanbide data' });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 API proxy running at http://localhost:${PORT}/api/lanbide`);
});
