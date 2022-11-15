import { useRef } from 'react';
import quebrada from '../../assets/image/parallax/Paisaje-Quebrada-de-Cafayate-a-Salta-Argentina-4.jpg';
import cohete02 from '../../assets/image/parallax/cohete02.png';
import arduinoide from '../../assets/sking/arduinoide.png';

import '../../styles/Parallax.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { PAGE_B } from './const';


export const Grasshoper02 = () => {
  const ref = useRef();

  return (
    <div className='bodyP'>
      <Parallax pages={PAGE_B} ref={ref} style={{
        backgroundColor: 'black'
      }} horizontal={false}>
        <ParallaxLayer
          // offset={0}
          sticky={{ start: 0, end: 1 }}
          speed={0} factor={1} style={{ backgroundImage: `url(${quebrada})`, backgroundPosition: '50% 0%', backgroundRepeat: 'no-repeat', width: '100vw' }} />
        <ParallaxLayer
          // offset={0}
          sticky={{ start: 0, end: 1 }}
          speed={0.5}
          factor={1}
          style={{ display: 'flex', alignContent: 'end' }}

        >
          <img className='imgP' src={`${cohete02}`} alt='cohete al lado un astronauta poniendose el casco' />
        </ParallaxLayer>


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
          <p className='pgraf'>Querida comunidad:</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
