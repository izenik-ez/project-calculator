let operand = 0;
let operator = "";


let calculator = {
    operand : 0,
    operator : "",
    clear: function(mantisa){
        this.operand = 0;
        this.operator = "";
        mantisa.innerHTML = 0;
    },
    operation: function(operator){
        this.operator = operator
    },
    calculate: function(number){
        console.log("Operand: " + this.operand);
        console.log("Operator: " + this.operator);
        switch(this.operator){
        case "+":
            this.operand = this.operand + number;
            break;                    
        case "-":
            this.operand = this.operand - number;
            break;
        case "*":
            this.operand = this.operand * number;
            break;
        case "/":
            this.operand = this.operand / number;
            break;
        }
        return this.operand;
    }
};

let app = function (){
    let mantisa = document.querySelector(".mantisa");
    let operands = document.querySelectorAll(".operand");

    document.querySelector(".clear").addEventListener("click", (e) =>{
        calculator.clear(mantisa);
    });
    
    for(let i = 0 ; i < operands.length ; i++)
    {
        operands[i].addEventListener("click", (e) => {
            if(+mantisa.innerHTML === 0){
                mantisa.innerHTML = e.target.value;
            }else{
                mantisa.innerHTML = mantisa.innerHTML + e.target.value;
            }

        });
    }
    let operators = document.querySelectorAll(".operator");
    operators.forEach((op) => {
        op.addEventListener("click", (e) => {
            calculator.operator = e.target.value;
            calculator.operand = +mantisa.innerHTML;
            mantisa.innerHTML = 0;
            /*
            if(calculator.operation !== ""){
                mantisa.innerHTML = calculator.calculate(+mantisa.innerHTML);
            }else{
                calculator.operand = +mantisa.innerHTML;
                mantisa.innerHTML = 0;
            }
            calculator.operator = e.target.value;
*/
        });
    });
    let equalKey = document.querySelector(".equals");
    equalKey.addEventListener("click", (e) =>{
        mantisa.innerHTML = calculator.calculate(+mantisa.innerHTML);
        calculator.operand = 0;
        calculator.operator = "";
    });   
}

window.onload = function() {app();}
