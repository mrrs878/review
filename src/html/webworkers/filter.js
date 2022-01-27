/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-01-27 23:08:16
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-01-27 23:08:16
 * @FilePath: /review/src/html/webworkers/filter.js
 */

const Filter = {
  cold: 'cold',
  warm: 'warm',
};

// data[index] = colorDistance(
//   noise(),
//   (pixel.r * 0.393) + (pixel.g * 0.769) + (pixel.b * 0.189), pixel.r,
// );
// data[index + 1] = colorDistance(
//   noise(),
//   (pixel.r * 0.349) + (pixel.g * 0.686) + (pixel.b * 0.168), pixel.g,
// );
// data[index + 2] = colorDistance(
//   noise(),
//   (pixel.r * 0.272) + (pixel.g * 0.534) + (pixel.b * 0.131), pixel.b,
// );

// function noise() {
//   // Returns a value between 0.5 and 1
//   return Math.random() * 0.5 + 0.5;
// }

// function colorDistance(scale, dest, src) {
//   // returns a red, blue or green value for the 'sepia' pixel
//   // which is a weighted average of the original value and the calculated value
//   return (scale * dest + (1 - scale) * src);
// }

function filter(imageData, currentFilter) {
  const w = imageData.width;
  const h = imageData.height;
  const { data } = imageData;

  // Iterate pixel rows and columns to change red color of each.
  for (let x = 0; x < w; x += 1) {
    for (let y = 0; y < h; y += 1) {
      const index = (x + (y * w)) * 4;
      const pixel = {
        r: data[index],
        g: data[index + 1],
        b: data[index + 2],
      };
      if (currentFilter === Filter.cold) {
        data[index + 2] = (pixel.g * 1.186);
      }
      if (currentFilter === Filter.warm) {
        data[index] = pixel.r * 1.193;
        data[index + 1] = (pixel.g * 1.186);
      }
    }
  }
}

export { Filter, filter };
