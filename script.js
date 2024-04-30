const hourele=document.querySelector("#hours");
const minuteele=document.querySelector("#minutes");
const secondele=document.querySelector("#seconds");
const miliele=document.querySelector("#miliseconds");
const lapsdiv=document.querySelector(".lapsdiv");
const start=document.querySelector("#start").addEventListener("click",StartTimer);
const stop=document.querySelector("#stop").addEventListener("click",StopTimer);
const restart=document.querySelector("#restart").addEventListener("click",ReStartTimer);

let interval;
let [hour,minute,second,mili]=[0,0,0,0];
function UpdateTimer()  {
    
    mili++;
    if(mili==100){
        mili=0;
        second++;
        if(second==60){
            second=0;
            minute++;
            if(minute==60){
                minute=0;
                hour++;
            }
        }
    }

    
   
    //update in the screen

    hourele.innerText=hour.toString().padStart(2,'0');
    minuteele.innerText=minute.toString().padStart(2,'0');
    secondele.innerText=second.toString().padStart(2,'0');
    miliele.innerText=mili.toString().padStart(2,'0');
}

function StartTimer(){
    interval=setInterval(UpdateTimer,10);
}
function StopTimer(){
    clearInterval(interval);

    const laps=document.createElement("div");
    laps.classList.add("laps");

    const lapshour=document.createElement("h1");
    lapshour.classList.add("lapsheadding");
    const lapsminute=document.createElement("h1");
    lapsminute.classList.add("lapsheadding");
    const lapssecond=document.createElement("h1");
    lapssecond.classList.add("lapsheadding");
    const lapsmili=document.createElement("h1");
    lapsmili.classList.add("lapsheadding");

    lapshour.innerText=hourele.innerText;
    lapsminute.innerText=minuteele.innerText;
    lapssecond.innerText=secondele.innerText;
    lapsmili.innerText=miliele.innerText;

    const para=document.createElement("p");

    para.innerText=`${lapshour.innerText}:${lapsminute.innerText}:${lapssecond.innerText}:${lapsmili.innerText}`

    laps.appendChild(para);
    lapsdiv.appendChild(laps);

}
function ReStartTimer(){
    clearInterval(interval);
    hourele.innerText="00";
    minuteele.innerText="00";
    secondele.innerText="00";
    miliele.innerText="00";
    
    lapsdiv.innerHTML="";

    
}