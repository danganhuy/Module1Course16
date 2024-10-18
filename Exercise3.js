function Start() {
    document.getElementById("myCanvas").style.border = "1px solid black";
    MORECIRCLE();
}
function RandomRadius() {
    return Math.floor(Math.random() * 71 + 5);
}
function RandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
function RamdomX() {
    return Math.floor(Math.random() * 251 + 25);
}
function RamdomY() {
    return Math.floor(Math.random() * 101 + 25);
}
function CreateCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.arc(RamdomX(), RamdomY(), RandomRadius(), 0, 2 * Math.PI);
    ctx.fillStyle = RandomColor();
    ctx.fill();
}
function MORECIRCLE() {
    for (let i = 0; i < 100; i++) {
        CreateCircle()
    }
}