function nav_drop() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
        var x1 = document.getElementsByClassName("content")[0];
        unfade(x1);
    } else {
        x.style.display = "block";
        var x1 = document.getElementsByClassName("content")[0];
        fade(x1);
    }
}
function unfade(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function() {
        if (op >= 1)
            clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
}
function fade(element) {
    var op = 1;
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
}
