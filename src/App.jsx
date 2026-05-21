import Saludo from "./components/Saludo.jsx"
import Tarjeta from "./components/Tarjeta.jsx"
import durisimo from "./assets/durisimo.jpeg"
import ardilla from "./assets/ardilla.webp"
import wolverine from "./assets/wolverine.jpeg"
function App() {
  return (
    <>
    <div>App</div>
    <Saludo Nombre = "emanuel" Ciudad= "madrid" />
    <Saludo Nombre= "rita" Ciudad="soledad (el infierno)" />
    <Saludo Nombre= "mateo" Ciudad="sincelejo" />

    <Tarjeta nombre="mira esto" rol="imagen durismia de un dinosaurio electrificando a otro" imagen={durisimo} />
    <Tarjeta nombre="esto es nuevo" rol="imagen durisima de una ardilla domando a una serpiente" imagen={ardilla} />
    <Tarjeta nombre="ufff esta imagen" rol="imagen durisima de wolverine a punto de pelear contra un viejo senil (va a perder)" imagen={wolverine} />
    </>
  )
}

export default App