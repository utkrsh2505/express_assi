const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movie_name : String,

    movie_genre : String,

    production_year : String,

    budget : String

})

const Movie = mongoose.model("Movie",movieSchema);

module.exports = Movie