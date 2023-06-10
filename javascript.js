function addition(a,b){
    //return c.reduce((sum,current) => sum + current,0);
    return Number(a) + Number(b);
}

function subtraction(a,b){
    return Number(a) - Number(b);
}

function product(a,b){
  //  if(is_first){
     //   b = 1;
     //   is_first = false;
    //}
    return a * b;
}

function divide(a,b){
    //cant divide by zero
    return a / b;
}

function operate(a,operator,b){

}



const display = document.querySelector(".display");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const division = document.querySelector(".division");
const modulus = document.querySelector(".modulus");
const multiply = document.querySelector(".multiply");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");




let var1 = "";
let temp = "";
let result = 0;
let op = "";
let is_first = true;
let EqualsPressed = false;

/**************** operation buttons *************/
add.addEventListener("click",()=>
{
    temp = Number(var1);
    var1 = "";
    result = addition(result,temp);
    display.textContent = "+";
    op = "+"
});

minus.addEventListener("click",()=>
{
    temp = Number(var1);
    var1 = "";
    if (temp == 0 && result == 0){
        // result = "-";
        var1 = "" + "-";
     }
    // else if (result == "-"){
      //   result = 0 -temp;
     //}
    else if (result<0 || (temp < 0 || temp == 0)){
        result = subtraction(temp,-result);
    }

    else{
        result = subtraction(temp,result);
    }
    display.textContent = "-";
    op = "-"
});

multiply.addEventListener("click",()=>
{
    temp = Number(var1);
    var1 = "";
    //if(EqualsPressed) temp = 1;
    if (result == 0 && temp!=0) result =1;
    if (temp == 0 && result!=0) temp = 1; 
    result = product(temp,result);
    display.textContent = "x";
    op = "x"
});

equal.addEventListener("click",()=>
{
    if (op=="+"){
        result = addition(result,Number(var1));
        op = "";
        var1 = "";
    }
    else if(op=="-"){
        result = subtraction(result,Number(var1));
        op = "";
        var1 = "";
    }
    else if(op=="x"){
        result = product(result,Number(var1));
        op = "";
        var1 = "";
        
    }
    //EqualsPressed = true;
    display.textContent = result;
});

clear.addEventListener("click",()=>
{
    var1 = ""
    result = 0;
    display.textContent = "";
    temp = "";
    op = "";
    is_first = true;
    EqualsPressed = false;

});




/**************** numbers buttons *************/
one.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "1";
    display.textContent = var1;
});

two.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "2";
    display.textContent = var1; 
});

three.addEventListener("click",()=>
{

    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "3";
    display.textContent = var1; 
    
});

four.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "4";
    display.textContent = var1; 
});

five.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "5";
    display.textContent = var1; 
});

six.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "6";
    display.textContent = var1; 
});

seven.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "7";
    display.textContent = var1; 
});

eight.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
}
    var1 = var1 + "8";
    display.textContent = var1; 
});

nine.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "9";
    display.textContent = var1; 
});

zero.addEventListener("click",()=>
{
    if(op==""){
        result = "";
        is_first = true;
        EqualsPressed = false;
    }
    var1 = var1 + "0";
    display.textContent = var1; 
});