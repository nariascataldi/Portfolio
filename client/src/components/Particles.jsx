import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const ParticlesContainer = (props) => {

  const [theme, setTheme] = useState(false);
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  const options = {
    background: {
      color: {
        value: "#2f4f4f",
      },
    },
    fullScreen: {
      zIndex: -1,
    },
    fpsLimit: 10,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme ? "#000000" : "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.1,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 10 },
      },
    },
    detectRetina: true,
  }

  function handleTheme(e) {
    e.preventDefault()
    setTheme(!theme)
  }
  return (
    <>
      <Particles
        id={props.id}
        init={particlesInit}
        options={options}
        loaded={particlesLoaded}
      />
      <span className='styleTheme' onClick={e => { handleTheme(e) }}>{theme ? '🌙' : '☀️'}</span>

    </>

  );
};