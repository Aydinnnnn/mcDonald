import Product from "./Products/Product";
import { Order } from "../../Interfaces/orderInterface";
interface DbInterface {
  productImg: string;
  productPrice: number;
  totalPrice: number;
  productName: string;
  count: number;
  id: number;
}

interface Props {
  cart: Order[];
//   setCart: React.Dispatch<React.SetStateAction<Order[]>>;
setCart:(orders:Order[]) => void
}
const db: DbInterface[] = [
  {
    productName: "همبرگر مخصوص",

    productPrice: 10000,

    productImg: "./assest/Images/hamburger.png",

    count: 0,

    id: 1,

    totalPrice: 0,
  },

  {
    productName: "همبرگر معمولی",

    productPrice: 8000,

    productImg: "./assest/Images/hamburger.png",

    count: 0,

    id: 2,

    totalPrice: 0,
  },

  {
    productName: "همبرگر مخصوص با قارچ و پنیر",

    productPrice: 20000,

    productImg: "./assest/Images/hamburger.png",

    count: 0,

    id: 3,

    totalPrice: 0,
  },

  {
    productName: "همبرگر معمولی با قارچ و پنیر",

    productPrice: 10000,

    productImg: "./assest/Images/hamburger.png",

    count: 0,

    id: 4,

    totalPrice: 0,
  },

  {
    productName: " سیب زمینی سرخ کرده",

    productPrice: 10000,

    productImg: "./assest/Images/french_fries.png",

    count: 0,

    id: 5,

    totalPrice: 0,
  },

  {
    productName: " سیب زمینی سرخ کرده ویژه",

    productPrice: 25000,

    productImg: "./assest/Images/french_fries.png",

    count: 0,

    id: 6,

    totalPrice: 0,
  },

  {
    productName: "نوشابه",

    productPrice: 5000,

    productImg: "./assest/Images/soda.png",

    count: 0,

    id: 7,

    totalPrice: 0,
  },

  {
    productName: " نوشابه رژیمی",

    productPrice: 6000,

    productImg: "./assest/Images/soda.png",

    count: 0,

    id: 8,

    totalPrice: 0,
  },

  {
    productName: " سالاد سزار",

    productPrice: 25000,

    productImg: "./assest/Images/ceasar.png",

    count: 0,

    id: 9,

    totalPrice: 0,
  },

  {
    productName: " سالاد فصل",

    productPrice: 8000,

    productImg: "./assest/Images/salad.png",

    count: 0,

    id: 10,

    totalPrice: 0,
  },
];
export default function Menu({ cart, setCart }: Props) {
  return (
    <>
      <div className="bg-neutral-100 rounded-2xl">
        <div className="p-3 text-center border-b border rounded-t-2xl ">
          <p className="font-bold text-3xl">رستوران مک دونالد نهران</p>
        </div>
        <div className="p-6 max-h-[600px] overflow-y-scroll grid grid-cols-12 gap-3">
          {db.map((product) => {
            return (
              <Product
                key={product.id}
                image={product.productImg}
                title={product.productName}
                quantity={product.count}
                totalPrice={product.totalPrice}
                price={product.productPrice}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
