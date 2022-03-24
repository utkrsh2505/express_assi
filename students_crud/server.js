
const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const PORT = 8000;

let app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")

})
app.get("/users",(req,res)=>{
    res.json(users)


})


app.post("/users",(req,res)=>{
    users.push(req.body)
 fs.writeFileSync(`${__dirname}/MOCK_DATA.json`, JSON.stringify(users));
res.json(req.body);

})

app.put("/users/:id",(req,res)=>{
    const {id} = req.params;
    const update = users.map((item)=>{
        return(
            item.id === Number(id) ? req.body : item
        )
    })
    
    fs.writeFileSync(`${__dirname}/MOCK_DATA.json`, JSON.stringify(update));
    res.json(update)

})

app.delete("/users/:id",(req,res)=>{
    const {id} = req.params;
    const update = users.filter((item)=>(item.id !== Number(id)  ))
    fs.writeFileSync(`${__dirname}/MOCK_DATA.json`, JSON.stringify(update))
    res.json(update)
})
app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`)
})