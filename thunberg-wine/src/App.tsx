import './App.css';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoutes from "./Routes/mainRoutes";
import RoundedButton from './Components/RoundedBotton';
import { CartProvider } from './context/CartContext';
import { Header } from './Components/Header';

function App() {
  // return <GridCard />
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <MainRoutes />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;