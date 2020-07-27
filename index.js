const sharp = require('sharp');
const fs = require('fs');

const dirpath = './images';

fs.readdir(dirpath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(function (file) {
        resizeImage(file)
    });

})

function resizeImage(file) {
    let inputFile = './images/' + file;
    let outputFile = './output_images/' + file;
    console.log("Input file: ",inputFile, " output file: ", outputFile)
    sharp(inputFile).resize({ height: 1920, width: 1080 }).toFile(outputFile)
        .then(function (newFileInfo) {
            console.log("Successfully resize ", newFileInfo);
        })
        .catch(function (err) {
            console.error("Error occured",err);
        });

}