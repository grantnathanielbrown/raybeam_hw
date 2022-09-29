const averages = require("./averages.json")
const fs = require("fs");
function convert(input,desiredLength) {
    // create array of objects with {desiredLength} splits.

    const convertedData = [];
    for (let i = 0; i < desiredLength; i++) {
        convertedData[i] = {
            Split: input[i].Split
        }
    }

    // Iterate over larger data object, push specific player batting averages to array of objects. Since each player / team has 6 splits worth of data, we use i % 6 to map them all to just 6 objects, one for each split.
    input.forEach((dataPoint,i) => {
        convertedData[i % desiredLength][`${dataPoint.Player} BA`] = dataPoint.BA;
    });
    
    fs.writeFile("/Users/grant/Desktop/raybeam_hw/src/data/convertedAverages.json", JSON.stringify(convertedData), function (err) {
        if (err) return console.log(err);
        console.log('The data was written');
        });
}

convert(averages,6);


