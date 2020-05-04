let i = 500;
let section = document.querySelector("section");
let para = document.createElement("p");
// para.textContent = ""

do
{
    let para2 = document.createElement("p")
    function isprime(i)
    {
        for (let num = 2; num < i; num++)
        {
            if (i % num === 0)
            {
                return false
            }
        }
        return true
    }
    if (isprime(i))
    {
        para2.textContent = i;
        para.appendChild(para2)
    }
    i--;
} while (i > 0);

// para.textContent = para.textContent.slice(0, para.textContent.length-2) + "."

section.appendChild(para)
