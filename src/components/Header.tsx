import Logo from "./Logo";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import '../styles/header.css';

const menuItem = [
    {
        id: 1,
        label: "Shop",
        link: '/shop'
    },
    {
        id: 2,
        label: "About",
        link: '/about'
    },
    {
        id: 3,
        label: "Contact",
        link: '/contact'
    },
]

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <Link to='/'>
                    <Logo height={50} />
                </Link>
            </div>
            <div className="menu-container">
                {
                    menuItem.map((item) => (
                        <Link to={item.link} key={item.id}>
                            <Button >{item.label}</Button>
                        </Link>
                    ))
                }
                <Cart />
            </div>
        </div>
    );
}

export default Header;