import Saludo from "./components/Saludo.jsx"
import Tarjeta from "./components/Tarjeta.jsx"
import durisimo from "./assets/durisimo.jpeg"
import ardilla from "./assets/ardilla.webp"
import wolverine from "./assets/wolverine.jpeg"
import "./App.css"

function App() {
  const Durismimos = [
    {
      Nombre: "durisimo",
      rol: "imagen durismia de un dinosaurio electrificando a otro",
      imagen: durisimo,
    },
    {
      Nombre: "ardilla",
      rol: "imagen durisima de una ardilla domando a una serpiente",
      imagen: ardilla,
    },
    {
      Nombre: "wolverine",
      rol: "imagen durisima de wolverine a punto de pelear contra un viejo senil (va a perder)",
      imagen: wolverine,
    },
  ];

  function Buenas(nombre) {
    alert(`buenas buenas ${nombre}`);
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Galería super God</h1>
        <p className="sub">imagenes durisimas para todos yeah!</p>
      </header>

      <main className="container">
        <section className="saludo-wrap">
          <Saludo Nombre={"emanuel"} Ciudad={"madrid"} />
        </section>

        <section className="grid">
          {Durismimos.map((Durismimos) => (
            <div className="grid-item">
              <Tarjeta imagen={Durismimos.imagen} Nombre={Durismimos.Nombre} rol={Durismimos.rol} />
              <div style={{ padding: "8px 12px" }}>
                <button onClick={() => Buenas(Durismimos.Nombre)}>dale 👍</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App