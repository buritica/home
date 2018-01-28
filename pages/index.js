import Head from 'next/head'
import normalize from 'normalize.css/normalize.css'

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

    <div class='container'>
      <img id='logo' src='./static/logo_condor.svg' alt='Colombia.dev Logo Condor ' />
      <h1>colombia.dev</h1>
      <style jsx global>{normalize}</style>
      <style jsx>{`

        .container {
          
        }

        #logo {

        }
      `}</style>
    </div>
  </div>
)
