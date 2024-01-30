import './App.css';
import icone from './image/iconAcademiaFicticio.png';
import bakiTreino from './image/bakiTreinado.jpg';

function App() {
  return (

    <main>
      <section className='initialPg'>
        <header className='mainHeader'>
          <div>
            <img src={icone}></img>
          </div>
          <div>texto texto</div>
        </header>

        <h1>A vida precisa de movimento</h1>
        <p>Faça do movimento uma parte da sua vida diária com exercicios curtos e fáceis</p>
        <a href='#'>Saiba mais</a>
        <div>
          <img src={bakiTreino}></img>
        </div>
      </section >

      <section className='secundaryPg'>
        <h2>Sobre a viva a vida</h2>

        <p>texto texto texto texto</p>
      </section>
    </main>
  );
}

export default App;
