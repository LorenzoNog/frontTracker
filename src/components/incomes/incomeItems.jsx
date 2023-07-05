import React from "react";
import { BsCurrencyDollar, BsTrash, BsPiggyBank } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaComment } from "react-icons/fa";
import DateFormat from "../../utils/dateFormat";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  type,
  deleteItem,
}) => {
  return (
    <div className="bg-[#FCF6F9] rounded-xl p-5 mb-5 flex flex-col align-center gap-2 w-[100%] border-2">
      <div className="flex flex-row gap-2 place-items-center">
        <div className="text-[#6CAE28] text-xl">●</div>
        <span className="font-semibold text-xl">{title}</span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-2 place-items-center">
              <BsCurrencyDollar />
              <span className="text-md font-bold text-gray-500">{amount}</span>
            </div>
            <div className="flex flex-row gap-2 place-items-center">
              <SlCalender />
              <span className="text-md font-semibold text-gray-500">
                <DateFormat/>
              </span>
            </div>
            <div className="flex flex-row gap-2 place-items-center">
              <FaComment />
              <span className="text-md font-bold text-gray-500 mb-1">
                {description}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button
              className="p-2 bg-[#231757] rounded-2xl"
              onClick={() => deleteItem(id)}
            >
              <BsTrash className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeItem;
