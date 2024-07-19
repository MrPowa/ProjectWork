import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes/mainRoutes";
import RoundedButton from './Components/RoundedButton/RoundedBotton';
import { CartProvider } from './context/CartContext';
import { Header } from './Components/Header/Header';
import { Nav1 } from './Components/Nav/Nav';

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