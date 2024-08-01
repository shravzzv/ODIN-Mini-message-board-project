const asyncHandler = require('express-async-handler')

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

exports.index = asyncHandler(async (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages })
})

exports.getNew = (req, res) => {
  res.render('form', { title: 'New message' })
}

exports.postNew = asyncHandler(async (req, res) => {
  const { text, user } = req.body
  messages.push({ text, user, added: new Date() })
  res.redirect('/')
})
