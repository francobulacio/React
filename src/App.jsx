import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/Contador';
import ItemListContainer2 from './components/ItemListContainer2/ItemListContainer2';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mensaje from './components/Mensaje/Mensaje';
import Vista from './components/Vista/Vista';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar  />
      <Contador inicial = {1} stock = {10} />
        <Routes>
          <Route path="/" element={<ItemListContainer2/>}/>
          <Route path="/categoria/:idcat" element= {<ItemListContainer2/>}  />
          <Route path="/item/:idItem" element= {<ItemDetailContainer/>}/>
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
