import webpack from 'webpack'
import { baseConfig } from './webpack.base'

import WebpackNotifierPlugin from 'webpack-notifier'

const developmentConfig: webpack.Configuration = {
  devtool: 'source-map',
  mode: 'development',
  plugins: [new WebpackNotifierPlugin()],
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
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
}

const config = Object.assign({}, baseConfig, developmentConfig)

module.exports = [config]
