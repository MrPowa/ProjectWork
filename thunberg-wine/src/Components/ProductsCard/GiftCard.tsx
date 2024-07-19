import { mockProducts } from "../../Interfaces/productInterfaces";
import { ProductCard } from "../product-cart/productCard";
import "./GiftCard.css"

export default function GridCard() {
    return (
        <div className="products-flex">
            {
                mockProducts.map((product) =>
                    (<ProductCard key={product.id} product={product} />))
            }
        </div>
    )
}