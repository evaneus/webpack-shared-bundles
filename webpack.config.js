// see https://github.com/webpack/webpack/issues/6977

const path = require('path');
const webpack = require('webpack');
const ChunkRenamePlugin = require("webpack-chunk-rename-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
  // mode: 'development',
  entry: { 
		one: './packages/one/index',
    two: './packages/two/index',
    three: './packages/three/index'
	 },
  devtool: 'source-map',
  output: {
    publicPath: 'dist/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: ['MyLibrary', '[name]'],
    chunkFilename: '[contenthash].js',
    libraryTarget: 'umd'
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: false,
    splitChunks: {
      name: '[contenthash]',
      minChunks:2,
      chunks: 'all'
    }
  },
  plugins: [
    new ChunkRenamePlugin({
      initialChunksWithEntry: true,
    }),
    new BundleAnalyzerPlugin({analyzerMode:'static'}),
    new ManifestPlugin(),
 
  ]
};
