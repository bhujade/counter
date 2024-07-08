let  decrement = document.querySelector("#decrement")
let  h1 = document.querySelector("h1")
let  reset = document.querySelector("#reset");
let  increment = document.querySelector("#increment");

let currValue = 0;


increment.addEventListener("click",function(){

 currValue++;
 h1.innerText = currValue;
})


decrement.addEventListener("click",function(){

 currValue--;
 h1.innerText = currValue;
})

reset.addEventListener("click",()=>{
    currValue = 0;
    h1.innerText = currValue;
})