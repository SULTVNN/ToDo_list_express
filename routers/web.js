const router = require('express').Router();
const TaskController = require('../controllers/TaskController'); // controller

router.get('/',TaskController.index)
router.post('/create',TaskController.create)
router.delete('/delete/:id',TaskController.destroy)
router.get('/update/:id',TaskController.edit)
router.put('/update/:id',TaskController.update)

module.exports= router;