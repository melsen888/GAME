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
            var start = 1000;
            var time = 17000;
            if (diesel.loop == false){
                do {
                    off.play();
                }
                while (setTimeout, 3)
            }
        }
        while (diesel.loop == true)
    }
}