//var xusuario = "";
//var xusuario2 = "";
//var xpa2 = "";

function loginVal2(){
		
		var xusuario = $("#usuario").val();
		var xpa2 = $("#pa2").val();
		
		
		if(xusuario == ""){
			//navigator.notification.alert("Introduzca su correo electrónico"); 
			alert("Introduzca su correo electrónico");
			$('#usuario').focus();
			return false;
			
		}else if(xpa2 ==  ""){
			//navigator.notification.alert("Escriba contraseña ");
			alert("Escriba la contraseña");
			$('#pa2').focus();
			return false;
						
		}else
	
	$.ajax({
		url: 'http://apptfmas.creatactil.com/php/login2.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		data: {usuario: xusuario, pa2: xpa2},
		error: function() {
       	 //navigator.notification.alert("Ha surgido un error.\nPor favor compruebe su conexión a internet o el correo y la contraseña.");
		 alert("Ha surgido un error.\nPor favor compruebe su conexión a internet o el correo y la contraseña.");
		 $.mobile.changePage("#pagina0");
		 
   		},
		success: function(data, response){

			if (response != 'error'){
    		
			$.each(data, function(index,item){
		
				
				//localStorage.numero = item.numero;
				localStorage.nombre = item.nombre;
				//localStorage.apellidos = item.apellidos;
				//localStorage.telefono = item.movil;
				localStorage.correo = item.correo;
				//localStorage.isla = item.grupo;
				localStorage.pass = xpa2;				
				$.mobile.changePage("#page1");
				
				
			});
			init();
			comprobarid();
			}
		},

});

}


function comprobarid(){
	
	var xregid = $("#regId").val();
	//var xnumero = localStorage.numero;
	var xcorreo = localStorage.correo;
	
	if ((xregid != "") && (xcorreo != "")){
		$.ajax({
		url: 'http://apptfmas.creatactil.com/php/comprobarid.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {regid: xregid, correo: xcorreo},
		
			});
	
	}
}