const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 1000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const animate = async (element, timing) => {
  const animation = element.animate(aliceTumbling, aliceTiming);

  return new Promise((resolve) => {
    animation.onfinish = resolve;
  });
};

const runSequentialAnimation = async () => {
  await animate(alice1, aliceTiming);
  await animate(alice2, aliceTiming);
  await animate(alice3, aliceTiming);
};

runSequentialAnimation();
