import { useRef } from 'react';
import '../../styles/Parallax.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


export const ParallaxA = () => {
  const ref = useRef();

  return (
    <div className='bodyP'>
      <Parallax pages={2*1} ref={ref} style={{ backgroundColor: 'black' }} horizontal={false}>
        {/* Arduino */}
        {/* Grasshpper */}


        <ParallaxLayer
          offset={3}
          speed={0}
          factor={1}
          style={{ color: 'white' }}
        >
          <h3>Enero de 2022 - Año nuevo vida nueva</h3>
          <p>En una juntada de amigos, uno comentó que quería iniciar por el mundo IT. Y nos dijo que se hiva a preparar en un bootcamp llamado Henry</p>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
