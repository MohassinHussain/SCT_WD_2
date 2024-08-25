const startBtn = document.getElementById('start-btn')
const pauseBtn = document.getElementById('pause-btn')
const resetBtn = document.getElementById('reset-btn')

const hr = document.getElementById('hr')  
const  mi = document.getElementById('min')  
const s =  document.getElementById('sec')  
const cnt = document.getElementById('count')

let hour = 0;
let min = 0;
let secs = 0;
let count = 0;
let timer = false

startBtn.addEventListener('click', ()=>{
    timer = true;
    stopwatch();
    document.getElementById('lapssting').style.display = "flex"
    document.getElementById('lapssting').style.flexDirection = "column"
})

let array = []
// let i = 0;
let lapsDiv;
let lap;
pauseBtn.addEventListener('click', ()=>{
    timer = false;
    document.querySelector('.no-laps-heading').innerHTML= "Laps:"
    // document.getElementById('lapsses') //to update the same line of laps every time
    lap = document.createElement('p')
    lap.className = "lap"
    
    lap.innerText = `${hour.toString()} : ${min.toString()} : ${secs.toString()} : ${count.toString()}` 
    document.getElementById('lapssting').appendChild(lap)
    // document.getElementById('lap').innerHTML = `Laps:- ${hour.toString()} : ${min.toString()} : ${secs.toString()}`    
   
})
resetBtn.addEventListener('click', ()=>{
    hour = 0;
    min = 0;
    secs = 0;
    count = 0;
    timer= false

    hr.innerHTML = "00" + " : "
    mi.innerHTML = "00" + " : "
    s.innerHTML = "00" + " : "
    cnt.innerHTML = "00"

    const lapsstingDiv = document.getElementById('lapssting');
    removeAllChildNodes(lapsstingDiv);
    
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function stopwatch() {
    if(timer) {
        count++;
        if(count == 100) {
            secs++;
            count=0;
        }
        if(secs == 60) {
            min++;
            secs = 0;
        }
        if(min == 60) {
            hour++;
            min = 0;
            secs = 0;
        }
        let hrString = hour;
        let minString = min;
        let secString = secs;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (secs < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        hr.innerHTML = hrString + " : " 
        mi.innerHTML = minString + " : "
        s.innerHTML = secString + " : "
        cnt.innerHTML = countString

        setTimeout(stopwatch, 10)
    }
}