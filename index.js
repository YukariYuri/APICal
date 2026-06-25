const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const Port = 3000

function Cal(a, b, op) {
    let aN = parseFloat(a);
    let bN = parseFloat(b);

    let result;
    switch (op) {
        case "plus" : result = aN + bN; break;
        case "minus" : result = aN - bN; break;
        case "times" : result = aN * bN; break;
        case "over" :
            if ((aN || aN === 0) && bN === 0) result = "The value is cannot be determined.";
            else result = aN / bN
            break;
        default: return {error : "invalid operator."};
    }
    return result;
}

app.get('/Cal', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    let op = req.query.op;

    let result = Cal(a, b, op);

    if (result.error) {
        return res.status(404).json({
            "error": result.error
        })
    }

    res.json({
        "Result": result,
    })
})

app.listen(Port, () => {
    console.log("Server Starts successfully");
    console.log(`Start On : http://localhost:${Port}`);
})
