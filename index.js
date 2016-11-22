require('es6-promise').polyfill();
require('isomorphic-fetch');
var got = require('got');
var tempfile = require('tempfile');
var fs = require('fs');
var path = require('path');
var wallpaper = require('wallpaper');

fetch('http://chromecastbg.alexmeub.com/images.v7.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(images) {
    var imagesCount = images.length;
    var randomImageIndex = Math.round(Math.random() * imagesCount) - 1;
    return images[randomImageIndex].url;
  })
  .then(function(url) {
    var file = tempfile(path.extname(url));
    got
      .stream(url)
      .pipe(fs.createWriteStream(file))
      .on('finish', () => {
        wallpaper.set(file);
      });
  })
  .then(function() {
    console.log('Wallpaper changed successfully !');
  })
  .catch(function(error) {
    console.error('Something bad happened', error);
  });

