import { useContext, useState, useEffect } from "react";
import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataComplex from "./variables/tableDataComplex.json";

import DataContext from "layouts/admin/datacontext";
import { checkTableData } from "httpService/Service";

const Dashboard = () => {
  const [checkTable, setCheckTable] = useState(null);

  useEffect(() => {
    const fetchCheckTableData = async () => {
      const { tableData } = await checkTableData();
      const updatedTableData = tableData.map((item) => ({
        ...item,
        progress: String(item.progress).substring(2, "0"),
        quantity: String(item.quantity).substring(4, "0"),
        name: [item.name, Math.random() < 0.5],
      }));
      setCheckTable(updatedTableData);
    };

    fetchCheckTableData();
  }, []);

  const { data } = useContext(DataContext);

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings This Month"}
          subtitle={data ? `$${String(data.earnings).substring(0, 4)}` : null}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={data ? `$${String(data.thisMonth).substring(0, 4)}` : null}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Total Sales"}
          subtitle={data ? `$${String(data.sales).substring(0, 4)}` : null}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={
            data ? `$${String(data.yourBalance).substring(0, 4)}` : null
          }
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={data ? `$${String(data.newTask).substring(0, 3)}` : null}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={
            data ? `$${String(data.totalProjects).substring(0, 2)}` : null
          }
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={checkTable ? checkTable : []}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
