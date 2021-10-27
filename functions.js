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
