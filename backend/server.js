import express from 'express';
import cors from 'cors';
import { ObjectId } from 'mongodb';
import { connect, db } from './connection.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  }
});

// Haal alle vragen op
app.get('/questions', (req, res) => {
  let questions = [];

  db.collection('questions')
    .find()
    .limit(10)
    .sort({ _id: 1 })
    .forEach((question) => questions.push(question))
    .then(() => {
      res.status(200).json(questions);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch documents' });
    });
});

// Haal een vraag op
app.get('/question/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('questions')
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((question) => res.status(200).json(question))
      .catch(() => res.status(500).json({ error: 'Could not fetch documents' }));
  } else {
    res.status(500).json({ error: 'Parameter is not a valid doc-id' });
  }
});
