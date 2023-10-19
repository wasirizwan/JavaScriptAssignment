function calculate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Invalid operator";
    }
}

let result = calculate(5, '*', 8);
document.write(result);





















