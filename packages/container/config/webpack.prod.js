const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')
const productionDomain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/container/latest/'
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'conatiner',
			remotes: {
				marketing: `marketing@${productionDomain}marketing/latest/remoteEntry.js`,
			},
			shared: packageJson.dependencies
		})
	]
}
console.log("prodConfig");
console.log(prodConfig);

module.exports = merge(commonConfig, prodConfig);