let ison=false;

let btn=document.querySelector(".switch");

let bulb_top=document.querySelector(".bulb-top");
let bulb_bottom=document.querySelector(".bulb-bottom");


btn.addEventListener("click",function(){
    if(ison){
        btn.classList.remove("on");
        bulb_top.classList.remove("bulb-on");
        bulb_bottom.classList.remove("bulb-on");
    }
    else{
        btn.classList.add("on");
        bulb_top.classList.add("bulb-on");
        bulb_bottom.classList.add("bulb-on");
    }
    ison =! ison;
})