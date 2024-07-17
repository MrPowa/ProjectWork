import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import RoundedButton from "./RoundedBotton";
import CartIcon from "../assets/shopping-cart.svg"

export function Header() {
    const {totalItems} = useCart();
    const navigate = useNavigate();
    return(
        <header className="header">
            <div>
                <p>material didattic</p>
            </div>
            <div className="right-buttons">
                <RoundedButton 
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