import "../css/main.css";
import "./mode";
import request from "./request";
import { creatCountryInfo } from "./updateUI";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const country = urlParams.get("country");
const countryAPI = `https://restcountries.com/v3.1/${country}`;

request(countryAPI)
  .then((data) => {
    creatCountryInfo(data[0]);
  })
  .catch((err) => {
    alert(err.message);
  });
