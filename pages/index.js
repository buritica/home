import Meta, { rhythm } from '../components/meta'

export default () => (
  <div>
    <Meta subtitle='inicio' />

    <div className='container'>
      <img
        id='logo'
        src='./static/logo_condor.svg'
        alt='colombia.dev Logo Condor'
      />
      <h1>colombia.dev</h1>
      <div className='content-bg'>
        <div
          className='content'
          style={{
            padding: rhythm(2 / 3)
          }}>

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
      </div>
      <style jsx>{` 
          /* https://github.com/zeit/styled-jsx/issues/254 */
          @custom-media --medium-up (width > 641px);
          @custom-media --large-up (width > 1025px);
          
          .container {
            display: grid;
            grid-template-areas: "logo" "header" "content";
            grid-template-rows: auto auto 1fr;
            justify-items: center;

            h1 {
              text-align: center;
            }
          }

          #logo {
            grid-area: logo;
            max-width: 90%;
            margin-bottom: 0;

            @media (--medium-up){
              max-width: 450px;
            }
          }

          h1 {
            grid-area: header;
            text-align: center;
            margin-top: 0;
            font-size: 2.5rem;
          }

          .content-bg {
            background: #531516;
            width: 100%;
            display: grid;
          }

          .content {
            grid-area: content;
            height: 1fr;
            color: #ffffff;
            display: grid;
            max-width: 1080px;            

            @media (--medium-up) {
              grid-template-columns: 1fr 1fr;
              grid-column-gap: 3rem;
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
          }`}</style>
    </div>
  </div>
)
