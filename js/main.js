const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hrDate = dateToday.getHours();
  let minDate = dateToday.getMinutes();
  let secDate = dateToday.getSeconds();

  if (hrDate < 10) hrDate = "0" + hrDate;
  if (minDate < 10) minDate = "0" + minDate;
  if (secDate < 10) secDate = "0" + secDate;

  hr.textContent = hrDate;
  min.textContent = minDate;
  sec.textContent = secDate;
});
