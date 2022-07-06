import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import People from './Components/People';
import Films from './Components/Films';
import Film from './Components/Film';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home"  element={<Home />}></Route>
        <Route path="/films/:filmId" element={<Film />}></Route>
        <Route path="/films" element={<Films />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/"  element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
