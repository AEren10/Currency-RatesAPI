const total = document.getElementById("amount");
const translate = document.getElementById("translate")
const firstinput = document.getElementById("firstCurrency")
const secondinput = document.getElementById("secondCurrency")
const outputFirst = document.getElementById("outputFirst")
const outputSecond = document.getElementById("outputSecond")
const outputResult = document.getElementById("outputResult")



total.addEventListener("input",addTotal);

function addTotal(){

    const url= `https://api.exchangerate.host/latest?base=${firstinput.value}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
    let list = data.rates

    for (index in list){
        for(endex in list){
            if(index == firstinput.value && endex == secondinput.value){

                lasti = total.value * list[index];  
                laste = total.value * list[endex];
                write(lasti,laste)   
                label();
                
            }
          }
        }
    
    });
}

function write(ema1,ema2){
    outputResult.innerHTML = `${lasti} - ${laste}`;
    
}
function label(){
    outputFirst.innerHTML = `${firstinput.value}`       //sor
    outputSecond.innerHTML = `${secondinput.value}` 
}