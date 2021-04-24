class Game{

    constructor(){}

    getState(){
      
        var gameStateREF = database.ref("gameState");
        gameStateREF.on("value",function(data){

            gameState = data.val();

        })
    
    }
    update(state){
      database.ref("/").update({
          gameState:state
      })
    }
   
    Start(){
        
        if(gameState === 0){

            form = new Form();
            form.display();
        }
    }











}