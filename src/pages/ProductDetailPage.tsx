import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import BtnAddToCart from "../components/BtnAddToCart";
import '../styles/global.css';

const ProductDetailPage = () => {

    const location = useLocation()
    const selectedItem = products.item.filter(item => item.url === location.pathname)

    return (
        <div className="selected-product-container">
            {
                selectedItem.map((item) => (
                    <div key={item.id} className="product-details-container">
                        <img src={item.img} alt={item.name} height={300} />
                        <div className="product-desc-container">
                            <p className="product-name">{item.name}</p>
                            <p className="product-description">{item.description}</p>
                            <p className="product-price">$ {item.price}</p>
                            <br />
                            <BtnAddToCart {...item} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductDetailPage;