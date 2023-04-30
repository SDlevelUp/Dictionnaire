const Definition = require('../models/definitions');

exports.createDefinition = (req, res) => {
    const { word, definition } = req.body;
    const newDefinition = new Definition({ word, definition });

    console.log('Creating new definition:', newDefinition);

    newDefinition.save()
        .then((definition) => {
            console.log('New definition created:', definition);
            return res.status(201).json({
                message: "Definition created successfully",
                definition: { _id: definition._id, word: definition.word, definition: definition.definition }
            });
        })
        .catch((error) => {
            console.error('Error creating definition:', error);
            return res.status(400).json({ error });
        });
};

exports.getOneDefinition = (req, res) => {
    const id = req.params.id;

    console.log('Getting definition with id:', id);

    Definition.findOne({ _id: id })
        .then((definition) => {
            if (!definition) {
                console.error('Definition not found with id:', id);
                return res.status(404).json({ error: "Definition not found" });
            }
            console.log('Definition found:', definition);
            return res.status(200).json({
                _id: definition._id,
                word: definition.word,
                definition: definition.definition
            });
        })
        .catch((error) => {
            console.error('Error getting definition with id:', id, error);
            return res.status(400).json({ error });
        });
};


exports.getAllDefinitions = (req, res) => {
    console.log('Getting all definitions');

    Definition.find()
        .then((definitions) => {
            const definitionsList = definitions.map((definition) => {
                return { _id: definition._id, word: definition.word, definition: definition.definition };
            });
            console.log('Definitions found:', definitionsList);
            return res.status(200).json({ definitions: definitionsList });
        })
        .catch((error) => {
            console.error('Error getting all definitions:', error);
            return res.status(400).json({ error });
        });
};
