
function Tarjeta({imagen, nombre, rol}) {
  return (
    <article className="tarjetica">
      <div className="thumb">
        <img className="tarjeta-img" src={imagen} alt={nombre} />
      </div>
      <div className="tarjeta-body">
        <h3 className="tarjeta-title">{nombre}</h3>
        <p className="tarjeta-desc">{rol}</p>
      </div>
    </article>
  )
}

export default Tarjeta