const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


// GET route to fetch all contact requests
router.get('/requests', rejectUnauthenticated, (req, res) => {
    const queryText = 'SELECT * FROM "contact" ORDER BY "id" DESC;';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('Error fetching contact requests:', err);
        res.sendStatus(500);
    })
});

// archive contact messages by ID
router.put('/requests/arc', rejectUnauthenticated, (req, res) => {
    const { id } = req.body;
    const query = `UPDATE "contact" SET "is_archived" = true WHERE  "is_archived" = false AND "id" = $1;`;
    pool.query(query, [id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.error('Error archiving contact request:', err);
            res.sendStatus(500);
        });
});

// PUT route to update the status of a contact request by ID
router.put('/requests', rejectUnauthenticated, (req, res) => {
    const { id } = req.body;
    const query = `UPDATE "contact"
       SET "responded" = NOT "responded"
       WHERE id = $1
       RETURNING *;`;
    pool.query(query, [id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.error('Error archiving contact request:', err);
            res.sendStatus(500);
        });
});

// POST route to add a new contact request
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "contact" ("name", "email", "message", "day_sent") VALUES ($1, $2, $3, CURRENT_DATE);`;
    const queryValues = [req.body.name, req.body.email, req.body.message];
    pool.query(queryText, queryValues)
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.error('Error adding contact request:', err);
            res.sendStatus(500);
        });
});


module.exports = router;
