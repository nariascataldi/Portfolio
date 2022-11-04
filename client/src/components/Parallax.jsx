import { useRef } from 'react';
import moon from '../assets/image/cat/moon.png';
import land from '../assets/image/cat/land.png';
import cat from '../assets/image/cat/cat.gif';
import '../styles/Parallax.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import LandingPage from './LandingPage';

export const ParallaxCat = () => {
  const ref = useRef();

  return (
    <div className='bodyP'>
      <Parallax pages={5} ref={ref} style={{ backgroundColor: 'black' }}>
        {/* LandingPage */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
        >
          <LandingPage />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={3}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1.5, end: 4 }}
          style={{ textAlign: 'center' }}
        >
          <img className='imgP' src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2 className='h2P'>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='h2P'>Gracias!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
