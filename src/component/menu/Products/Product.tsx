import { useState } from "react";

interface Props {
  image: string;
  price: number;
  totalPrice: number;
  title: string;
  quantity: number;
}

export default function Product({
  image,
  price,
  title,
}: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="col-span-12  md:col-span-6 flex bg-white shadow-md rounded-md items-center justify-start ">
        <div className="w-40 ">
          <img className="w-full aspect-square" src={image} alt="1" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-lg">{title}</p>
          <p className="">{price}</p>
          <div className="flex justify-between w-full pl-4 ">
            <div className="flex ">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-red-800  w-6 h-6 rounded-r-md"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 7V17M7 12H17"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
              <div className="bg-[#F0F8FF] text-center  w-6 h-6">{count}</div>
              <div>
                <button
                  onClick={() => {
                    count - 1 < 0 ? setCount(0) : setCount(count - 1);
                  }}
                  className="bg-red-800 w-6 h-6 rounded-l-md"
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 12L17 12"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="">{price * count} تومان</div>
          </div>
        </div>
      </div>
    </>
  );
}
