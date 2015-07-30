
///*
// Exercise 1
//*/

var Ex1 = {};

Ex1.setup = function () {
    // Grab the body element using document.getElementById,
    // assume the body element has an id of 'body'.
    // Create a canvas element using document.createElement,
    // then set the width and height properties to 1200 and
    // 720, respectively.
    // Finally, append the canvas element to the body.
    // Note that all the variables you'll need for this
    // have already been created and assigned a value of
    // null. You'll need to modify this assignment to
    // the correct value as specified above.
    var body = document.getElementsByTagName('body')[0];// YOUR CODE HERE
    var canvas = document.createElement('canvas');// YOUR CODE HERE

    canvas.width = 1200;// YOUR CODE HERE
    canvas.height = 720;// YOUR CODE HERE

    // YOUR CODE HERE
    body.appendChild(canvas);
};

// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();


///*
// Exercise 2
//*/

var Ex2 = {};




Ex2.setup = function () {
    var body = document.getElementById('body');
    var canvas = document.createElement('canvas');

    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    body.appendChild(canvas);

    // Create a new image with:
    // a 'src' attribute of "/media/img/gamedev/ralphyrobot.png"
    // and an 'onload' attribute of onImageLoad
    // YOUR CODE HERE

    var img = new Image();
    img.onload = Ex2.onImageLoad;
    img.setAttribute('src', 'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/ralphyrobot.png');

};

Ex2.onImageLoad = function () {
    // Use the console.log function to print a statement to the browser console.
    // This will print once the image has been downloaded.
    // YOUR CODE HERE
    console.log('image loaded');
};

// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();



///*
// Exercise 3
//*/


var Ex3 = {};

Ex3.canvas = null;
Ex3.ctx = null;
Ex3.img = null;

Ex3.onImageLoad = function () {
    console.log("IMAGE!!!");
    // Draw an image to the canvas at position 192,192.
    // Remember that the drawImage method is attached
    // to the 2D Context, not the canvas element!
    // YOUR CODE HERE

    Ex3.ctx.drawImage(Ex3.img, 192, 192);
};

Ex3.setup = function () {
    var body = document.getElementById("body");
    Ex3.canvas = document.createElement("canvas");

    Ex3.ctx = Ex3.canvas.getContext('2d');

    Ex3.canvas.setAttribute('width', 1200);
    Ex3.canvas.setAttribute('height', 700);

    body.appendChild(Ex3.canvas);

    Ex3.img = new Image();
    Ex3.img.onload = Ex3.onImageLoad;
    Ex3.img.src = "https://www.udacity.com/media/js/standalone/libs/gamedev_assets/ralphyrobot.png";
};


// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();


///*
// Exercise 4
//*/

// Last exercise so no need to set up namespacing by enclosing following code in object like previous


var canvas = null;
var ctx = null;
var assets = [];

for (var i = 0; i <= 18; i++) {
    var num = (i < 10) ? '0' + i.toString() : i.toString();
    assets.push('https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk' + num + '.png');
}

var frames = [];
var index = 0; //keep track of frame in animate function

var onImageLoad = function () {
    console.log("IMAGE!!!");
};

var setup = function () {
    body = document.getElementById('body');
    canvas = document.createElement('canvas');

    ctx = canvas.getContext('2d');

    canvas.width = 100;
    canvas.height = 100;

    body.appendChild(canvas);

    // Load each image URL from the assets array into the frames array 
    // in the correct order.
    // Afterwards, call setInterval to run at a framerate of 30 frames 
    // per second, calling the animate function each time.
    // YOUR CODE HERE
    for (var i = 0; i < assets.length; i++) {
        var img = new Image();
        img.onload = i === assets.length - 1 ? setInterval(animate, 30) : onImageLoad; // starts animate once last img has loaded
        img.setAttribute('src', assets[i]);
        frames.push(img);
    };



};

var animate = function () {
    // Draw each frame in order, looping back around to the 
    // beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.

    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    ctx.clearRect(0, 0, canvas.width, canvas.height); // overlays old images and creates blur if not used

    // YOUR CODE HERE
    ctx.drawImage(frames[index], 0, 0);
    index++;
    if (index === frames.length) index = 0;

};

// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();

