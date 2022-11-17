import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { PAGE_02 } from './const';
import family from '../../assets/image/parallax/family-watch-tv.png';
import quebrada from '../../assets/image/parallax/Paisaje-Quebrada-de-Cafayate-a-Salta-Argentina-4.jpg';
import cohete02 from '../../assets/image/parallax/cohete02.png';
import grasshopper from '../../assets/sking/grasshopper.png';
import bookJavaKids from '../../assets/books/JavaScript_for_kids.png';
import bookUsers_JavaScript from '../../assets/books/Users_JavaScript.png';
import bookObject_Oriented from '../../assets/books/Object_Oriented.png';
import bookPatterns from '../../assets/books/Patterns.png';


import '../../styles/Parallax.css'



const END = PAGE_02 - 1;
var altQuebrada = 'Quebrada de cafayate - foto de Omar Zangrandi';
var altCohete02 = 'Cohete con astronauta poniendose el casco - Veritasium Por qué la Gravedad NO es una Fuerza';
var altGrasshopper = 'Icono de Saltamontes verde';
var altbookJavaKids = 'Libro JavaScript for kids';
var altbookUsers_JavaScript = 'Libro JavaScript for kids';
var altbookObject_Oriented = 'Libro JavaScript for kids';
var altbookPatterns = 'Libro JavaScript for kids';

export const Grasshopper02 = () => {
  const ref = useRef();
  var w = window.innerWidth;
  return (
    <div className='bodyP'>
      <Parallax pages={PAGE_02 | 2} ref={ref} style={{ backgroundColor: 'black' }} horizontal={false}>
        {/* Grasshopper */}
        <ParallaxLayer offset={0} style={{ color: 'white', }} >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>La curiosidad me llevó a jugar con Grasshopper, la app de programación para principiantes.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.02, end: 0.22 }}
          // offset={0.42}
          speed={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='grass' src={grasshopper} alt={altGrasshopper} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.22, end: 1 }}
          // offset={0.42}
          speed={1} >
          <div className='boxtv' style={{ 'left': `calc(${w}px - (${w}px - (${w}px * (123/250))  + 218px))` }}>
            <img className='backgroundTV' style={{ width: '650px' }} src={quebrada} alt={altQuebrada} />
            <img className='backgroundTV' style={{ width: '500px' }} src={cohete02} alt={altCohete02} />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer
          sticky={{ start: 0.7, end: 0.8 }}
        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
          <div className='booksBox'>
            <img className='book' src={bookJavaKids} alt={altbookJavaKids} />
            <img className='book' src={bookUsers_JavaScript} alt={altbookUsers_JavaScript} />
            <img className='book' src={bookObject_Oriented} alt={altbookObject_Oriented} />
            <img className='book' src={bookPatterns} alt={altbookPatterns} />
          </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5, end: 1 }}

        >
          <div className='boxtv' style={{ 'left': `calc(${w ?? w}px - (${w ?? w}px - (${w ?? w}px * (123/250))  + 218px))` }}>
            <p className='pgraf'>
              <strong>Año nuevo, vida nueva</strong><br />
              En una juntada de amigos, uno de ellos habla sobre “soy Henry”. Nos cuenta las pautas y qué es un bootcamp. Me enganché, a estudiar libros para el “Challenger JavaScript”.
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
