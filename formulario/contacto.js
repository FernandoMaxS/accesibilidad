function valida(){
	event.preventDefault();
	var f=document.contacto;
	var nombre= f.nombre.value;
	var correo= f.correo.value;
	var mensaje= f.mensaje.value;
	var enombre=document.getElementById("enombre");
	var ecorreo=document.getElementById("ecorreo");
	var emensaje=document.getElementById("emensaje");


	if(nombre==""){
		enombre.innerHTML="Campo obligatorio";
	}else{
		enombre.innerHTML="";
		if(specials(nombre)==1){    
			enombre.innerHTML+="El campo contiene caracteres inválidos";
		}else{enombre.innerHTML="";}
	}


	if(correo==""){
		ecorreo.innerHTML="Campo obligatorio";
	}else{
		ecorreo.innerHTML="";
		var filtro_correo=new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$");
		if(!filtro_correo.test(correo)){
			ecorreo.innerHTML="El campo contiene caracteres inválidos";
		}else{ecorreo.innerHTML="";}
	}


	if(mensaje==""){
		emensaje.innerHTML="Campo obligatorio";
	}else{
		emensaje.innerHTML="";
		if(specials(mensaje)==1){    			
			emensaje.innerHTML+="El campo contiene caracteres inválidos";
		}else{emensaje.innerHTML="";}
	}

	


    

	var mensajes=document.getElementById("mensajes");
	if(enombre.innerHTML=="" && ecorreo.innerHTML=="" && emensaje.innerHTML==""){
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

var timer;
var counterTextArea= document.getElementById("mensaje");
var counterNumber= document.getElementById("counterNumber");
var counterLive= document.getElementById("counterLive");
counterTextArea.addEventListener('input', counterLiveUpdate);
function counterLiveUpdate() {
    counterNumber.innerHTML= (140 - counterTextArea.value.length);
    clearTimeout(timer);
    timer = setTimeout( function() {
         counterLive.innerHTML=(140 - counterTextArea.value.length) + ' caracteres restantes.';
    }, 2000);
}
