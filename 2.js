let hasProp = (str, obj) => {
    console.log(obj.hasOwnProperty(str));
}

const contacts = {
    name: "Ivan",
    phone: 89051234568
}

hasProp("last_name", contacts)