import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Link to="/">Menu</Link>
            <Link to="/cart">Cart</Link>
            <div>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Layout;
