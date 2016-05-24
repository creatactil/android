function cargarPrograma() {
				
		$.mobile.changePage("#page18", {transition: "fade"}, true, true);
	
		//$('#page18 .contenedorPrograma').empty();
        //$("#cargando-tfmas").show();
		
		var altura_iframe = $(window).height() - 109;
		//alert(altura_iframe);
						
		$('.contenedorPrograma').html(

		  '<iframe class="iframe_completo" src="" style="width: 100%; height: '+altura_iframe+'px; border: none;">'+
			'<p>Descargando Programa...</p>'+
		  '</iframe>'
		);
		
		$('.iframe_completo').css({'background-image' : 'url(imagenes/cargando.svg)', 
		                           'background-repeat': 'no-repeat',
								   'background-position-x': 'center',
								   'background-position-y': 'center'});
								   

		if (localStorage.idioma == 'en') {
			$(".iframe_completo").prop('src','http://congresotenerifemassostenible.com/programa/?lang=en');
			$('#titulo-programa').html('Programme');

		}else{
			$(".iframe_completo").prop('src','http://congresotenerifemassostenible.com/programa/');
			$('#titulo-programa').html('Programa');
		}

		//$("#cargando-tfmas").hide();
			
}

function cargarPatrocinadores() {
				
		$.mobile.changePage("#page16", {transition: "fade"}, true, true);
	
		//$('#page18 .contenedorPrograma').empty();
        //$("#cargando-tfmas").show();
		
		var altura_iframe = $(window).height() - 109;
		//alert(altura_iframe);
						
		$('.contenedorPatrocinadores').html(

		  '<iframe class="iframe_completo" src="" style="width: 100%; height: '+altura_iframe+'px; border: none;">'+
			'<p>Descargando Programa...</p>'+
		  '</iframe>'
		);
		
		$('.iframe_completo').css({'background-image' : 'url(imagenes/cargando.svg)', 
		                           'background-repeat': 'no-repeat',
								   'background-position-x': 'center',
								   'background-position-y': 'center'});

		$(".iframe_completo").prop('src','http://congresotenerifemassostenible.com/patrocinios/');

		if (localStorage.idioma == 'en') {
			$('#titulo-patrocinadores').html('Sponsorship');

		}else{
			$('#titulo-patrocinadores').html('Patrocinadores');
		}
			
}
