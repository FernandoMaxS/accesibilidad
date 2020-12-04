var dropdown_btns = document.getElementsByClassName("dropdown");
for (var i=0; i < dropdown_btns.length; i++) {
	var dd_btn= dropdown_btns[i];
    dd_btn.parentNode.addEventListener("mouseover",function(){ 
    	menu=dd_btn.nextElementSibling; 
    	menu.style.display="block";
    });
    dd_btn.parentNode.addEventListener("mouseout",function(){ 
        menu=dd_btn.nextElementSibling;
        menu.style.display="none";
    });

    /*incluir función evento click*/
};


/*incluir función para tecla ESC*/
