function desconectar(){
	
	var xidioma = localStorage.idioma;
	
	if(xidioma== "en"){
		localStorage.removeItem("numero");
		$.mobile.changePage("#pagina0en")
	}else{
		localStorage.removeItem("numero");
		$.mobile.changePage("#pagina0");
		
		}
	}