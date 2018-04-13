var name = prompt("Ваше имя?", "");
var Hello = document.getElementById("Hello");
var btnclk = new Array(4);
var sum = 0;

Hello.innerHTML = "Hello, " + name;
for (var i = 0; i < btnclk.length; i++) {
    btnclk[i] = 0;
}

function Add1() {
    var add1 = document.getElementById("add1");
    if (add1.style.backgroundColor == "orange") {
        add1.innerHTML = "Added";
        add1.style.backgroundColor = "green";
        add1.style.borderColor = "red";
        btnclk[0] = 1;
        var bf1 = document.getElementById("bf1");
        var cash1 = document.getElementById("cash1");
        sum = sum + Number(cash1.innerHTML);
    }
    else {
        add1.innerHTML = "Add";
        add1.style.backgroundColor = "orange";
        add1.style.borderColor = "orange";
        btnclk[0] = 0;
    }
}

function Add2() {
    var add2 = document.getElementById("add2");
    if (add2.style.backgroundColor == "orange") {
        add2.innerHTML = "Added";
        add2.style.backgroundColor = "green";
        add2.style.borderColor = "red";
        btnclk[1] = 1;
        var bf2 = document.getElementById("bf2");
        var cash2 = document.getElementById("cash2");
        sum = sum + Number(cash2.innerHTML);
    }
    else {
        add2.innerHTML = "Add";
        add2.style.backgroundColor = "orange";
        add2.style.borderColor = "orange";
        btnclk[1] = 1;
    }
}

function Add3() {
    var add3 = document.getElementById("add3");
    if (add3.style.backgroundColor == "orange") {
        add3.innerHTML = "Added";
        add3.style.backgroundColor = "green";
        add3.style.borderColor = "red";
        btnclk[2] = 1;
        var bf3 = document.getElementById("bf3");
        var cash3 = document.getElementById("cash3");
        sum = sum + Number(cash3.innerHTML);
    }
    else {
        add3.innerHTML = "Add";
        add3.style.backgroundColor = "orange";
        add3.style.borderColor = "orange";
        btnclk[2] = 0;
    }
}

function Add4() {
    var add4 = document.getElementById("add4");
    if (add4.style.backgroundColor == "orange") {
        add4.innerHTML = "Added";
        add4.style.backgroundColor = "green";
        add4.style.borderColor = "red";
        btnclk[3] = 1;
        var bf4 = document.getElementById("bf4");
        var cash4 = document.getElementById("cash4");
        sum = sum + Number(cash4.innerHTML);
    }
    else {
        add4.innerHTML = "Add";
        add4.style.backgroundColor = "orange";
        add4.style.borderColor = "orange";
        btnclk[3] = 0;
    }
}

function btn1() {
    var w = 0;
    for (var z = 0; z < btnclk.length; z++) {
        if (btnclk[z] == 1) {
            w++;
            if (z == 0)
                confirm(bf1.innerHTML+" "+cash1.innerHTML);
            else
                if (z == 1)
                    confirm(bf2.innerHTML+" "+cash2.innerHTML);
                else
                    if (z == 2)
                        confirm(bf3.innerHTML+" "+cash3.innerHTML);
                    else
                        confirm(bf4.innerHTML+" "+cash4.innerHTML);
        }
        else {
            continue;
        }
    }
    confirm(sum);
    console.log(w);
}