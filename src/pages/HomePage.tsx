import ProductList from "../components/ProductList";
import '../styles/global.css';

const HomePage = () => {
    return (
        <div className="page-container">
            <h1 className="homepage-heading">Gear8 Tm is a SCREEN-FREE puzzle maze that takes simple fun to a sophisticated new level, while helping children master physical and engineering concepts, and letting adults relieve stress and relax.</h1>
            <ProductList />
        </div>
    );
}

export default HomePage;