import React, { useState, useEffect } from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Box } from "@chakra-ui/react";
Chartjs.register(ArcElement, Tooltip, Legend);

const Statistic = () => {
  const [getTickets, setgetTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const { data } = await axios.get(
          `https://challenge-alkemy-backend.vercel.app/tickets`
        );
        setgetTickets(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTickets();
  }, []);
  const datos = {
    labels: getTickets?.tickets?.map((card) => card.category),
    datasets: [
      {
        label: getTickets?.tickets?.map((card) => card.category),
        data: getTickets?.tickets?.map((card) => card.cash),
        backgroundColor: getTickets?.tickets?.map((card) => {
          if (card.type === "egress") {
            return "#cf6f12";
          } else {
            return "#4E9F3D";
          }
        }),
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {},
    layout: {
      padding: 20,
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };
  return (
    <Box h="100vh">
      <Doughnut data={datos} options={options} width={400} />
    </Box>
  );
};
export default Statistic;
