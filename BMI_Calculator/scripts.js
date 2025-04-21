let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');

let score = document.getElementById('score');
let result = document.querySelector('.result');

button.addEventListener('click', function(){
   let newHeight = parseFloat(height.value);
   let newWeight = parseFloat(weight.value);
//    console.log(newHeight * newWeight);
//    console.log(typeof newHeight);
newHeight = newHeight / 100;
let sqrHeight = newHeight * newHeight;

let bmi = newWeight / sqrHeight;
// console.log(bmi.toFixed(2));
score.textContent = bmi.toFixed(2);
result.style.display = 'block';

if(score.textContent < 18.6){
  score.style.background = "#f7b731";
}
else if(score.textContent < 24.9){
   score.style.background = "#0fb9b1";
}
else{
    score.style.background = "#EA2027";
}
});

let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
});