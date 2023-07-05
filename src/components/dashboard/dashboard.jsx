import LineChart from "../../chart/chart";
import { UseGlobalContext } from "../../context/globalContext";
import History from "../history/history";
import { useEffect } from "react";

const Dashboard = () => {
  const {
    totalIncome,
    totalExpense,
    totalBalance,
    getIncomes,
    getExpenses,
    incomes,
    expenses,
  } = UseGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div className="grid grid-cols-2 m-10">
      <div className="flex flex-col p-5 ">
        <h1 className="text-3xl text-white font-bold mb-5">Transacciones</h1>
        <div className="flex flex-col gap-3">
          <div className="bg-[#FCF6F9] border-2 shadow-xl p-2 rounded-xl h-[100%]">
            <LineChart />
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5">
            <div className="bg-[#FCF6F9] p-3 border-2 col-span-2 rounded-xl flex flex-col place-items-center">
              <h2 className="font-bold text-xl text-gray-500">
                Total ingresos:
              </h2>
              <span className="font-bold text-green-500 text-4xl">
                $ {totalIncome()}
              </span>
            </div>
            <div className="bg-[#FCF6F9] p-3 border-2 col-span-2 rounded-xl flex flex-col place-items-center">
              <h2 className="font-bold text-xl text-gray-500">
                Total egresos:
              </h2>
              <span className="font-bold text-green-500 text-4xl">
                $ {totalExpense()}
              </span>
            </div>
            <div className="bg-[#FCF6F9] flex flex-col p-3 border-2 rounded-xl place-items-center col-span-4 w-[60%] ml-[20%]">
              <h2 className="font-bold text-xl text-gray-500">
                Balance total:
              </h2>
              {totalBalance() < 0 ? (
                <span className="font-bold text-red-500 text-4xl">
                  $ {totalBalance()}
                </span>
              ) : (
                <span className="font-bold text-green-500 text-4xl">
                  $ {totalBalance()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <History />
        <div className="mt-8">
          <div className="px-1 text-xl text-white font-bold place-items-center flex flex-row justify-between mb-3">
            <span className="text-gray-400">Min.</span>
            <h2 className="text-3xl text-white font-bold ">Ingresos</h2>
            <span className="text-gray-400">Max.</span>
          </div>
          <div className="flex flex-row justify-between bg-[#FCF6F9] border-2 p-1 rounded-xl">
            <span className="font-extrabold text-xl text-gray-500">
              $ {Math.min(...incomes.map((income) => income.amount))}
            </span>
            <span className="font-bold text-xl text-gray-500">
              $ {Math.max(...incomes.map((income) => income.amount))}
            </span>
          </div>
        </div>
        <div className="mt-8">
          <div className="px-1 text-xl text-purple-400 font-bold flex flex-row justify-between place-items-center mb-3">
            <span className="text-gray-400">Min.</span>
            <h2 className="text-3xl text-white font-bold">Egresos</h2>
            <span className="text-gray-400">Max.</span>
          </div>
          <div className="flex flex-row justify-between bg-[#FCF6F9] border-2 p-1 rounded-xl">
            <span className="font-bold text-xl text-gray-500">
              $ {Math.min(...expenses.map((income) => income.amount))}
            </span>
            <span className="font-bold text-xl text-gray-500">
              $ {Math.max(...expenses.map((income) => income.amount))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
