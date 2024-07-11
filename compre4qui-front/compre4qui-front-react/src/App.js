import './App.css';
import Navbar from './layouts/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      
    </div>
  );
}

export default App;
