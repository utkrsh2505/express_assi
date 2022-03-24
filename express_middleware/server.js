const express = require ("express");
const app = express();
const port = 8000;
const books = require("./books.json")
app.use(express.json());


const nameMiddleware = (req,res,next)=>{
const name = "utkarsh";
req.name = name;
next();
}
app.use(nameMiddleware);
app.get("/books",(req,res)=>{
    res.json({name : req.name ,books})
})
app.get("/books/:id",(req,res)=>{
    const {id} = req.params;
    const singleBook = books.filter((item)=>{
        return(
            item.id === Number(id)
        )
    })
    res.json({name : req.name,singleBook})

})

app.patch("/books/:id",(req,res)=>{
    const {id} = req.params;
    const update = books.map((item)=>{
        return(
            item.id === Number(id) ? req.body : item
        )
    })
    res.json(update)

})

app.delete("/books/:id",(req,res)=>{
    const {id} = req.params;
    const update = books.filter((item)=>{
        return(
            item.id !== Number(id)
        )
    })
    res.json(update)

})
app.listen(port,(res,req)=>{
console.log(`Listening port ${port}`)
})