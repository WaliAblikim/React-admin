import PieChart from "../../components/PieChart";
import { Box } from "@mui/system";
import Header from "../../components/Header";
import React from "react";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};
export default Pie;
