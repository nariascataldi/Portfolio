import { useRef } from 'react';
import moon from '../assets/image/cat/moon.png';
import quebrada from '../assets/image/Imagenes/Paisaje-Quebrada-de-Cafayate-a-Salta-Argentina-4.jpg';
import coete01 from '../assets/image/Imagenes/coete01.png';
import '../styles/Parallax.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


export const ParallaxA = () => {
  const ref = useRef();

  return (
    <div className='bodyP'>
      <Parallax pages={2} ref={ref} style={{ backgroundColor: 'black' }}>

        <ParallaxLayer
          // offset={0}
          sticky={{ start: 0, end: 1 }}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${quebrada})`,
            backgroundSize: 'conteiner',
          }}
        />
        <ParallaxLayer
          // offset={1}
          sticky={{ start: 0.5, end: 1 }}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${coete01})`,
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(4)}
        >
          <h2 className='h2P'>Welcome to my website</h2>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
