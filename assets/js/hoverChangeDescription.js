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
      changeDescription.innerHTML = `Abaixo estão algumas das ferramentas no qual eu tenho
      proficiência! Clique nos cards para conhecer cada um!`;
    } else {
      changeDescription.innerHTML = `À direita estão algumas das ferramentas no qual eu tenho
      proficiência! Passe o cursor do mouse no card para conhecer cada uma!`;
    }
  });
}
