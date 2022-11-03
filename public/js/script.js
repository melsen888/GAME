var diesel = new Audio ('/public/sound/diesel.mp3')
var off = new Audio ('/public/sound/off.mp3')

function main(task){
    if (task == 'play'){
        diesel.loop = true;
        diesel.play();       
    
    }
    if (task == 'stop'){
        // stop car 
        do {
            diesel.loop = false;
            var timeArray = presentTime.split(/[:]+/);
            var m = timeArray[0]
            var s = checkSecond((timeArray[1] - 1 ));
            if (s==59){m=m-1}
            if (s == 0 && mm == 0 ){
                do {
                    off.play();
                }
            }
        }
        while (diesel.loop == true)
    }
}
