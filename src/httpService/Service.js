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
