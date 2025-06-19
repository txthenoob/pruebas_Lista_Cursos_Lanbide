# PRUEBAS_LISTA_CURSOS_LANBIDE

React + Vite web application to explore official training courses from sources like IVAP and Lanbide. Includes a backend proxy using Express.js to bypass CORS limitations in production.

---

## 📦 Project Structure

```
.
├── frontend/         # React client built with Vite
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   └── src/
│       ├── components/
│       └── ...
│
├── api/              # Express.js proxy backend for Lanbide
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
│
├── docker-compose.yml
└── README.md
```

---

## 🚀 Quick Start (Development & Production)

### 🔧 Requirements

- Docker + Docker Compose installed

### ▶️ Run

```bash
docker-compose up --build
```

- Frontend available at: **http://localhost**
- Backend proxy available at: **http://localhost:3001/api/lanbide**

---

## 🌐 Backend API Proxy

The backend exposes:

```
GET /api/lanbide
```

This acts as a proxy to:

```
https://www.lanbide.euskadi.eus/lanbide-apps/servlet/cursoServlet?accion=getCursos&idioma=es
```

This solves browser-side CORS issues by proxying through Express.js.

---

## ⚛️ React Components

- `LecturaDatosLanbide.jsx`: Handles data loading from IVAP or other public sources
- `TablaCursos.jsx`: Renders a dynamic table using `@tanstack/react-table`

---

## 🧱 Manual Build (Frontend only)

```bash
cd frontend
npm install
npm run build
npm run preview
```

---

## 🔮 Suggested Next Steps

- Add server-side caching (e.g., Redis, in-memory)
- Integrate additional public course sources (SEPE, Lanbide FO, etc.)
- Add filters, search, and CSV export
- Deploy via Railway, Render, Fly.io, or custom VPS with Docker

---

## 🛡 License

MIT © 2025
