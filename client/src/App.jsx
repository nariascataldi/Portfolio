import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './app/store';

import ReactInit from './components/reactInit/ReactInit';
import LandingPage from "./components/LandingPage";
import Task from "./components/Task";
import TasksForm from "./components/TasksForm";
import ProyectList from "./components/ProyectList";
import { ParticlesContainer } from "./components/Particles";
import { ParallaxCat } from "./components/Parallax";
import { NotFound } from "./components/NotFound";
import { ParallaxA } from "./components/Parallax/ParallaxA";
import { Arduino01 } from "./components/Parallax/01Arduino";
import { Grasshopper02 } from "./components/Parallax/02Grasshopper";
import { Henry03 } from "./components/Parallax/03Henry";
import { Final04 } from "./components/Parallax/04Final";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/reactInit' element={<ReactInit />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/task' element={<Task />} />
          <Route path='/create_task' element={<TasksForm />} />
          <Route path='/edit_task/:id' element={<TasksForm />} />
          <Route path='/proyect' element={<ProyectList />} />
          <Route path='/particles' element={<ParticlesContainer />} />
          <Route path='/parallax' element={<ParallaxCat />} />
          <Route path='/parallaxA' element={<ParallaxA />} />
          {/* Parallax para borrar */}
          <Route path='/arduino' element={<Arduino01 />} />
          <Route path='/grasshopper' element={<Grasshopper02 />} />
          <Route path='/henry' element={<Henry03 />} />
          <Route path='/final' element={<Final04 />} />

          {/* --------------------- */}
          <Route path="*" element={<NotFound />} />



        </Routes>
        
      </Provider>
    </BrowserRouter>
  );
}

export default App;
