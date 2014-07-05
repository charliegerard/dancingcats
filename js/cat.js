$(document).ready(function(){
	var grumpy = document.getElementsByTagName('img')[0];
	var nyan = document.getElementsByTagName('img')[1];
	var disco = document.getElementsByTagName('img')[2];
	var img = document.getElementsByTagName('img')[3];
	var img2 = document.getElementsByTagName('img')[4];
	var img3 = document.getElementsByTagName('img')[5];
	var img4 = document.getElementsByTagName('img')[6];

	grumpy.style.width = '200px';
	nyan.style.top = '100px';
	img.style.left = '0px';
	img.style.bottom = '0px';
	img2.style.right = '0px';
	img4.style.bottom = '0px';
	img4.style.left = '150px';
	img3.style.top = '0px';
	disco.style.left = '0px';
	disco.style.top = '0px';

	var catWalk = function(){

		var catWalkRight = function(){
		  	var movingRight = parseInt(img.style.left);
		  	var newPosition = movingRight + 10;
		 	img.style.left = newPosition + 'px';

		 //Makes the cat restart from the left of the screen.
	 	  	if (movingRight > window.innerWidth){
	 	  		img.style.left = '0px';
	 	  	}
		}

		var catWalkLeft = function(){
			var movingLeft = parseInt(img2.style.right);
			var newPosition = movingLeft + 10;
			img2.style.right = newPosition + 'px';

			if (movingLeft > window.innerWidth){
	 	  		img2.style.right = '0px';
	 	  	}
		}

		var catFalling = function(){
			var falling = parseInt(img3.style.top);
			var newPos = falling + 5;
			img3.style.top = newPos + 'px';

			if(falling > window.innerHeight){
				img3.style.top = '0px';
			}
		}
 
	 var catWalkRightTimer = window.setInterval(catWalkRight, 90);
	 var catWalkLeftTimer = window.setInterval(catWalkLeft, 90);
	 // var catAppearTimer = window.setInterval(catAppear, 10);
	 var catFallingTime = window.setInterval(catFalling, 30);
	}
	return [catWalk()]
});
