var scorePlayer = 0;
var scoreComputer = 0;
var computerChar = 0;

var socket = io("http://localhost:8080");
socket.on("hello", function (data) {
    console.log(data[1]);
    var pass = data[1];
    /*if("4" in data){
        pass = 1;
    }
    if("2" in data){
        pass = 2;
    }
    if("0" in data){
        pass = 3;
    }*/
    console.log(pass);
    receiveMove(pass);
 });


var player1 = window.location.href;
player1 = player1.charAt(player1.length-1);
displayImages(player1);

done();


function done() {
        if(scorePlayer > scoreComputer)
    {
          var playerMv = document.getElementById("command");
        playerMv.textContent = "YOU WIN";
    }
    else if (scorePlayer == scoreComputer)
    {
        var playerMv = document.getElementById("command");
        playerMv.textContent = "IT'S A TIE";
    }
    else
    {
        var playerMv = document.getElementById("command");
        playerMv.textContent = "YOU LOST :(";
    }
}

function displayImages(player1)
    {
        var divPlayer = document.getElementById("imgPlayer");

        if(player1 == 1)
        {
            divPlayer.src = "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg";

        }


        if(player1 == 2)
        {
            divPlayer.src = "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg";

        }

        var divComp = document.getElementById("imgComputer");
        var imgComp = document.getElementById("computer");

        computerChar = (Math.floor((Math.random() * 4) + 1));


        if(computerChar == 1)
        {
            divComp.src = "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg";
        }

        if(computerChar == 2)
        {
            divComp.src = "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg";
        }

        if(computerChar == 3)
        {
            divComp.src = "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg";
        }

        if(computerChar == 4)
        {
            divComp.src = "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg";
        }

        setTimeout(tellStart, 5000);


    
};

var count = 5;
function anim() {
    if (count > 0) {
        console.log(count);
        document.getElementById("command");
        command.textContent = count;
        count--;
        
        setTimeout(anim, 1000);
    }
    else {
        receiveMove(1);
    }
}


function tellStart() {
    
    anim();
    //init();
    
}


/*function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './app.js.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
     
     console.log(actual_JSON);
 });
}
*/



function receiveMove(data) {
    var move = data;
    
    var computerMove = (Math.floor((Math.random() * 3) + 1));
    
    changeScore (move, computerMove);
    displayMessage("player", move);
    displayMessage("computer", computerMove);
        
}

function changeScore (move, computerMove) {
    
    if(move == 1 && computerMove == 2)
    {
        scoreComputer++; 
    }
    
    if(move == 2 && computerMove == 1)
    {
        scorePlayer++; 
    }
    
    if(move == 1 && computerMove == 3)
    {
        scorePlayer++; 
    }
    
    if(move == 3 && computerMove == 1)
    {
        scoreComputer++; 
    }
    
    if(move == 2 && computerMove == 3)
    {
        scoreComputer++; 
    }
    
    if(move == 3 && computerMove == 2)
    {
        scorePlayer++; 
    }
    
    var compMv = document.getElementById("compScore");
    var playerMv = document.getElementById("playerScore");
    
    compMv.textContent = scoreComputer;
    playerMv.textContent = scorePlayer;
    
}

function displayMessage(player, move){
    
    if(player == "player")
    {
         var playerMv = document.getElementById("playerMv");
        
        if(move == 1)
        {
        playerMv.textContent = "ATTACK";
        }
        
        if(move == 2)
        {
        playerMv.textContent = "DEFENSE";
        }
        
        if(move == 3)
        {
        playerMv.textContent = "TRICK";
        }
    }
    
    if(player == "computer")
    {
         var playerMv = document.getElementById("compMv");
        
        if(move == 1)
        {
        playerMv.textContent = "ATTACK";
        }
        
        if(move == 2)
        {
        playerMv.textContent = "DEFENSE";
        }
        
        if(move == 3)
        {
        playerMv.textContent = "TRICK";
        }
    }
}
