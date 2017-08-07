var bgcolor=localStorage.bgcolor;
if(bgcolor){
    changingcolor(bgcolor);
}

function changingcolor(color){
    // var color=color.id;
    console.log(color);
    var target=document.getElementById("color");
    console.log(target);

    target.style.backgroundColor=color;

    localStorage.bgcolor=color;
}