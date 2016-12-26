

function moveRight(objects){ //pass in what images u want and the counter ur using (global)
	var images = document.getElementsByClassName(objects);

	for (var i=0; i<images.length; ++i){
		var imageML = images[i].style.marginLeft.substring(0, images[i].style.marginLeft.length-1);
		imageML = Number(imageML);
		imageML += 100;
		if (imageML/100 > images.length-1){
			imageML = 0;
		}
		images[i].style.marginLeft = imageML + "%";
		console.log(images[i].style.marginLeft);
	}
}

function moveLeft(objects){ //pass in what images u want and the counter ur using (global)
	var images = document.getElementsByClassName(objects);

	for (var i=0; i<images.length; ++i){
		var imageML = images[i].style.marginLeft.substring(0, images[i].style.marginLeft.length-1);
		imageML = Number(imageML);
		imageML -= 100;
		images[i].style.marginLeft = imageML + "%";
		console.log(images[i].style.marginLeft);
	}
}