export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 1800,
  });

  sr.reveal(".delaySmallReveal", { delay: 120 });
  sr.reveal(".delayMediumReveal", { delay: 240 });
  sr.reveal(".delayLargeReveal", { delay: 360 });
  sr.reveal(".delayExtraBigReveal", { delay: 400 });
  sr.reveal(".intervalCardReveal", { interval: 200 });
  sr.reveal(".intervalToolReveal", { interval: 100 });
}
