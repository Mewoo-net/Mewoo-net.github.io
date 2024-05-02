let MName;
let MID;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function Click(){
    MName = document.getElementById("M-Name").value;
    MID = document.getElementById("M-ID").value;
    document.getElementById("EndText").innerHTML = "Welcome " + MName
    console.log(MName + " " + MID);
    sleep(3000).then(() => { location.replace("Mewoo_net.html"); });
}


