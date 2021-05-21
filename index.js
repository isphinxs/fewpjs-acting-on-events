// Your code here
let dodger = document.getElementById("dodger"); 
dodger.style.backgroundColor = "#FF69B4"; 

console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px" 
// console.log(dodger.style.right);

document.addEventListener("keydown", function(e) {
    console.log(e.key);
}); 

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
// }); 

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
}); 

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
} 
function moveDodgerRight() {
    let lefttNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(lefttNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}
