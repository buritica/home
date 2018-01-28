import Head from 'next/head'
import typography from '../utils/typography'
import { TypographyStyle, GoogleFont } from 'react-typography'
const { rhythm } = typography

export default () => (
  <div>
    <Head>
      <title>🇨🇴 Colombia.dev 🇨🇴</title>
      <meta charSet='utf-8' />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>

    <div className='container'>
      <img id='logo' src='./static/logo_condor.svg' alt='Colombia.dev Logo Condor ' />
      <h1>colombia.dev</h1>
      <div className="content">
        <h2>¿Qué es Colombia.dev?</h2>
      </div>

      <style jsx>{`

        .container {
          
        }

        #logo {
          margin-bottom: 0;
        }

        h1 {
          text-align: center;
        }

        .content {
          background: #531516;

          h2 {
            color: #ffffff;
          }
        }
      `}</style>
    </div>
  </div>
)
