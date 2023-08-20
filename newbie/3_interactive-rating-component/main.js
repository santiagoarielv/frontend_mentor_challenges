const form = document.querySelector("form");
const rating = document.getElementById("rating"); // template
const thankYou = document.getElementById("thank-you"); // template

const ratingClone = rating.content.cloneNode(true);
const thankYouClone = thankYou.content.cloneNode(true);

form.appendChild(ratingClone);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const rating = formData.get("rating");

  form.innerHTML = "";
  form.classList.add("completed");
  form.appendChild(thankYouClone);
  form.querySelector("b").textContent = rating;
});
