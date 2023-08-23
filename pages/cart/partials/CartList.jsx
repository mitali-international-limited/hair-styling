import React from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import BtnClassic from "../../../components/Button/BtnClassic";
import Link from "next/link";

const tableHeader = [" ", "Product", " ", "Price", "Quantity", "Total"];

const CartList = ({
  cartItems,
  removeItem,
  decreaseCartItem,
  addItemToCart,
  cartTotal,
}) => {
  const dispatch = useDispatch();

  const removeFormCart = (item) => {
    dispatch(removeItem(cartItems, item));
  };
  const increaseCartItem = (item) => {
    dispatch(addItemToCart(cartItems, item));
  };
  const decreaseFromCartItem = (item) => {
    dispatch(decreaseCartItem(cartItems, item));
  };
  return (
    <div className="w-full">
      <table className={`w-full border-collapse`}>
        <thead>
          <tr>
            {tableHeader.map((header) => (
              <th className="p-2 text-end text-black" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[10pt] font-MyFont">
          {cartItems &&
            cartItems.map((item) => (
              <tr key={item.id} className="border border-l-0 border-r-0 ">
                <td className="py-5 px-2 mr-3 text-center text-gray">
                  <div onClick={() => removeFormCart(item)}>
                    <span className="mx-4 font-bold cursor-pointer hover:text-primary-red flex justify-center items-center">
                      <IoMdClose />
                    </span>
                  </div>
                </td>
                <td className="py-2 w-20 ">
                  <img
                    className="w-full h-full bg-center"
                    src={item.productPictures[0].img}
                    alt={"Image"}
                  />
                </td>
                <td className="py-5 px-2 text-end mr-3">{item.name}</td>
                <td className="py-5 px-2 text-end ">
                  {typeof item.offer === "number" ? (
                    <>
                      {item.offer && item.price && (
                        <span>
                          $
                          {(
                            item.price -
                            (item.price * item.offer) / 100
                          ).toFixed(2)}
                        </span>
                      )}
                    </>
                  ) : (
                    <span>${item.price.toFixed(2)}</span>
                  )}
                </td>
                <td className="pt-5 px-2 flex justify-end ml-2 mt-5">
                  <div className="flex border rounded-md justify-center items-center">
                    <div className="flex flex-col">
                      <button
                        className="px-2"
                        onClick={() => increaseCartItem(item)}
                      >
                        <IoIosArrowUp />
                      </button>
                      <button
                        className="px-2"
                        onClick={() => decreaseFromCartItem(item)}
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>

                    <p className="px-5 py-2">{item.quantity}</p>
                  </div>
                </td>
                <td className="py-5 px-2 text-end">
                  ${" "}
                  {item.quantity *
                    (typeof item.offer === "number"
                      ? item.price - (item.price * item.offer) / 100
                      : item.price
                    ).toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="6"
              className="text-right text-[17px] font-semibold pt-10"
            >
              Sub Total: ${cartTotal}
            </td>
          </tr>
          <tr>
            <td colSpan="6" className="text-right text-[10px] pt-5">
              Taxes and shipping calculated at checkout
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="mt-5">
        <Link href="/checkout">
          <BtnClassic
            btnText={"Goto Checkout"}
            btnWidth={
              "uppercase !px-5 !text-[17px] !bg-black !text-white !rounded-sm hover:!bg-white hover:!text-black border border-black"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default CartList;
