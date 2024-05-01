import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Homepage';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='app-wrapper'>
    <Navbar/>
    <Homepage/>
    <Hero/>
    </div>
  )
}

export default App
