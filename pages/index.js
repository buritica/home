import Layout from '../components/layout/main'
import Link from 'next/link'

export default () => (
  <Layout>
    <div className='content'>
      <ul>
        <li><Link href='/faq'><a>Preguntas Frecuentes</a></Link></li>
      </ul>
      <p>hello</p>
    </div>
    <style jsx global>{`.content-bg{background:black;}`}</style>
    <style jsx>{`
      .content {
        display:grid;
        padding: 2rem;
        max-width: 1080px;
      }
    `}</style>
  </Layout>
)
