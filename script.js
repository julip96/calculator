// Here comes the logioc boi..
/* It shall be able to add, subtract, multiply, divide
- It needs a delete button */

function operate(operator, num1, num2) {
    
    let sum = 0;
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if (operator == "+")
    {
        sum = a + b;
        screen.textContent = sum;
        console.log(sum);
        return sum;
    }
    else if (operator == "-")
    {
        sum = a - b;
        screen.textContent = sum;
        console.log(sum);
        return sum;
    }   
    else if (operator == "*")
    {
        sum = a * b;
        screen.textContent = sum;
        console.log(sum);
        return sum;
    } 
    else if (operator == "/")
    {   
        if (b == 0)
        {
            screen.textContent = "RIP";
        }
        else
        {
            sum = a / b;
            screen.textContent = sum;
            console.log(sum);
            return sum;    
        }
        }
    else
    {
        alert("WHERES MY SIGN?!");
    }
}

// write functions that populate the display when you click the number buttons
// addeventlistener to buttons
let firstInput = "x";
let a = "x";
let b = "x";
let operator;
const screen = document.getElementById('screen');
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (e) => {
        const isButton = e.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        else if (e.target.textContent == "A/C")
        {
            screen.textContent = 0;
            a = "x";
            b = "x";
            firstInput = "x";
            operator = undefined;
            return;
        }
        else if (firstInput == "y")
        {
            if(!isNaN(e.target.textContent))
            {
                firstInput = e.target.textContent;
                screen.textContent = firstInput;
                a = "x";
                b = "x";
            }
            else if (e.target.textContent == "+" ||
            e.target.textContent == "-" ||
            e.target.textContent == "*" ||
            e.target.textContent == "/")
            {
                operate(operator, a, b)
                a = screen.textContent;
                operator = e.target.textContent;
                firstInput = "x";
            }
        }
        // check if input is an operator
        else if (e.target.textContent == "+" ||
                e.target.textContent == "-" ||
                e.target.textContent == "*" ||
                e.target.textContent == "/")
        {
            if (a == "x")
            {
                // add all prior values to a and cleanse firstInput to make it ready for values for b
                operator = e.target.textContent;
                a = firstInput;
                firstInput = "x";
            }
            else if (a !== "x" && b == "x" && operator !== "x")
            {
                b = firstInput;
                operate(operator, a, b);
                a = screen.textContent;
                b = "x";
                firstInput = "x";
                operator = e.target.textContent;
            }
        }
        else if (e.target.textContent == "=")
        {
            b = firstInput;
            firstInput = "y";
            operate(operator, a, b);
        }
        // If no operator yet add to
        else
        {   
            if(firstInput == "x")
            {
                firstInput = e.target.textContent;
                screen.textContent = firstInput;
            }
            else
            {
            firstInput += e.target.textContent;
            screen.textContent = firstInput;
            return e.target.textContent;
            }
        }

    });