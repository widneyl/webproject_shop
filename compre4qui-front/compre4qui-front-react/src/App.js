import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Help from './pages/Help';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/register' element={<Register/>} />
            <Route path='/help' element={<Help/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
