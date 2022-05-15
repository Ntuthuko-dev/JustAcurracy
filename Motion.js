var menu1 = document.getElementById("showcase");
menu1.style.maxHeight="0px";

function menuToggle(){
    if(menu1.style.maxHeight=="0px"){
        menu1.style.maxHeight="300px";
    }
    else{
        menu1.style.maxHeight="0px";
    }
}