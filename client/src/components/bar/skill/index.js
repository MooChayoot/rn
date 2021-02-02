import React from "react";
import { Bar } from "@ant-design/charts";

const Skillbar: React.FC = () => {
  var data = [
    {
      skill: "React.js",
      value: 50,
    },
    {
      skill: "Node.js",
      value: 65,
    },
    {
      skill: "Javascript",
      value: 60,
    },
    {
      skill: "Line API",
      value: 50,
    },
    {
      skill: "Github",
      value: 50,
    },
    {
      skill: "Firebase",
      value: 60,
    },
    {
      skill: "SQL",
      value: 50,
    },
  ];
  var config = {
    data: data,
    xField: "value",
    yField: "skill",
    seriesField: "skill",
    legend: { position: "top-left" },
    style:{
      fontSize: "1vw",
      fontFamily: "thonburi,tahoma",
      // shadowBlur: 10,
      height:"40%"
    } 
  };
  return (
    <Bar
    
      {...config}
    />
  );
};

export default Skillbar;
