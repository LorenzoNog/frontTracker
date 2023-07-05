import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../../context/globalContext";
import { Toaster, toast } from "sonner";

const Registro = () => {
  const [hasRegister, setHasRegister] = useState(false);
  const { addUser } = UseGlobalContext();

  const [inputState, setInputState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = inputState;

  const handleChange = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addUser(inputState);
    setHasRegister(true);
    setInputState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="p-10 flex flex-col place-items-center gap-10 bg-sky-100 h-[100vh] ">
      <h1 className="text-4xl uppercase text-sky-800 font-extrabold">
        Registro
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-sky-800 w-[30%] p-10 flex flex-col gap-10 justify-between rounded-xl"
      >
        <div className="flex flex-col">
          <label className="font-semibold text-white text-sm">Nombre</label>
          <input
            onChange={handleChange("firstname")}
            value={firstname}
            type="text"
            name="firstname"
            className="focus:outline-none border-b-[1px] bg-transparent border-white p-2 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-white text-sm">Apellido</label>
          <input
            onChange={handleChange("lastname")}
            value={lastname}
            type="text"
            name="lastname"
            className="focus:outline-none border-b-[1px] bg-transparent border-white p-2 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-white text-sm">Email</label>
          <input
            onChange={handleChange("email")}
            value={email}
            type="email"
            name="email"
            className="focus:outline-none border-b-[1px] bg-transparent border-white p-2 text-white"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-white text-sm">Contraseña</label>
          <input
            onChange={handleChange("password")}
            value={password}
            type="password"
            name="password"
            className="focus:outline-none border-b-[1px] bg-transparent border-white p-2 text-white"
          />
        </div>
        <Toaster/>
        {hasRegister ? (
          <Link to={"/"}>
            <button className=" text-white w-fit font-bold text-lg p-1 hover:border-b-2 ">
              Volver a inicio
            </button>
          </Link>
        ) : (
          <button onClick={() => toast.success('Te has registrado con éxito!')}
            type="submit"
            className=" text-white w-fit font-bold text-lg p-1 hover:border-b-2 "
          >
            Crear cuenta
          </button>
        )}
      </form>
    </div>
  );
};

export default Registro;

/*  <button
          type="submit"
          className=" text-white w-fit font-bold text-lg p-1 hover:border-b-2 "
        >
          Crear cuenta
        </button> */
