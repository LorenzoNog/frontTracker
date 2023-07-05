import { UseGlobalContext } from "../../context/globalContext";

const History = () => {
  const { transactionHistory } = UseGlobalContext();
  const [...history] = transactionHistory();
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl text-white font-bold mb-5 mt-[9%] text-center">
        Movimientos recientes
      </h2>
      {history.map((item) => {
        const { _id, title, amount, category } = item;
        return (
          <div
            key={_id}
            className="flex flex-row justify-between rounded-2xl bg-[#FCF6F9] border-2 p-2"
          >
            <span className="font-bold">{title} ({category})</span>
            <span className="font-extrabold text-black">
              $ {amount}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default History;
