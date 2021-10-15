let minEl = document.getElementById("hour");
let secEl = document.getElementById("minute");
let milsecEl = document.getElementById("second");


let timer1 = null;
let i = 0;
let j = 0;
let k = 0;
let m = 0;

function stop() {
    m = 1;
    
}

function start() {  
    m = 0;
    var id1 = setInterval(milisec,1);
    let id2 = setInterval(secFu,1000);
    let id3 = setInterval(minFu,60000)

  
    function milisec () { i += 4; 
        if(i === 1000){i = 0;}
        else if(m == 1){clearInterval(id1)}
        else{milsecEl.innerHTML = i; }}
    
    function secFu(){ j++; 
        if(j === 60){j = 0;}
        else if(m == 1){clearInterval(id2)}
        else{secEl.innerHTML = j + " :"; }}
    
    function minFu(){ k++; 
        if(k === 60){k = 0}
        else if(m == 1){clearInterval(id3)}
        else{minEl.innerHTML = k + " :"; }}
    
     
}













