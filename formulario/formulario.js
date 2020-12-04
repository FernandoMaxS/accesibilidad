function valida(){
	event.preventDefault();
	var f=document.registro;
	var nombre= f.nombre.value;
	var pais= f.pais.value;
	var genero= f.genero.value;
	var correo= f.correo.value;
	var pwd= f.pwd.value;
	var terminos= f.terminos;

	var enombre=document.getElementById("enombre");
	var epais=document.getElementById("epais");
	var egenero=document.getElementById("egenero");
	var ecorreo=document.getElementById("ecorreo");
	var epwd=document.getElementById("epwd");
	var eterminos=document.getElementById("eterminos");

	var paises=["AL","AR","BR","CA","CH","KO","EU","FR","IN","EN","IT","JP","MX","RU","TA"];
	var generos=["hombre","mujer","otro"];


	if(nombre==""){
		enombre.innerHTML="Campo obligatorio";
	}else{
		enombre.innerHTML="";
		if(specials(nombre)==1){    			
			enombre.innerHTML="Campo con caracteres no válidos";
		}else{
			enombre.innerHTML="";}
	}

	if(pais!=0){
		if(!paises.includes(pais)){
			epais.innerHTML="Opción seleccionada no válida";
		}else{
			epais.innerHTML="";}
	}

	if(genero!=0){
		if(!generos.includes(genero)){
			egenero.innerHTML="Opción seleccionada no válida";
		}else{
			egenero.innerHTML="";}
	}

	if(correo==""){
		ecorreo.innerHTML="Campo obligatorio";
	}else{
		enombre.innerHTML="";
		var filtro_correo=new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$");
		if(!filtro_correo.test(correo)){
			ecorreo.innerHTML="Campo con caracteres no válidos";
		}else{
			ecorreo.innerHTML="";}
	}

	if(pwd==""){
		epwd.innerHTML="Campo obligatorio";
	}else{
		epwd.innerHTML="";
		var filtro_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&./^])([A-Za-z\d$@$!%*?&./^]|[^ ]){8,12}$/;
		if(!filtro_pwd.test(pwd)){
			epwd.innerHTML="Campo con caracteres no válidos";
		}else{
			epwd.innerHTML="";}
	}

	if(!terminos.checked){
		eterminos.innerHTML="Campo obligatorio";
	}else{
		eterminos.innerHTML="";}


    

	var mensajes=document.getElementById("mensajes");
	if(enombre.innerHTML=="" && epais.innerHTML=="" && egenero.innerHTML=="" && epwd.innerHTML=="" && eterminos.innerHTML=="" && ecorreo.innerHTML==""){
		mensajes.style.display="block";
    	mensajes.innerHTML="Datos enviados";
	}else{
		mensajes.style.display="block";
    	mensajes.innerHTML="Hay errores revisa el formulario";
	}
}


special_chars = ["<", ">", "!", "¡", "?", "¿", "{", "}", "[", "]", "#", "$", "%", "&", "|", "\\", "*"];

function specials(campo){
	var n=0;
	special_chars.forEach(function(special){
		if((campo.indexOf(special))!=-1){n++;}
	})
	if(n>0){return 1;}else{ return 0;}
}
	
	
function my_specials(campo){
	var my_specials=""
	special_chars.forEach(function(special){
		if((campo.indexOf(special))!=-1){ my_specials+=" "+special;}
	})
	return my_specials
}