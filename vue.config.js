module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.jpg$/i,
					use: 'raw-loader',
				},
			],
		},
	},
};
