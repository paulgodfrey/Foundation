/**
 * Controllers (route handlers).
 */

const appController = require('@controllers/appController')

/**
 * Routes
 */

module.exports = function(app) {
  app.get('/', appController.getIndex)
  app.get('/about', appController.getAbout)
}
