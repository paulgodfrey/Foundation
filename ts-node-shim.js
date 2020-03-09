const Module = require('module')
const package = require('./package.json')
package._moduleAliases = {
  '@root': './',
  '@models': './models',
  '@services': './lib/services',
  '@controllers': './controllers',
  '@lib': './lib',
  '@rds': './rds',
  '@test': './test',
}
if (require.main === module) {
  // called directly from command line
  require('module-alias/register')
  const script = process.argv.splice(2, 1)
  Module._load(`./${script}`, null, true)
} else {
  require('ts-node/register')
  require('module-alias/register')
}
