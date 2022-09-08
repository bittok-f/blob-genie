'use strict';

const toggleLightDark = document.querySelector('.container__hover');
const lightMode = document.querySelector('.container__light--mode');
const lightDarkLabel = document.querySelector('.container__label');
const backgroundContainer = document.querySelector('.container');

const blobSample = document.querySelector('.blob__sample');

const blobColor = document.querySelector('.blob__color');
const colorLabel = document.querySelector('.color--label');

const borderTopLeftSlider = document.getElementById('borderTopLeft');
const borderTopLeftValue = document.querySelector('.borderTopLeft');

const borderTopRightSlider = document.getElementById('borderTopRight');
const borderTopRightValue = document.querySelector('.borderTopRight');

const borderBottomRightSlider = document.getElementById('borderBottomRight');
const borderBottomRightValue = document.querySelector('.borderBottomRight');

const borderBottomLeftSlider = document.getElementById('borderBottomLeft');
const borderBottomLeftValue = document.querySelector('.borderBottomLeft');

const displayCode = document.querySelector('.generate__code');

////button
const generateCodeButton = document.querySelector('.btn__code');

/////Dark/Light Mode toggle
lightDarkLabel.textContent = 'light mode';

toggleLightDark.addEventListener('click', function () {
  if (lightMode.classList.contains('container__light--changes')) {
    lightMode.classList.remove('container__light--changes');
    backgroundContainer.style.backgroundColor = '#fff';
    lightDarkLabel.textContent = 'light mode';
    backgroundContainer.style.color = '#0c0c0c';
  } else {
    lightMode.classList.add('container__light--changes');
    backgroundContainer.style.backgroundColor = '#000';
    lightDarkLabel.textContent = 'dark mode';
    backgroundContainer.style.color = '#ccccc0';
  }
});

/////blob color generator
const defaultBlobColor = '#ffa07a';
colorLabel.addEventListener('click', function (e) {
  e.preventDefault();
  const blobColorCode = blobColor.value + '';
  blobSample.style.backgroundColor = blobColor.value;
});

// borderTopBottomSlider.addEventListener("mousemove", function () {
//   let value = Number(borderTopBottomSlider.value);
//   borderTopBottomValue.textContent = value;
//   const defaultBorderValue =
//     100 + "%" + "/" + 50 + "%" + 60 + "%" + 100 + "%" + 30 + "%";
//   blobSample.style.borderRadius = defaultBorderValue;
// });

borderTopLeftSlider.addEventListener('click', function () {
  borderTopLeftValue.value = Number(borderTopLeftSlider.value);

  const value1 = borderTopLeftValue.value;

  const colorChange = `linear-gradient(to right, #3d3d3d ${
    value1 / 2
  }%, #bbbbbb ${value1 / 2}%)`;
  borderTopLeftSlider.style.backgroundImage = colorChange;

  blobSample.style.borderTopLeftRadius = value1 + '%';
});

borderTopRightSlider.addEventListener('click', function () {
  borderTopRightValue.value = Number(borderTopRightSlider.value);

  const value2 = borderTopRightValue.value;

  const colorChange = `linear-gradient(to right, #3d3d3d ${
    value2 / 2
  }%, #bbbbbb ${value2 / 2}%)`;
  borderTopRightSlider.style.backgroundImage = colorChange;

  borderTopRightSlider.style.backgroundImage = colorChange;

  blobSample.style.borderTopRightRadius = value2 + '%';
});

borderBottomRightSlider.addEventListener('click', function () {
  borderBottomRightValue.value = Number(borderBottomRightSlider.value);
  const value3 = borderBottomRightValue.value;
  const colorChange = `linear-gradient(to right, #3d3d3d ${
    value3 / 2
  }%, #bbbbbb ${value3 / 2}%)`;
  borderBottomRightSlider.style.backgroundImage = colorChange;

  borderBottomRightSlider.style.backgroundImage = colorChange;

  blobSample.style.borderBottomRightRadius = value3 + '%';
});

borderBottomLeftSlider.addEventListener('click', function () {
  borderBottomLeftValue.value = Number(borderBottomLeftSlider.value);
  const value4 = borderBottomLeftValue.value;

  const colorChange = `linear-gradient(to right, #3d3d3d ${
    value4 / 2
  }%, #bbbbbb ${value4 / 2}%)`;
  borderBottomLeftSlider.style.backgroundImage = colorChange;

  borderBottomLeftSlider.style.backgroundImage = colorChange;

  blobSample.style.borderBottomLeftRadius = value4 + '%';
});

blobColor.value = '#2da807';

generateCodeButton.addEventListener('click', function (e) {
  e.preventDefault();
  const colorDefault = !blobColor.value ? '#2da807' : blobColor.value;
  console.log(colorDefault);
  // if (
  //   blobColor.value === null ||
  //   blobColor.value === '' ||
  //   blobColor.value === undefined ||
  //   blobColor.value === 0 ||
  //   blobColor.value === NaN
  // ) {
  //   colorDefault = '#ffa07a';
  // }

  displayCode.textContent = `.blob {
    height: 30rem;
    width: 30rem;
    background-color:${colorDefault};
    border-top-left-radius:${borderTopLeftValue.value + '%'};
    border-top-right-radius:${borderTopRightValue.value + '%'};
    border-bottom-right-radius:${borderBottomRightValue.value + '%'};
    border-bottom-left-radius:${borderBottomLeftValue.value + '%'};
  }`;
});
