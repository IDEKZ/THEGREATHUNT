class Player {
  constructor(){
  }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
      });
    }
    /*getFinished(){
      //var finishedPlayersRef=database.ref('finished');
      //finishedPlayersRef.on("value",(data)=>{
      //finished=data.val();
      //})
   }
    static updateFinished(){
      database.ref('/').update({
        finished: finished+1
      })
    }*/
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }