import axios from "axios";

// graphChartData
export const graphChart = async () => {
  const url1 =
    "https://www.random.org/integer-sets/?sets=1&num=6&min=20&max=100&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  const url2 =
    "https://www.random.org/integer-sets/?sets=1&num=6&min=25&max=90&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";

  try {
    const response1 = await axios.get(url1);
    const response1Data = response1.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    const response2 = await axios.get(url2);
    const response2Data = response2.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    return {
      revenueData: response1Data,
      profitData: response2Data,
    };
  } catch (error) {
    console.log(error);
  }
};
// barChartData
export const barChart = async () => {
  const url1 =
    "https://www.random.org/integer-sets/?sets=1&num=9&min=130&max=200&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  const url2 =
    "https://www.random.org/integer-sets/?sets=1&num=9&min=190&max=280&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  const url3 =
    "https://www.random.org/integer-sets/?sets=1&num=9&min=160&max=250&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";

  try {
    const response1 = await axios.get(url1);
    const response1Data = response1.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    const response2 = await axios.get(url2);
    const response2Data = response2.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    const response3 = await axios.get(url3);
    const response3Data = response3.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    return {
      productAData: response1Data,
      productBData: response2Data,
      productCData: response3Data,
    };
  } catch (error) {
    console.log(error);
  }
};
// dailyTrrafficData
export const dailyTrafficChart = async () => {
  const url1 =
    "https://www.random.org/integer-sets/?sets=1&num=7&min=15&max=60&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  const url2 =
    "https://www.random.org/integer-sets/?sets=1&num=1&min=2&max=10&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  try {
    const response1 = await axios.get(url1);
    const response1Data = response1.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    const response2 = await axios.get(url2);
    const response2Data = response2.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    return {
      dailyTrafficData: response1Data,
      dailyTrafficVisitors: response2Data,
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
    "https://www.random.org/integer-sets/?sets=1&num=3&min=20&max=80&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  try {
    const response1 = await axios.get(url1);
    const response1Data = response1.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    return {
      pieData: response1Data,
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
    "https://www.random.org/integer-sets/?sets=1&num=1&min=80&max=250&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  const url2 =
    "https://www.random.org/integer-sets/?sets=1&num=1&min=50&max=170&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  const url3 =
    "https://www.random.org/integer-sets/?sets=1&num=1&min=1&max=15&seqnos=on&commas=on&sort=on&order=index&format=plain&rnd=new";
  try {
    const response1 = await axios.get(url1);
    const response1Data = response1.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    const response2 = await axios.get(url2);
    const response2Data = response2.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    const response3 = await axios.get(url3);
    const response3Data = response3.data
      .match(/Set 1: (.+)/)[1]
      .split(", ")
      .map(Number);
    return {
      posts: response1Data,
      followers: response2Data,
      following: response3Data,
    };
  } catch (error) {
    console.log("Error:", error);
  }
};
