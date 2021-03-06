const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const PORT = 8888;

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/api/cohorts', (req, res) => {
    db.select('name').from('cohorts')
        .then(cohorts => {
            res.status(200).json(cohorts);
        })
        .catch(err => {
            res.status(500).json({ Error: err });
        })
})

server.get('/api/cohorts/:id', (req, res) => {
    db.select('name').from('cohorts').where({ id: req.params.id })
        .then(cohort => {
            res.status(200).json(cohort);
        })
        .catch(err => {
            res.status(500).json({ Error: err });
        });
})

server.get('/api/cohorts/:id/students', (req, res) => {
    db.select('name').from('students').where({ cohort_id: req.params.id })
        .then(students => {
            res.status(200).json(students);
        }).catch(err => {
            res.status(500).json({ Error: err });
        });
})

server.post('/api/cohorts', (req, res) => {
    db.insert(req.body).into('cohorts')
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ Error: err });
        })
})

server.put('/api/cohorts/:id', (req, res) => {
    db.update(req.body).into('cohorts').where({ id: req.params.id })
        .then(id => {
            res.status(200).json(id);
        })
        .catch(err => {
            res.status(500).json({ Error: err });
        });
})

server.delete('/api/cohorts/:id', (req, res) => {
    db.del().into('cohorts').where({ id: req.params.id })
        .then(id => {
            res.status(200).json(id);
        })
        .catch(err => {
            res.status(500).json({ Error: err });
        });
})



server.listen(PORT, () => console.log(` ====== Server listening on port ${PORT} ====== `))