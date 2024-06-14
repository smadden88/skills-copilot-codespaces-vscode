// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');
var comments = [];

// 2. Create server
http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                response.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                response.end('<h1>404 Not Found</h1>');
            }
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
    } else if (pathname == '/post') {
        fs.readFile('./post.html', function (err, data) {
            if (err) {
                response.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                response.end('<h1>404 Not Found</h1>');
            }
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(data);
        });
    } else if (pathname == '/comment') {
        var comment = urlObj.query;
        var date
    }
})

    

        
