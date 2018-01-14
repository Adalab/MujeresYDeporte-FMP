// DESPLEGAR NEWS

var cardNews = document.querySelectorAll('.card-news');
function showNew() {

	if (this.classList.contains('show-card')) {
		this.classList.remove('show-card');
		for (var i = 0; i < cardNews.length; i++) {
			cardNews[i].classList.remove('opacity5');
			cardNews[i].classList.remove('scale');
		}
	} else {
		for (var i = 0; i < cardNews.length; i++) {
			cardNews[i].classList.remove('show-card');
			cardNews[i].classList.add('opacity5');
			cardNews[i].classList.add('scale');
		}
		this.classList.toggle('opacity5');
		this.classList.toggle('show-card');
	}
}
for (var i = 0; i < cardNews.length; i++) {
	cardNews[i].addEventListener('click', showNew);
}


// VALIDACIÓN DE CAMPOS DEL FORMULARIO DE NEWS CON BOOTSTRAP

(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {

      console.log("Entra");
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();
