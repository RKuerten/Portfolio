export function handleMobile() {
  let changeDescription = document.querySelector(".changeDescription");
  const isMobile = /iPhone|iPad|iPod|BlackBerry|Opera Mini|Android/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    changeDescription.innerHTML = `Abaixo estão algumas das ferramentas no qual eu tenho proficiência! Clique nos cards para conhecer cada um!`;
  }
}

export function handleMobileEnglish() {
  let changeDescription = document.querySelector(".changeDescription");
  const isMobile = /iPhone|iPad|iPod|BlackBerry|Opera Mini|Android/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    changeDescription.innerHTML = `Below are some of the tools I'm proficient in! Click on the cards to see each one!`;
  }
}
