function rand(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}


(function(document, undefined) {

    var winner = document.querySelector('#winner span'),

        spin = document.getElementById('start'),
        
        is_get = 0,
        
        playerz,

        last;

spin.addEventListener('click', function() {

    spin.disabled = true;

    if(is_get == 0){
        
       playerz = JSON.parse(localStorage["players"]);
            
       is_get++;
    }

    get_winner(playerz.filter(function(name) {
    
    return name !== "";

    }));

}, false);

function get_winner(names) {

    var index = -1, looper;
    

(function __cycle() {

    var name = names[++index % names.length];

    winner.textContent = name;

    looper = setTimeout(__cycle, 20);

})();

    setTimeout(function() {

        var place = names.indexOf(winner.textContent);

        spin.disabled = false;

        playerz.splice(place,1);

        clearTimeout(looper);

        winner.textContent;

        $('#winners ul ol').append("<li>" + winner.textContent + "</li>");
            
        }, rand(350, 3000));    
    }
})(document);