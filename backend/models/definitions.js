const mongoose = require('mongoose');

const definition = mongoose.Schema({
    word: { 
        type: String, 
        required: true 
    },
    definition: { 
        type: String, 
        required: true 
    },
});

module.exports = mongoose.model('Definition', definition);