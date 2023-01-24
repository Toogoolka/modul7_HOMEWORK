let options = {
    counterPower: 0,
    nameDevice1: "Светильник",
    nameDevice2: "Чайник",
    device1Power: 115,
    device2Power: 1150,
}

function Devices(power, name){
    this.deviceIs = "Electric device",
    this.turnOn = function (name, power){
        console.log(`\nподключил ${name} к сети`);
        options["counterPower"] += power;
        console.log(`Актуальная нагрузка на сеть: ${options["counterPower"]} Ватт/час.`)
    }

    this.turnOff = function (name, power){
        console.log(`\n=== Потребитель ${name} отсоединен от сети ===`);
        options["counterPower"] -= power;
        console.log(`Актуальная нагрузка на сеть: ${options["counterPower"]} Ватт/час.`)
    }
}

function WhichDevice(power, name){
    this.name = name
}
WhichDevice.prototype = new Devices();

const lamp = new WhichDevice(options["device1Power"], options["nameDevice1"]);
const computer = new WhichDevice(options["device2Power"], options["nameDevice2"]);
console.log(`\nНагрузка на сеть: ${options["counterPower"]} Ватт/час...`)

lamp.turnOn(options["nameDevice1"], options["device1Power"]);
computer.turnOn(options["nameDevice2"], options["device2Power"])
lamp.turnOff(options["nameDevice1"], options["device1Power"]);


console.log(`\n********************************
Сеть нагружена на: ${options["counterPower"]} Ватт/час`)


