const NUM_BG_IMAGES = 3;
const BODY = document.querySelector("body");
const NEW_BG_BUTTON = document.querySelector("#new-background button");
const REFRESH_ICON = document.querySelector("#new-background button img");
let currentBgImage = 0;

// Disable tooltips on touch devices.
if (!("ontouchstart" in document.documentElement)) {
  $(function () {
    $("[data-bs-toggle='tooltip']").tooltip({
      trigger: "hover",
    });
  });
}

// Selects a random background image to display on the home page.
const newBackground = () => {
  // Keep trying until we get a number other than the current one.
  let imageNumber = currentBgImage;
  while (currentBgImage === imageNumber) {
    imageNumber = Math.floor(Math.random() * NUM_BG_IMAGES) + 1;
  }
  BODY.style.background = `linear-gradient(rgba(0, 0, 0, 0.315), rgba(0, 0, 0, 0.315)),
    url("./resources/background/bg-${imageNumber}-compressed.jpg")`;
  BODY.style.backgroundSize = "cover";
  BODY.style.backgroundPosition = "center";
  BODY.style.backgroundRepeat = "no-repeat";
  currentBgImage = imageNumber;
};

// Event listener for the "New Background" button.
NEW_BG_BUTTON.addEventListener("click", () => {
  REFRESH_ICON.style.transition = "transform 350ms ease-in-out";
  REFRESH_ICON.style.transform = "rotate(360deg)";
  REFRESH_ICON.ontransitionend = () => {
    REFRESH_ICON.style.transform = "";
    REFRESH_ICON.style.transition = "";
  };
  newBackground();
});

newBackground();
