const calcPaye = (grossPay) => {
    if (grossPay > 0 && grossPay <= 24000){
        return parseInt(grossPay * 0.1)
    } else if (grossPay > 24000 && grossPay <= 32333){
        return parseInt((grossPay - 24000) * 0.25) + 2400
    } else if (grossPay > 32333){
        return parseInt((grossPay - 32333) * 0.3) + 4484
    } else {
        return "Please enter a Valid Number"
    }
}



const nhif = (grossPay) => {
    if (grossPay > 0 && grossPay < 6000){
        return 150
    } else if(grossPay >= 6000 && grossPay < 8000){
        return 300
    } else if(grossPay >= 8000 &&  grossPay < 12000){
        return 400
    } else if(grossPay >= 12000 && grossPay < 15000){
        return 500
    } else if(grossPay >= 15000 && grossPay < 20000){
        return 600
    } else if(grossPay >= 20000 && grossPay < 25000){
        return 750
    } else if(grossPay >= 25000 && grossPay < 30000){
        return 850
    } else if(grossPay >= 30000 && grossPay < 35000){
        return 900
    } else if(grossPay >= 35000 && grossPay < 40000){
        return 950
    } else if(grossPay >= 40000 && grossPay < 45000){
        return 1000
    } else if(grossPay >= 45000 && grossPay < 50000){
        return 1100
    } else if(grossPay >= 50000 && grossPay < 60000){
        return 1200
    } else if(grossPay >= 60000 && grossPay < 70000){
        return 1300
    } else if(grossPay >= 70000 && grossPay < 80000){
        return 1400
    } else if(grossPay >= 80000 && grossPay < 90000){
        return 1500
    } else if(grossPay >= 90000 && grossPay < 100000){
        return 1600
    } else if(grossPay >= 100000){
        return 1700 
    }  
}

const nssf = (grossPay) => {
   return parseInt(grossPay *= 0.06)
}

function netPay(grossPay){
    let netSalary = grossPay - nhif(grossPay) - calcPaye(grossPay) - nssf(grossPay)
    return parseInt(netSalary)
}

function displayDeductions(event){
    let grossSalary = document.getElementById('grossPay').value 
    let salary = Boolean(grossSalary) ? grossSalary : 0;
    document.getElementById('net-salary').textContent = (`Ksh ${netPay(salary)}`)
    document.getElementById('paye').textContent = (`Ksh ${calcPaye(salary)}`)
    document.getElementById('nssf').textContent = (`Ksh ${nssf(salary)}`)
    document.getElementById('nhif').textContent = (`Ksh ${nhif(salary)}`)
}