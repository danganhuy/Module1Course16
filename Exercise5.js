function Temperature(c) {
    this.c = c < -273 ? -273 : c;
    this.getC = function () {
        return this.c;
    }
    this.setC = function (c) {
        this.c = c < -273 ? -273 : c;
    }
    this.toF = function () {
        return (this.c * 9 / 5) + 32;
    }
    this.toK = function () {
        return c + 273.15;
    }
}

let temp = new Temperature(25);
document.getElementById("result").innerHTML =
`To F: ${temp.toF()} <br>
To K: ${temp.toK()}`;