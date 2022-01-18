const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'app/upload')
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }


});

const upload = multer({
    storage: storage
})

module.exports = upload;