// see https://github.com/webpack/webpack/issues/6977

var path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
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
    // runtimeChunk: 'multiple',
    // runtimeChunk: {
    //   name: 'shared',
    // },
    minimize: false,
    splitChunks: {
      minChunks:1,
			// xmaxSize: 200000,
      chunks: 'all'
    }
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
