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

window.onload=trocaMenu();


/*** Funções para funcionamento de slider *** Início ***/
var slideIndex = 1;

function slider(){
	showSlides(slideIndex);
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
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}
/*** Funções para funcionamento de slider *** Final ***/


/*** Função que copia url ***/
function copiarTexto() {
        var textoCopiado = document.getElementById("url-destino");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("A url do nosso site foi copiada com sucesso! Agora é só utilizar as teclas Ctrl+V e compartilhar com seus amigos!");
   }
 

/*** Função que realiza download do jogo ***/ 
function download(){
	window.location.href = "../midias/docs/Season_Gems.zip";
}

/*** Função de aviso de Cookies ***/
/*** function avisoCookies() {
  if (!localStorage.pureJavaScriptCookies) {
    document.querySelector(".box-cookies").classList.remove('hide');
  }
  
  const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "accept");
  };
  
  const btnCookies = document.querySelector(".btn-cookies");
  
  btnCookies.addEventListener('click', acceptCookies);
}***/



