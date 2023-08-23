import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";

const tableHeader = [" ", " ", " ", "Price", "Quantity", "Total"];

const Summary = ({ cartItems, cartTotal }) => {
  const [hideSummary, setHideSummary] = useState(false);
  return (
    <div className="mx-[5rem]">
      <div className="flex justify-between font-mono pb-2 border-b">
        <p>Your Order Summary</p>
        <p
          className="flex items-center cursor-pointer border border-transparent hover:border-black px-2 py-1"
          onClick={() => setHideSummary(!hideSummary)}
        >
          <span className="pr-3">
            {hideSummary ? "Show Summary" : "Hide Summary"}
          </span>
          <span>{hideSummary ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
        </p>
      </div>
      <div className={`${hideSummary ? "hidden" : "block"} pt-4`}>
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
                    <p className="px-5 py-2">{item.quantity}</p>
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
                className="text-right text-[17px] font-semibold pt-3"
              >
                Items Total: ${cartTotal}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Summary;
