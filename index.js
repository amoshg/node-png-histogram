var PNG = require('pngjs').PNG,
  accum = require('accum');

/**
 * Setups up the histogram to be generated
 * @param options
 * @public
 */
var nodeHistogram = function (options) {
  //If there is no data then throw an error
  if (!options.data) {
    throw new Error("The input data was not provided, histogram could not be drawn");
  } else {
    //Initialize the settings
    this.width = options.width || 400;
    this.height = options.height || 400;
    this.padding = options.padding || 0;
    this.mirror = options.mirror || false;
    this.color = options.color || {r: 0, g: 0, b: 0, a: 255};
    this.pattern = options.pattern || false;
    this.data = normalizeData(options.data, (this.mirror ? (this.height * (1 - this.padding)) / 2 : (this.height * (1 - this.padding))));
  }
};

/**
 * Generates a png
 * @param dta
 * @public
 */
nodeHistogram.prototype.generatePNG = function (callback) {
  //See how wide each bar should be
  var barThreshold = this.width / this.data.length,
    png = new PNG({
      width: this.width,
      height: this.height,
      filterType: -1
    }), dIdx, idx, lastDIdx = null;

  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      if (!this.pattern || y % 10) {
        idx = (this.width * (this.height - y - ((this.mirror ? this.height / 2 : 0))) + (this.width - x)) << 2;
        dIdx = Math.floor(x / barThreshold);
        //If we are not drawing anything for this pixel go to the next one
        if (this.data[dIdx] && this.data[dIdx] > y && lastDIdx == dIdx) {
          //Set the colors
          png.data[idx] = this.color.r;  //R
          png.data[idx + 1] = this.color.g; //G
          png.data[idx + 2] = this.color.b;  //B
          png.data[idx + 3] = this.color.a;     //A
        }

        //If we are drawing both ways then draw again
        if (this.mirror) {
          idx = (this.width * (y + this.height / 2) + (this.width - x)) << 2;
          //If we are not drawing anything for this pixel go to the next one
          if (this.data[dIdx] && this.data[dIdx] > y && lastDIdx == dIdx) {
            //Set the colors
            png.data[idx] = this.color.r;  //R
            png.data[idx + 1] = this.color.g; //G
            png.data[idx + 2] = this.color.b;  //B
            png.data[idx + 3] = this.color.a;     //A
          }
        }

        lastDIdx = dIdx;
      }
    }
  }

  png.pack().pipe(accum(callback));
};

/**
 * Normalizes the given data set
 * @param [data]
 * @private
 */
function normalizeData(data, height) {
  //Normalize the value between 0 and the specified height
  var ratio = Math.max.apply(Math, data) / height;

  for (var i = 0; i < data.length; i++) {
    data[i] = data[i] / ratio;
  }

  return data;
}


// Export the class
module.exports = nodeHistogram;