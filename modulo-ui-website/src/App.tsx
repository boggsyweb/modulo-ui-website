import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import Installation from './pages/Installation';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards'
import Controls from './pages/controls/Controls';
import Inputs from './pages/inputs/Inputs';
import Overlay from './pages/overlay/Overlay';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideNav />} />
        <Route index element={<Home />} />
        <Route path="installation" element={<Installation />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="cards" element={<Cards />} />
        <Route path="controls" element={<Controls />} />
        <Route path="inputs" element={<Inputs />} />
        <Route path="overlay" element={<Overlay />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
