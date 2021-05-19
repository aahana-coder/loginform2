class Form{
    constructor(){

    }

display(){
var title=createElement("h2")
title.html("CAR RACING")
title.position(130,20)

var input=createInput(' ').attribute('placeholder','Type Your Name')
 var button=createButton("PLAY")

input.position(120,200)
button.position(180,230)

button.mousePressed(function(){
    input.hide()
    button.hide()
var Name=input.value()
playercount++

var greeting=createElement("h3")
greeting.html("Hello "+Name)
greeting.position(150,100)
})


}



}