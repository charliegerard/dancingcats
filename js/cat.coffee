$(document)ready ->
	grumpy = $('img')[0]
	nyan = $('img')[1];
	disco = $('img')[2];
	img = $('img')[3];
	img2 = $('img')[4];
	img3 = $('img')[5];
	img4 = $('img')[6];

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

	catWalk = ->
		catWalkRight = ->
			movingRight = parseInt(img.style.left)
			newPosition = movingRight + 10;
		 	img.style.left = newPosition + 'px';
		 	if (movingRight > window.innerWidth)
	 	  		img.style.left = '0px';

	 	catWalkLeft = ->
	 		movingLeft = parseInt(img2.style.right);
			newPosition = movingLeft + 10;
			img2.style.right = newPosition + 'px';

			if (movingLeft > window.innerWidth)
	 	  		img2.style.right = '0px';

	 	catFalling = ->
	 		falling = parseInt(img3.style.top);
			newPos = falling + 5;
			img3.style.top = newPos + 'px';

			if(falling > window.innerHeight)
				img3.style.top = '0px';


		catWalkRightTimer = window.setInterval(catWalkRight, 90);
	 	catWalkLeftTimer = window.setInterval(catWalkLeft, 90);
	 	catFallingTime = window.setInterval(catFalling, 30);
			
	 	  	
	 	  	
