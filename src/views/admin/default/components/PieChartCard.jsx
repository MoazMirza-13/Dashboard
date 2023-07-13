import { useState, useEffect } from "react";
import PieChart from "components/charts/PieChart";
import { pieChartOptions } from "variables/charts";
import Card from "components/card";
import { pieChart } from "httpService/Service";

const PieChartCard = () => {
  const [pieValue, setPieValue] = useState(null);
  const [yourFiles, setYourFiles] = useState(null);
  const [system, setSystem] = useState(null);

  useEffect(() => {
    const fetchPieData = async () => {
      const { pieData } = await pieChart();

      const sum = pieData.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      const normalizedData = pieData.map((value) => (value / sum) * 100);

      const formattedData = normalizedData.map((value) => Math.floor(value));

      setPieValue(formattedData);
      setYourFiles(formattedData[0]);
      setSystem(formattedData[1]);
    };

    fetchPieData();
  }, []);

  const pieChartData = pieValue ? pieValue : null;

  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Your Pie Chart
          </h4>
        </div>
      </div>

      <div className="my-auto flex h-[220px] w-full items-center justify-center">
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Your Files</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
            {yourFiles}%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">System</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">
            {system}%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PieChartCard;
