const asyncHandler = require('express-async-handler')
const db = require('../db/queries')

exports.index = asyncHandler(async (req, res) => {
  const messages = await db.getMessages()
  res.render('index', { title: 'Mini Messageboard', messages })
})

exports.getNew = (req, res) => {
  res.render('form', { title: 'New message' })
}

exports.postNew = asyncHandler(async (req, res) => {
  const { text, user } = req.body
  await db.postMessage(text, user, new Date())
  res.redirect('/')
})
