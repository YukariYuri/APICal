const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const Port = 3000

app.get('/plus', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const result = a + b;
    return res.json({
        "Result" : result
    })
})

app.get('/minus', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const result = a - b;
    return res.json({
        "Result" : result
    })
})

app.get('/times', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const result = a * b;
    return res.json({
        "Result" : result
    })
})

app.get('/over', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if ((a || a === 0) && b === 0) return res.json({ error : "The value is cannot be determined."});
    const result = a / b;
    return res.json({
        "Result" : result
    })
})

app.listen(Port, () => {
    console.log("Server Starts successfully");
    console.log(`Start On : http://localhost:${Port}`);
})
