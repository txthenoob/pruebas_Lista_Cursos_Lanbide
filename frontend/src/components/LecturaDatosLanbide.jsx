const Lectura_datos_lanbide = ({ setData }) => {

  const handle_datos_lanbide = () => {
    console.log("Hola");
    console.log(`/api:3001/api/lanbide`);
    fetch(`${import.meta.env.VITE_API_URL}/api/lanbide`)
      .then(async response => {
        const contentType = response.headers.get('content-type');
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('❌ Respuesta no JSON:', text.slice(0, 300));
          throw new Error('Respuesta no JSON');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log('✅ Cursos cargados desde API proxy:', data);
      })
      .catch(error => {
        console.error('Error fetching cursos:', error);
      });
  };

  return (
    <button onClick={handle_datos_lanbide}>
      Cargar cursos de Lanbide
    </button>
  );
};

export default Lectura_datos_lanbide;
