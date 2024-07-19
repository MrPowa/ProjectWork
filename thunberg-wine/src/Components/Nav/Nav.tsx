import RoundedButton from "../RoundedButton/RoundedBotton";
import CartIcon from "../../assets/shopping-cart.svg"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Nav.css";


export function Nav1() {

    const { totalItems } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Prodotti</a></li>
                    <li><a href="">Contatti</a></li>
                </ul>
                <RoundedButton 
                    
                    label={totalItems > 0 ? totalItems.toString() : "0"}
                    icon={CartIcon}
                    onclick={() => {
                        navigate("/cart");
                    }}
                />
            </nav>
        </>
    )
}