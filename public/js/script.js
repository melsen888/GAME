var diesel = new Audio ('/public/sound/diesel.mp3')
var stop = new Audio ('/public/sound/stop.mp3')

function main(task){
    if (task == 'play'){
        diesel.loop = true;
        diesel.play();       
        document.getElementById('play').style.backgroundImage = 'url(/public/img/road.gif)'
        document.getElementById('play').style.backgroundRepeat = "no-repeat";
        document.getElementById('play').style.backgroundPosition = "left";
        document.getElementById('play').style.backgroundSize = "60%";
    }
    if (task == 'stop'){
        // stop car 
        // freeze Gif :D
        do {
            diesel.loop = false;
            var timeArray = presentTime.split(/[:]+/);
            var m = timeArray[0];
            var s = checkSecond((timeArray[1] - 1 ));
            if (s==3){m=m-1}
            if (s == 0 && mm == 0 ){
                stop.play();
            }
        }
        while (diesel.loop == true)
    }
}
