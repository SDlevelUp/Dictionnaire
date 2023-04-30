const Definition = require('../models/definitions');

exports.createDefinition =(req, res) =>{
    const def = new Definition(req.body);
    def.save()
    .then((definition) =>{
        return res.status(201).json({definition})
    })
    .catch((error)=> {
        return res.status(400).json({error})
    });
};

exports.getOneDefinition = (req, res) => {
    const id = req.params.id;

    Definition.findOne({_id:id})
        .then((definition) =>{
            return res.status(200).json({definition})})
            .catch((error) =>{
                return res.status(400).json({error})});
};

exports.getAllDefinitions = (req, res) => {
    Definition.find()
        .then((definitions) =>{
            return res.status(200).json({definitions})})
            .catch((error) =>{
                return res.status(400).json({error})});
};