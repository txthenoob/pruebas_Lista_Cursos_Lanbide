import React from "react";
import { DataGrid } from '@mui/x-data-grid';


const TablaCursos = ({ data }) => {
  if (!data || !data.resultados || data.resultados.length === 0) {
    return <p>No hay cursos disponibles.</p>;
  }

  // Ejemplo de filtro: solo en castellano
  const cursosCastellano = data.resultados.filter(
    (curso) => curso.idioma === "Castellano"
  );

  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Idioma</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Modalidad</th>
          <th>Lugar</th>
          <th>Organizador</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        {cursosCastellano.map((curso, index) => (
          <tr key={index}>
            <td>{curso.titulo}</td>
            <td>{curso.idioma}</td>
            <td>{curso.fecha_inicio}</td>
            <td>{curso.fecha_fin}</td>
            <td>{curso.modalidad}</td>
            <td>{curso.lugar}</td>
            <td>{curso.organizador}</td>
            <td>
              <a href={curso.url} target="_blank" rel="noopener noreferrer">
                Ver curso
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaCursos;
