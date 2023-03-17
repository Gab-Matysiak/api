const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.json([
        {
            grupy_psow: 'psy gończe',
            przykladowa_rasa: 'szwedzko duński pies gończy'
        },
        {
            grupy_psow: 'psy do towarzystwa',
            przykladowa_rasa: 'shihtzu'
        }
    ])
});

module.exports = router;