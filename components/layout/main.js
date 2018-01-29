import Meta, { rhythm } from '../meta'

export default props => (
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
        <div className='content'>
          {props.children}
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
      color: #ffffff;
    }

    .content {
      grid-area: content;
      height: 1fr;
      max-width: 1080px;
    }

   `}</style>

  </div>
)
