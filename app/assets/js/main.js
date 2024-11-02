document.addEventListener("wheel", function (event) {
  event.preventDefault();

  const h1Elements = document.querySelectorAll("h1");
  const scrollDirection = event.deltaY > 0 ? "down" : "up";

  let currentH1Index = Array.from(h1Elements).findIndex((h1) => {
    const rect = h1.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  });

  if (scrollDirection === "down") {
    if (currentH1Index < h1Elements.length - 1) {
      currentH1Index++;
    }
  } else {
    if (currentH1Index > 0) {
      currentH1Index--;
    }
  }

  if (currentH1Index >= 0) {
    const targetH1 = h1Elements[currentH1Index];
    const offset = 120; // Height of the padding
    const targetPosition =
      targetH1.getBoundingClientRect().top + window.scrollY - offset; // Adjust position

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }

  // Update the year in the footer
  const currentYear = document.getElementById("currentYear");
  currentYear.innerHTML = new Date().getFullYear();
});
