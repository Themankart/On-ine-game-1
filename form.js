class Form{

constructor(){}

display(){
    var Title = createElement("h2");
    Title.html("Multiplayer Car Racing Game!!")
    Title.position(130,0);

    var input = createInput("Name")
    input.position(130,160);

    var button = createButton("Play!")
    button.position(250,200);
    button.mousePressed(function(){
        input.hide();
        button.hide();

    var name = input.value();
    var Greeting = createElement("h2");
    Greeting.html("Hello! "+ name);
    Greeting.position(130,160);
    })
}
    



}