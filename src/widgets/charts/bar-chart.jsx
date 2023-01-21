import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ['', '', { role: 'style' }],
    ['Branch 1', 40, '#0263FF'],            // RGB value
    ['Branch 2', 88, '#FF7723'],            // English color name
    ['Branch 3', 60, 'gold'],
    
  ];
  export const options = {
    chart: {
      title: "Application by branch",
      subtitle: "",
    },
  };


  export function Bar() {
    return (
      
          <Chart
              chartType="Bar"
              width="100%"
              height="275px"
              data={data}
              options={options}
          />
      
    );
  }
  