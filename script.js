function drag(ev)
{
    console.log(" in the drag ")
    ev.dataTransfer.setData("logo",ev.target.id);    
}

function allowDrag(ev)
{
   
    ev.preventDefault();
    console.log("In the allow drag")
    
}


//when user drag.

function drop(ev)
{
    let id=ev.dataTransfer.getData("logo");
    ev.target.appendChild(document.getElementById(id));
}
