import './App.css';
import icone from './image/novaLogo.png';
import bakiTreino from './image/bakiTreinado.jpg';
import card1Alteres from './image/cardAlteres.png';
import card2Tenis from './image/cardTenisCorrida.png';
import card3Coracao from './image/cardCoracao.png';

function App() {
  return (

    <main>
      <section className='allpgs topAdjust'>
        <header className='mainHeader'>
          <div className='headerHolder'>
            <div>
              <img src={icone} alt='O icone da academia'></img>
            </div>
            <nav className='headerNav'>
              <a href="#">Sobre nós</a>
              <a href="#">Treinos e exercicios</a>
              <a href="#">Contato</a>
            </nav>
          </div>
        </header>
        <div className='smooth'>
          <h1>A vida precisa de movimento</h1>
          <p>Faça do movimento uma parte da sua vida diária com exercicios curtos e fáceis</p>
          <a href='#'>Saiba mais</a>
          <div>
            <img src={bakiTreino} alt='Um perssonagem de anime de costas e sem camiseta com o corpo muito definido'></img>
          </div>
        </div>
      </section >

      <section className='allpgs'>
        <div className='smooth'>
          <h2>Sobre a viva a vida</h2>

          <p>Sempre busque o melhor para sí ,melhore seu fisíco junto a sua saúde ,evolua cada dia mais junto com a academia monster,<span> não tenha medo de crescer</span>.</p>
        </div>
      </section>

      <section className='allpgs'>
        <div className='smooth'>
          <h2>Principais recursos</h2>

          <div className='card'>
            <div className='cardContent1'>
              <img src={card1Alteres} alt='um icone de um braço forte levantando um alter em apenas uma mão'></img>
            </div>

            <div className='textCard'>
              <p>O melhor local para treinar!</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardContent1'>
              <img src={card2Tenis} alt='um icone de um braço forte levantando um alter em apenas uma mão'></img>
            </div>

            <div className='textCard'>
              <p>Sinta-se a vontade com profissionais qualificados!</p></div>
          </div>

          <div className='card'>
            <div className='cardContent1'>
              <img src={card3Coracao} alt='um icone de um braço forte levantando um alter em apenas uma mão'></img>
            </div>

            <div className='textCard'>
              <p>Tenha seu objetivo em mente e guiaremos você para o sucesso!</p></div>
          </div>
        </div>

      </section>

      <section className='allpgs'>
        <div className='smooth'>
          <h2>Treinos e exercícios</h2>

          <p>Um local otimo para treinar com uma ampla variedade de equipamentos, aqui você tera acesso a profissionais qualificados além de excelentes equipamentos,com nossos instrutores você tera um ganho supreendente e uma grande perca de gordura comporal, venha fazer parte, venha passar para outro patamar!</p>

          <a href='#'>Saiba mais</a>
        </div>
      </section>

      <section className='allpgs'>
        <div className='smooth'>
          <img src='' alt=''></img>

          <div className='cardDicas'>
            <h2>Dicas de bem-estar</h2>

            <p>Obtenha sua própria dieta e treinos com especialistas da area!,conheça habitos e dicas alimentares que farão você realmente mudar de vida.</p>

            <a href="#">Saiba mais</a>
          </div>
        </div>
      </section>

      <section className='allpgs'>
        <div className='smooth'>
          <h2>Depoimentos</h2>

          <div className='cardDepoimentos'>
            <div className='cardContentDepoimentos'>
              <p>Um ótimo local para treinar!vou todos os dias e fico triste quando não posso comparecer, recomendo muito!</p>

              <p>Um ser imaginario</p>
            </div>

            <div className='cardContentDepoimentos'>
              <p>Otimos profissionais que ajudaram a mudar minha vida para melhor!</p>

              <p>Alguem aleatorio da minha mente</p>
            </div>

            <div className='cardContentDepoimentos'>
              <p>É um local excelente, acredito que todos que estão lendo isso agora deveriam vim, sério o local é tão bom que quando você chega não quer mais sair!</p>

              <p>o próprio desenvolvedor do site :D</p>
            </div>
          </div>
        </div>
      </section>

      <section className='allpgs'>
        <div className='smooth'>
          <div>
            <h2>Fale conosco</h2>

            <p>Telefone <span>(12)3456-7890</span></p>

            <p>Email <span>site@ficticio.com.br</span></p>

            <p>Social <a href='#'>F</a>
              <a href='#'>I</a>
              <a href='#'>T</a>
            </p>
          </div>
        </div>
      </section>
    </main >
  );
}

export default App;
