import Form from "../form/form";
import { UseGlobalContext } from "../../context/globalContext";
import IncomeItem from "./incomeItems";
import { useEffect } from "react";

const Incomes = () => {
  const { incomes, getIncomes, deleteIncome, totalIncome } = UseGlobalContext();

  useEffect(() => {
    getIncomes()
  }, []);

  return (
    <div className="p-5 m-10">
      <h1 className="text-3xl text-white font-bold">Ingresos</h1>
      <div className="w-[100%] p-2 bg-[#FCF6F9] border-2 border-gray-300 flex flex-row justify-center place-items-center gap-3 mt-5 rounded-xl">
        <h2 className="font-bold text-2xl text-gray-500">Total Ingresos:</h2>
        <span className="font-bold text-green-500 text-2xl">${totalIncome()}</span>
      </div>
      <div className="mt-10 flex flex-row gap-5">
        <div className="h-fit">
          <Form />
        </div>
        <div className="w-[100%]">
          {incomes.map((income) => {
            const { _id, title, amount, date, category, description } = income;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                amount={amount}
                date={date}
                description={description}
                category={category}
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Incomes;
