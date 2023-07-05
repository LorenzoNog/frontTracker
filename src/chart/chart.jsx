"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from "chart.js";

import { Line } from "react-chartjs-2";
import { UseGlobalContext } from "../context/globalContext";
import DateFormat from "../utils/dateFormat";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const LineChart = () => {
  const { incomes, expenses } = UseGlobalContext();
  const data = {
    labels:incomes.map((inc) => {
        const {date} = inc
        return DateFormat(date)
    }),
    datasets: [
      {
        label: "Ingreso",
        data: [...incomes.map((income) => {
          const { amount } = income;
          return amount;
        })],
        tension: .2,
        backgroundColor: "#0f9bc3",
        borderColor:"#0f9bc3",
        pointRadius: 5,
        pointBackgroundColor: "#0f9bc3",
      },
      {
        label: "Egreso",
        data: [...expenses.map((expense) => {
          const { amount } = expense;
          return amount;
        })],
        tension: .2,
        backgroundColor: "red",
        borderColor:"red",
        pointRadius: 5,
        pointBackgroundColor: "red",
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
