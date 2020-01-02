

$(document).ready(function () {




});


$("#start").click(function(){
    $("#nav").html(
        "<div id='heroBackground'>" +
        "<img id='hero' src='assets/hero.png' alt=''>" +
        "</div>" +
        "<p></p>"
    );
    $("#content").html(
        "<h1>Chapter 1</h1>" +
        "<p class='text' style='display: none'>We find ourselves in a hidden dungeon on an unknown planet in an unknown</p>" +
        "<p class='text' style='display: none'> time and space. </p>" +
        "<button class='next'>Next</button>"
    );
    $('.text').show("slow");
    $('.next').click(function (){

        const maxHealth = 100;
        let health = 100;
        let monster = 20;
        $("#content").html(
            "<p id='health'>Health: "+ health + "/" + maxHealth +"</p>"+
            "<br>"+
            "<button id='damage'>Attack</button>"
        );
        $("#damage").click(function () {
            monster -= 10;
            health -= 10;
            $("#health").html(
                "<p id='health'>Health: "+ health + "/" + maxHealth +"</p>"
            );
            if(health <= 0){
                alert("You're dead!")
            }
        })
    })
});

