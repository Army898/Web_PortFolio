var Topic1;
var Comment1;
var Comment2;

window.onload = setvar;
function setvar(){
    Topic1 = document.getElementById("topic1");
    Comment1 = document.getElementById("comment1");
    Comment2 = document.getElementById("comment2");

}
function postFunction(){
    var Text1 = document.getElementById("text1").value;
    if(Topic1.innerText == ""){
        Topic1.innerText = Text1;
    }
    else if(Comment1.innerText == ""){
        Comment1.innerText = Text1;
    }
    else if(Comment2.innerText == ""){
        Comment2.innerText = Text1;
    }
    document.getElementById("text1").value = "";
}
function clearFunction(){
    Topic1.innerText = null;
    Comment1.innerText = null;
    Comment2.innerText = null;
}