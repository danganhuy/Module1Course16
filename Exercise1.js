function MyDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }
    this.setDay = function(day) {
        this.day = day;
    }
    this.setMonth = function(month) {
        this.month = month;
    }
    this.setYear = function(year) {
        this.year = year;
    }
    this.toString = function() {
        return `${this.day} - ${this.month} - ${this.year}`;
    }
}
let date1 = new MyDate(31,5,2002);
document.write(date1.toString());