import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ParticlesSpace } from '../ParticlesSpace';
import { PAGE_03 } from './const';
import family from '../../assets/image/parallax/family-watch-tv.png';
import coheteEnc03 from '../../assets/image/parallax/coheteEnc03.gif';
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


import '../../styles/Parallax.css'



const END = PAGE_03 - 1;


export const Henry03 = () => {
  const skin = [
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
  const altskin = {
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
  };


  const ref = useRef();
  var w = window.innerWidth;
  return (
    <div className='bodyP'>
      <Parallax pages={PAGE_03 | 2} ref={ref} style={{ backgroundColor: 'black' }} horizontal={false}>
        {/* Grasshopper */}
        <ParallaxLayer offset={0} style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>Apruebo el Challenger. Agradezco a mi mujer e hijos, que me bancaron para estudiar full stack developer.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.3, end: 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <ParticlesSpace />
            <img src={coheteEnc03} className='backgroundTV' alt='despegue' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.7, end: 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <div className='skinBox'>
              {skin.map(s =>
                <img className='skin' src={s} alt={altskin[`${s.slice(14, 17)}`]} title={`${s.slice(14, 17)}`} />)
              }

            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.5, end: 1 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>¡Qué cantidad de opciones para programar! A transitar por estas skins. Confianza, nunca es tarde para aprender.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0, end: `${END}` }}
          speed={0} factor={1} style={{ backgroundImage: `url(${family})`, backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw' }} />
      </Parallax>
    </div>
  );
}
