function WhoAmI (app) {
  app.get(app.pathPrefix + 'whoami', app.checkId, function(req, res, next) {
    res.set('Content-Type', 'text/plain')
    return res.send(req.email)
  })
}

module.exports = WhoAmI
