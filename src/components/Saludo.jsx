
function Saludo({Nombre, Ciudad}) {
  return (
    <div className="saludo">
      <h1 className="saludo-title">Saludos, {Nombre}!</h1>
      <h2 className="saludo-sub">Vives en {Ciudad}</h2>
    </div>
  )
}

export default Saludo