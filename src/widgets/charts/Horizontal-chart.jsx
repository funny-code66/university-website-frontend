import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["jan", 40, "#0263FF", null],
  ["Feb", 88, "#FF7723", null],
  ["Mar", 60, "#8E30FF", null],
  ["apr", 6, "#B5DFD7", null],
  ["May", 11, "#ABF85E", null],
  ["jun", 71, "#B70D52", null],
  
];

export const options = {
  title: "Revenue",
  width: 500,
  height: 400,
  bar: { groupWidth: "50%" },
  legend: { position: "none" },
};

export function Horizontal() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
