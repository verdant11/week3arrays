//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN functions (function scope), can see global varibles)

var imageListA = new Array();
imageListA[0] = "images/cathedral/cathedral_00.jpg";
imageListA[1] = "images/cathedral/cathedral_01.jpg";
imageListA[2] = "images/cathedral/cathedral_02.jpg";
imageListA[3] = "images/cathedral/cathedral_03.jpg";
imageListA[4] = "images/cathedral/cathedral_04.jpg";
imageListA[5] = "images/cathedral/cathedral_05.jpg";
imageListA[6] = "images/cathedral/cathedral_06.jpg";
imageListA[7] = "images/cathedral/cathedral_07.jpg";
imageListA[8] = "images/cathedral/cathedral_08.jpg";
imageListA[9] = "images/cathedral/cathedral_09.jpg";
imageListA[10] = "images/cathedral/cathedral_10.jpg";
imageListA[11] = "images/cathedral/cathedral_11.jpg";
imageListA[12] = "images/cathedral/cathedral_12.jpg";
imageListA[13] = "images/cathedral/cathedral_13.jpg";
imageListA[14] = "images/cathedral/cathedral_14.jpg";
imageListA[15] = "images/cathedral/cathedral_15.jpg";
imageListA[16] = "images/cathedral/cathedral_16.jpg";
imageListA[17] = "images/cathedral/cathedral_17.jpg";
imageListA[18] = "images/cathedral/cathedral_18.jpg";
imageListA[19] = "images/cathedral/cathedral_19.jpg";



var imageListB = new Array();
imageListB[0] = "images/fireworks/fireworks_00.jpg";
imageListB[1] = "images/fireworks/fireworks_01.jpg";
imageListB[2] = "images/fireworks/fireworks_02.jpg";
imageListB[3] = "images/fireworks/fireworks_03.jpg";
imageListB[4] = "images/fireworks/fireworks_04.jpg";
imageListB[5] = "images/fireworks/fireworks_05.jpg";
imageListB[6] = "images/fireworks/fireworks_06.jpg";
imageListB[7] = "images/fireworks/fireworks_07.jpg";
imageListB[8] = "images/fireworks/fireworks_08.jpg";
imageListB[9] = "images/fireworks/fireworks_09.jpg";
imageListB[10] = "images/fireworks/fireworks_10.jpg";
imageListB[11] = "images/fireworks/fireworks_11.jpg";
imageListB[12] = "images/fireworks/fireworks_12.jpg";
imageListB[13] = "images/fireworks/fireworks_13.jpg";
imageListB[14] = "images/fireworks/fireworks_14.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
	
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}


	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}





window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

