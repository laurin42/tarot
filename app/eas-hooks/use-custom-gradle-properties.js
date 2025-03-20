const fs = require('fs');
const path = require('path');

module.exports = {
    onBuildStart: async (config) => {
        console.log('Applying custom gradle.properties...');

        // Create the gradle.properties file path
        const gradlePropertiesPath = path.join(process.cwd(), 'android', 'gradle.properties');

        // Read existing gradle.properties
        let gradleProperties = '';
        if (fs.existsSync(gradlePropertiesPath)) {
            gradleProperties = fs.readFileSync(gradlePropertiesPath, 'utf8');
        }

        // Add our custom properties
        gradleProperties += `\n# Added by custom EAS hook
kotlin.suppressKotlinVersionCompatibilityCheck=true
kotlin.version=1.7.20
android.useAndroidX=true
`;

        // Write back the updated file
        fs.writeFileSync(gradlePropertiesPath, gradleProperties);

        console.log('Custom gradle.properties applied successfully!');
    }
};