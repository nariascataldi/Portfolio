import { useRef } from 'react';
import quebrada from '../../assets/image/parallax/Paisaje-Quebrada-de-Cafayate-a-Salta-Argentina-4.jpg';
import coete02 from '../../assets/image/parallax/coete02.png';

import grasshopper from '../../assets/sking/grasshopper.png';
import henry from '../../assets/sking/henry.png';

import '../../styles/Parallax.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Arduino01 } from './01Arduino';


export const ParallaxA = () => {
  const ref = useRef();

  return (
    <div className='bodyP'>
      <Parallax pages={4} ref={ref} style={{ backgroundColor: 'black' }} horizontal={false}>
{/* Arduino */}
        <Arduino01/>
        
        <ParallaxLayer
          offset={2.5}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${quebrada})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: "100vh",
          }}
        />
        <ParallaxLayer
          offset={2.5}
          // sticky={{ start: 2.5, end: 3 }}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${coete02})`,
            backgroundSize: 'cover',
            height: "100vh",
          }}
        />
        <ParallaxLayer
          // offset={1.2}
          sticky={{ start: 2.7, end: 2.7 }}
          speed={3}
          factor={0}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='h2P'>Learn to Code – Grasshopper</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0}
          factor={1}
          // onClick={() => ref.current.scrollTo(0)}
          style={{ color: 'white' }}
        >
          <h3>Enero de 2022 - Año nuevo vida nueva</h3>
          <p>En una juntada de amigos, uno comentó que quería iniciar por el mundo IT. Y nos dijo que se hiva a preparar en un bootcamp llamado Henry</p>
        </ParallaxLayer>
        <ParallaxLayer
          // offset={1.2}
          sticky={{ start: 3, end: 3 }}
          speed={0}
          factor={0}
          onClick={() => ref.current.scrollTo(0)}
        >
          <img width={'50vh'} src={henry} alt='sking of henry'/>
        </ParallaxLayer>
        <ParallaxLayer
          // offset={1.2}
          sticky={{ start: 3, end: 3.7 }}
          speed={3}
          factor={0}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 className='h2P'>Henry</h2>
        </ParallaxLayer>
        

      </Parallax>
    </div>
  );
}
