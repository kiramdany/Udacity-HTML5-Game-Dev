

///*
// Exercise 1
//*/

// This is an example of how the JSON would be structured.
// Note that chaingun_impact.png is not here.
//
// Note that this is an actual Javascript object, whereas
// JSON is a string that represents that object.
var Ex1 = {}; 
Ex1.JSONExample = {
    "frames": {
        "chaingun.png": {
            "frame": {
                "x": 1766,
                "y": 202,
                "w": 42,
                "h": 34
            },
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {
                "x": 38,
                "y": 32,
                "w": 42,
                "h": 34
            },
            "sourceSize": {
                "w": 128,
                "h": 128
            }
        },
        "chaingun_impact.png": {
            "frame": {
                "x": 1162,
                "y": 322,
                "w": 38,
                "h": 34
            },
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {
                "x": 110,
                "y": 111,
                "w": 38,
                "h": 34
            },
            "sourceSize": {
                "w": 256,
                "h": 256
            }
        },
        "chaingun_impact_0000.png": {
            "frame": {
                "x": 494,
                "y": 260,
                "w": 22,
                "h": 22
            },
            "rotated": false,
            "trimmed": true,
            "spriteSourceSize": {
                "x": 113,
                "y": 108,
                "w": 22,
                "h": 22
            },
            "sourceSize": {
                "w": 256,
                "h": 256
            }
        }
    }
};

Ex1.JSONString = JSON.stringify(Ex1.JSONExample);

// The above is an example of how the JSON would be structured.
// Note that chaingun_impact.png is not here, we'll call your
// parseJSON function with the full JSON input.
//
// Note also that the above is an actual Javascript object, whereas
// JSON is a string that represents that object.
Ex1.parseJSON = function (weaponJSON) {
    // First, use the JSON.parse function to
    // parse the passed in weaponJSON.
    //
    // Next, grab the 'x' data field within
    // 'spriteSourceSize' of 'chaingun_impact.png'
    //
    // After that, print this value to the console
    // and also return it.
    // YOUR CODE HERE
    var example = JSON.parse(weaponJSON);
    var field = example["frames"]["chaingun_impact.png"]["spriteSourceSize"]["x"];
    console.log(field);
    return field;
     
};

//#region End

///*
//    Exercise 2
//*/

var Ex2 = {};

Ex2.parseJSON = function (weaponJSON) {
    parsedJSON = JSON.parse(weaponJSON);

    return parsedJSON['frames']['chaingun_impact.png']['spriteSourceSize']['x'];
};

Ex2.setup = function () {
   
    // Create a new XMLHttpRequest object
    //
    // YOUR CODE HERE
    var xhr = new XMLHttpRequest();


    // then use its open method to to define the request that
    // will be sent. The parameters to 'open' are:
    //
    // 1) The HTTP method to use, in our case we want
    //    "GET".
    // 2) The resource to request, in this case we're
    //    interested in "/media/resources/gamedev/weapon.json".
    // 3) A boolean indicating whether or not we want
    //    the request to be asynchronous or not. True
    //    means we do want it to be asynchronous.
    //
    // YOUR CODE HERE

    xhr.open("GET", "/media/resources/gamedev/weapon.json", true);


    // After that, we want to define the onload method
    // of the request to be our parsing function from
    // before. We've included that code above for
    // reference. A few things to keep in mind here 
    //
    // 1) This function can't take any parameters.
    // 2) Instead of parsing 'weaponJSON', we'll need
    //    to parse the 'responseText' member of the
    //    request object.
    // 3) You can access the request object inside
    //    your 'onload' function by using the 'this'
    //    keyword.

    // YOUR CODE HERE

    xhr.onload = (function () {
        var parsedJSON = JSON.parse(xhr.responseText);
        console.log(parsedJSON);
    });

    // Finally, we want to call the send method of the
    // request object to actually send the request.
    //
    // YOUR CODE HERE
    xhr.send();
};



///*
// Exercise 3
//*/

var Ex3 = {};

Ex3.setup = function () {

    // Create a new XMLHttpRequest called 'soundRequest',
    // that GETs the file '/media/audio/gamedev/bg_menu.ogg'.
    //
    // To properly read this binary file, we'll need
    // to specify the responseType of the request as
    // an 'arraybuffer'.
    //
    // Doing this is necessary to work with any kind
    // of binary data, like sound files, rather than
    // text data.
    //
    // WARNING: If you don't specify a responseType
    // of 'arraybuffer', your browser will try to
    // interpret the sound file as text data. This
    // could cause your browser to slow to a crawl or
    // worse.
    //
    // Once you have done this, leave the request's
    // onload to the below function. This will play
    // the sound that you loaded.
    //
    // Don't worry if you don't understand what this
    // code does, we'll be going over it later!
    //
    // YOUR CODE HERE
    var soundRequest = new XMLHttpRequest();

    soundRequest.open("GET", "/media/audio/gamedev/bg_menu.ogg", true);
    soundRequest.responseType = "arraybuffer";

    soundRequest.onload = function () {

        try {
            var context = new  AudioContext();

            var mainNode = context.createGainNode(0);
            mainNode.connect(context.destination);

            var clip = context.createBufferSource();

            context.decodeAudioData(soundRequest.response, function (buffer) {
                clip.buffer = buffer;
                clip.gain.value = 1.0;
                clip.connect(mainNode);
                clip.loop = true;
                clip.noteOn(0);
            }, function (data) { });
        }
        catch (e) {
            console.warn('Web Audio API is not supported in this browser');
        }
    };

    soundRequest.send();
};


///*
// Exercise 4
//*/

var Ex4 = {};

// Fill out the provided xhrGet function to abstract
// out the functionality of performing an XMLHttpRequest
// GET request.
//
// The provided parameters are the URI to make the request
// to, the callback to call at onload, and the responseType,
// if necessary. If we don't need a special responseType,
// assume that that parameter is null.
//
// Now, we're going to assume that the callback takes the
// request object as a parameter, instead of taking no
// parameters.
//
// We've provided you modified versions of the previous
// two callbacks below. At the bottom of the file, we call
// xhrGet with both callbacks to help you with testing your
// code.

Ex4.xhrGet = function (reqUri, callback, type) {
    // YOUR CODE HERE
    var xhr = new XMLHttpRequest();
    xhr.open("GET", reqUri, true);
    if (!!type) xhr.responseType = type;
    xhr.onload = function () {
        if (callback) {
            try {
                callback(xhr);
            }
            catch (e) {
                throw 'xhrGet failed:\n' + reqUri + '\nException: ' + e + '\nResponseText: ' + xhr.responseText;
            }
        }
    };
    xhr.send();

};

Ex4.parseJSON = function (xhr) {
    parsedJSON = JSON.parse(xhr.responseText);

    x = parsedJSON['frames']['chaingun_impact.png']['spriteSourceSize']['x'];
    console.log(x);
    return x;
};

Ex4.playSound = function (xhr) {
    try {
        var context = new webkitAudioContext();

        var mainNode = context.createGainNode(0);
        mainNode.connect(context.destination);

        var clip = context.createBufferSource();

        context.decodeAudioData(xhr.response, function (buffer) {
            clip.buffer = buffer;
            clip.gain.value = 1.0;
            clip.connect(mainNode);
            clip.loop = true;
            clip.noteOn(0);
        }, function (data) { });
    }
    catch (e) {
        console.warn('Web Audio API is not supported in this browser');
    }
};


///*
// Exercise 5
//*/

var Ex5 = {}; 

// 1) Grab the body DOM object and store it in
//	  a variable for later use. Assume that the
//    body element has an id of 'body'.
//
// 2) Create a new div DOM object, and set its
//	  id to "gameContent".
//
// 3) Create a new canvas DOM object and set its
//	  id to "gameCanvas".
//
// 4) Attach the canvas DOM object to the div,
//	  and the div DOM object to the body.
//
// You'll need to use the document.getElementById,
// document.createElement, as well as the
// <DOM Object>.appendChild methods to accomplish
// this. You'll also need to modify the id property
// of the DOM objects you create.
//
Ex5.manipulateDOM = function () {
    // YOUR CODE HERE
    var body = document.getElementsByTagName('body')[0];
    console.log(body);

    var div = document.createElement('div');
    div.setAttribute('id', 'gameContent');
    console.log(div);

    var canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'gameCanvas');
    console.log(canvas);


    div.appendChild(canvas);
    body.appendChild(div);

};