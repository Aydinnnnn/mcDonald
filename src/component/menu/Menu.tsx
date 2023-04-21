import Product from "./Products/Product";
export default function Menu() {
  return (
    <>
      <div className="bg-neutral-100 rounded-2xl">
        <div className="p-3 text-center border-b border rounded-t-2xl ">
          <p className="font-bold text-3xl">رستوران مک دونالد نهران</p>
        </div>
        <div className="pt-4">
          <Product
            image="./public/assest/Images/hamburger.png"
            title="همبوگر"
            counter="2"
            totalPrice="10000"
            price ={2000}
          />
        </div>
      </div>
    </>
  );
}
