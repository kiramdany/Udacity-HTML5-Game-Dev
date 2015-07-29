

///*
//    Exercise 1
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