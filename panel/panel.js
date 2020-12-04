var tabs = document.querySelectorAll(".tab");
for (var i=0; i < tabs.length; i++) {
    tabs[i].addEventListener("click",function(){ 
        var panels = document.querySelectorAll(".panel");
        for (var j=0; j < panels.length; j++) {
            panels[j].classList.remove("open");
        }
        pid=(this.getAttribute("id").split("-").pop()) - 1;
        panels[pid].classList.add("open"); 
    });

};