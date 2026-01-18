const turb = document.querySelector("feTurbulence");

let frame = 0;
function updateTurbulence() {
  frame++;

  if (frame % 6 === 0) {
    turb.setAttribute("seed", Math.floor(Math.random() * 1000));
  }

  requestAnimationFrame(updateTurbulence);
}

updateTurbulence();
