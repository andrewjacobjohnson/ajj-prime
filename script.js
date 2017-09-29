const myConsole = document.getElementById("my-console");
const myInput = document.getElementById("my-input");
myConsole.addEventListener("click", function(e) {
    myInput.focus();
})
myInput.oninput = function() {
    document.getElementById("current-command").innerHTML = myInput.value;
}
myInput.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        myConsoleSubmit();
    }
});

function myConsoleSubmit() {
    // add it to the history
    document.getElementById("console-history").innerHTML += `
    <div class="console-entry">&gt; ` + myInput.value + `</div>`;

    // perform an operation
    if (myInput.value === "clear") {
        document.getElementById("console-history").innerHTML = "";
    }

    // clear the current value
    myInput.value = "";
    document.getElementById("current-command").innerHTML = myInput.value;
}