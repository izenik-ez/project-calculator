let operand = 0;
let operator = "";

let app = function (){
    let calculator = document.querySelector(".calculator");
    let mantisa = document.querySelector(".mantisa");
    let operands = document.querySelectorAll(".operand");
    for(let i = 0 ; i < operands.length ; i++)
    {
        operands[i].addEventListener("click", (e) => {
            if(mantisa.innerHTML === 0){
                mantisa.innerHTML = e.target.value;
            }else{
                mantisa.innerHTML = mantisa.innerHTML + e.target.value;
            }
        });
    }
    let operators = document.querySelectorAll(".operator");
    operators.forEach((op) => {
        op.addEventListener("click", (e) => {
            if(operator === "" ){
                operator = e.target.value;
                operand = +mantisa.innerHTML;
                mantisa.innerHTML  = 0;
            } else {
                switch(e.target.value){
                case "+":
                    mantisa.innerHTML = operand + +mantisa.innerHTML;
                    break;                    
                    case "-":
                    mantisa.innerHTML = operand - +mantisa.innerHTML;
                    break;
                    case "*":
                    mantisa.innerHTML = operand * +mantisa.innerHTML;
                    break;
                    case "/":
                    mantisa.innerHTML = operand / +mantisa.innerHTML;
                    break;
                }
                
            }
        });
    });
    
    calculator.addEventListener("click", (e) =>{
        console.log(e.target.className);        
        if(e.target.className === "operator"){
            if( operand === 0 ){
                operand = +mantisa.innerHTML;
            } else {
                operand = operand + +mantisa.innerHTML;
            }           
        }
        console.log(operand);
    });    
}

window.onload = function() {app();}
