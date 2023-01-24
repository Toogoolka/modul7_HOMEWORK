let counterPower = 0;
let deviceCondition = 0;

let device1Power = 115;
let device2Power = 1150;
function Devices(condition, power){
    this.deviceIs = "Electric device",
    this.turnOn = function (condition){
        if (condition === 0){
            console.log("===Включён===");
            deviceCondition = 1;
        }
    }
    this.turnOff = function (condition){
        if(condition === 1){
            console.log("===Выключен===");
            deviceCondition = 0;
        }
    }
}
Devices.prototype.getPower = function (condition, power) {
    if (condition === 0) {
        counterPower += 0;
    } else if (condition === 1) {
        counterPower += power;
    } else {
        console.log("Прибор может быть только в состоянии 1-включен и 0-выключен")
    }
}

function WhichDevice(condition, power, name){
    this.name = name,
    this.pluged = condition
}
WhichDevice.prototype = new Devices();

const lamp = new WhichDevice(deviceCondition, device1Power, "Table Lamp");
console.log(lamp);
const computer = new WhichDevice(deviceCondition, device2Power, "My computer");
console.log(computer);

lamp.turnOn(deviceCondition);
lamp.getPower(deviceCondition, 115);
computer.turnOn(deviceCondition)
computer.getPower(deviceCondition, 1150)

console.log(`Общая потребляемая мощность приборов: ${counterPower}`)


