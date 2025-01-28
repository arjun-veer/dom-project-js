// const weight = document.querySelector('#weight');
//this usecase will give you empty

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
});

if (height < 0 || height === '' || isNaN(height)) {
  results.innerHTML = ` Please give valid height ${height}`;
} else if (weight < 0 || weight === '' || isNaN(weight)) {
  results.innerHTML = ` Please give valid weight ${weight}`;
} else {
  const bmi = weight / (height * height).toFixed(2);
  //show the result
  results.innerHTML = `<span> ${bmi}</span>`;
}

console.log(height);

// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });
