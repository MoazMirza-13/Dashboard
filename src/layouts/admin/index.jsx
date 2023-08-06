import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";
import DataContext from "../admin/datacontext";
import axios from "axios";
import { randomProfilePic } from "components/profilePic";
import { graphChart } from "httpService/Service";
import { barChart } from "httpService/Service";
import { checkTableData } from "httpService/Service";
import { complexTable } from "httpService/Service";
import { dailyTrafficChart } from "httpService/Service";
import { pieChart } from "httpService/Service";
import { profile } from "httpService/Service";

const Admin = (props) => {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  const [data, setData] = useState(null);
  const [pic, setPic] = useState("");
  const [revenueSeries, setRevenueSeries] = useState(null);
  const [profitSeries, setProfitSeries] = useState(null);
  const [productA, setProductA] = useState(null);
  const [productB, setProductB] = useState(null);
  const [productC, setProductC] = useState(null);
  const [checkTable, setCheckTable] = useState(null);
  const [complexTableValue, setComplexTableValue] = useState(null);
  const [dailyTraffic, setDailyTraffic] = useState(null);
  const [dailyTrafficVisitors, setDailyTrafficVisitors] = useState(null);
  const [pieValue, setPieValue] = useState(null);
  const [yourFiles, setYourFiles] = useState(null);
  const [system, setSystem] = useState(null);
  const [posts, setPosts] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    const randomPic = randomProfilePic();
    setPic(randomPic);
  }, []);

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakerapi.it/api/v1/custom?_quantity=1&earnings=number&thisMonth=number&sales=number&yourBalance=number&newTask=number&totalProjects=number"
      );
      setData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchGraphData = async () => {
      const { revenueData, profitData } = await graphChart();
      setRevenueSeries(revenueData);
      setProfitSeries(profitData);
    };

    fetchGraphData();
  }, []);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const { productAData, productBData, productCData } = await barChart();
      setProductA(productAData);
      setProductB(productBData);
      setProductC(productCData);
    };
    fetchBarChartData();
  }, []);

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

  useEffect(() => {
    const fetchComplexTableData = async () => {
      const { complexTableData } = await complexTable();
      const updatedComplexTableData = complexTableData.map((item) => ({
        ...item,
        progress: String(item.progress).substring(2, "0"),
        status: String(item.status).toUpperCase(),
      }));

      setComplexTableValue(updatedComplexTableData);
    };

    fetchComplexTableData();
  }, []);

  const getRandomDecimal = () => {
    const randomNumber = Math.random();
    const roundedNumber = Math.round(randomNumber * 100) / 100;
    return roundedNumber;
  };

  useEffect(() => {
    const fetchDailyTrafficData = async () => {
      const { dailyTrafficData, dailyTrafficVisitors } =
        await dailyTrafficChart();
      const randomDecimal = getRandomDecimal();
      const updatedDailyTrafficData = [
        dailyTrafficVisitors[0] + randomDecimal,
        ...dailyTrafficVisitors.slice(1),
      ];
      setDailyTraffic(dailyTrafficData);
      setDailyTrafficVisitors(updatedDailyTrafficData);
    };
    fetchDailyTrafficData();
  }, []);

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

  useEffect(() => {
    const fetchProfileData = async () => {
      const { posts, followers, following } = await profile();

      setPosts(posts);
      setFollowers(followers);
      setFollowing(following);
    };

    fetchProfileData();
  }, []);
  document.documentElement.dir = "ltr";

  return (
    <DataContext.Provider
      value={{
        data,
        pic,
        revenueSeries,
        profitSeries,
        productA,
        productB,
        productC,
        checkTable,
        complexTableValue,
        dailyTraffic,
        dailyTrafficVisitors,
        pieValue,
        yourFiles,
        system,
        posts,
        followers,
        following,
      }}
    >
      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
          <main
            className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
          >
            <div className="h-full">
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                logoText={"H"}
                brandText={currentRoute}
                secondary={getActiveNavbar(routes)}
                {...rest}
              />
              <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/admin/default" replace />}
                  />
                </Routes>
              </div>
              <div className="p-3">
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default Admin;
