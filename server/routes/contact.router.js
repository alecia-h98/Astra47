const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();

// GET route to fetch all contact requests
router.get('/contact/requests', (req, res) => {
    const queryText = 'SELECT * FROM "photos" ORDER BY "id" DESC;';
});

// DELETE route to delete a photo by ID

// PUT route to update the status of a contact request by ID
router.put('/contact/requests/:id', (req, res) => {
    const queryText = `UPDATE "photos" SET "status" = $1 WHERE "id" = $2;`;
    const queryValues = [req.body.status, req.params.id];
    pool.query(queryText, queryValues)
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.error('Error updating contact request:', err);
            res.sendStatus(500);
        });
});

// POST route to add a new contact request
// ****** This route is not working yet, because of the missing time portion of the contact table.
router.post('/contact', (req, res) => {
    const queryText = `INSERT INTO "contact" ("name", "email", "message") VALUES ($1, $2, $3);`;
    const queryValues = [req.body.name, req.body.email, req.body.message];
    pool.query(queryText, queryValues)
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.error('Error adding contact request:', err);
            res.sendStatus(500);
        });
});


module.exports = router;
