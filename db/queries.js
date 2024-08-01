const pool = require('./pool')

exports.getMessages = async () => {
  const query = 'SELECT * FROM messages'
  const { rows } = await pool.query(query)
  return rows
}

exports.postMessage = async (text, user, added) => {
  await pool.query(
    'INSERT INTO messages("text", "user", added) VALUES ($1, $2, $3)',
    [text, user, added]
  )
}
