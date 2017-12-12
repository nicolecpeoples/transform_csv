const fs = require('fs')
let csv = require('csv');
let http = require('http');

var CSVData = [];
fs.readFile('../broken-utf8.csv', function (err, data) {
  csv.parse(data, function(err, data){
    csv.transform(data, function(data){
      for (var idx = 0; idx < data.length; idx++) {
        // MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2]));
        console.log(idx)
    }
    })
  })
})

// csv.generate({seed: 1, columns: 2, length: 20}, function(err, data){
//   console.log(data)
//   csv.parse(data, function(err, data){
//     csv.transform(data, function(data){
//       return data.map(function(value){return value.toUpperCase()});
//     }, function(err, data){
//       csv.stringify(data, function(err, data){
//         process.stdout.write(data);
//       });
//     });
//   });
// });

var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'content-type': 'application/json' });
    resp.end(JSON.stringify(CSVData));
});

server.listen(8080);
