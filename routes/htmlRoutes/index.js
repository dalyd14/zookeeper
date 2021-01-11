const path = require('path')
const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../docs/index.html'));
});
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../docs/animals.html'))
})
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../docs/zookeepers.html'))
})

module.exports = router