const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();

// GET route to fetch all reviews
router.get('/videos', (req, res) => {
    const queryText = 'SELECT * FROM "photos" ORDER BY "id" DESC;';
});

// PUT route to update a review so it doesn't show up on the website(boolean)

// POST route to add a new review


module.exports = router;