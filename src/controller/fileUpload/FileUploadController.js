const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../..', 'files'))
    },
    filename : (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension)
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileExtensions = ['.jpg', '.jpeg', '.png', '.pdf'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedFileExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file extension. Only JPG, JPEG, PNG and PDF files are allowed.'), false);
    }
};

const maxFileSize = 1 * 1024 * 1024;
const upload = multer({ storage, fileFilter, limits: {fileSize: maxFileSize}});

exports.uploadFile = (req, res) => {
    upload.single('uploadImage')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.end(err.message);
        } else if (err) {
            return res.end(err.message);
        }
        res.end('File uploaded successfully');
    });
};
