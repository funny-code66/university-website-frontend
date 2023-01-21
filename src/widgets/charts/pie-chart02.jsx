import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["item01", 40],
  ["item02", 30],
  ["item03", 30],
 
];

export const options = {
  title: "Leads status",
};

export function Pie02() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"275px"}
    />
  );
}
