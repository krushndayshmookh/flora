exports.search_by_page_get = (req, res) => {
  console.log('params:', req.params)
  console.log('query:', req.query)
  return res.send([{}])
}

exports.details_get = (req, res) => {
  console.log('params:', req.params)
  console.log('query:', req.query)
  return res.send({})
}

exports.create_post = async (req, res) => {
  console.log('params:', req.params)
  console.log('body:', req.body)
  return res.send({})
}

exports.update_post = async (req, res) => {
  console.log('params:', req.params)
  console.log('body:', req.body)
  return res.send({})
}

exports.delete_post = async (req, res) => {
  console.log('params:', req.params)
  console.log('body:', req.body)
  return res.send({})
}
