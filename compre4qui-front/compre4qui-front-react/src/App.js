import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Main from './layouts/Main';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/register' element={<Register/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
