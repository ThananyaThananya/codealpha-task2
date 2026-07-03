let images = document.querySelectorAll(".gallery img");

let current = 0;

function openLightbox(index){

current = index;

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=images[current].src;

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(n){

current += n;

if(current<0){
current = images.length-1;
}

if(current>=images.length){
current=0;
}

document.getElementById("lightbox-img").src=images[current].src;

}

function filterSelection(category){

let items=document.getElementsByClassName("image");

for(let item of items){

if(category=="all"){

item.style.display="block";

}
else{

if(item.classList.contains(category))
item.style.display="block";

else
item.style.display="none";

}

}

}