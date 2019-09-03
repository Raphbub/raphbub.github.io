setInterval(function(){
  let dots = document.getElementById('dots').innerHTML;
  let nbDots = dots.length;
  if (nbDots < 3) {
    document.getElementById('dots').innerHTML += ".";
  } else {
    document.getElementById('dots').innerHTML = "";
  }
}, 1000);
