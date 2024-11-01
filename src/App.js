
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Healthy from './components/Healthy';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';




function App() {
  return (
    <div className="App">


       <Navbar/>
       <Home/>
       <Delivery/>
       <Healthy/>
       <Products/>
       <Footer/>
   

    </div>
  );
}

export default App;
