function calcDemerit(speed){
    if(speed <= 70){
        return "OK"
    } else {
        let demeritPts = Math.floor((speed - 70)/5)
        if (demeritPts > 12){
            return "License suspended"
        } else {
            return `Demerit Points: ${demeritPts}`
        }
    }
}

function evokeSpeed(event){
    let speed = document.getElementById('speed').value
    let speedKph = Boolean(speed) ? speed : 0;
    document.getElementById('result').textContent = (calcDemerit(speedKph))
}

