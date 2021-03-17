window.setInterval(function(){
    var d = new Date();
    document.getElementById('time').innerHTML = (addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()));

    getSkyColor(d);
    placeSun(d);

    if(d.getHours() > 17 || d.getHours() < 7){
        console.log("test");
        document.getElementById('sun').classList.remove('sun');
    }

}, 1000);

function addZero(number){
    if(number < 10){
        return '0' + number;
    }
    return number;
}

function getSkyColor(date){
    if(date.getHours() >= 6 && date.getHours() <18){
        document.getElementById('achtergrondkleur').classList.remove('nacht');
        document.getElementById('achtergrondkleur').classList.add('ochtend');
    }

    if(date.getHours() >= 18 || date.getHours() < 6){
        console.log("test");
        document.getElementById('achtergrondkleur').classList.remove('ochtend');
        document.getElementById('achtergrondkleur').classList.add('nacht');
    }
}

function placeSun(date){
    switch(date.getHours()){
        case 7:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.add('sevenam');
            break;
        case 8:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('sevenam');
            document.getElementById('sun').classList.add('eigtham');
            break;
        case 9:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('eightam');
            document.getElementById('sun').classList.add('nineam');
            break;
        case 10:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('nineam');
            document.getElementById('sun').classList.add('tenam');
            break;
        case 11:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('tenam');
            document.getElementById('sun').classList.add('elevenam');
            break;
        case 12:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('elevenam');
            document.getElementById('sun').classList.add('twelvepm');
            break;
        case 13:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('twelveam');
            document.getElementById('sun').classList.add('onepm');
            break;
        case 14:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('onepm');
            document.getElementById('sun').classList.add('twopm');
            break;
        case 15:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('twopm');
            document.getElementById('sun').classList.add('threepm');
            break;
        case 16:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('threepm');
            document.getElementById('sun').classList.add('fourpm');
            break;
        case 17:
            document.getElementById('sun').classList.add('sun');
            document.getElementById('sun').classList.remove('fouram');
            document.getElementById('sun').classList.add('fivepm');
            break;
        default:
            document.getElementById('sun').classList.remove('sun');
            break;  
    }
}