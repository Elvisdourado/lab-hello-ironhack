import './App.css';

function App() {
  return (
    <div className="">
      <section className="background">
        <nav>
          <ul>
            <img className="imageTop" src="./images/ironhack-logo.svg" alt="logo iron" />
            <img className="imageTop2" src="./images/menu-top.svg" alt="logo iron" />
          </ul>
        </nav>
        <div className="lados">
          <div className="ladoA">
            <div>
              <h1>Say hello to ReactJS</h1>
              <p className="para1">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
              <button className="button">Awesome!</button>
            </div>
          </div>
          <div className="ladoB"></div>
        </div>
      </section>
      <div>
        <ul className="imageBot">
          <img src="./images/icon1.png" alt="logo iron" />
          <img src="./images/icon2.png" alt="logo iron" />
          <img src="./images/icon3.png" alt="logo iron" />
          <img src="./images/icon4.png" alt="logo iron" />
        </ul>
        <div className="textoBaixo">
          <p>Declarative</p>
          <p>Components</p>
          <p>Single-Way</p>
          <p>JSX</p>
        </div>
        <div className="ultimoTexto">
          <p>React makes it painless to create interactive UIs.</p>
          <p>Build encapsuled componentes that manage their state.</p>
          <p>A set of immutable values are passed to the component's.</p>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
