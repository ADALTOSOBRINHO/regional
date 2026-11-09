
// Data do evento: 11/11/2026 às 09:00, horário de Brasília (UTC-03:00).
// Para alterar a data/hora, edite a constante EVENT_DATE abaixo.
const EVENT_DATE = new Date("2026-11-11T09:00:00-03:00");

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
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    eventComplete.hidden = false;
    document.title = "Chegou o dia! | Code Mine + Mine Bot";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const totalHours = Math.floor(totalSeconds / 3600); // total de horas, sem converter em dias
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursEl.textContent = totalHours;
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  document.title = `${totalHours} horas para o Regional FLL | Code Mine + Mine Bot`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
