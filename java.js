/*var numOne=document.getElementById("num-one");
var numTwo=document.getElementById("num-two");
var addSum=document.getElementById("add-sum");

numOne.addEventListener("input",add);
numTwo.addEventListener("input",add);
    function add(){
        var one=parseFloat(numOne.value) || 0;
        var two=parseFloat(numTwo.value) || 0;
        addSum.innerHTML="This sum is:"+(one+two);
    }

var p=document.getElementsByClassName("desktop");
p[2].innerHTML="For Sum";

DOM one:p.className=p.className.replace("****")
    two:p.classList.add/remove(***)
    three:p.parentElement*/

// var checklist=document.getElementById("checklist");
// var items=checklist.querySelectorAll("li");

// for(var i=0;i<items.length;i++){
//     items[i].addEventListener("click",editItem);
// }
// function editItem(){
//     this.className="edit"
//     var input=this.querySelector("input");
//     input.focus();
//     input.setSelectionRange(0,input.value.length);
// }
var beatifulgirl=document.getElementById("simon");
var secret=document.getElementById("bruce");
var yagamilight=document.getElementById("ben");
var boy=document.getElementById("boy")

beatifulgirl.addEventListener("click",picLink); 
secret.addEventListener("click",picLink);
yagamilisght.addEventListener("click",picLink);
boy.addEventListener("click",picLink);

function picLink(){
    var allImages=document.querySelectorAll("img");
    for(var i=0;i<allImages.length;i++){
        allImages[i].className="hide";
    }
    var picId=this.attributes["data-img"].value;
    var pic=document.getElementById(picId);
    if(pic.className==="hide"){
        pic.className="";
    }
    else{
        pic.className="hide"
    }
}