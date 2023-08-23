const countries = JSON.parse(localStorage.getItem("countries") ?? "[]");
const Mode = {
  Light: "light",
  Dark: "dark",
};

const target = document.getElementById("target");
const countryTemplate = document.getElementById("country-template");
const toggleThemeButton = document.getElementById("toggle-theme"); // button

const renderCountry = (country) => {
  const countryElement = countryTemplate.content.cloneNode(true);

  countryElement.querySelector("h2").innerText = country.name;
  countryElement.querySelector("span.population").innerText = country.population;
  countryElement.querySelector("span.region").innerText = country.region;
  countryElement.querySelector("span.capital").innerText = country.capital;
  countryElement.querySelector("img").src = country.flag;

  target.appendChild(countryElement);
};

document.addEventListener("DOMContentLoaded", () => {
  countries.forEach(renderCountry);
});

toggleThemeButton.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle(Mode.Dark);
  localStorage.setItem("theme", isDark ? Mode.Dark : Mode.Light);
});

document.documentElement.classList.toggle("dark", localStorage.getItem("theme") === "dark");
