const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const movieSchema = new Schema ({

title:{
    type: String,
    required: true,
    unique: true,

},
director:{
    type: String,
},
stars: {
    type: [String],
},
image: {
    type: String,

},
description: {
    type: String,
},
showtimes: {
    type: [String],
}



})

module.exports = model("Movie", movieSchema)