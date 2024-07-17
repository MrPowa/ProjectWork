import { mockProducts } from "../Interfaces/productInterfaces";
import { ProductCard } from "./productCard";

export default function GridCard() {
    return (
        <div className="center-grid">
            <div className="products-grid">
                {
                    mockProducts.map((product) => 
                        (<ProductCard key={product.id} product={product}/>))
                }
            </div>
        </div>
    )
}