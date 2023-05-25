import './App.css';
import Navbar from './components/Navbar/Navbar';

import ItemListContainer2 from './components/ItemListContainer2/ItemListContainer2';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCart } from './Context/CartContextProvider';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar  />
        <Routes>
          <Route path="/" element={<ItemListContainer2/>}/>
          <Route path="/categoria/:idcat" element= {<ItemListContainer2/>}  />
          <Route path="/item/:idItem" element= {<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route/>
          

      </Routes>



      
      </BrowserRouter>
    </>
  );
}

export default App;



//    <Navbar  />
//  <ItemListContainer greeting= "Bienvenido al E-Commerce de Bebidas" />
//  <Contador inicial = {1} stock = {10} />
//  <ItemListContainer2/>
//  <ItemDetailContainer/>

//entrega fianl del tp
