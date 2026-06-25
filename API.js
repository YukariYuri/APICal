const ApiPort = 'http://localhost:3000'

async function Cal() {
    a = document.getElementById("num1").value;
    b = document.getElementById('num2').value;
    op = document.getElementById("operator").value;

    switch (op) {
        case "+": op = "plus"; break;
        case "-": op = "minus"; break;
        case "*": op = "times"; break;
        case "/": op = "over"; break;
    }

    if (isNaN(a) || isNaN(b) || a === "" || b === "") 
        return alert("Number invalid or exceeds limit.");
    
    const response = await fetch(`${ApiPort}/Cal?a=${a}&b=${b}&op=${op}`)
        .then(res => res.json())
        .catch(err => {
            return {error : err};
        })

    if (!response.error) {
        const result_tag = document.getElementById("result");
        result_tag.innerText = `Result : ${response.Result}`;
    } else {
        alert(response.error);
    }
}

function Clear() {
    document.getElementById("num1").value = "";
    document.getElementById('num2').value = "";
}