let prop = obj => {
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key)
        }
    }
}


const personAmount = {
    USD: 1000,
    EUR: 1978,
    GEL: 20909,
    RUB: 153500
}

prop(personAmount);