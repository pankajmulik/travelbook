import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      
     
      <BrowserRouter>
      
        <Routes>

         
          <Route exact path='/' element={<Home/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
