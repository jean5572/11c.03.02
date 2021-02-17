"use strict";

window.addEventListener("DOMContentLoaded", getValue);

function getValue() {
  colorpicker.addEventListener("input", function (event) {
    let hexNumber = showColorBox(event);
    showHex(hexNumber);
    console.log(hexNumber);

    let rgb = convertHexToRgb(hexNumber);
    showRgb(rgb);
    console.log(rgb);

    let css = convertRgbToCss(rgb);
    showColorBoxSecond(css);
    console.log(css);

    let hsl = convertHslValue(rgb);
    showHsl(hsl);
    console.log(hsl);
  });
}

//SHOW FUNCTIONS
function showColorBox(event) {
  document.querySelector(".colorbox").style.backgroundColor = event.target.value;
  let hexValue = event.target.value;
  return hexValue;
}

function showHsl(hsl) {
  document.querySelector(".hsl").innerHTML = `hsl: ${hsl}`;
}

function showRgb(rgb) {
  document.querySelector(".rgb").innerHTML = `rgb (${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function showHex(hexNumber) {
  document.querySelector(".hex").innerHTML = "hex: " + hexNumber;
}

function showColorBoxSecond(css) {
  document.querySelector("#colorboxSecond").style.backgroundColor = css;
}

//CALCULATER

//convert HEX -> RGB
function convertHexToRgb(hexNumber) {
  const rgb = { r: "", g: "", b: "" };
  rgb.r = parseInt(hexNumber.substring(1, 3), 16);
  rgb.g = parseInt(hexNumber.substring(3, 5), 16);
  rgb.b = parseInt(hexNumber.substring(5, 7), 16);

  return rgb;
}

//convert RGB -> HSL
function convertHslValue(rgb) {
  rgb.r /= 255;
  rgb.g /= 255;
  rgb.b /= 255;

  let h, s, l;

  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const max = Math.max(rgb.r, rgb.g, rgb.b);

  if (max === min) {
    h = 0;
  } else if (max === rgb.r) {
    h = 60 * (0 + (rgb.g - rgb.b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (rgb.b - rgb.r) / (max - min));
  } else if (max === rgb.b) {
    h = 60 * (4 + (rgb.r - rgb.g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }

  s *= 100;
  l *= 100;

  return `${h.toFixed(0)}, ${s.toFixed(0)}, ${l.toFixed(0)}`;
}

//convert RGB -> CSS
function convertRgbToCss(rgb) {
  rgb.r.toString();
  rgb.g.toString();
  rgb.b.toString();

  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}
