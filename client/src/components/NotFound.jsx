import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { Link } from "react-router-dom";
import { loadFull } from "tsparticles";
import imgNotFound from '../assets/image/404.jpg';
import '../styles/NotFound.css'

export const NotFound = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#ffffff",
        },
      },
      fullScreen: {
        zIndex: -1,
      },
      fpsLimit: 20,
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
          // value: "#ffffff",
          value: "#000000",
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
  }, [])
  
  return (
    <>
      <div className="boxNotFound">
        <Link to="/" >
          <img className="notFound" src={imgNotFound} alt="notFoundPage" />
        </Link>
      </div>
      <Particles init={particlesInit} options={options}>
      </Particles>
    </>
  );
};
