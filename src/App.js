
import './App.css';
import CounterValue from './Components/CounterValue';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Product from './Components/Product';
import Counter from './Redux/CounterSlice/Counter';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     {/* <CounterValue/>*/}
     
    
     
    </BrowserRouter>
  );
}

export default App;
