

var Name
document.getElementById("button1").onclick = function(){
    var Name = document.getElementById("text1").value
    console.log("Hello", Name)
    document.getElementById("form_lable").innerHTML = `Welcome ${Name}`;
}

