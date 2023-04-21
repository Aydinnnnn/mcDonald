import { Order } from "../../Interfaces/orderInterface";

interface Props {
  cart: Order[];
  setCart: (orders: Order[]) => void;
}
export default function Bill({ cart, setCart }: Props) {
  return (
    <>
      <div className="flex w-full bg-white rounded-lg p-4 gap-5 flex-col md:flex-row ">
        <div className="w-full flex flex-col justify-between">
          <div className="flex justify-between">
            <p>:جمع کل سفارشات ~</p>
            <p>0 تومان</p>
          </div>
          <div className="justify-between flex">
            <p>:حق سرویس و کارمزد</p>
            <p>0 تومان</p>
          </div>
          <div className="flex justify-between">
            <p>:تخفیف</p>
            <p>0 درصد</p>
          </div>
          <form className="flex w-full">
            <input className="w-full " type="text" placeholder="کد تخفیف" />
            <button className="bg-[#9E1010] w-8 rounded-l-md " type="submit">
              <svg
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
                  <g id="Interface / Check">
                    {" "}
                    <path
                      id="Vector"
                      d="M6 12L10.2426 16.2426L18.727 7.75732"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
          </form>
        </div>
        <div className="w-full flex flex-col gap-4 ">
          <div className=" bg-[#FFC72C] flex p-4 rounded-md justify-between font-semibold ">
            <p>:مبلغ قابل پرداخت</p>
            <p>0 تومان</p>
          </div>

          <div className="w-full text-center">
            <button className="bg-[#9E1010] w-full text-white rounded-md p-4">
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
