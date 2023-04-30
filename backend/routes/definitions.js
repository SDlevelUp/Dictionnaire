const express = require('express');
const router = express.Router();
const DefCtrl = require('../controllers/definitions')

router.post('/', DefCtrl.createDefinition)
router.get('/:id', DefCtrl.getOneDefinition)
router.get('/', DefCtrl.getAllDefinitions)
module.exports = router;