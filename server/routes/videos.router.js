const pool = require('../modules/pool');
const router = express.Router();

// GET route to fetch all photos
router.get('/videos', (req, res) => {
    const queryText = 'SELECT * FROM "photos" ORDER BY "id" DESC;';
});

// DELETE route to delete a photo by ID

// PUT route to update a photo/title/desc. by ID

// POST route to add a new photo


module.exports = router;