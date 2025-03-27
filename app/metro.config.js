const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    // Enable hermes for better performance/smaller bundle
    unstable_transformProfile: 'hermes-stable',
    minifierPath: 'metro-minify-terser',
    minifierConfig: {
        keep_classnames: true,
        keep_fnames: true,
        compress: {
            drop_console: true,  // Remove console.log in production
            pure_funcs: ['console.debug', 'console.log', 'console.info'],
        },
        mangle: {
            keep_fnames: true,
        },
        output: {
            comments: false,
        },
    },
};

// Create a custom blacklist to exclude dev files
config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    blacklistRE: [
        /.*\/__tests__\/.*/,  // Exclude test files
        /.*\/dev-tools\/.*/,  // Exclude dev tools directory
        process.env.NODE_ENV === 'production' ? /.*\.development\.js$/ : /.*\.production\.js$/,
    ],
};

module.exports = withNativeWind(config, { input: './global.css' });