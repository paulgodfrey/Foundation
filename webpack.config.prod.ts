require('module-alias/register')
// import SentryCliPlugin from '@sentry/webpack-plugin'
import webpack from 'webpack'
import { baseConfig } from './webpack.base'

const productionConfig: webpack.Configuration = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'public/js/src/tsconfig.json',
            },
          },
        ],
      },
    ],
  },
}

const config = Object.assign(baseConfig, productionConfig)

module.exports = [config]
