import { UseGlobalContext } from "../../context/globalContext";
import IncomeItem from "../incomes/incomeItems";
import { useEffect } from "react";
import ExpenseForm from "../form/expenseForm";

const Expenses = () => {
  const { addExpense, expenses, getExpenses, deleteExpense, totalExpense } =
    UseGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="p-5 m-10">
      <h1 className="text-3xl text-white font-bold">Egresos</h1>
      <div className="w-[100%] p-2 bg-[#FCF6F9] border-2 border-gray-300 flex flex-row justify-center place-items-center gap-3 mt-5 rounded-xl">
        <h2 className="font-bold text-2xl text-gray-500">Total Egresos:</h2>
        <span className="font-bold text-red-500 text-2xl">
          $ {totalExpense()}
        </span>
      </div>
      <div className="mt-10 flex flex-row gap-5">
        <div className="h-fit">
          <ExpenseForm />
        </div>
        <div className="w-[100%]">
          {expenses.map((expense) => {
            const { _id, title, amount, date, category, description } = expense;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                amount={amount}
                date={date}
                description={description}
                category={category}
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
