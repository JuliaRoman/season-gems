//by Julia Romani Barreta

// Accordion - FAQ 
function accordion(){ /* Função para ativar e desativar accordion */
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
}

/*** Mudança de classe - menu ***/
function trocaMenu(){
			
		window.addEventListener('scroll', function (e) {
		var nav = document.querySelector('.barra-nav');
        
		if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
            nav.classList.remove('nav-transparent');
        } else {
            nav.classList.add('nav-transparent');
            nav.classList.remove('nav-colored');
        }
    });
}

function slider(){
	var slideIndex = 1;
	showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}}
