const searchFormEl = document.querySelector(".search");

searchFormEl.search.addEventListener("input", () => {
  const searchValue = searchFormEl.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

import { createCountries } from "./updateUI";
import request from "./request";

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
    let filterApi;

    if (li.textContent == "All") {
      filterApi = "https://restcountries.com/v3.1/all";
    } else {
      filterApi = `https://restcountries.com/v3.1/region/${li.textContent.toLowerCase()}`;
      request(filterApi)
        .then((data) => {
          createCountries(data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  });
});
