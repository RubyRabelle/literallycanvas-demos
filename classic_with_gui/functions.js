/*EXTRANEOUS (but potentially useful FUNCTIONS */

//**dataURL to blob**
function dataURLtoBlob(dataurl) {
	var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
	while(n--){
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type:mime});
}

//**blob to dataURL**
function blobToDataURL(blob, callback) {
	var a = new FileReader();
	a.onload = function(e) {callback(e.target.result);}
	a.readAsDataURL(blob);
}

//test:
var blob = dataURLtoBlob('data:text/plain;base64,YWFhYWFhYQ==');
blobToDataURL(blob, function(dataurl){
	console.log(dataurl);
});
		
//** Dynamically Adding canvas to a document 		-- needs to be put in function form
var canvas = document.getElementById('canvas'); //finds Original Canvas
    img = document.createElement('img'); 
    img.src = 'images/a.jpg'; //stores image src

    var canv = document.createElement('canvas'); // creates new canvas element
    canv.id = 'canvasdummy'; // gives canvas id
    canv.height = canvas.height; //get original canvas height
    canv.width = canvas.width; // get original canvas width
    document.body.appendChild(canv); // adds the canvas to the body element

    var canvas1 = document.getElementById('canvasdummy'); //find new canvas we created
    var context = canvas1.getContext('2d');

    context.drawImage(img, 0, 0, canvas.width, canvas.height); //draws background image
    context.drawImage(canvas, 0, 0); //draws original canvas on top of background
    cscreen = canvas1.toDataURL(); //generates PNG of newly created canvas
    document.body.removeChild(canv); // removes new canvas