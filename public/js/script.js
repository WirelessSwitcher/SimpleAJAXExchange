const send = document.getElementById("send");
const clearbutton = document.getElementById("clear");
const request = new XMLHttpRequest();

send.onmouseup = function(){

    //This is the data to be sent
    let data = {
        message:     "This is the message",
    };
    let message = JSON.stringify(data);
    console.log("Sending the message: " + message);
    request.open("POST", "/");
    request.setRequestHeader("Content-type", "application/json");
    request.send(message);
}

clearbutton.onmouseup = function(){
    let data = {
        message:     "Clear",
    };
    let message = JSON.stringify(data);
    console.log("Sending the message: " + message);
    request.open("POST", "/");
    request.setRequestHeader("Content-type", "application/json");
    request.send(message);
    console.clear();
}
