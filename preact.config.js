import criticalCssPlugin from "preact-cli-plugin-critical-css";
import postcssPresetEnv from 'postcss-preset-env';
import preactCliSvgLoader from 'preact-cli-svg-loader';

export default (config, env, helpers) => {
  /* render inline styles */
	const options = {
    inline: true,
    minify: true,
		extract: false,
		width: 1920,
		height: 1080
	};

  criticalCssPlugin(config, env, options);

	/* replace svg from raw loader */
	preactCliSvgLoader(config, helpers);

	/* disable webpack url() handling */
	const cssLoaders = helpers.getLoadersByName(config, 'css-loader');
	cssLoaders.map(entry => entry.loader.options.url = false);

	/* enables post-css and nesting */
  const postcssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
	postcssLoaders.map(entry => entry.loader.options.plugins = () => [
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true
			}
		})
	]);

	/* ignore import order on css modules */
	const { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
	plugin.options.ignoreOrder = true;

};