import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Ayesha",
    Bangla: 85,
    English: 78,
    ICT: 92,
  },
  {
    id: 2,
    name: "Rafi",
    Bangla: 74,
    English: 69,
    ICT: 88,
  },
  {
    id: 3,
    name: "Mira",
    Bangla: 90,
    English: 82,
    ICT: 95,
  },
  {
    id: 4,
    name: "Tanvir",
    Bangla: 67,
    English: 73,
    ICT: 80,
  },
  {
    id: 5,
    name: "Nabila",
    Bangla: 88,
    English: 85,
    ICT: 91,
  },
  {
    id: 6,
    name: "Siam",
    Bangla: 72,
    English: 70,
    ICT: 78,
  },
  {
    id: 7,
    name: "Lamia",
    Bangla: 93,
    English: 89,
    ICT: 94,
  },
  {
    id: 8,
    name: "Hasan",
    Bangla: 65,
    English: 60,
    ICT: 75,
  },
  {
    id: 9,
    name: "Tanjim",
    Bangla: 77,
    English: 80,
    ICT: 85,
  },
  {
    id: 10,
    name: "Farzana",
    Bangla: 84,
    English: 76,
    ICT: 90,
  },
];

const ResultCharts = () => {
  return (
    <div>
      <LineChart width={500} height={500} data={resultData}>
        <XAxis width={800} dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="Bangla" stroke="blue"></Line>
        <Line dataKey="English" stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultCharts;
