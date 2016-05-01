var playerChosen = 0;

function callChar(name) {
    var xmlhttp = new XMLHttpRequest();
var url ="http://gateway.marvel.com/v1/public/characters?name="+name+"&ts=1&apikey=5b64c9fea534a3b0b1d9a60572b4d9d2&hash=370db0104f8f86e840f747d2d553c506";


xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr =JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
    if(name == "Spider-Man")
    {
        playerChosen = 1;
    }
    
    if(name == "Iron Man")
    {
        playerChosen = 2;
    }
    
    if(name == "Thor")
    {
        playerChosen = 3;
    }
    
    if(name == "Hulk")
    {
        playerChosen = 4;
    }
}

    
xmlhttp.open("GET", url, true);
xmlhttp.send();
};

function myFunction(arr) {
    console.log(arr);
    var superImg = document.getElementById("superImg");
    superImg.src = arr.data.results[0].thumbnail.path+"."+arr.data.results[0].thumbnail.extension;
    superImg.class = "bigPic";
    
    var description = arr.data.results[0].description;

    var superName = arr.data.results[0].name;
    var Super = document.getElementById("description");
    //Super.id = "text";
    
    Super.textContent = description;
    //var superDes = document.createTextNode(description);
    //Super.appendChild(superDes);
    console.log(superName);
    console.log(description);
    
    var charactersZ = document.getElementsByClassName("button");
    
    for(var i = 0; i < 4; i++)
    {
        charactersZ[i].style.width = "10px"; 
        charactersZ[i].style.height = "10px";
    }
    
    var movesZ = document.getElementsByClassName("gifMoves");
    
    for(var i = 0; i < 3; i++)
    {
        movesZ[i].style.border = "3px solid #fff"; 
    }
    
    var description = document.getElementById("description");
    
    description.style.backgroundColor = "#b40404";
    
    if (superName == "Spider-Man") {
        var attacking = document.getElementById("attackGif");
        attacking.src = SpiderMan.gifAttack;
       /* var msgA = SpiderMan.msg1; 
        var attackMess = document.getElementById("attackMsg");
        attackMess.textContent = msgA;
        */
        
        var defending = document.getElementById("defenseGif");
        defending.src = SpiderMan.gifDefense;
       /* var msgB = SpiderMan.msg2;
        var defenseMess = document.getElementById("defenseMsg");
        defenseMess.textContent = msgB;*/
        
        
        var tricking = document.getElementById("trickGif");
        tricking.src = SpiderMan.gifTrick;
       /* var msgC = SpiderMan.msg3;
        var trickMess = document.getElementById("trickMsg");
        trickMess.textContent = msgC;*/
    }
    
    else if (superName == "Iron Man" || superName == "IronMan") {
        var attacking = document.getElementById("attackGif");
        attacking.src = IronMan.gifAttack;
      /*  var msgA = IronMan.msg1; 
        var attackMess = document.getElementById("attackMsg");
        attackMess.textContent = msgA;*/
        
        
        var defending = document.getElementById("defenseGif");
        defending.src = IronMan.gifDefense;
    /*    var msgB = IronMan.msg2;
        var defenseMess = document.getElementById("defenseMsg");
        defenseMess.textContent = msgB;*/
        
        
        var tricking = document.getElementById("trickGif");
        tricking.src = IronMan.gifTrick;
      /*  var msgC = IronMan.msg3;
        var trickMess = document.getElementById("trickMsg");
        trickMess.textContent = msgC;*/
    }
    
    
    else if (superName == "Hulk")  {
        var attacking = document.getElementById("attackGif");
        attacking.src = Hulk.gifAttack;
    /*    var msgA = Hulk.msg1; 
        var attackMess = document.getElementById("attackMsg");
        attackMess.textContent = msgA;*/
        
        
        var defending = document.getElementById("defenseGif");
        defending.src = Hulk.gifDefense;
      /*  var msgB = Hulk.msg2;
        var defenseMess = document.getElementById("defenseMsg");
        defenseMess.textContent = msgB;*/
        
        
        var tricking = document.getElementById("trickGif");
        tricking.src = Hulk.gifTrick;
      /*  var msgC = Hulk.msg3;
        var trickMess = document.getElementById("trickMsg");
        trickMess.textContent = msgC;*/
    }
    
    else if (superName == "Thor") {
        var attacking = document.getElementById("attackGif");
        attacking.src = Thor.gifAttack;
     /*   var msgA = Thor.msg1; 
        var attackMess = document.getElementById("attackMsg");
        attackMess.textContent = msgA;*/
        
        
        var defending = document.getElementById("defenseGif");
        defending.src = Thor.gifDefense;
    /*    var msgB = Thor.msg2;
        var defenseMess = document.getElementById("defenseMsg");
        defenseMess.textContent = msgB;*/
        
        
        var tricking = document.getElementById("trickGif");
        tricking.src = Thor.gifTrick;
      /*  var msgC = Thor.msg3;
        var trickMess = document.getElementById("trickMsg");
        trickMess.textContent = msgC;*/
    }
    
        

};

var SpiderMan = {
    gifAttack:"http://i.giphy.com/N4UnZOAEu1FDi.gif",
    msg1:"Attack! Shoot arm forward!", gifDefense:"http://i.giphy.com/jDebvTj63yzfO.gif",
    msg2:"Defense! Shoot your arm downwards!",
    gifTrick:"http://i.giphy.com/MN7B93KcCwPT2.gif",
    msg3:"Trick! Throw your arm backwards to trick your offender!"
};

var IronMan = {
 gifAttack:"http://i.giphy.com/q3dV01hPxT50Q.gif",
    msg1:"Attack! Shoot away all your opponents with your powerful suit!",
    gifDefense:"http://i.giphy.com/dVPFnCaSs0kOk.gif",
    msg2:"Defense! Arms up to protect your heart!",
    gifTrick:"http://i.giphy.com/ilNmmAzjEeHg4.gif",
    msg3:"Trick! Iron Man was defenseless, then his suit came out of nowhere, so suit up!"
};

var Thor = {
    gifAttack:"http://i.giphy.com/qF9VSWowf87C0.gif",
    msg1:"Attack! Harnest eletricity then shoot out the power!",
    gifDefense:"http://i.giphy.com/12YcjIlCeoES6Q.gif",
    msg2:"Defense! Swing your hammer arm to deter attackers!",
    gifTrick:"http://i.giphy.com/fkYTTHT4xKNR6.gif",
    msg3:"Trick! Swing your arm down to block your attacker by surprise!"
};

var Hulk = {
    gifAttack:"http://i.giphy.com/qFS736LYR1WiQ.gif",
    msg1:"Attack! Be Hulk and punch the bad people out of the universe!",
    gifDefense:"http://i.giphy.com/YGB11RY92vwRy.gif",
    msg2:"Defense! Swing those bad dogs away from yourself!",
    gifTrick:"http://i.giphy.com/7AGClzC5szjji.gif",
    msg3:"Trick! Hulk doesn't want to transition but he can't always control it! That's a tricky situation."
};

    /*makes an HTML break <br> element and adds it to the DOM*/
function addBreak(element) {
    var breakNode = document.createElement("br");
    element.appendChild(breakNode);
}

function footButt() {
    window.location.replace('gameStart.html?'+playerChosen);
}