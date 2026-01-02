import {HashRouter as Router,Routes, Route } from "react-router-dom";
import "../src/dist/styles.css";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Contact from "./Pages/Contact";
import About from './Pages/About';
import Model from './Pages/Model';
import Team from './Pages/Team';

function App() {
  return (
   <Navbar />
      <Home />
    <Router>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/about' element={<About />}/>
        <Route path= '/models' element={<Model />}/>
        <Route path= '/team' element={<Team />}/> 
        <Route path= '/contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
