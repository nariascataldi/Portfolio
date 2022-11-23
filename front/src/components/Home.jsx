import '../styles/Home.css';

export const Home = () => {

  return (
    <>
      <div className="container">
        {/* // -- Seccion parallax -- */}
        <section className="parallax-bg img_perro1" > </section>
        <section className="parallax-content">
          <div>
            <h1>Parallax section</h1>
            <p>Este texto acompaña al background parallax en su propia sección</p>
          </div>
        </section>

        {/* // -- Seccion NO parallax */}
        <section className="no-parallax-section bg-1">
          <div className="no-parallax-content">
            <h1>No-parallax section</h1>
            <p>En esta sección incluimos la clase "bg-1" para otorgarle un color de fondo.</p>
          </div>
        </section>

        {/* // -- Seccion parallax */}
        <section className="parallax-bg img_perro2"> </section>
        <section className="parallax-content">
          <div>
            <h1>Parallax section</h1>
            <p>Este texto acompaña al background parallax en su propia sección</p>
          </div>
        </section>

        {/* // -- Seccion NO parallax */}
        <section className="no-parallax-section bg-2">
          <div className="no-parallax-content">
            <h1>No-parallax section</h1>
            <p>En esta sección incluimos la clase "bg-2" para otorgarle un color de fondo.</p>
          </div>
        </section>

      </div >
      {/* // -- End Container */}
    </>
  )
}

