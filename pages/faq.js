import Layout from '../components/layout/main'

export default () => (
  <Layout>
    <div className='grid'>
      <div>
        <h3>🇨🇴 ¿Qué es colombia.dev?</h3>
        <p>
          Somos es una organización privada, sin ánimo de lucro, que fomenta la
          creación y expansión de eventos y comunidades inclusivas de diseño y desarrollo
          de software en Colombia.
        </p>
      </div>

      <div>
        <h3>🇨🇴 ¿Qué hacemos?</h3>
        <p>
          Usamos nuestra experiencia en organización de eventos y creación de
          comunidades para apoyar la expansión del ecosistema tecnológico Colombiano.
        </p>
      </div>

      <div>
        <h3>🇨🇴 ¿Por qué?</h3>
        <p>
          Creemos que la mejor forma de formar desarrolladores profesionales de
          software es a través de su participación en comunidades abiertas e inclusivas.
        </p>
      </div>

      <div>
        <h3>🇨🇴 ¿Cómo?</h3>
        <ul>
          <li>Creamos y organizamos eventos.</li>
          <li>Fundamos y apoyamos comunidades.</li>
          <li>
            Ofrecemos nuestra red y experiencia a comunidades, empresas y gobierno.
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
      @custom-media --medium-up (width > 641px);
      .grid {
        display: grid;
        padding: 2rem;

        @media (--medium-up) {
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 3rem;
          padding: 2rem 1rem;
        }
      }
      
      h3 {
        color: #ffffff;
      }

      ul {
        list-style-type: none;
        margin-left: 0;
      }

      li {
        margin-bottom: 0.2rem;
        padding-left: 2rem;

        &:before {
          content: "🖥";
          margin-left: -2rem;
          padding-right: 1rem
        }
      }
      
    `}</style>
  </Layout>
)
