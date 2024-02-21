import { products } from "../data/products";
import { Link } from "react-router-dom";
import '../styles/product-list.css';

const ProductList = () => {
    return (
        <div className="product-list-container">
            {
                products.item.map((product) => (
                    <Link to={product.url} key={product.id} >
                        <div className="product-container">
                            <img src={product.img} alt={product.name} height={200} />
                            <p className="product-name">{product.name}</p>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">$ {product.price}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default ProductList;