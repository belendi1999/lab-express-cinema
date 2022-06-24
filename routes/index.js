const express = require('express');
const Movie = require("../models/Movie.model.js")
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get("/movies", (req, res, next) => {

    Movie.find()
      .then (response => {
        console.log(response)
        res.render("movies.hbs", { movie: response})
        
      })
      .catch((err) => {
        next(err)
      });
    })


module.exports = router;
