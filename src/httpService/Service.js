import axios from "axios";

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
