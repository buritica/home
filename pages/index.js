import Layout from '../components/layout/main'
import Meta, { rhythm } from '../components/meta'

export default () => (
  <Layout>
    <div className='content'>
      <p>hello</p>
    </div>
    <style jsx>{`
      .content {
        display:grid;
        padding: 2rem;
        max-width: 1080px;
      }
    `}</style>
  </Layout>
)
