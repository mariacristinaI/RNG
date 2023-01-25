function randomNumberGenerator() {
  let min = parseInt(document.getElementById('min').value);
  let max = parseInt(document.getElementById('max').value);
  if (isNaN(min) || isNaN(max)) {
      alert("Error: Min and max values must be numbers.");
      return;
  }
  if (max <= min) {
      alert("Error: Max value must be greater than min value.");
      return;
  }
  let finalnumber = Math.floor(Math.random() * (max - min) + min);
  document.getElementById('result').value = finalnumber;
}