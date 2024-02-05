const express = require('express');
const  PageController = require('../controller/pages/PagesController');
const FileSystemController = require("../controller/fileSystem/FileSystemController");
const FileUploadController = require("../controller/fileUpload/FileUploadController");

const router = express.Router();

router.get('/', PageController.GetHomePage);
router.get('/about', PageController.GetAboutPage);
router.get('/contact', PageController.GetContactPage);
//file write
router.post('/file-write', FileSystemController.CreateFile);
//file upload using multer
router.post('/file-upload', FileUploadController.uploadFile);

module.exports = router;