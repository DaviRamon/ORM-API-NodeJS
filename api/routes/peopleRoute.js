const {Router} = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = Router();

router.get('/people', PeopleController.getAllPeople);
router.get('/people/:id', PeopleController.getOnePerson);
router.post('/people', PeopleController.createPerson);
router.put('/people/:id', PeopleController.updatePerson);

module.exports = router;