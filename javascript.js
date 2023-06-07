function addition(a,b){
    //return c.reduce((sum,current) => sum + current,0);
    return Number(a) + Number(b);
}

function subtraction(a,b){
    return a - b;
}

function product(a,b){
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
    display.textContent = subtraction(77,8);
});

equal.addEventListener("click",()=>
{
    if (op=="+"){
        result = addition(result,Number(var1));
        op = "";
        var1 = "";
    }
    display.textContent = result;
});

clear.addEventListener("click",()=>
{
    var1 = ""
    result = 0;
    display.textContent = "";
});




/**************** numbers buttons *************/
one.addEventListener("click",()=>
{
    if(op=="") result = "";
    var1 = var1 + "1";
    display.textContent = var1;
});

two.addEventListener("click",()=>
{
    if(op=="") result = "";
    var1 = var1 + "2";
    display.textContent = var1; 
});

three.addEventListener("click",()=>
{

    display.textContent = "3";
    
});

four.addEventListener("click",()=>
{
    display.textContent = "4";
});

five.addEventListener("click",()=>
{
    display.textContent = "5";
});

six.addEventListener("click",()=>
{
    display.textContent = "6";
});

seven.addEventListener("click",()=>
{
    display.textContent = "7";
});

eight.addEventListener("click",()=>
{
    display.textContent = "8";
});

nine.addEventListener("click",()=>
{
    display.textContent = "9";
});

zero.addEventListener("click",()=>
{
    display.textContent = "0";
});