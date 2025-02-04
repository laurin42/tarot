module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        overrides: [
            {
                // Wende nativewind/babel nur auf Dateien an, die in den Verzeichnissen "app" oder "components" liegen.
                test: (filename) => {
                    if (!filename) return false;
                    return (
                        filename.includes("/app/") ||
                        filename.includes("/components/")
                    );
                },
                plugins: ["nativewind/babel"],
            },
        ],
    };
};
