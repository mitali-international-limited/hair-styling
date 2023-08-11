import Link from "next/link";
import ExCard from "../Ex-Card";

const Extension = ({ title, data }) => {
  console.log("Super data: ", data);
  return (
    <div className="bg-white py-5 mt-5 w-[100vw]">
      <h3 className="tracking-[.8px] uppercase font-bold mx-2 md:mx-[5rem] text-[15px]">
        {title}
      </h3>
      <div className="flex gap-3 mx-2 md:mx-[4rem] flex-nowrap overflow-x-scroll custom-scrollbar py-5">
        {data.items.map((item, idx) => {
          return (
            <Link key={idx} href={`/products/${encodeURIComponent(item.name)}`}>
              <ExCard item={item} key={idx} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Extension;
