import { useRef } from 'react';
import { PAGE_01 } from './const';
import family from '../../assets/image/parallax/family-watch-tv.png';
import quebrada from '../../assets/image/parallax/Paisaje-Quebrada-de-Cafayate-a-Salta-Argentina-4.jpg';
import cohete01 from '../../assets/image/parallax/cohete01.png';
import arduinoide from '../../assets/sking/arduinoide.png';
import robot from '../../assets/image/parallax/robot.png';
import brazo from '../../assets/image/parallax/brazo.gif';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import '../../styles/Parallax.css'

const END = PAGE_01 - 1;
var altQuebrada = 'Quebrada de cafayate - foto de Omar Zangrandi';
var altCohete01 = 'Plataforma con un Cohete - Veritasium Por qué la Gravedad NO es una Fuerza';
var altArduino = 'Icono de Arduino';
var altRobot = 'Robot rojo con alas y led. Jugete de cartón';
var altBrazo = 'Brazo mecánico que toma un objeto con instrucciones de arduino - IITA Salta';

export const Arduino01 = () => {
  const ref = useRef();
  var w = window.innerWidth;

  return (
    <div className='bodyP'>
      <Parallax pages={PAGE_01 | 3} ref={ref} style={{
        backgroundColor: 'black'
      }} horizontal={false}>
        {/* Arduino */}
        <ParallaxLayer offset={0} style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>

            <p className='pgraf' data_author={`${w}px`} >Querida comunidad:</p>
            <p className='pgraf'>El mundo IT siempre estuvo presente en mi vida, y este se había convertido en un hobby. Les contaré un pequeño resumen de mis pasos en la programación. Viendo un video en TEDx, encuentro arduino.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.42, end: 2 }}
          // offset={0.42}
          speed={1} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='backgroundTV' src={quebrada} alt={altQuebrada} />
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.5, end: 2 }}
          // offset={0.42}
          speed={1} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='backgroundTV' src={cohete01} alt={altCohete01} />
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 0.9 }}
          // offset={0.42}
          speed={0.5} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='iconoSkin' src={arduinoide} alt={altArduino} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.95, end: 1 }}
          // offset={0.42}
          speed={40} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>

            <img src={robot} className='imgRobot' alt={altRobot} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1.6, end: 1.6 }}
          // offset={0.42}
          speed={40} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
          
          <img className='imgBrazo' src={brazo} alt={altBrazo} />

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


        <ParallaxLayer
          // offset={0}
          sticky={{ start: 0, end: `${END}` }}
          speed={0} factor={1} style={{ backgroundImage: `url(${family})`, backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw' }} />
      </Parallax>
    </div>
  );
}
