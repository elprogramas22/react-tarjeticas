
function Tarjeta({imagen, nombre, rol}) {
  return (<>
  <h2>{nombre}</h2>
  <img src={imagen} alt={nombre} />
  <p>{rol}</p>
  </>  
  )
}

export default Tarjeta