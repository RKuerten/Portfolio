export function hoverChangeDescription(nameCard, text) {
  var changeDescription = document.querySelector(".changeDescription");

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = text;
  });

  document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = `À direita estão algumas das ferramentas no qual eu tenho
      proficiência! Passe o cursor do mouse no card para conhecer cada uma!`;
  });
}
