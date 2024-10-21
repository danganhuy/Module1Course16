function MobilePhone() {
    this.battery = 100;
    this.currentMess = "";
    this.receivedMess = [];
    this.sentMess = [];
    this.isOn = false;
    this.checkBattery = function () {
        if (this.battery > 0 && this.isOn) {
            this.battery --;
            return true;
        }
        return false;
    }
    this.turnOn = function () {
        this.isOn = !this.isOn;
    }
    this.charge = function () {
        this.battery = 100;
    }
    this.writeMess = function (message) {
        this.currentMess = message;
    }
    this.receivingMess = function (message) {
        if (this.checkBattery()) {
            this.receivedMess.push(message);
            return true;
        }
        return false;
    };
    this.sendingMess = function (phone) {
        if (this.checkBattery())
            if (phone.receivingMess(this.currentMess)) {
                this.sentMess.push(this.currentMess);
                this.currentMess = "";
            }
    }
    this.displayReceivedMess = function () {
        if (!this.checkBattery()) {
            return "";
        }
        let s = "=== Received Message List === <br>";
        for (let i = 0; i < this.receivedMess.length; i++) {
            s += `Message ${i}: ${this.receivedMess[i]} <br>`;
        }
        return s;
    }
    this.displaySentMess = function () {
        if (!this.checkBattery()) {
            return "";
        }
        let s = "=== Sent Message List === <br>";
        for (let i = 0; i < this.sentMess.length; i++) {
            s += `Message ${i}: ${this.sentMess[i]} <br>`;
        }
        return s;
    }
}

let nokia = new MobilePhone();
let iphone = new MobilePhone();
let samsung = new MobilePhone();
nokia.turnOn();
iphone.turnOn();
samsung.turnOn();
nokia.writeMess("Hello");
nokia.sendingMess(iphone);
nokia.writeMess("How are you");
nokia.sendingMess(iphone);
samsung.writeMess("Long time no meet");
samsung.sendingMess(iphone);
iphone.turnOn();
samsung.writeMess("Married yet?");
samsung.sendingMess(iphone);
iphone.turnOn();

document.getElementById("result").innerHTML = iphone.displayReceivedMess();