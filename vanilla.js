let counter = 0;
const button = document.getElementById("btn");
const span = document.querySelector("span");
function handleClick(){
    counter = counter + 1;
    span.innerText = `Total clicks :  ${counter}`;
}
button.addEventListener("click", handleClick);