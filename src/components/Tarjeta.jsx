
function Tarjeta({imagen, nombre, rol}) {
  return (<>
  <div className="tarjetica">
    <h2>{nombre}</h2>
    <img src={imagen} alt={nombre} />
    <p>{rol}</p>
  </div>
  </>  
  )
}

export default Tarjeta