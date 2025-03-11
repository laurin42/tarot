const fs = require('fs');
const path = require('path');

const iconDirectories = [
    'android/app/src/main/res/mipmap-hdpi',
    'android/app/src/main/res/mipmap-mdpi',
    'android/app/src/main/res/mipmap-xhdpi',
    'android/app/src/main/res/mipmap-xxhdpi',
    'android/app/src/main/res/mipmap-xxxhdpi',
];

iconDirectories.forEach(dir => {
    const directoryPath = path.join(process.cwd(), dir);
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach(file => {
            if (file.endsWith('.png') && (file.startsWith('ic_launcher') || file.startsWith('ic_launcher_round'))) {
                const filePath = path.join(directoryPath, file);
                fs.unlinkSync(filePath);
                console.log(`Deleted duplicate icon: ${filePath}`);
            }
        });
    }
});