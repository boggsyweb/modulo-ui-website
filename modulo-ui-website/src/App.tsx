import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Home from './pages/Other Pages/Home';
import Installation from './pages/Other Pages/Installation';
import Buttons from './pages/Components Pages/Buttons';
import Cards from './pages/Components Pages/Cards'
import Controls from './pages/Components Pages/controls/Controls';
import Inputs from './pages/Components Pages/inputs/Inputs';
import Overlay from './pages/Components Pages/overlay/Overlay';
import AltStyles from './pages/Other Pages/Styling';
import AccessGuidelines from './pages/Other Pages/Accessibility';
import SVGLibrary from './pages/Other Pages/SVGLibrary';
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
        <Route path="styling" element={<AltStyles />} />
        <Route path="accessibility" element={<AccessGuidelines />} />
        <Route path="svglibrary" element={<SVGLibrary />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
