const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// WORKS
// GET route to fetch all photos
router.get('/', (req, res) => {
    const queryText = `SELECT "user"."id", "user"."username", "photo"."user_id", "photo"."id", "photo"."cloudinary_url", "photo" "is_archived", "photo"."title", "photo"."description"
    FROM "user"
    JOIN "photo"
    ON "user"."id" = "photo"."user_id"
    WHERE "photo"."is_archived" = FALSE;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error fetching photos on the backend:', err);
            res.sendStatus(500);
        });
});

// DELETE route to delete a photo by ID

// PUT route to update a photo/title/desc. by ID

//YET TO TEST
// POST route to add a new photo
router.post('/', rejectUnauthenticated, (req, res) => {
    let newPhoto = {...req.body};
    const query = `INSERT INTO "photo" ( "user_id", "added_day", "cloudinary_url", "title", "description")
VALUES ($1, CURRENT_DATE, $2, $3, $4);`;
    pool.query(query, [req.user.id, newPhoto.cloudinary_url, newPhoto.title, newPhoto.description])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.error('Error adding photo on the backend:', err);
            res.sendStatus(500);
        });
});

module.exports = router;
