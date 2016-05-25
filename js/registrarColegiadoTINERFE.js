function registrarColegiado() {

               	
		//var xnumero = $("#numero").val().toLowerCase();
		//var xapellidos = $("#apellidos").val().toUpperCase();
		//var xtelefono = $("#telefono").val();
		//var xisla = $("#isla").val();		
		var xnombre = $("#nombre").val().toUpperCase();		
		var xcorreo = $("#correo").val();
		var xpa1 = $("#pa1").val();
		var xregid = $("#regId").val();
		//alert(xnombre);
		
		var xcorreo_anterior=localStorage.correo;
		var xpass_anterior=localStorage.pass;
		var xnombre_anterior=localStorage.nombre;

		if(xnombre == ""){
		alert("Escriba su nombre");
		$('#nombre').focus();
		return false;
		
		}else if(xcorreo == ""){
		alert("Escriba su correo");
		$('#correo').focus();
		return false;
		
		}else if(xpa1 == ""){
		alert("Escriba su contraseña");
		$('#pa1').focus();
		return false;
		
		}else		

		   $.ajax({
           type: "POST",
           url: "http://apptfmas.creatactil.com/php/registrocolegiado.php",
           data: ({nombre: xnombre, correo: xcorreo, regid: xregid, pa1: xpa1, correo_anterior: xcorreo_anterior, pass_anterior: xpass_anterior, nombre_anterior: xnombre_anterior}),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
					function onSuccess(data)
					{
							
					alert(data);
					
					if (data=="Datos guardados"){
					
						localStorage.correo = xcorreo;
						localStorage.pass = xpa1;
						localStorage.nombre = xnombre;
						//localStorage.numero = xnumero;				
						//localStorage.apellidos = xapellidos;
						//localStorage.telefono = xtelefono;
						//localStorage.isla = xisla;
					
						inicio();
						globo();
					}
					
					if (data=="Datos actualizados"){
					
						localStorage.correo = xcorreo;
						localStorage.pass = xpa1;
						localStorage.nombre = xnombre;
					
						inicio();
						globo();
					}
					}//fin onSuccess
			
		/*var n = xnumero.length;
		if(n == 1){
			xnumero = "38000"+xnumero;
		}else if(n == 2){
			xnumero = "3800"+xnumero;
		}else if(n == 3){
			xnumero = "380"+xnumero;
		}else{
			xnumero = "38"+xnumero;
		}*/
		
		
  }