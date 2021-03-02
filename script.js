document.addEventListener("DOMContentLoaded", start);

let elementToPaint;

async function start() {
  let response = await fetch("cap2-01.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  console.log("manipulating");
  document.querySelectorAll(".g_to_interact_with").forEach((cap) => {
    cap.addEventListener("click", colorChange);
  });
}

function colorChange(event) {
  console.log("colorchange");
  this.
}
