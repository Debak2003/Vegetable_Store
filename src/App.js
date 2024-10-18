
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Healthy from './components/Healthy';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';




function App() {
  return (
    <div className="App">
   {/* <Routes>
   
   <Route path='*' element={<Home/>}/>
   <Route path='/' element={<Home/>}/>
   <Route path='/Delivery' element={<Delivery/>}/>
   <Route path='/Healthy' element={<Healthy/>}/> 
   <Route path='/Product' element={<Products/>}/> 
   {/* <Route path='/Contact' element={<Footer/>}/> */}
{/* 
 </Routes> */} 
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
