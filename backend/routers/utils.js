const router = require('express').Router();

router.get('/generateCode', (req, res) => {
    createCode((filename) => {
        res.json({filename});
    })
})

router.post('/generateCodeFromData', (req, res) => {
    const {library, files, name} = req.body;
    createCode(files, name, (filename) => {
        res.json({filename});
    })
})


module.exports = router;