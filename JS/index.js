// event listener for button
document.getElementById('convertButton').addEventListener('click', function() {
  convertToHex();
});

function convertToHex() {
 
  const red = parseInt(document.getElementById('red').value);
  const green = parseInt(document.getElementById('green').value);
  const blue = parseInt(document.getElementById('blue').value);

  // Check if the values are valid
  if (isNaN(red) || isNaN(green) || isNaN(blue)) {
    alert('Please enter valid values for RGB.');
    return;
  }

  // RGB to Hex conversion function
  const hexColor = rgbToHex(red, green, blue);

  // the result
  document.getElementById('result').innerText = `Hex Color: ${hexColor}`;

  //  color display
  document.getElementById('colorDisplay').style.backgroundColor = hexColor;
}

function rgbToHex(r, g, b) {
  // run check to make sure values are in the correct range
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  // Convert each component to a two-digit hexadecimal value
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // grouping the values together so it can show the actual hex
  const hexColor = `#${hexR}${hexG}${hexB}`;
  // Convert it to uppercase to keep it general
  return hexColor.toUpperCase();
}
