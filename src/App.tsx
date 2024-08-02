import { Routes, Route } from "react-router-dom";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Error from "./Pages/Error/Error";

function App() {
    return (
        <>
            <Button appearence="small">Кнопка</Button>
            <Button appearence="big">Кнопка</Button>
            <Input placeholder="Email"/>
            <div>
                <a href="/">Menu</a>
                <a href="/cart">Cart</a>
            </div>

            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App; 
