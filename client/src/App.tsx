
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ReactInit from './components/reactInit/ReactInit';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/reactInit' element={<ReactInit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
