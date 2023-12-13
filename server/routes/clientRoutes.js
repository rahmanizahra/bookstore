const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');



router.get('/',clientController.getClientPage);
router.post('/addBooks',clientController.addBooks);
router.put('/updateBooks',clientController.updateBooks);

module.exports = router;