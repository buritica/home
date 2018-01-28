import Head from 'next/head'
import typography from '../utils/typography'
import { TypographyStyle, GoogleFont } from 'react-typography'
const { rhythm } = typography

export default () => (
  <div>
    <Head>
      <title>🇨🇴 colombia.dev 🇨🇴</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>

    <div className='container'>
      <img
        id='logo'
        src='./static/logo_condor.svg'
        alt='colombia.dev Logo Condor'
      />
      <h1>colombia.dev</h1>
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

      <style jsx>{` 
          h1, h2, h3, h4, h5, h6 {
            margin-top: 1.6875rem;
          }

          .container {
            display: grid;
            grid-template-areas: "logo" "header" "content";
            grid-template-rows: auto auto 1fr;

            h1 {
              text-align: center;
            }
          }

          #logo {
            grid-area: logo;
            width: 100%;
            margin-bottom: 0;
          }

          h1 {
            grid-area: header;
            text-align: center;
            margin-top: 0;
          }

          .content {
            grid-area: content;
            background: #531516;
            height: 1fr;
            color: #ffffff;
            display: grid;

            h3 {
              color: #ffffff;
            }

            ul {
              list-style-type: none;
              margin-left: 0;
            }

            li {
              margin-bottom: 0.2rem;
              &:before {
                content: "🖥";
                margin-right: 15px;
              }
            }
          }`}</style>
    </div>
  </div>
)
