const clock = document.querySelector("h2#clock");

const getClock = () => {
  const now = new Date();
  const getHours = String(now.getHours()).padStart(2, "0");
  const getMinutes = String(now.getMinutes()).padStart(2, "0");
  const getSeconds = String(now.getSeconds()).padStart(2, "0");
  clock.innerText = `${getHours}:${getMinutes}:${getSeconds}`;
};

getClock();
setInterval(getClock, 1000);
/**ddsads */
