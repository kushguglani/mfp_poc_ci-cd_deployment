const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8081/'
	},
	devServer: {
		port: 8081,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: {
				'./MarketingApp': './src/bootstrap'
			},
			// shared:['react','react-dom'], or one hack
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, devConfig);