import '../../styles/Parallax.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { TOTAL, i02, i03, i04 } from './const';
//para las particulas hay que traer el código y cambiar el objeto por start y space

// Background
import family from '../../assets/image/parallax/family-watch-tv.png';
import quebrada from '../../assets/image/parallax/Paisaje-Quebrada-de-Cafayate-a-Salta-Argentina-4.jpg';
import cohete01 from '../../assets/image/parallax/cohete01.png';
import arduinoide from '../../assets/sking/arduinoide.png';
import robot from '../../assets/image/parallax/robot.png';
import brazo from '../../assets/image/parallax/brazo.gif';
import cohete02 from '../../assets/image/parallax/cohete02.png';
import bandera from '../../assets/image/parallax/banderaLuna.png';
import coheteEnc03 from '../../assets/image/parallax/coheteEnc03.gif';

// Skin
import grasshopper from '../../assets/sking/grasshopper.png';
import skinJavaScript from '../../assets/sking/javascript.png';
import skinHTML from '../../assets/sking/html.png';
import skinCSS from '../../assets/sking/css.png';
import skinNode from '../../assets/sking/node.png';
import skinPostgresql from '../../assets/sking/postgresql.png';
import skinReact from '../../assets/sking/react.png';
import skinRedux from '../../assets/sking/redux.png';
import skinTypescript from '../../assets/sking/typescript.png';
import skinGit from '../../assets/sking/git.png';
import skinHenry from '../../assets/sking/henry.png';
// Books
import bookJavaKids from '../../assets/books/JavaScript_for_kids.png';
import bookUsers_JavaScript from '../../assets/books/Users_JavaScript.png';
import bookObject_Oriented from '../../assets/books/Object_Oriented.png';
import bookPatterns from '../../assets/books/Patterns.png';


import { useRef } from 'react';

const END = TOTAL - 1;

const henrySkin = [
  skinJavaScript,
  skinHTML,
  skinCSS,
  skinNode,
  skinPostgresql,
  skinReact,
  skinRedux,
  skinTypescript,
  skinGit,
  skinHenry
];
const book = [
  bookJavaKids,
  bookUsers_JavaScript,
  bookObject_Oriented,
  bookPatterns
]
// alt

const altImg = {
  quebrada: 'Quebrada de cafayate - foto de Omar Zangrandi',
  cohete01: 'Plataforma con un Cohete - Veritasium Por qué la Gravedad NO es una Fuerza',
  cohete02: 'Cohete con astronauta poniendose el casco - Veritasium Por qué la Gravedad NO es una Fuerza',
  arduino: 'Icono de Arduino',
  robot: 'Robot rojo con alas y led. Jugete de cartón',
  brazo: 'Brazo mecánico que toma un objeto con instrucciones de arduino - IITA Salta',
}
const altBook = {
  Jav: 'Libro JavaScript for Kids',
  Use: 'Libro JavaScript ',
  Obj: 'Libro Object Oriented',
  Pat: 'Libro Patterns',
}
const altSkin = {
  jav: 'Icono de JavaScript - cuadrado amarillo con letras JS',
  htm: 'Icono de HTML - contorno naranja de 5',
  css: 'Icono de CSS - contorno azul 3',
  nod: 'Icono de Node - letras n o d e',
  pos: 'Icono de Postgresql - cabeza elefante azul',
  rea: 'Icono de React - tres anillos y un circulo en el centro de color azul',
  red: 'Icono de Redux - tres anillos como estrella fugaz de color violeta',
  typ: 'Icono de Typescript - cuadrado celeste con letras TS',
  git: 'Icono de Git - prisma naranja',
  hen: 'Icono de Henry - Letras blancas H E N R Y con una linea amarilla trazada por un cohete',
  gra: 'Icono de Saltamontes verde'
};

export const ParallaxA = () => {
  const ref = useRef();
  var w = window.innerWidth;
  var h = window.innerHeight;
  console.log({ w }, { h });
  if ((h / w) >= 1.65 || h >= 600) {
    return (
      <Parallax pages={TOTAL | 9} ref={ref} style={{
        backgroundColor: 'black',
      }} horizontal={false} >
        {/* Arduino i=0->0 f=2->2*/}
        <ParallaxLayer offset={0} style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>

            <p className='pgraf' data_author={`${w}px`} >Querida comunidad:</p>
            <p className='pgraf'>El mundo IT siempre estuvo presente en mi vida, y este se había convertido en un hobby. Les contaré un pequeño resumen de mis pasos en la programación. Viendo un video en TEDx, encuentro arduino.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.42, end: 1.55 }}
          // offset={0.42}
          speed={1} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='backgroundTV' src={quebrada} alt={altImg.quebrada} />
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.5, end: 1.55 }}
          // offset={0.42}
          speed={1} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='backgroundTV' src={cohete01} alt={altImg.cohete01} />
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 0.9 }}
          // offset={0.42}
          speed={0.5} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='iconoSkin' src={arduinoide} alt={altImg.arduino} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.95, end: 1 }}
          // offset={0.42}
          speed={40} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>

            <img src={robot} className='imgRobot' alt={altImg.robot} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1.6, end: 1.6 }}
          // offset={0.42}
          speed={40} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>

            <img className='imgBrazo' src={brazo} alt={altImg.brazo} />

          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.95, end: 1 }}
          // offset={0.42}
          speed={1} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>El primer arduino lo regalé a mis sobrinos. Sucede que a veces uno regala cosas que uno quiere. Y llegó el día en que por fin adquiero arduino pero los deberes de padre motivaron a que lo tenga guardado.<br />
              <strong> La Pandemia </strong><br />
              El encierro me ayudó a pasar más tiempo con mis hijos, entre juegos veo la oportunidad de buscar al Sr Arduino, como lo bautizamos.  Pudimos crear juegos reciclados, escribiendo código a la placa surgieron semáforos, barreras de peaje, robot con luces, etc. Viendo unos tutoriales de Bitwise Ar di mis primeros pasos en maravillosos proyectos.</p>
          </div>
        </ParallaxLayer>
        {/* Grasshpper i=0->2 f=1->3 */}
        <ParallaxLayer
          offset={i02 | 2}
          style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>La curiosidad me llevó a jugar con Grasshopper, la app de programación para principiantes.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i02 + 0.02, end: i02 + 0.22 }}
          // offset={0.42}
          speed={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='grass' src={grasshopper} alt={altSkin.gra} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i02 + 0.22, end: i02 + 1 }}
          // offset={0.42}
          speed={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='backgroundTV' style={{ width: '650px' }} src={quebrada} alt={altImg.quebrada} />
            <img className='backgroundTV' style={{ width: '500px' }} src={cohete02} alt={altImg.cohete02} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i02 + 0.7, end: i02 + 0.8 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <div className='booksBox'>
              {book.map(b =>
                <img className='book' src={b} alt={altBook[`${b.slice(14, 17)}`]} />
              )}

            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i02 + 0.5, end: i02 + 1 }}

        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>
              <strong>Año nuevo, vida nueva</strong><br />
              En una juntada de amigos, uno de ellos habla sobre “soy Henry”. Nos cuenta las pautas y qué es un bootcamp. Me enganché, a estudiar libros para el “Challenger JavaScript”.
            </p>
          </div>
        </ParallaxLayer>
        {/* Henry i=0->3.4 f=1->4.4*/}
        <ParallaxLayer offset={i03 + 0 | 3.4} style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>Apruebo el Challenger. Agradezco a mi mujer e hijos, que me bancaron para estudiar full stack developer.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i03 + 0.3, end: i03 + 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <ParticlesSpace />
            <img src={coheteEnc03} className='backgroundTV' alt='despegue' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i03 + 0.7, end: i03 + 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <div className='skinBox'>
              {henrySkin.map(s =>
                <img className='skin' src={s} alt={altSkin[`${s.slice(14, 17)}`]} title={`${s.slice(14, 17)}`} />)
              }

            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i03 + 0.5, end: i03 + 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>¡Qué cantidad de opciones para programar! A transitar por estas skins. Confianza, nunca es tarde para aprender.
            </p>
          </div>
        </ParallaxLayer>
        {/* Final i=0-> f= ->*/}
        <ParallaxLayer offset={i04 + 0 | 5.4} style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>El tiempo apremia y este bootcamp no da tregua. Gracias a Dios, lo logré. 🚀
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i04 + 0, end: i04 + 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <ParticlesStar />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: i04 + 0.3, end: i04 + 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <img src={bandera} className='backgroundTV' alt='despegue' />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0, end: `${END}` }}
          speed={0} factor={1} style={{ backgroundImage: `url(${family})`, backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }} />
      </Parallax>
    )
  }
  else {
    return (
      <h1>Hola</h1>
    )
  }
  ;
}
