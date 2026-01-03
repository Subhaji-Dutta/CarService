import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "../src/dist/styles.css";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Contact from "./Pages/Contact";
import About from './Pages/About';
import Model from './Pages/Model';
import Team from './Pages/Team';

function App() {
  return (
    <Router basename="/CarService">
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route exact path= '/about' element={<About />}/>
        <Route exact path= '/models' element={<Model />}/>
        <Route exact path= '/team' element={<Team />}/> 
        <Route exact path= '/contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
