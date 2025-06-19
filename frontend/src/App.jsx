import React, { useEffect, useState } from 'react';
import TablaCursos from './components/TablaCursos';
import Lectura_datos_lanbide from './components/LecturaDatosLanbide';


const App = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('https://www.lanbide.euskadi.eus/lanbide-apps/servlet/cursoServlet?accion=getCursos&idioma=es')
      .then(r => r.json())
      .then(data => setCursos(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Lanbide Courses List</h1>
      <Lectura_datos_lanbide setData={setCursos} />
      <TablaCursos data={cursos} />
    </div>
  );
};

export default App;
