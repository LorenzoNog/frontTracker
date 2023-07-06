import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseGlobalContext } from "../../context/globalContext";

const Login = () => {
  const { loginUser } = UseGlobalContext();
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputState;

  const handleChange = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(inputState); //se convierte en true una vez que se envia el formulario, por lo tanto ingresa recien al segundo intento
    if(loginUser(inputState)){
      window.location.href = '/users/dashboard'
    }
    setInputState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-row h-[100vh] ">
      <div className="w-[60%] flex flex-col place-items-center justify-center gap-8">
        <img src="/illustration-final.png" className="w-[300px]" />
        <div className="tracking-widest text-3xl animate-bounce">
          <span className="font-semibold">Bienvenidos a Expense Tracker</span>
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-[10%] w-[40%] p-10 bg-sky-800">
        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-5 gap-5 rounded-xl"
          >
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
              <label className="font-semibold text-white text-sm">
                Contraseña
              </label>
              <input
                onChange={handleChange("password")}
                value={password}
                type="password"
                name="password"
                className="focus:outline-none border-b-[1px] bg-transparent border-white p-2 text-white"
              />
            </div>
            <button className="bg-white rounded-xl font-bold mt-5 hover:bg-black hover:text-white ease-in duration-200">
              Ingresar
            </button>
          </form>
        </div>
        <Link to={"/users/registro"}>
          <span className="text-white hover:underline">
            No tienes cuenta? Registrate aqui
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
