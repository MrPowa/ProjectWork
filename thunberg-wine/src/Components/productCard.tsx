import { useState } from "react";
import { Product } from "../Interfaces/productInterfaces";
import RoundedButton from "./RoundedBotton";
import { useCart } from "../context/CartContext";

export function ProductCard({ product }: { product: Product }) {
    const [amount, setAmount] = useState(1);
    const {addToCart} = useCart();
    
    return (
        <>
            <div>
                <div>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
                <div>
                    <RoundedButton
                     label="Add to Cart"
                     onclick={() => {
                        addToCart(product, amount);
                        setAmount(1);
                     }} />
                </div>
            </div>
        </>
    )
}