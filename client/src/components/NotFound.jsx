import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { Link } from "react-router-dom";
import { loadFull } from "tsparticles";
import imgNotFound from '../assets/image/404.jpg';

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
        <div style={{
          width: '100vw', height: '100vh', display: 'flex', alignItems: 'center'
        }}>
          <Link to="/" >
            {/* <p style={{ padding: '0 0 0 2vw' }}>Home</p> */}
            <img style={{ height: '90vh', padding: '0 20vw 0 20vw' }} src={imgNotFound} alt="notFoundPage" />
          </Link>
        </div>
      <Particles init={particlesInit} options={options}>
      </Particles>
    </>
  );
};
