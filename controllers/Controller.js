let { validationResult } = require('express-validator');
const DB = require('../database/models')
const Op = DB.Sequelize.Op;

const Controller = {

    index: (req, res) => {

        res.render('index')

    },
    
    list:(req,res)=> {
        DB.products.findAll()
        .then(products => {
            return res.json(products)
        })
    },


    }

module.exports = Controller