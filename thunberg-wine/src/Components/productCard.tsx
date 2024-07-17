import { Product } from "../Interfaces/productInterfaces";

export function ProductCard({ product }: { product: Product }) {
    return (
        <>
            <div>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </div>
        </>
    )
}