import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inscrire from './Inscrire.jsx';
import Nav from './Nav.jsx';
import Connecter from './Connecter.jsx';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Inscrire />} />
        <Route path="/Connecter" element={<Connecter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
