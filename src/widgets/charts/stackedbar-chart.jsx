import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['Jan', 20, 20, 55, 32, 18, 5, ''],
        ['Feb', 16, 22, 23, 30, 16, 9, ''],
        ['Mar', 28, 19, 29, 26, 12, 5, ''],
        ['Apr', 28, 30, 25, 15, 16, 13, ''],
        ['May', 28, 10, 29, 32, 15, 17, ''],
        ['Jun', 28, 25, 23, 31, 12, 10, ''],
        ['Jul', 28, 30, 22, 30, 10, 18, ''],
];

export const options = {
  isStacked: 'percent',
  height: 400,
  legend: {position: 'top', maxLines: 3},
  hAxis: {
    minValue: 0,
    ticks: [0, .3, .6, .9, 1]
  }
};

export function Stackedbar() {
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