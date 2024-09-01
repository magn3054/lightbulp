function onBulb() {
    const bulb = document.getElementById("bulb");
    bulb.src = "img/on.png";
    bulb.className = "on";
}
  
function offBulb() {
    const bulb = document.getElementById("bulb");
    bulb.className = "";
    bulb.src = "img/off.png";
}