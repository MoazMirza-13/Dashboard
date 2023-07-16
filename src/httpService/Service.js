import axios from "axios";

// graphChartData
export const graphChart = async () => {
  const url1 =
    "http://www.randomnumberapi.com/api/v1.0/random?min=20&max=100&count=6";
  const url2 =
    "http://www.randomnumberapi.com/api/v1.0/random?min=20&max=100&count=6";

  try {
    const response1 = await axios.get(url1);
    const response2 = await axios.get(url2);

    return {
      revenueData: response1.data,
      profitData: response2.data,
    };
  } catch (error) {
    console.log(error);
  }
};
// barChartData
export const barChart = async () => {
  const url1 =
    "http://www.randomnumberapi.com/api/v1.0/random?min=150&max=380&count=9";
  const url2 =
    "http://www.randomnumberapi.com/api/v1.0/random?min=150&max=300&count=9";
  const url3 =
    "http://www.randomnumberapi.com/api/v1.0/random?min=150&max=350&count=9";

  try {
    const response1 = await axios.get(url1);
    const response2 = await axios.get(url2);
    const response3 = await axios.get(url3);
    return {
      productAData: response1.data,
      productBData: response2.data,
      productCData: response3.data,
    };
  } catch (error) {
    console.log(error);
  }
};
// dailyTrrafficData
export const dailyTrafficChart = async () => {
  const url1 =
    "http://www.randomnumberapi.com/api/v1.0/random?min=15&max=60&count=7";
  const url2 =
    "http://www.randomnumberapi.com/api/v1.0/random?min=2&max=10&count=1";
  try {
    const response1 = await axios.get(url1);
    const response2 = await axios.get(url2);
    return {
      dailyTrafficData: response1.data,
      dailyTrafficVisitors: response2.data,
    };
  } catch (error) {
    console.log("Error:", error);
  }
};
//checkTableData
export const checkTableData = async () => {
  const url1 =
    "https://fakerapi.it/api/v1/custom?_quantity=5&name=firstName&quantity=number&date=date&progress=number";
  try {
    const response1 = await axios.get(url1);
    return {
      tableData: response1.data.data,
    };
  } catch (error) {
    console.log("Error:", error);
  }
};
// pieChartData
export const pieChart = async () => {
  const url1 =
    "https://www.randomnumberapi.com/api/v1.0/random?min=20&max=80&count=3";
  try {
    const response1 = await axios.get(url1);
    return {
      pieData: response1.data,
    };
  } catch (error) {
    console.log("Error:", error);
  }
};
// complexTableData
export const complexTable = async () => {
  const url1 =
    " https://fakerapi.it/api/v1/custom?_quantity=4&name=name&status=boolean&date=date&progress=number";
  try {
    const response1 = await axios.get(url1);
    return {
      complexTableData: response1.data.data,
    };
  } catch (error) {
    console.log("Error:", error);
  }
};
// profileData
export const profile = async () => {
  const url1 =
    "https://www.randomnumberapi.com/api/v1.0/random?min=80&max=250&count=1";
  const url2 =
    "https://www.randomnumberapi.com/api/v1.0/random?min=50&max=170&count=1";
  const url3 =
    "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=15&count=1";
  try {
    const response1 = await axios.get(url1);
    const response2 = await axios.get(url2);
    const response3 = await axios.get(url3);
    return {
      posts: response1.data,
      followers: response2.data,
      following: response3.data,
    };
  } catch (error) {
    console.log("Error:", error);
  }
};
