function sound(instrument) {

    switch(instrument) {
        case 'clarnet':
            var music = new Audio('sounds/clarnet.mp3');
            var div = document.querySelector('#clarnet');
            div.style.boxShadow = "0px 10px 25px 5px rgba(71,243,255,1)";
            music.play();
            setTimeout(clearShadow, 4000);
            break;
        case 'duduk':
            var music = new Audio('sounds/duduk.mp3');
            var div = document.querySelector('#duduk');
            div.style.boxShadow = "0px 10px 25px 5px rgba(71,243,255,1)";
            music.play();
            setTimeout(clearShadow, 5500);
            break;
        case 'fagot':
            var music = new Audio('sounds/fagot.mp3');
            var div = document.querySelector('#fagot');
            div.style.boxShadow = "0px 10px 25px 5px rgba(71,243,255,1)";
            music.play();
            setTimeout(clearShadow, 6000);
            break;
        case 'horn':
            var music = new Audio('sounds/horn.mp3');
            var div = document.querySelector('#horn');
            div.style.boxShadow = "0px 10px 25px 5px rgba(71,243,255,1)";
            music.play();
            setTimeout(clearShadow, 5000);
            break;
        case 'volynka':
            var music = new Audio('sounds/volynka.mp3');
            var div = document.querySelector('#volynka');
            div.style.boxShadow = "0px 10px 25px 5px rgba(71,243,255,1)";
            music.play();
            setTimeout(clearShadow, 6000);
            break;
        case 'volynka':
            var music = new Audio('sounds/volynka.mp3');
            var div = document.querySelector('#volynka');
            div.style.boxShadow = "0px 10px 25px 5px rgba(71,243,255,1)";
            music.play();
            setTimeout(clearShadow, 6000);
            break;
        case 'zaleika':
            var music = new Audio('sounds/zaleika.mp3');
            var div = document.querySelector('#zaleika');
            div.style.boxShadow = "0px 10px 25px 5px rgba(71,243,255,1)";
            music.play();
            setTimeout(clearShadow, 4000);
            break;
        default:
            break;
    }

    function clearShadow() {
        div.style.boxShadow = "0px 10px 20px 5px rgba(0,0,0,0.75)";
    }
}

