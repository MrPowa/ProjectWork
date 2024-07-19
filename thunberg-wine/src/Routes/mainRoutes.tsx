import GridCard from "../Components/ProductsCard/GiftCard";
import {Route, Routes} from "react-router-dom";




 function MainRoutes(){

return(
    <Routes>
        <Route path="/products" element={<GridCard />} />
    </Routes>


)



}

export default MainRoutes