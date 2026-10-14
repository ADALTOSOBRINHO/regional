// Data do evento: 11/11/2026 à meia-noite, horário de Brasília (UTC-03:00).
// Para alterar a data, edite a constante EVENT_DATE abaixo.
const EVENT_DATE = new Date("2026-11-11T00:00:00-03:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const eventComplete = document.getElementById("eventComplete");

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const difference = EVENT_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    eventComplete.hidden = false;
    document.title = "Chegou o dia! | Code Mine + Mine Bot";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  document.title = `${days} dias para o Regional FLL | Code Mine + Mine Bot`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
