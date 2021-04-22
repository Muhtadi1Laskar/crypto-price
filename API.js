// Make API call to get all the data
const getData = async () => {
    const API = `https://api.coinlore.net/api/tickers/`;
    try {
      const response = await fetch(API);
      const allData = await response.json();
      window.localStorage.setItem("data", JSON.stringify(allData));
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };
  
// getData();
setInterval(getData(), 600000);