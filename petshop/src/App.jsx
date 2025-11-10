import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import './assets/css/base/base.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Use element={<Componente />} para renderizar */}
        <Route path='/' element={<Home />} /> 
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App