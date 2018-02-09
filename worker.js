onmessage = function(e) {
    console.log('Message received from main script: ', e.data);
    //postMessage(workerResult);
}

var data = {};

function loadData(request) {
    console.log(arguments);
}

var request = new XMLHttpRequest();
request.addEventListener("load", loadData);
request.open('GET', './data.js');
request.send();

