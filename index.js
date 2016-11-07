// Create a new .js file and using request, make a 'GET' request to
// 'https://sytantris.github.io/http-examples/future.jpg' using chaining.


  // require `request` and the Node `fs` (filesystem) module
  var request = require('request');
  var fs = require('fs');

  request.get('https://sytantris.github.io/http-examples/future.jpg')
         // .on('error') handles any errors
         .on('error', function (err) {                                   // Note 2
           throw err;
         })

         // on('response') logs the HTTPS response code, response message (response.statusMessage)
        // and content type (response.headers['content-type'])
         .on('response', function (response) {                           // Note 3
           console.log('Response Status Code: ', response.statusCode);
           console.log('Response Message:', response.statusMessage);
           console.log(response.headers['content-type']);
         })

         // uses piping and fs.createWriteStream to save the file to my
         //working directory ('./future.jpg')
         .pipe(fs.createWriteStream('./future.jpg'));               // Note 4

         
  // Notes:
  // 1. `request.get` is equivalent to `request()`
  // 2. `request.on('error', callback)` handles any error
  // 3. `request.on('response, callback)` handles the response
  // 4. What is happening here?
