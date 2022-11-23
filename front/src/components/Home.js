import './styles/Home.css';

export const Home = () => {

  return (
    <>
      <div className="container">
 {/* // -- Seccion parallax -- */}
        <section className="parallax-bg" style={'background-image: url(https://images.pexels.com/photos/1378849/pexels-photo-1378849.jpeg?auto=compress&cs=tinysrgb&w=1600)'}></section>
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
        <section className="parallax-bg" style={'background-image: url(https://images.pexels.com/photos/7296954/pexels-photo-7296954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}></section>
        <section className="parallax-content">
          <div>
            <h1>Parallax section</h1>
            <p>Este texto acompaña al background parallax en su propia sección</p>
          </div>
        </section>

  {/* // -- Seccion NO parallax */ }
  <section className="no-parallax-section bg-2">
    <div className="no-parallax-content">
      <h1>No-parallax section</h1>
      <p>En esta sección incluimos la clase "bg-2" para otorgarle un color de fondo.</p>
    </div>
  </section>

      </div >
  {/* // -- End Container */ }
    </>
  )
}