import './App.css';
import {BrowserRouter} from "react-router-dom";
import"./App.css";
import MainRoutes from "./Routes/mainRoutes";


function App(){
  // return <GridCard />
  return (
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>
  )
}

export default App;