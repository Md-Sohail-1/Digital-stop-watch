let sec = 0;
let mili =0;
let min =0;
let hours=0;

let timer;

function start() {
    timer = setInterval(function(){
      
        if(mili<=9){
            document.getElementById("miliseconds").innerHTML ="0"+mili;
            mili++;
        }
        else if(mili<99){
            document.getElementById("miliseconds").innerHTML = mili;
            mili++;
        }
        else if (mili==99){
            mili=0;
            
            if(sec<9){
                sec++;
            document.getElementById("seconds").innerHTML = ": "+"0"+sec;
            }
            else if (sec<59){
                sec++;
                document.getElementById('seconds').innerHTML =": "+sec;
            }
            else if(sec==59){
             sec=0;
                document.getElementById("seconds").innerHTML= ": 00";
               // min++;
                if(min<9){
                    min++;
             document.getElementById("minutes").innerHTML ="0"+min;
                }
         /*       else if (min>9){
                    min++;
                    documnet.getElementById("minutes").innerHTML =min+":";
                }*/
                
                else if ( min<59){
                    min++;
                    document.getElementById("minutes").innerHTML =min+"";
                }
                else if (min==59){
                    min=0;
                    document.getElementById("minutes").innerHTML ="00";
                  
                    if(hours<9){
                      hours++;
                    document.querySelector("#hour").innerHTML = "0"+hours;
                }
                }   
             }
          }
    },10)
    document.querySelector("#start").removeEventListener("click",start)
}

function stop() {
    clearInterval(timer);
    timer=null;
    document.getElementById("start").addEventListener("click",start);

}
 
function Reset(){
    clearInterval(timer);
    timer=null;
    document.getElementById("miliseconds").innerHTML = '00';
    document.getElementById("seconds").innerHTML = ": 00";
    document.getElementById("minutes").innerHTML = '00';
    min=00;
    sec=00;
    mili=00;
    document.getElementById("start").addEventListener("click",start);

}

document.getElementById("start").addEventListener("click",start);
document.getElementById("stop").addEventListener("click",stop);
let reset = document.getElementById("reset")
reset.addEventListener("click",Reset)

let RunningDate = setInterval(function(){
  let TodayDate = new Date();
  let TodayHour = TodayDate.getHours();
  let TodayMinutes = TodayDate.getMinutes();
  let TodaySeconds = TodayDate.getSeconds();
  document.querySelector("#date").innerHTML = `${TodayHour} : ${TodayMinutes} : ${TodaySeconds}`
},100)

//RunningDate();


