const express = require('express');
const  PageController = require('../controller/pages/PagesController');
const FileSystemController = require("../controller/fileSystem/FileSystemController");

const router = express.Router();

router.get('/', PageController.GetHomePage);
router.get('/about', PageController.GetAboutPage);
router.get('/contact', PageController.GetContactPage);
////
router.post('/file-write', FileSystemController.CreateFile);

module.exports = router;