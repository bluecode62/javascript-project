const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-secnd");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRageEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/5f9d1c87f7250159c9c9b17d/latest/${currencyFirstEl.value}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRageEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
