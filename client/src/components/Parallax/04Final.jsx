import { useRef } from 'react';
import { ParticlesStar } from '../ParticlesStar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { PAGE_04 } from './const';
import family from '../../assets/image/parallax/family-watch-tv.png';
import bandera from '../../assets/image/parallax/banderaLuna.png';

import '../../styles/Parallax.css'

const END = PAGE_04 - 1;

export const Final04 = () => {

  const ref = useRef();
  var w = window.innerWidth;
  return (
    <div className='bodyP'>
      <Parallax pages={PAGE_04 | 2} ref={ref} style={{ backgroundColor: 'black' }} horizontal={false}>
        <ParallaxLayer offset={0} style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>El tiempo apremia y este bootcamp no da tregua. Gracias a Dios, lo logré. 🚀
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
        >
        <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <ParticlesStar />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.3, end: 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <img src={bandera} className='backgroundTV' alt='despegue' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0, end: `${END}` }}
          speed={0} factor={1} style={{ backgroundImage: `url(${family})`, backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw' }} />
      </Parallax>
    </div>
  );
}
