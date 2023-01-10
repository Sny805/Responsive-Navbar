import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from './Component/Pages/Demo';
import Home from './Component/Pages/Home';
import KeyFeatures from './Component/Pages/KeyFeatures';
import Pricing from './Component/Pages/Pricing';
import Testimonials from './Component/Pages/Testimonials';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/features" element={<KeyFeatures/>}/>
              <Route exact path="/pricing" element={<Pricing/>}/>
              <Route exact path="/testimonials" element={<Testimonials/>}/>
              <Route exact path="/demo" element={<Demo/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
