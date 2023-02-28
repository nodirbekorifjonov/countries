const cards = document.querySelector(".cards");

export const createCountries = (countries) => {
  cards.innerHTML = "";
  countries.forEach((country) => {
    // console.log(country);
    const { flags, name, population, region, capital } = country;
    cards.innerHTML += `
    <li class="cards__item">
            <a href="./about.html?country=/name/${name.common}">
              <img
                src=${flags.svg}
                alt=${flags.alt}
                width="267"
                height="160"
              />
              <div class="cards__item-inner">
                <h3 class="cards__title">${name.common}</h3>
                <p class="population">Population: <span>${population}</span></p>
                <p class="region">Region: <span>${region}</span></p>
                <p class="capital">Capital: <span>${
                  capital ? capital : "No capital"
                }</span></p>
              </div>
            </a>
          </li>
    `;
  });
};

// about UI
const countryInfoEl = document.querySelector(".country-info");
export const creatCountryInfo = (country) => {
  const {
    population,
    flags,
    borders,
    capital,
    name,
    region,
    tld,
    currencies,
    languages,
    subregion,
  } = country;

  const nativeName = Object.values(name.nativeName)[0].official;
  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages);

  countryInfoEl.innerHTML = `
  
  <img
    class="country-info__img"
    src=${flags.svg}
    alt=${flags.alt}
    width="560"
    height="400"
  />
<div class="country-info__content">
  <h2>${name.common}</h2>
  <ul class="country-info__list">
    <li class="country-info__item">
      <p class="name">
        Native Name:
        <span>${nativeName}</span>
      </p>
      <p class="population">
        Population:
        <span>${population}</span>
      </p>
      <p class="region">
        Region:
        <span>${region}</span>
      </p>
      <p class="sub-region">
        Sub Region:
        <span>${subregion}</span>
      </p>
      <p class="capital">
        Capital:
        <span>${capital}</span>
      </p>
    </li>
    <li class="country-info__item">
      <p class="name">
        Top Level Domain:
        <span>${tld}</span>
      </p>
      <p class="population">
        Currencies:
        <span>${currency}</span>
      </p>
      <p class="region">
        Languages:
        <span>${language}</span>
      </p>
    </li>
  </ul>

  <div class="country-info__borders">
    <h3>Border Countries:</h3>
    ${
      borders
        ? borders.map((border) => {
            return `
      <a href="./about.html?country=/alpha/${border}">${border}</a>
      `;
          })
        : "No Borders"
    }
  </div>
</div>

  `;
};
