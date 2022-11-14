import { useRef } from 'react';
import family from '../../assets/image/parallax/family-watch-tv.png';
import quebrada from '../../assets/image/parallax/Paisaje-Quebrada-de-Cafayate-a-Salta-Argentina-4.jpg';
import cohete01 from '../../assets/image/parallax/cohete01.png';
import arduinoide from '../../assets/sking/arduinoide.png';

import '../../styles/Parallax.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


export const Arduino01 = () => {
  const ref = useRef();
  var w = window.innerWidth;

  return (
    <div className='bodyP'>
      <Parallax pages={2} ref={ref} style={{
        backgroundColor: 'black'
      }} horizontal={false}>
        {/* Arduino */}


        <ParallaxLayer
          offset={0}
          style={{
            color: 'white',
          }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w??w}px - (${w??w}px - (${w??w}px * (123/250))  + 218px))` }}>

            <p className='pgraf' data_author={`${w}px`} >Querida comunidad:</p>
            <p className='pgraf'>El mundo IT siempre estuvo presente en mi vida, y este se había convertido en mi hobby. Tal fue el caso que viendo un video en TEDx, descubro arduino.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.42, end: 1 }}
          // offset={0.42}
          speed={0} factor={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
          <img className='backgroundTV' src={quebrada} />
          </div>
          
        </ParallaxLayer>
        {/* 
        <ParallaxLayer
          // offset={0}
          sticky={{ start: 0.35, end: 1 }}
          speed={0.5}
          factor={1}
          style={{ backgroundImage: `url(${cohete01})`, backgroundPosition: '50% 50%', backgroundSize: '100vw', backgroundRepeat: 'no-repeat', width: '100vw' }}
        />

        <ParallaxLayer
          sticky={{ start: 0, end: 0.4 }}
          speed={2}
          factor={0}
          onClick={() => ref.current.scrollTo(0)}
          style={{
            textAlign: 'center',
          }}
        >
          <h2 className='h2P'>Arduino</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.3, end: 0.4 }}
          speed={9}
          factor={0}
          onClick={() => ref.current.scrollTo(0)}
          style={{
            padding: '0 0 0 2vw',
          }}
        >
          <img width={'50vh'} src={arduinoide} alt='sking of arduino' />
        </ParallaxLayer>

        <ParallaxLayer
          // offset={0.3}
          sticky={{ start: 0.5, end: 0.5 }}

          speed={0}
          factor={1}
          // onClick={() => ref.current.scrollTo(0)}
          style={{
            color: 'white',
            padding: '0 3%',
          }}
        >
          <p className='pgraf'>El primer arduino lo regale a mis sobrinos. Y me dije, en algun momento también podré usar uno. Luego llegó el día y compré el kit de arduino pero los deberes de padre motivaron a que lo tenga guardado.</p>
          <p className='pgraf'>La Pandemia</p>
          <p className='pgraf'>El encierro me obligo a poder pasar más tiempo con mis hijos y entre juegos veo la oportunidad para quitar el polvo a la placa y poder escribir código. Viendo unos tutoriales de Bitwise Ar di mis primeros pasos a maravillosos proyectos.</p>
        </ParallaxLayer> */}
        <ParallaxLayer
          // offset={0}
          sticky={{ start: 0, end: 1 }}
          speed={0} factor={1} style={{ backgroundImage: `url(${family})`, backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw' }} />
      </Parallax>
    </div>
  );
}
