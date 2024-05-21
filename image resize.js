const sharp = require('sharp');

const inputImagePath = 'input_image.jpg';
const outputImagePath = 'output_image.jpg';
const width = 800;
const height = 600;

// Resize image
sharp(inputImagePath)
    .resize(width, height)
    .toFile(outputImagePath, (err, info) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Image resized successfully!');
    });
