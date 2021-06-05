"use strict";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");
const dot = document.querySelector(".dot");
let num1dot = false;
let num2dot = false;
let result;
let num1 = "";
let operator = "";
let num2 = "";

// to listen to number buttons 
numbers.forEach(numbers =>
    numbers.addEventListener("click", () => {
        if (operator == "") {
            num1 += numbers.textContent;
            num1 = parseFloat(num1);
            return display.append(numbers.textContent);

        } else
            num2 += numbers.textContent;
        num2 = parseFloat(num2);
        return display.append(numbers.textContent);

    }
    ));

// to listen to operations button
operations.forEach(operations =>
    operations.addEventListener("click", () => {
        if (operator == "" && num1 != "") {
            operator = operations.textContent;
            return display.append(" " + operations.textContent + " ");
        } else if (num1 != "" && num2 != "") {
            operation(num1, num2, operator);
            operator = operations.textContent;
            display.append(" " + operations.textContent + " ");
        } 



    }));

// to clear the values
clear.addEventListener("click", () => {
    display.textContent = "";
    num1 = "";
    operator = "";
    num2 = "";
    result = "";
    num1dot = false;
    num2dot = false;
});

// to give the value
enter.addEventListener("click", () => operation(num1, num2, operator));

dot.addEventListener("click", () => {

    if (operator == "" && num1 != "" && num1dot == false) {
        num1dot = true;
        num1 += dot.textContent;
        display.append(dot.textContent);
    } else if (operator != "" && num2dot == false) {
        num2dot = true;
        num2 += dot.textContent;
        display.append(dot.textContent);
    }
});

// to calculate the values
function plus(a, b) {
    result = a + b;
    operator = "";
    num1 = result;
    num2 = "";
    display.textContent = result;
    num2dot = false;
}
function minus(a, b) {
    result = a - b;
    operator = "";
    num1 = result;
    num2 = "";
    display.textContent = result;
    num2dot = false;
}
function multiply(a, b) {
    result = a * b;
    result = Math.round(result * 1000) / 1000;
    operator = "";
    num1 = result;
    num2 = "";
    display.textContent = result;
    num2dot = false;
}
function divide(a, b) {
    result = a / b;
    result = Math.round(result * 1000) / 1000;
    operator = "";
    num1 = result;
    num2 = "";
    display.textContent = result;
    num2dot = false;
}

// check which function corresponds, depending on the operator
function operation(a, b, operator) {
    if (a != "" && operator != "" && b != "") {
        switch (operator) {
            case "+":
                plus(a, b);
                break;
            case "-":
                minus(a, b);
                break;
            case "x":
                multiply(a, b);
                break;
            case "/":
                divide(a, b);
                break;
        }
    }
};