import GridCard from "../Components/GiftCard";
import {Route, Routes} from "react-router-dom";




export default function mainRoutes(){

return(
    <Routes>
        <Route path="/products" element={<GridCard />} />
    </Routes>


)



}