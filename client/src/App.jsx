
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './app/store';

import ReactInit from './components/reactInit/ReactInit';
import LandingPage from "./components/LandingPage";
import Home from "./components/NavScroll";
import Task from "./components/Task";
import TasksForm from "./components/TasksForm";
import ProyectList from "./components/ProyectList";
import { ParticlesContainer } from "./components/Particles";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/reactInit' element={<ReactInit />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/task' element={<Task />} />
          <Route path='/create_task' element={<TasksForm />} />
          <Route path='/edit_task/:id' element={<TasksForm />} />
          <Route path='/proyect' element={<ProyectList />} />
          <Route path='/particles' element={<ParticlesContainer />} />

        </Routes>
        
      </Provider>
    </BrowserRouter>
  );
}

export default App;
