function shout(hello){
    return hello.toUpperCase();
}

function whisper(HELLO){
    return HELLO.toLowerCase();
}

function logShout(hello){
    let text = hello.toUpperCase();
    console.log(text);
}

function logWhisper(HELLO){
    let logText = HELLO.toLowerCase();
    console.log(logText);
}

function sayHiToHeadphonedRoommate(string){

    if (string === string.toLowerCase()){
        return "I can't hear you!";
    }
    else if(string === string.toUpperCase()){
        return "YES INDEED!";
    }
    else if(string === "Let's have dinner together!"){
        return "I would love to!";
    }   
} 
sayHiToHeadphonedRoommate('Let\'s have dinner together')


