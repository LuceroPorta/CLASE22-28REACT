import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/header';
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import Homepage from './pages/Homepage';
import Ejemplo01 from './pages/Ejemplo01';
import Ejemplo02 from './pages/Ejemplo02';


function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Ejemplo01'element ={<Ejemplo01/>} />
      <Route path='/Ejemplo02'element ={<Ejemplo02/>} />
      
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
