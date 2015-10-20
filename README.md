# node-png-histogram
Generates a histogram as an image given an array of values 

```js
var nph = require("node-png-histogram");

var data = [0.61, 0.64, 0.68, 0.71, 0.71, 0.71, 0.74, 0.81, 0.88, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.9, 0.79, 0.68, 0.57, 0.46, 0.35, 0.24, 0.13, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01, 0.12, 0.23, 0.34, 0.45, 0.56, 0.67, 0.78, 0.88, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.91, 0.9, 0.83, 0.76, 0.67, 0.56, 0.45, 0.35, 0.26, 0.17, 0.15, 0.15];

var nodePNGHistogram = new nph({data: data, mirror: true, width: 1800, height: 150, color: {r: 0, g: 0, b:0, a: 100}, pattern: true}).generatePNG(function (alldata) {
    res.setHeader("Content-Type", "image/png");
    res.end(alldata);
  });
```

## Getting Started

This is a simple histogram generator, please refer to example.js for a use case

### Install

```sh
$ npm install node-png-histogram
```

### Options

- Width (int): The width of the output image
- Height (int): The height of the output image
- Data (Required): An array of numbers
- Padding: The padding (top-bottom) to be included. Must be a number between 0 - 1. ie: 0.1 will give you 10% padding 
- Mirror (float): Mirrors the histogram over the x-axis so it looks more like a sound wave 
- Color: an object containg RGBA values ie:  {r: 0, g: 0, b:0, a: 100}
- Pattern (boolean): If on it adds horizantal stripes to the output

### Screenshots

Simple histogram with no mirror, pattern, or padding

![alt tag](http://i.imgur.com/OAAyLaV.png)


More complex histogram with mirror and pattern on

![alt tag](http://i.imgur.com/6CiCvBL.png)




