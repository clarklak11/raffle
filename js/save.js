(function(document, undefined){
  player = null;
  save = document.getElementById('save'),
        
        save.addEventListener('click', function(){
          players = document.getElementById('player').value.split("\n");
          localStorage["players"] = JSON.stringify(players);
          
          window.alert("The following participants has been Saved / Overwrite!");
          location.reload();

        })
        
        add = document.getElementById('add'),
        
        add.addEventListener('click', function(){
          var existingParticipants = [];
          existingParticipants = JSON.parse(localStorage.getItem("players"));
          
          window.alert("The following participants has been added!");
          location.reload();
          
        if(existingParticipants == "") existingParticipants = [];
          entryParticipants = document.getElementById('player').value.split("\n");
        
        for(var i = 0; i < entryParticipants.length; i++ ){
          existingParticipants.push(entryParticipants[i]);
        
        }
        
        localStorage.setItem("players", JSON.stringify(existingParticipants));
        
    })

})(document);