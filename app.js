var express = require('express');
var app = express();
var globalpebble;
var globalsocket;
var server        = require('http').createServer(app);
var io            = require('socket.io')(server);


server.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

io.on('connection', function (socket) {
globalsocket = socket;
    console.log("new client");
//  socket.on('private-message', function(data){
//    console.log("Sending: " + data.content + " to " + data.username);
//    if (clients[data.username]){
//      io.sockets.connected[clients[data.username].socket].emit("add-message", data);
//    } else {
//      console.log("User does not exist: " + data.username); 
//    }
//  });

  //Removing the socket on disconnect
  socket.on('disconnect', function() {
//  	for(var name in clients) {
//  		if(clients[name].socket === socket.id) {
//  			delete clients[name];
//  			break;
//  		}
//  	}	
  })

});

app.use(express.static('public'));

app.use("/", function(req, res){
   var pebble_data = req.query;
    console.log(JSON.stringify(pebble_data));
    
    globalpebble = pebble_data;
    //console.log(io.sockets);
    io.sockets.emit("hello", JSON.stringify(pebble_data));
    
    res.send("hi");
    
});

/*var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8080);

var clients = {};

function handler (req, res) {
  fs.readFile(__dirname + '/marvel.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading marvel.html');
    }
      

    res.writeHead(200);
    res.end(data);  
  }); 
    fs.readFile(__dirname + '/marvel.css',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading marvel.html');
    }
      

    res.writeHead(200);
    res.end(data);  
  }); 
    
}

io.sockets.on('connection', function (socket) {

  socket.on('add-user', function(data){
    clients[data.username] = {
      "socket": socket.id
    };
  });

  socket.on('private-message', function(data){
    console.log("Sending: " + data.content + " to " + data.username);
    if (clients[data.username]){
      io.sockets.connected[clients[data.username].socket].emit("add-message", data);
    } else {
      console.log("User does not exist: " + data.username); 
    }
  });

  //Removing the socket on disconnect
  socket.on('disconnect', function() {
  	for(var name in clients) {
  		if(clients[name].socket === socket.id) {
  			delete clients[name];
  			break;
  		}
  	}	
  })

});


*/
