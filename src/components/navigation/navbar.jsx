import React from "react";
import { BiLogOut } from "react-icons/bi";
import MenuItems from "../../../data/MenuItems";
import { useNavigate } from "react-router-dom";

const Navbar = ({ active, setActive }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#272953] flex flex-col justify-between gap-3 px-[2rem] py-[1.5rem] w-[350px] h-[100vh border-[#FFFFF] rounded-xl">
      <h2 className="text-2xl font-extrabold uppercase text-white p-2">
        Tu dinero
      </h2>
      <ul className="flex flex-col gap-12 ">
        {MenuItems.map((item) => {
          return (
            <li
              onClick={() => setActive(item.id)}
              key={item.id}
              className="flex flex-row gap-3 p-2 place-items-center font-bold text-white hover:border-l-2 hover:border-[#EBD8E9] hover:text-gray-400 cursor-pointer"
            >
              {item.icon}
              <span className="hover:font-extrabold">{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex mt-[20%]">
        <li
          onClick={() => navigate("/")}
          className="flex flex-row gap-2 place-items-center font-bold text-white hover:border-l-2 hover:border-[#EBD8E5] hover:text-gray-400  cursor-pointer"
        >
          <BiLogOut />
          <span className="hover:font-extrabold">Log out</span>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
