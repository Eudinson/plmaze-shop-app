import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import '../styles/main-layout.css'

const MainLayout = () => {
    return (
        <div className="main-layout-container">
            <div className="main-layout-header-container">
                <Header />
            </div>
            <div className="main-layout-outlet-container">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;