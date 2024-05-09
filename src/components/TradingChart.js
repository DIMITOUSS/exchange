// TradingChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const TradingChart = ({ data }) => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default TradingChart;
