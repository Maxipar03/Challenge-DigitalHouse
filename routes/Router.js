const express = require('express');
const router = express.Router();
const Validation = require('../middlewares/validation');
const Controller = require('../controllers/Controller')

router.get('/', Controller.index); 
router.get("/create",Controller.create)
router.post("/create",Validation,Controller.createProcess)
router.get("/edit/:id",Controller.edit)
router.post("/edit/:id",Validation,Controller.editProcess)
router.post("/delete/:id",Controller.delete)

module.exports = router;