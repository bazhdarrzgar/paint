var mouseEvent = "empty";
var last_position_X, last_position_Y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_line = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;
    if (
        mouseEvent == "mousedown"
    ) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        console.log("last position of X = " + last_position_X + ",Y = " + last_position_Y);
        ctx.moveTo(last_position_X, last_position_Y);
        console.log("current position of X = " + current_position_of_X + ",Y = " + current_position_of_Y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();
    }
    last_position_X = current_position_of_X;
    last_position_Y = current_position_of_Y;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";

}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}