const express = require ("express");
const  mongoose = require("mongoose");
const app = express();
const port = 8000;
const db_url = "mongodb+srv://utk2505:786utkarsh@cluster0.jysel.mongodb.net/movies?retryWrites=true&w=majority";
const Movie = require("./schema/movies.schema")
app.use(express.json());

const connect=()=>{
    return mongoose.connect(db_url);                                                                                                                                                                                                           
}

app.get("/movies",async(req,res)=>{
    const movie = await Movie.find();
    res.json(movie)
})
app.get("/movies/:id",async(req,res)=>{
    let single = await Movie.findById(req.params.id)
    res.status(200).json(single)
})
app.post("/movies", async(req,res)=>{
    let createdMovie = await Movie.create(req.body);
    res.status(200).json(createdMovie)
})

app.patch("/movies/:id", async(req,res)=>{
    let update = await Movie.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json(update)
})

app.delete("/movies/:id", async(req,res)=>{
    let update = await Movie.findByIdAndDelete(req.params.id)
    res.status(200).json(update)
})
app.listen(port,async(res,req)=>{
    try{
        await connect();
        console.log(`Listening port ${port}`)
    }
catch(e){
    console.log(e.message)
}
})