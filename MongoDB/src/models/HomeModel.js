const mongoose = require('mongoose');

/*
 * required = requerido, precisa ser enviado 
 */

const HomeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;