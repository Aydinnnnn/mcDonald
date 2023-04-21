interface Props {
  image: string;
  price: number;
  totalPrice: string;
  title: string;
  counter: string;
}

export default function Product({
  image,
  price,
  totalPrice,
  title,
  counter,
}: Props) {
  return (
    <>
      <div className="flex">
        <div>
          <img className="" src={image} alt="1" />
        </div>
        <div className="flex flex-col">
          <p className="text-lg">{title}</p>
          <p className="">{price}</p>
          <div className="flex justify-between">
            <div className="flex">
              <button className="bg-red-800 p-2">
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
              <div className="bg-[#F0F8FF] p-2">{counter}</div>
              <div>
                <button className="bg-red-800 p-2">
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
            <div className="">{totalPrice}</div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
