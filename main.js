const NUM_BG_IMAGES = 3;
const BODY = document.querySelector("body");
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

newBackground();
