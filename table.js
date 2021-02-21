// This is what I actually want 

function printTab() {
    let d = document.getElementById('AA');
    let b = document.getElementById('TT');
    let a = document.getElementById('AA').value;
    document.getElementById("nTab").innerHTML = `${a}`; // for showing Table of ${a}

    b.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        c = `${a} X ${i} = ${a * i} `;
        b.innerHTML = b.innerHTML + c + "</br>";

    }
    b.style.display = "block";
    d.value = "";

}
// for clearing the table

function clearTab() {
    let b = document.getElementById('TT');
    b.innerHTML = "";
    document.getElementById("nTab").innerHTML = "";

}

// Trigger for pressing enter key 

let input = document.getElementById("AA");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("sub").click();
    } else if (event.keyCode === 8) {
        document.getElementById("clearTab").click();
    }
});