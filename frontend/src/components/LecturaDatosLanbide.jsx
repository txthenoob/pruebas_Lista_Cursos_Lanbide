const Lectura_datos_lanbide = ({ setData }) => {

  const handle_datos_lanbide = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/lanbide`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No info');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log('Cursos cargados desde API proxy:', data);
      })
      .catch(error => {
        console.error('Error fetching cursos:', error);
      });
  };

  return (
    <button onClick={handle_datos_lanbide}>Cargar cursos de Lanbide</button>
  );
};

export default Lectura_datos_lanbide;
