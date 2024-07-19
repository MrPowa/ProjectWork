import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import RoundedButton from "../RoundedBotton";
import CartIcon from "../../assets/shopping-cart.svg"
import '../../Components/Header/Header.css';

export function Header() {
    const {totalItems} = useCart();
    const navigate = useNavigate();
    return(
        <header className="header">
            
            <div className="right-buttons">

                <RoundedButton 
                label2="Aggiunti al carrello"
                label= {totalItems>0? totalItems.toString() : "0"}
                icon={CartIcon}
                onclick={() => {
                    navigate("/cart");
                }}
                />


            </div>
        </header>
    );
}