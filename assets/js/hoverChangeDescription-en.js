export function hoverChangeDescription(nameCard, text) {
  let changeDescription = document.querySelector(".changeDescription");
  const isMobile = /iPhone|iPad|iPod|BlackBerry|Opera Mini|Android/i.test(
    navigator.userAgent
  );

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = text;
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    if (isMobile) {
      changeDescription.innerHTML = `Below are some of the tools I'm proficient with! Click on the cards to see each one!`;
    } else {
      changeDescription.innerHTML = `On the right are some of the tools I'm proficient with! Hover your mouse cursor over the card to see each one!`;
    }
  });
}
