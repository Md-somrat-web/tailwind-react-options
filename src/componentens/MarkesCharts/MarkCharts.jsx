import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarkCharts = ({ marksPromised }) => {
  const marksDataRes = use(marksPromised);
  const marksData = marksDataRes.data;

  //   data processing fot the charts

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      Bangla: studentData.marks.Bangla,
      English: studentData.marks.English,
      ICT: studentData.marks.ICT,
    };

    const avg = (student.Bangla + student.English + student.ICT) / 3;
    student.avg = avg;

    return student;
  });

  console.log(marksChartData);

  return (
    <div>
      <BarChart width={500} height={500} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
      </BarChart>
    </div>
  );
};

export default MarkCharts;
