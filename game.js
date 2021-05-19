class Game{
    constructor(){

    }
    start(){
if(gamestate==0){
    form=new Form()
    form.display()
    player=new Player()
    player.getplayercount()
}

getstate(){
    var gamestateref=database.ref("gamestate")
    gamestateref.on("value",function(data) {
    gamestateref=data.val()   
    })
}

updatestate(){
    database.ref("/").update({
        gamestate:state
    })
}
    }



















    
}