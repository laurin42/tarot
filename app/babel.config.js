module.exports = function (api) {
    api.cache(true);
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],

        plugins: [],
    };
};