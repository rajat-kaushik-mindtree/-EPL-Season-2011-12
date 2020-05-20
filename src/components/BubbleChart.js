import React from "react";
import { Bubble } from "react-chartjs-2";



export const BubbleChart = ({ bubbleChartData }) => {
	return <Bubble data={bubbleChartData} />;
};
