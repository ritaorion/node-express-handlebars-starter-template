const express = require('express');
const router = express.Router();

// @desc    Homepage
// @route   GET /
router.get('/', (req, res) => {
    res.render('homepage', {
        layout: 'main',
        pageTitle: 'Home'
    })
});

module.exports = router;