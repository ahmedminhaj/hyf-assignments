const API_URL = "https://open.er-api.com/v6/latest/USD";

let rates = {};

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

// Fetch exchange rates
async function fetchRates() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    rates = data.rates;

    populateDropdowns(Object.keys(rates));
    convertCurrency();
  } catch (err) {
    result.innerText = "Error fetching data";
    console.error(err);
  }
}

// Populate dropdowns
function populateDropdowns(currencies) {
  currencies.forEach(currency => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = option2.value = currency;
    option1.textContent = option2.textContent = currency;

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  // Default values
  fromCurrency.value = "EUR";
  toCurrency.value = "DKK";
}

// Convert currency
function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount)) {
    result.innerText = "Please enter a valid amount";
    return;
  }

  if (!rates[from] || !rates[to]) return;

  // Convert via USD base
  const amountInUSD = amount / rates[from];
  const converted = amountInUSD * rates[to];

  result.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}

// Event listeners
amountInput.addEventListener("input", convertCurrency);
fromCurrency.addEventListener("change", convertCurrency);
toCurrency.addEventListener("change", convertCurrency);

// Init
fetchRates();