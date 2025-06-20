import mongoose from 'mongoose';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

// Conexión a MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/lanbideDB';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Conectado a MongoDB');
  fetchAndStoreLanbideData(); // ✅ Ejecutar fetch al arrancar
}).catch(err => {
  console.error('❌ Error al conectar a MongoDB:', err.message);
});

// Esquema de curso
const CursoSchema = new mongoose.Schema({}, { strict: false });
const Curso = mongoose.model('Curso', CursoSchema);

// 🔁 Función para hacer fetch de Lanbide y guardar en Mongo
async function fetchAndStoreLanbideData() {
  try {
    const lanbideUrl = 'https://opendata.euskadi.eus/contenidos/ds_eventos/cursos_jornadas_ivap/opendata/cursos.json';

    const response = await fetch(lanbideUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Lanbide responded with status ${response.status}`);
    }

    console.log("Response de Lanbide: ", response);
    const data = await response.json();

    if (!data || !data.items) {
      console.warn('⚠️ No se encontraron cursos en la respuesta de Lanbide');
      console.warn(data);
      return;
    }

    await Curso.deleteMany({});
    await Curso.insertMany(data.items);

    console.log(`✅ Guardados ${data.items.length} cursos en MongoDB`);
  } catch (err) {
    console.error('❌ Error al cargar datos de Lanbide:', err.message);
  }
}

app.get('/api/v1/lanbide', async (req, res) => {
  try {
    const cursos = await Curso.find({});
    res.json(cursos);
  } catch (err) {
    console.error('❌ Error al obtener cursos desde MongoDB:', err.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
