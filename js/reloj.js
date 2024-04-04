function updateClock() {
  const now = new Date();

  // Actualizar reloj analógico
  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour * 30) + (0.5 * minute);
  const minuteDeg = (minute * 6) + (0.1 * second);
  const secondDeg = second * 6;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  // Actualizar reloj digital
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Iniciar el reloj
updateClock();

function updateDigitalReloj(){
  const now = new Date();
  let hora = now.getHours();
  const am_pm = hora >= 12 ? 'PM' : 'AM';
  hora = hora % 12 || 12; // Convertir la hora de 24 horas a 12 horas

  const minutos = now.getMinutes().toString().padStart(2, '0');
  const segundos = now.getSeconds().toString().padStart(2, '0');
  const digitalreloj  = document.getElementById('digital-clock');
  digitalreloj.textContent=`${hora}:${minutos}:${segundos} ${am_pm}`;
}
setInterval(updateDigitalReloj, 1000);

