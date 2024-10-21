let canvas = document.getElementById("canvas");
let result = document.getElementById("result");

function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.getDiameter = function() {
        return (width + height) * 2;
    }
    this.getArea = function() {
        return height * width;
    }
    this.draw = function() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.fill();
    }
}

let w = parseInt(prompt("Enter width: "));
let h = parseInt(prompt("Enter height: "));

let rectangle = new Rectangle(w,h);
rectangle.draw();
result.innerHTML = `Diameter: ${rectangle.getDiameter()} <br>
Area: ${rectangle.getArea()}`;