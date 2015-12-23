var jsonServer = require('json-server')

var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

// Custom actions
server.post('/ideas/:id/rate-up', rateUp);

var router = jsonServer.router('db.json')
server.use(router)

var db = router.db;

function rateUp(req, res) {
  var id = parseInt(req.params.id, 10)
  var ratings = db('ideas').find({id: id}).ratings || 0
  var idea = db('ideas').chain().find({id: id}).assign({ratings: ratings + 1}).value()
  res.json(idea)
}

server.listen(8080)
