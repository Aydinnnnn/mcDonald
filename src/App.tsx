import "./index.css";
import Menu from "./component/menu/Menu";
import Container from "./component/container/container";
import Bill from "./component/Bill/Bill";
import { useState } from "react";
import { Order } from "./Interfaces/orderInterface";

function App() {
  const [cart, setCart] = useState<Order[]>([]);
  const setCartHandler = (orders: Order[]) => {
    setCart(orders);
  };
  return (
    <div className="bg-[#DA291C] w-full h-full">
      <Container>
        <Menu cart={cart} setCart={setCartHandler} />
        <Bill />
      </Container>
    </div>
  );
}

export default App;
