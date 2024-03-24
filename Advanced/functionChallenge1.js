//F to C temp converter

function getCelcius(FahrenhietDegrees) {
  return `(${FahrenhietDegrees} / 10).toFixed(2)`;
}
console.log(getCelcius(200));

const getCelcius1 = (fahDegres) => (fahDegres / 10).toFixed(2);
console.log(getCelcius1(200));
