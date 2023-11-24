// event listener for button
document.getElementById('convertToHex').addEventListener('click', function() {
  convertToHex();
});
function convertToHex() {
  let red = parseInt(document.getElementById('red').value);
  let green = parseInt(document.getElementById('green').value);
  let blue = parseInt(document.getElementById('blue').value);
  // Check if the values are valid
  if (isNaN(red) || isNaN(green) || isNaN(blue)) {
    alert('Please enter valid values for RGB.');
    return;
  }
  // RGB to Hex conversion function
  let hexColor = rgbToHex(red, green, blue);
  // the result
  document.getElementById('result').innerText = `Hex Color: ${hexColor}`;
  // color display
  document.getElementById('colorDisplay').style.backgroundColor = hexColor;
}
function rgbToHex(r, g, b) {
  // run check to make sure values are in the correct range
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  // Convert each component to a two-digit hexadecimal value
  let hexR = convertToHexDigit(r);
  let hexG = convertToHexDigit(g);
  let hexB = convertToHexDigit(b);
  // grouping the values together so it can show the actual hex
  let hexColor = `#${hexR}${hexG}${hexB}`;
  // Convert it to uppercase to keep it general
  return hexColor.toUpperCase();
}
function convertToHexDigit(value) {
  let hexDigit = value.toString(16);
  if (hexDigit.length < 2) {
    hexDigit = '0' + hexDigit;
  }
  return hexDigit;
}