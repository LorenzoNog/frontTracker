import { UseGlobalContext } from "../../context/globalContext";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlinePlus } from "react-icons/ai";

const ExpenseForm = () => {
  const { addExpense } = UseGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: " ",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-5">
        <div>
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="Nombre egreso"
            onChange={handleInput("title")}
            className="p-3 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md text-white"
          />
        </div>
        <div>
          <input
            type="text"
            value={amount}
            name={"amount"}
            placeholder="Monto egreso"
            onChange={handleInput("amount")}
            className="p-3 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md text-white"
          />
        </div>
        <div>
          <DatePicker
            id="date"
            placeholderText="Elija una fecha"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
            className="p-3 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md text-white "
          />
        </div>
        <div>
          <textarea
            value={description}
            name="description"
            placeholder="Descripcion"
            rows={3}
            onChange={handleInput("description")}
            className="p-3 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md w-[300px] text-white"
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-end">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
          className="p-3 rounded-xl border-2 border-white focus:outline-none bg-[#272952]  shadow-md text-white"
        >
          <option value="" disabled>
            Categoría
          </option>
          <option value="expensas">Expensas</option>
          <option value="servicios">Servicios</option>
          <option value="inversiones">Inversiones</option>
          <option value="banco">Transferencia</option>
          <option value="varios">Gastos varios</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="bg-[#0f9bc3] flex flex-row place-items-center gap-2 border-2 rounded-3xl p-2 font-bold shadow-md hover:bg-emerald-100"
        >
          <AiOutlinePlus /> Agregar egreso
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm

