import '../styles/Home.css';
import family_tv from '../assets/image/parallax/family-watch-tv.png';
export const Home = () => {
  const altFamily_tv = 'familia sentada mirando un tv'
  return (
    <>
      <div className="container">
        <div className='tv'>
          {/* <section className="parallax-bg img_perro1" >
          </section>
          <section className="parallax-content">
            <div>
              <h1>Parallax section</h1>
              <p>Este texto acompaña al background parallax en su propia sección</p>
            </div>
          </section> */}


        </div>
        <img className='family_tv' src={family_tv} alt={altFamily_tv} />

        <section className="no-parallax-section bg-1">
          <div className="no-parallax-content">
            <h1>No-parallax section</h1>
            <p>En esta sección incluimos la clase "bg-1" para otorgarle un color de fondo.</p>
          </div>
        </section>
      </div >
      {/* // -- End Container */}
    </>
  )
}


        // {/* // -- Seccion parallax */}
        // <section className="parallax-bg img_perro2"> </section>
        // <section className="parallax-content">
        //   <div>
        //     <h1>Parallax section</h1>
        //     <p>Este texto acompaña al background parallax en su propia sección</p>
        //   </div>
        // </section>

        // {/* // -- Seccion NO parallax */}
        // <section className="no-parallax-section bg-2">
        //   <div className="no-parallax-content">
        //     <h1>No-parallax section</h1>
        //     <p>En esta sección incluimos la clase "bg-2" para otorgarle un color de fondo.</p>
        //   </div>
        // </section>
