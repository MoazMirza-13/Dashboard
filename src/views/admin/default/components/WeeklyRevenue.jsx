import { useState, useEffect } from "react";
import Card from "components/card";
import BarChart from "components/charts/BarChart";
import { barChartOptionsWeeklyRevenue } from "variables/charts";
import { MdBarChart } from "react-icons/md";
import { barChart } from "httpService/Service";

const WeeklyRevenue = () => {
  const [productA, setProductA] = useState(null);
  const [productB, setProductB] = useState(null);
  const [productC, setProductC] = useState(null);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const { productAData, productBData, productCData } = await barChart();
      setProductA(productAData);
      setProductB(productBData);
      setProductC(productCData);
    };
    fetchBarChartData();
  }, []);

  const barChartData = [
    {
      name: "PRODUCT A",
      data: productA,
      color: "#6AD2Fa",
    },
    {
      name: "PRODUCT B",
      data: productB,
      color: "#4318FF",
    },
    {
      name: "PRODUCT C",
      data: productC,
      color: "#EFF4FB",
    },
  ];

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Weekly Revenue
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={barChartData}
            chartOptions={barChartOptionsWeeklyRevenue}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenue;
