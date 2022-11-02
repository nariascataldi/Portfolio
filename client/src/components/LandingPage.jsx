import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/LandingPage.css';
import 'react-toastify/dist/ReactToastify.css';
import { ParticlesContainer } from './Particles';



function LandingPage() {
  const navigate = useNavigate();
  const notify = () => {
    toast(() => {
      return (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .changeDelay(75)
                .typeString('start ')
                .start()
                ;
            }}
          />
        </>
      )
    }
    );
    setTimeout(() => {
      // navigate('/home')
    }, 3000);
  }
  return (
    <>
      <ParticlesContainer id="tsparticles" />
      <div className='container'>
        <div className='container_html'>
          <table className='table'>
            <thead>
              <tr>
                <th className='html'>
                  Html
                </th>
              </tr>
            </thead>
            <tbody className='tableBody'>
              <tr>
                <td className='htmlCont'>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(2000)
                        .changeDelay(75)
                        .typeString('〈 h1 〉Néstor Arias Cataldi〈 /h1 〉')
                        .pauseFor(300)
                        .changeDeleteSpeed(10)
                        .typeString('<br/>〈 p 〉Data Base, Front and Back End〈 /p 〉')
                        .pauseFor(1500)
                        .deleteChars(40)
                        .typeString('〈 h2 〉Full Stack Developer〈 /h2 〉')
                        .pauseFor(5000)
                        .callFunction(notify)
                        .start()
                        ;
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='conteiner_css'>
          <table className='table'>
            <thead>
              <tr>
                <th className='css'>Css</th>
              </tr>
            </thead>
            <tbody className='tableBody'>
              <tr>
                <td className='cssCont'>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(2000)
                        .changeDelay(50)
                        .typeString(`.header {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #282c34;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min-height: 100vh;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: column;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: calc(10px + 2vmin);<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: white;<br/> }`)
                        .start()
                        ;
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

export default LandingPage;

/* 
<table className='table'>
        <thead>
          <tr>
            <th className='html'>
              Html
            </th>
            <th></th>
            <th className='css'>Css</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          <tr>
            <td className='htmlCont'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2000)
                    .changeDelay(75)
                    .typeString('〈 h1 〉Néstor Arias Cataldi〈 /h1 〉')
                    .pauseFor(300)
                    .changeDeleteSpeed(10)
                    .typeString('<br/>〈 p 〉Data Base, Front and Back End〈 /p 〉')
                    .pauseFor(1500)
                    .deleteChars(40)
                    .typeString('〈 h2 〉Full Stack Developer〈 /h2 〉')
                    .pauseFor(5000)
                    .callFunction(notify)
                    .start()
                    ;
                }}
              />
            </td>
            <td className='col2'></td>
            <td>
              <td className='cssCont'>

                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .changeDelay(50)
                      .typeString(`.header {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #282c34;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min-height: 100vh;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: column;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: calc(10px + 2vmin);<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: white;<br/> }`)
                      .start()
                      ;
                  }}
                />

              </td>
            </td>
          </tr>
        </tbody>
      </table> 
    */