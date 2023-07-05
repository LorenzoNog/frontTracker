"use client";
import React, { useContext, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";

const BASE_URL = 'https://expense-tracker-backend-vmr5.onrender.com'

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [users, setUsers] = useState([]);

  //Incomes
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}/incomes/add-income`, income)
      .catch((err) => {
        console.log(err.response);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await fetch(`${BASE_URL}/incomes/get-income`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setIncomes(data));
    getIncomes();
  };

  const deleteIncome = async (id) => {
    const response = await fetch(`${BASE_URL}/incomes/delete-income/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    getIncomes();
  };

  const totalIncome = () => {
    let total = 0;
    incomes.forEach((income) => {
      total = total + income.amount;
    });
    return total;
  };

  //Expenses
  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}/expenses/add-expense`, expense)
      .catch((err) => {
        console.log(err.response.data);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await fetch(`${BASE_URL}/expenses/get-expense`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setExpenses(data));
    getExpenses();
  };

  const deleteExpense = async (id) => {
    const response = await fetch(`${BASE_URL}/expenses/delete-expense/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    getExpenses();
  };

  const totalExpense = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total = total + expense.amount;
    });
    return total;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 4);
  };

  //users
  const addUser = async (user) => {
    const response = await axios.post(`${BASE_URL}/users/registro`, user);
    console.log(response.config.data);
  };

  const loginUser = async (user) => {
    const { email, password } = user;
    if (email.length !== 0 || password.length !== 0) {
      const response = await axios.post(`${BASE_URL}/users/login`, user);
      console.log(response.data);
      window.location.href = "./dashboard";
    } else {
      swal.fire({
        title: "Error!",
        text: "No ingresaste los datos!",
        icon: "error",
        timer: 2000,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        totalBalance,
        transactionHistory,
        addUser,
        loginUser,
        expenses,
        incomes,
        users,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(GlobalContext);
};
