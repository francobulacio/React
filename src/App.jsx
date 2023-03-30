import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Navbar  />
    <ItemListContainer greeting= "Bienvenido al E-Commerce de Bebidas"  />
    </>
  );
}

export default App;
