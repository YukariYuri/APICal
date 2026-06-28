const ApiPort = 'http://localhost:3000'

async function Cal() {
    a = document.getElementById("num1").value;
    b = document.getElementById('num2').value;
    op = document.getElementById("operator").value;

    if (isNaN(Number(a)) || isNaN(Number(b)) || a === "" || b === "") 
        return alert("Number invalid or exceeds limit.");
    
    const response = await fetch(`${ApiPort}/${op.toLowerCase()}?a=${a}&b=${b}`)
        .then(res => res.json())

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