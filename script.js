let operand = 0;
let operator = "";


let calculator = {
    operand : 0,
    operator : "",
    newNumber: true,
    clear: function(mantisa){
        this.operand = 0;
        this.operator = "";
        this.newNumber = true
        mantisa.innerHTML = 0;
    },

    calculate: function(number){        
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
    },
    toString: function (){
        return "Operand: " + this.operand +
            " Operator: " + this.operator;
    }
};

let app = function (){
    let mantisa = document.querySelector(".mantisa");
    mantisa.innerHTML = 0;

    document.querySelector(".clear").addEventListener("click", (e) =>{
        calculator.clear(mantisa);
    });

    let operands = document.querySelectorAll(".operand");
    for(let i = 0 ; i < operands.length ; i++)
    {
        operands[i].addEventListener("click", (e) => {
            if(calculator.newNumber){
                mantisa.innerHTML = e.target.value;
                calculator.newNumber = null;
            }else{
                mantisa.innerHTML = mantisa.innerHTML + e.target.value;
            }
        });
    }
    let operators = document.querySelectorAll(".operator");
    operators.forEach((op) => {
        op.addEventListener("click", (e) => {
            if(calculator.operator === ""){
                //calculator.operator = e.target.value;
                calculator.operand = +mantisa.innerHTML;
                mantisa.innerHTML = 0;
               // calculator.newNumber = true;
            }else{                
                calculator.operand = calculator.calculate(+mantisa.innerHTML);
  //              calculator.operator = e.target.value;
                mantisa.innerHTML= calculator.operand;
//                calculator.newNumber = true;
            }
            calculator.operator = e.target.value;
            calculator.newNumber = true;
        });
    });
    let percent = document.querySelector(".percent");
    percent.addEventListener("click", (e) => {
        calculator.operand = mantisa.innerHTML / 100;
        mantisa.innerHTML = calculator.operand;
        calculator.newNumber = true;
    });

    let sign = document.querySelector(".sign");
    sign.addEventListener("click", (e) => {
        if(+mantisa.innerHTML > 0){
            mantisa.innerHTML = "-" + mantisa.innerHTML;
        }else{
            mantisa.innerHTML = Math.abs(+mantisa.innerHTML);
        }

        calculator.operand = mantisa.innerHTML;
    });
    
    let equalKey = document.querySelector(".equals");
    equalKey.addEventListener("click", (e) =>{
        mantisa.innerHTML = calculator.calculate(+mantisa.innerHTML);
        calculator.operand = 0;
        calculator.operator = "";
        calculator.newNumber = true;
    });   
}

window.onload = function() {app();}
