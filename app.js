// Document Model
const coinList = document.getElementById("coinList");
const searchBar = document.getElementById("searchBar");

const showSearchedData =  (value) => {
  const data = JSON.parse(window.localStorage.getItem("data"));
  const filter = filterData(data, value);
  renderTags(filter);
};

// Filter out the specific data
const filterData = (response, text) => {
  let matches = response.data.filter((elem) => {
    const regex = new RegExp(`^${text}`, "gi");
    return elem.name.match(regex) || elem.symbol.match(regex);
  });
  return matches;
};

// Generate HTML
const renderTags = (data) => {
  const htmlString = data
    .map((elem) => {
      return `
              <li class="character">
              <h2>Name : ${elem.name}</h2>
              <p>Price : $ ${elem.price_usd}</p>
              <p>Rank : #${elem.rank}</p>
              </li>
              `;
    })
    .join("");
  coinList.innerHTML = htmlString;
};

// Display on screen
const displayOnScreen = () => {
  const coinData = JSON.parse(window.localStorage.getItem("data"));
  coinData ? renderTags(coinData.data) : alert("Please Refresh Again");
};

document.addEventListener("DOMContentLoaded", displayOnScreen);
searchBar.addEventListener("input", () => showSearchedData(searchBar.value));