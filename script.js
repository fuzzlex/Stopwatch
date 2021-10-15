let minEl = document.getElementById("min");
let secEl = document.getElementById("sec");
let milEl = document.getElementById("mil");




let i=0;
let k = 0;
let j = 0;
let id1;



function stop() {
    clearInterval(id1);
   
}


function start() {  
    function startstop() {
       
        i +=4;
        if(i == 1000){i = 0;j++};
        if(j == 60){j = 0;k++};
        milEl.innerHTML = i ;
        secEl.innerHTML = j + " :";
        minEl.innerHTML = k + " :" ;  
    }
    id1 = setInterval(startstop, 1)

    }


 






//  id1 = setInterval(milisec,1);
//  id2 = setInterval(secFu,1000);
//  id3 = setInterval(minFu,60000)


// function milisec () {
//     i += 4; 
//     if(i === 1000){i = 0;}{milEl.innerHTML = i; }
//         }

// function secFu(){
//     j++; 
//     if(j === 60){j = 0;}{secEl.innerHTML =  j + " :"; }
// }
   
// function minFu(){ k++; 
//     if(k === 60){k = 0}{minEl.innerHTML = k + " :"; }
// }





