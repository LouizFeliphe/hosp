const express = require('express');
const router = express.Router();
const functions = require('../controllers/people')

router.route('/').get(functions.getPeople).post(functions.postPeople)
router.route('/:id').put(functions.putPeople).delete(functions.deletePeople)
router.route('/postman').post(functions.postPeoplePostman)


module.exports = router