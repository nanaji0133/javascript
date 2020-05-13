let calculator = document.querySelector(".calculator");
let keys = document.querySelector(".calculator__keys");
let display = document.querySelector(".calculator__display");

keys.addEventListener("click", e =>
{
    if (e.target.matches("button"))
    {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
        let displayNum = display.textContent;
        // let value1 = [];
        // let operand1 = [];
        Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-depressed"))

        if (!action)
        {
            if (displayNum === "0" || calculator.dataset.previousKeyType === "operator")
            {
                display.textContent = keyContent
            } else
            {
                display.textContent = displayNum + keyContent
            }
            calculator.dataset.previousKeyType === "number"
        }

        if (action === "add" || action === "multiply" || action === "divide" || action === "subtract")
        {
            // const firstValue = calculator.dataset.firstValue
            // const operator = calculator.dataset.operator
            // const secondValue = displayNum

            // if (firstValue && operator)
            // {
            //     display.textContent = calculate(firstValue, secondValue, operator)
            // }

            key.classList.add("is-depressed")
            calculator.dataset.previousKeyType = "operator"
            calculator.dataset.firstValue = displayNum
            calculator.dataset.operator = action
            // display.textContent = keyContent
        }



        if (action === "decimal")
        {
            if (calculator.dataset.previousKeyType === "operator")
            {
                display.textContent = "0."
            } else if (!displayNum.includes("."))
            {
                display.textContent = displayNum + "."
            }
            calculator.dataset.previousKeyType = "decimal"
        }

        if (action === "calculate")
        {
            let firstValue = calculator.dataset.firstValue
            let secondValue = displayNum
            let operand = calculator.dataset.operator
            calculator.dataset.previousKeyType = "calculate"
            display.textContent = calculate(firstValue, secondValue, operand)
        }

        if (action === "clear")
        {
            calculator.dataset.previousKeyType = "clear"
            display.textContent = displayNum.length === 1 ? "0" : displayNum.slice(0, -1)
        }
    }
})

function calculate(a, b, operand)
{
    return operand === "add" ? Number(a) + Number(b) :
        operand === "subtract" ? Number(a) - Number(b) :
            operand === "multiply" ? Number(a) * Number(b) :
                Number(a) / Number(b)
}

