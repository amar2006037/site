let a = "This is an example of global variable in JS.";
function exe_glo1 () {
    document.getElementById("one").innerHTML = a;
}

function exe_glo2(){
    a = "The same Global variable is changed inside this function."
    document.getElementById("two").innerHTML = a;
}

function exe_glo3() {
    b = "This variable is used without declaring it."
    document.getElementById("three").innerHTML = b;
}

let c = "This is an example of ";

function exe_loc1() {
    let d = "Local Variable"
    document.getElementById("four").innerHTML = c+d;
}