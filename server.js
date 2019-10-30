const express = require('express');
const vocabulary = require('an-array-of-english-words')
import binarySearch from './utils/binary.js'
import PhoneWords from './utils/PhoneWords.js'
const bodyParser     = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/words', (req, res) => {
  let phoneInstance = new PhoneWords()
  console.log(req.body.string)
  let words = phoneInstance.computePhonewords(req.body.string)
  let validWords = []
  words.forEach(word => binarySearch(word, vocabulary) ? validWords.push(word) : null )
  res.json(validWords)
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);
