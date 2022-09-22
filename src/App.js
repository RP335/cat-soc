import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';

function App() {
  return (
    <div className='app-main'>
      

        
      
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = '/members' element = {<Members/>}/>
        <Route path = '/about' element = {<About/>}/>
        
      </Routes>
      <Navbar />
        

       
        
    </div>
  );
}

export default App;
