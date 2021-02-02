import React from "react";
import { Bar } from "@ant-design/charts";

const Languagebar: React.FC = () => {
  var data = [
    {
      language: "Thai",
      value: 70,
    },
    {
      language: "English",
      value: 25,
    },
  ];
  var config = {
    data: data,
    xField: "value",
    yField: "language",
    seriesField: "language",
    legend: { position: "top-left" },
    style:{
      fontSize: "1vw",
      fontFamily: "thonburi,tahoma",
      // shadowBlur: 10,
      height:"16%"
    } 
  };
  return (
    <Bar
      {...config}
    />
  );
};

export default Languagebar;
