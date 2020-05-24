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
        let clearBtn = document.querySelector("[data-action=clear]")
        clearBtn.textContent = "CE"
        Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-depressed"));

        if (!action)
        {
            if (displayNum === "0" || calculator.dataset.previousKeyType === "operator" ||
                calculator.dataset.previousKeyType === "calculate")
            {
                display.textContent = keyContent
            } else
            {
                display.textContent = displayNum + keyContent
            }
            calculator.dataset.previousKeyType = "number";
        }

        if (action === "add" || action === "multiply" || action === "divide" || action === "subtract")
        {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayNum

            if (firstValue && operator &&
                calculator.dataset.previousKeyType !== "operator" &&
                calculator.dataset.previousKeyType !== "calculate"
            )
            {
                const calValue = calculate(firstValue, secondValue, operator)
                display.textContent = calValue

            }

            key.classList.add("is-depressed")
            calculator.dataset.previousKeyType = "operator"
            calculator.dataset.firstValue = display.textContent
            calculator.dataset.operator = action
            // display.textContent = keyContent
        }



        if (action === "decimal")
        {
            if (calculator.dataset.previousKeyType === "operator" ||
                calculator.dataset.previousKeyType === "calculate")
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
            if (firstValue)
            {
                if (calculator.dataset.previousKeyType !== "calculate" &&
                    calculator.dataset.previousKeyType !== "operator")
                {
                    display.textContent = calculate(firstValue, secondValue, operand)
                }
            }
            calculator.dataset.previousKeyType = "calculate"
            clearBtn.textContent = "AC"
        }

        if (action === "clear")
        {
            if (calculator.dataset.previousKeyType === "calculate")
            {
                display.textContent = "0";
                calculator.dataset.firstValue = "";
                calculator.dataset.secondValue = "";
                calculator.dataset.operator = "";
                calculator.dataset.previousKeyType = "";
                clearBtn.textContent = "CE"
            } else
            {
                display.textContent = displayNum.length === 1 ? "0" : displayNum.slice(0, -1)
            }
            calculator.dataset.previousKeyType = "clear"
        }
    }
})

function calculate(a, b, operand)
{
    const x = parseFloat(a);
    const y = parseFloat(b);
    return operand === "add" ? x + y :
        operand === "subtract" ? x - y :
            operand === "multiply" ? x * y :
                x / y
}
