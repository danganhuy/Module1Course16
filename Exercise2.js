function Circle(radius, color) {
    this.radius = radius;
    this.color = color;
    this.getRadius = function() {
        return this.radius;
    }
    this.getArea = function() {
        return this.radius ** 2 * Math.PI;
    }
    this.toString = function() {
        return `Radius: ${this.radius}; Area: ${this.getArea().toFixed(2)}; Color: ${this.color}`;
    }
}
let circle1 = new Circle(5, "white");
let circle2 = new Circle(12, "red");
document.write(circle1.toString());
document.write("<br>" + circle2.toString());