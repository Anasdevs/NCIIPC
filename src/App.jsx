
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Documents from './Components/Documents'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutUs/>
     <Documents/>
    </div>
  );
}

export default App;
