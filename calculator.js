const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";
buttons.forEach(button => {
   button.addEventListener("click", () => {
       const value = button.textContent;
       if (value === "AC") {
           currentInput = "";
           display.textContent = "0";
       } else if (value === "=") {
           try {
               currentInput = eval(currentInput).toString();
               display.textContent = currentInput;
           } catch {
               display.textContent = "Error";
               currentInput = "";
           }
       } else {
           currentInput += value;
           display.textContent = currentInput;
       }
   });
});