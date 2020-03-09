/**
 * Module dependencies.
 */
require('module-alias/register')

const env = require('@lib/env')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const chalk = require('chalk')
const staticify = require('staticify')('./public')

/**
 * Create Express server.
 */
const app = express()

app.set('host', '0.0.0.0')
app.set('port', env.expressPort)
app.use(staticify.middleware)
app.use(compression())

if (env.isDev) {
  logger.token('req-body', function(req, res) {
    return JSON.stringify(req.body)
  })

  const loggerMiddleware = logger(function(tokens, req, res) {
    const status = Number(tokens.status(req, res))
    let statusColor = '#e4e4e4'

    if (status >= 400) {
      statusColor = '#ff2020'
    } else if (status >= 300) {
      statusColor = '#e020ff'
    } else if (status >= 200) {
      statusColor = '#49ff20'
    }

    return [
      chalk.hex('#e4e4e4').bold(tokens.method(req, res)),
      chalk.hex(statusColor).bold(status),
      chalk.hex('#1e90ff').bold(tokens.url(req, res)),
      chalk.hex('#737373').bold(tokens['response-time'](req, res) + ' ms'),
      chalk.hex('#737373').bold('from ' + tokens.referrer(req, res)),
      chalk.hex('#fff')(`\n` + tokens['req-body'](req, res)),
    ].join(' ')
  })

  app.use(loggerMiddleware)
} else app.use(logger('dev'))

app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb', parameterLimit: 1000000 }))
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 1000000,
    extended: true,
  })
)

/**
 * Remove asset hash before request hits static controller
 */
app.use('/public/', function(req, res, next) {
  req.url = req.url.replace(
    /\/([^\/]+)\.[0-9a-f]+\.(css|js|jpg|png|gif|svg)$/,
    '/$1.$2'
  )
  next()
})

/**
 * Serve static assets from public directory
 */
app.use(express.static('./public', { maxAge: 31557600000 }))

/**
 * Routes
 */
require('./routes')(app)

/**
 * Start Express server.
 */
;(async () => {
  const port = env.expressPort
  app.listen(port, () => {
    console.log(
      '%s App is running at http://localhost:%d in %s mode',
      chalk.green('✓'),
      port,
      env.environment
    )
    console.log('  Press CTRL-C to stop\n')
  })
})()

module.exports = app
