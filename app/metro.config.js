const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// Add this to support Sentry source maps
config.transformer.minifierPath = 'metro-minify-terser';
config.transformer.minifierConfig = {
    keep_classnames: true,
    keep_fnames: true,
    mangle: {
        keep_fnames: true,
    },
};

config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
};

module.exports = withNativeWind(config, { input: './global.css' });