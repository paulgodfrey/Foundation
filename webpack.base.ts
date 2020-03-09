import path from 'path'
import webpack from 'webpack'
import { WebpackBundleName } from './lib/constants/WebpackConstants'

const basePath = path.resolve(__dirname, 'public', 'js', 'src')
const jsDistPath = path.resolve('./public/js/dist')
const jsPublicPath = '/js/dist/'

const baseConfig: webpack.Configuration = {
  context: basePath,
  entry: {
    [WebpackBundleName.HOME_PAGE]: './app.tsx',
  },
  externals: {
    jquery: 'jQuery',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
    globalObject: 'this',
    library: '[name]',
    libraryTarget: 'var',
    publicPath: jsPublicPath,
    path: jsDistPath,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules'],
    alias: {
      '@constants': path.resolve(basePath, 'constants'),
      '@api': path.resolve(basePath, 'api'),
      '@shared': path.resolve(basePath, 'shared'),
      '@root': path.resolve(basePath),
    },
  },
}

export { baseConfig }
