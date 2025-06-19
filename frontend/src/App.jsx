import React, { useState } from 'react';
import TablaCursos from './components/TablaCursos';
import Lectura_datos_lanbide from './components/LecturaDatosLanbide';

const App = () => {
  const [cursos, setCursos] = useState([]);

  return (
    <div>
      <h1>Lanbide Courses List</h1>
      <Lectura_datos_lanbide setData={setCursos} />
      <TablaCursos data={cursos} />
    </div>
  );
};

export default App;

