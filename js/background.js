const bgImages = ["windowbg0.jpeg", "windowbg1.jpeg"];
const refreshBtn = document.querySelector("#background__refreshBtn");
const chosenImage = bgImages[Math.floor(Math.random() * bgImages.length)];
const bgImage = document.querySelector("#background__img");
const bgBox = document.querySelector("#background__box");
const instaBtn = document.querySelector(".icon-link__instagram");
bgImage.src = `img/${chosenImage}`;

refreshBtn.addEventListener("click", () => {
  console.log("colik");
  const chosenImage = bgImages[Math.floor(Math.random() * bgImages.length)];
  const bgImage = document.querySelector("#background__img");
  bgImage.src = `img/${chosenImage}`;
});
instaBtn.addEventListener("click", () => {
  bgBox.classList.toggle("hidden");
});
