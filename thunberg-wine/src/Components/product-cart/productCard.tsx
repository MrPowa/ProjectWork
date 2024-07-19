import { useState } from "react";
import { Product } from "../../Interfaces/productInterfaces";
import RoundedButton from "../RoundedButton/RoundedBotton";
import { useCart } from "../../context/CartContext";
import './product-cart.css';


export function ProductCard({ product }: { product: Product }) {
    const [amount, setAmount] = useState(1);
    const { addToCart } = useCart();

    return (
        <>
            <div className="product-element">
                <div className="product-gen">

                    <img src={product.image} alt={product.name} width={product.width} height={product.height} />
                    <section>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </section>

                </div>
                <div className="product-button">
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