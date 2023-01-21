import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["item01", 30],
  ["item02", 40],
  ["item03", 30],
 
];

export const options = {
  title: "Leads status",
};

export function Pie01() {
  return (
    <div  className='rounded-2xl items-center justify-center flex '>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"275px"}
      />
    </div>
  );
}
