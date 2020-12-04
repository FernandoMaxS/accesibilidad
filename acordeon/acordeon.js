var containerTemas = document.getElementsByClassName("acordtema");
for (var i=0; i < containerTemas.length; i++) {
	var temaBtn= containerTemas[i].getElementsByTagName("button");
    temaBtn[0].addEventListener("click",function(){ 
    	subacord=this.parentNode.nextElementSibling;
    	if(subacord.classList.contains("open")){
    		subacord.classList.remove("open");
            this.classList.remove('openTitle');
    	}else{
    		subacord.classList.add("open");
            this.classList.add('openTitle');
    	}		        
    });
    /*listeners para mostrar el foco*/
};