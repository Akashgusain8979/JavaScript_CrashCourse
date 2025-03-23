const form = document.querySelector('form');
const para = document.querySelectorAll('p');
// const height = document.getElementById('height').value; // this usecasae will give you empty
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height) || height > 300) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight) || weight > 2000) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi >= 24.9) {
      para[2].style.color = 'green';
      para[2].style.fontSize = '20px';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      para[1].style.color = 'green';
      para[1].style.fontSize = '20px';
    } else {
      para[0].style.color = 'green';
      para[0].style.fontSize = '20px';
    }
  }
});
