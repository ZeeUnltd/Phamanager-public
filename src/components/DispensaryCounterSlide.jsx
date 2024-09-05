
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { useCart } from './context/CartContext';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useRef, useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "./redux/Cart/userCartSlice";
import { useDispatch, useSelector } from 'react-redux';

function DispensaryCounterSlide() {
  // const { cart } = useCart()
  //Drug Quantity
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartt = useSelector((state) => state.userCart.userCart);

  const swiperRef = useRef()


  //Handling Quatity Change
  //Quantity Decrease
  function decreaseQuantity() {
    if (quantity === 1) return;
    setQuantity((q) => q - 1);
  }
  //Quantity Increase
  function increaseQuantity() {
    setQuantity((q) => q + 1);
  }
  return (
    <>
      <div className='mt-12 mb-3 text-lg'>

        <h6>Dispensary counter details</h6>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => swiperRef.current = swiper}
      >
        {(Array.isArray(cartt) && cartt.length > 0) && (cartt.map((drug) => (<SwiperSlide>
          <div className="text-xl flex flex-col gap-3 mb-12 relative">
            <div className="flex gap-6 relative">
              <div className="flex border-2 h-[200px] w-[869px] shadow-lg p-6 relative">
                <div className="w-[170px]">
                  <img
                    src="/images/drugImage.png"
                    alt=""
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 px-6 pb-3  w-full">
                  <h4 className="font-semibold text-2xl">{drug.drugName}</h4>
                  <p className="text-base">{drug.pharmacy}</p>
                  <p className="font-semibold text-lg">
                    200mg l 1 Tube l 2 drops per use
                  </p>

                  <div className="flex items-end justify-between  font-semibold relative">
                    <p className="text-formBlue text-base">
                      View dispensary details
                    </p>

                    <div>
                      <p className="flex justify-evenly items-center text-formBlue">
                        <span>
                          <TbCurrencyNaira size={25} />
                        </span>
                        1000
                      </p>
                      <p className="text-lg">Available</p>
                    </div>
                  </div>
                  <div className="absolute flex justify-between items-center gap-3 right-6">
                    <button onClick={() => swiperRef.current.slidePrev()} className="rounded-full w-5 h-5 text-sm text-white bg-slate-300 flex justify-center items-center hover:bg-formBlue"><BiSolidLeftArrow size={10} /></button>
                    <button onClick={() => swiperRef.current.slideNext()} className="rounded-full w-5 h-5 text-sm text-white bg-slate-300 flex justify-center items-center hover:bg-formBlue"><BiSolidRightArrow size={10} /></button>
                  </div>
                </div>

              </div>
              <div className="border-2 border-[#62909F]  w-[300px] h-[200px] flex flex-col gap-3">
                <p className="p-7 bg-[#F5F5F5] text-base">Quantity</p>
                <div className="p-7 text-2xl flex justify-between">
                  <p>{quantity}</p>
                  <div className="flex gap-1">
                    <button
                      className="h-8 w-8 flex justify-center items-center text-3xl text-primaryCol rounded-md border-2 border-primaryCol"
                      // onClick={decreaseQuantity}
                      onClick={() => {
                        dispatch(decrementQuantity(drug.id))
                      }
                      }
                    >
                      -
                    </button>
                    <button
                      className="h-8 w-8 flex justify-center items-center text-3xl text-primaryCol rounded-md border-2 border-primaryCol"
                      // onClick={increaseQuantity}
                      onClick={() => {
                        dispatch(incrementQuantity(drug.id))}
                      }
                    >
                      +
                    </button>
                  </div>

                </div>
              </div>
              <div className="border-2 border-[#62909F]  w-[300px] h-[200px] flex flex-col ">
                <p className="p-7 bg-[#F5F5F5] text-base">Total Fee</p>
                <p className="pl-7 py-3 text-base">Due Today</p>
                <p className=" pl-7 flex justify-start items-center text-2xl ">
                  <span>
                    <TbCurrencyNaira size={30} />
                  </span>
                  {1000 * quantity}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>)))}

      </Swiper>


    </>


  )
}

export default DispensaryCounterSlide
