import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const ParticlesSpace = (props) => {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  const options = 
  {
    background: {
      color: {
        value: "black",
      },
    },
    fullScreen: {
      zIndex: -1,
    },
    fpsLimit: 10,
    particles: {
      color: {
        value: "#ffffff"
      },
      collisions: {
        enable: false,
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      number: {
        density: {
          enable: true,
          area: 50,
        },
        value: 100,
      },
      opacity: {
        value: 0.6,
  "anim": {
    "enable": true,
    "speed": 3,
    "opacity_min": 0.1,
    "sync": false
}
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.1, max: 3 },
  "anim": {
    "enable": true,
    "speed": 4,
    "size_min": 0.1,
    "sync": false
}

      },
    },
    detectRetina: true,
  }


  return (
    <>
      <Particles
        id={props.id}
        init={particlesInit}
        options={options}
        loaded={particlesLoaded}
      />
    </>

  );
};