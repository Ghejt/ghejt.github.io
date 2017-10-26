var start = new Date().getTime();
function getRandomColor(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color;
}
function makeShapeAppear() {                
    var top = Math.random() * 400;                
	var left = Math.random() * 400;                
	var size = Math.random() * 200 + 100;
	var color = getRandomColor();
	if (Math.random() > 0.5) {                    
		document.getElementById("object").style.borderRadius = "50%";                    
	} 
	else {
		document.getElementById("object").style.borderRadius = "0%";
	}                
	document.getElementById("object").style.backgroundColor = color;
	document.getElementById("object").style.top = top + "px";
	document.getElementById("object").style.left = left + "px";
	document.getElementById("object").style.width = size + "px";
	document.getElementById("object").style.height = size + "px";
	document.getElementById("object").style.display = "block";
	start = new Date().getTime();
	}

function appearAfterDelay(){
	setTimeout(makeShapeAppear, Math.random() * 2000);
	}
	
	appearAfterDelay();
	
document.getElementById("object").onclick = function(){
	document.getElementById("object").style.display = "none";
	var end = new Date().getTime();
	var reaction = (end - start) /  1000;
	document.getElementById("reaction").innerHTML = reaction + " seconds";
	appearAfterDelay();
}