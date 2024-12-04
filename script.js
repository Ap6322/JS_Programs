let display = document.querySelector('#display');
let expression = '';

let btns = document.querySelectorAll(".button").forEach((btn)=>{
  btn.addEventListener("click",()=>{
    expression += btn.value;
    document.getElementById('display').value = expression;
    expression = expression.toString();
});
});

let clr = document.querySelector(".clr").addEventListener("click",() => {
  expression = '';
  display.value = expression;
});

let del = document.querySelector(".del").addEventListener("click",()=>{
  expression = expression.slice(0,-1);
  display.value = expression;
});

let result = document.querySelector(".res").addEventListener("click",() => {
  expression = eval(expression);
  display.value = expression;
  expression = expression.toString();
});