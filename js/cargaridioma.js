function cargarIngles() {
				
		$.mobile.changePage("#pagina0en", {transition: "fade"}, true, true);
		localStorage.idioma = 'en';
			
}

function cargarEspanol() {
				
		$.mobile.changePage("#pagina0", {transition: "fade"}, true, true);
		localStorage.idioma = '';
			
}
