import React, { useCallback } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Assuming you want to use the slim version of tsparticles

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine); // Load only slim version of tsparticles
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="App">
      <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
      move: {
        speed: 1,
      },
      line_linked: {
        enable: true,
      },
    },
  }}
/>
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <Rank />
    </div>
  );
}

export default App;
