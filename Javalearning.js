const title = document.getElementById("abc");
const movie = document.getElementById("movie");
const sur = document.getElementById("sur");
let a = 0;

function changeText(){
    movie.src = "https://www.youtube.com/embed/_bSEfx6D8mA?controls=0&amp;autoplay=1&amp;playlist=_bSEfx6D8mA&amp;loop=1&mute=0";
    title.innerHTML = "Surprise motherfucker!";
    title.style.color = "red";
    movie.style.display = "block";
    sur.style.display = "none";
}
/* switch(a){
    case 0: 
        function handleClick(){
            title.style.color = "blue";
            a = a + 1;
            console.log(a);
    }
    case 1:
        function handleClick(){
            title.style.color = "green";
            a = a + 1;
            console.log(a);
        }
    case 2:
        function handleClick(){
            title.style.color = "yellow";
            a = a + 1;
            console.log(a);
        }
    case 3:
        function handleClick(){
            title.style.color = "white";
            a = a - 3; 
            console.log(a);
    }
}
*/
function handleClick(){
 if (a==0){
        title.style.color = "blue";
        a = a + 1;
        console.log(a);
}
else if(a==1){
        title.style.color = "green";
        a = a + 1;
        console.log(a);
}

else if(a==2){
        title.style.color = "yellow";
        a = a + 1;
        console.log(a);
}
else if(a==3){
    title.style.color = "red";
    a = a + 1;
    console.log(a);
}
else{
        title.style.color = "white";
        a = a - 4; 
        console.log(a);
}
}

function init(){
    title.addEventListener("mouseenter", handleClick)
}
init();

console.log(title);