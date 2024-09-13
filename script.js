const images=document.querySelectorAll(".Slider ul img ");
const prev_btn=document.querySelector(".prev-icon");
const next_btn=document.querySelector(".next-icon");

//handle-slider
let n = 0;

function handlesilde(){
    for (let i = 0; i < images.length;i++) {
        images[i].style.display='none';
    }
    images[n].style.display='block';
}
handlesilde();

prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }else{
        n = images.length - 1;
    }
    handlesilde();
})

next_btn.addEventListener('click',(e)=>{
    if(n < images.length - 1){
        n++;
    }else{
        n = 0;
    }
    handlesilde();
})

const scrollcontainer=document.querySelectorAll(".products");
for (const item of scrollcontainer) {
    item.addEventListener("wheel",(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}