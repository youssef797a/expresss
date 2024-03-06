const express = require("express")
const logger =require("./middelware/logger")
const app = express()
const members = require("./members")
const PORT = 5000

app.use(express.static(__dirname + "/public"))

app.get("/members", (req, res) =>{
    res.json(members)
}
)

app.get("/members/:id", (req, res) =>{
    res.json(req.params.id)
}
)

app.use(logger)

app.listen(PORT, (err) => {
    err ?console.log(err)
        :console.log(`server running on port ${PORT}`);
})