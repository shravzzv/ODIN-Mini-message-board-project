const express = require('express')
const router = express.Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

router.get('/', function (req, res) {
  res.render('index', { title: 'Mini Messageboard', messages })
})

router.get('/new', (req, res) => {
  res.render('form', { title: 'New message' })
})

router.post('/new', (req, res) => {
  const { text, user } = req.body
  messages.push({ text, user, added: new Date() })
  res.redirect('/')
})

module.exports = router
