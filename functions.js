//Slide Show
var myIndex = 0;

function slideShow() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideShow, 5000); // Change image every 2 seconds
}

//Menu sticky - Mudança de cor
function mudancaCor(){
	var menu = document.getElementsByClassName("barra-nav");
	console.log()
	if(menu.scrollTop >= 400){
		menu.setAttribute('background-color', 'red');
	}else{
		menu.setAttribute('background-color', 'blue');
	}
}
