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
    
    
}