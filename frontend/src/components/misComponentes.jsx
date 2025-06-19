const componente = () => {

    //Tabla que presenta listado de cursos con nombre, fecha_ini, fecha_fin, lugar
    const tabla_cursos = [
        {nombre: "Android", fecha_ini: "1/01/2026", fecha_fin: "7/01/2026", lugar: "Donostia"},
        {nombre: "Ciberseguridad", fecha_ini: "6/01/2026", fecha_fin: "17/01/2026", lugar: "Lazkao"},
        {nombre: "OpenCV", fecha_ini: "18/01/2026", fecha_fin: "7/02/2026", lugar: "Donostia"}
    ]

    return (

        <>
            <h1>Tabla con el listado de cursos, fechas y lugares</h1>
            {tabla_cursos.map((num, index) => (
                <h2 key={index}>{num}</h2>
            ))}
        </>
    )
}