class Player{
constructor(){

}
getplayercount(){
    var playercountref=database.ref("playercount")
    playercountref.on("value",function(data) {
     playercount=data.val()   
    })
}
updatecount(count){
    database.ref("/").update({
        playercount:count
    })
}
updatename(name){
    var playerindex="player"+playercount
    database.ref(playerindex).update({
       playername:name
    })
}
}
































