import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import HealthPlans from './Screens/HealthPlans';
import HealthProvider from './Screens/HealthProvider';
import AboutUs from './Screens/AboutUs';
import Contact from './Screens/Contact';


function App() {
  return (
    <div className="App">
        <Routes>

          <Route path='/'element={<Home/>}/>
          <Route path='/plans'element={<HealthPlans/>}/>
          <Route path='/provider'element={<HealthProvider/>}/>
          <Route path='/about'element={<AboutUs/>}/>
          <Route path='/contact'element={<Contact/>}/>

        </Routes>
    </div>
  );
}

export default App;
