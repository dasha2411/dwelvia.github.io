const logbutton = document.getElementById("loginbutton");
const logdiv = document.getElementById("logindiv");
const xxbutton = document.getElementById("Xbutton");
const imgdiv = document.getElementById("imgdivid");
const imgsearch = document.querySelectorAll(".imgcl");
const searchinput = document.getElementById("searchid");
const schformid = document.getElementById("searchformid");

logbutton.addEventListener("click", ()=>{ //робимо вікно видимим
    logdiv.style.display = "block";
});

xxbutton.addEventListener("click", ()=>{ //робимо вікно невидимим
    logdiv.style.display = "none";
});



searchinput.addEventListener("keyup", function(){
    const keywords = searchinput.value.toLowerCase().trim();
    imgsearch.forEach(item=>{
    const display = item.dataset.tags.toLowerCase();
    if(display.includes(keywords) || keywords===""){
        item.classList.remove("hidden")
    }
    else{
        item.classList.add("hidden");
    }
    });
    if(keywords !== ""){
        imgdiv.classList.add("row-layout");
    }
    else{
        imgdiv.classList.remove("row-layout"); 
    }
});

if(schformid){
    schformid.addEventListener("submit",function(event){
        event.preventDefault();
});
}
