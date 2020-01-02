const hero = $('#input').val();
let maxHealth = 100;
let health = 100;

$("#start").click(function(){
    const hero = $('#input').val();

    $("#nav").html(
        "<div id='heroBackground'>" +
        "<img id='hero' src='assets/hero.png' alt=''>" +
        "</div>" +
        hero +
        "<p id='health'>Health: "+ health + "/" + maxHealth +"</p>"

    );
    $("#content").html(
        "<img src='assets/king.png' alt=''>" +
        "<h1>Chapter 1</h1>" +
        "<p class='text' style='display: none'>We find ourselves in a hidden dungeon on an unknown planet in an unknown</p>" +
        "<p class='text' style='display: none'> time and space. </p>" +
        "<button class='next'>Next</button>"
    );
    $('.text').show("slow");
    $('.next').click(function (){

        let maxHealth = 100;
        let health = 100;
        let monster = 20;
        let monsterMax= 20;
        $("#content").html(
            "<img src='assets/wolf.png' alt=''>" +
            "<p>Wolf</p>" +
            "<p id='monsterHealth'>Health: "+ monster + "/" + monsterMax +"</p>" +
            "<br>"+
            "<button id='damage'>Attack</button>"
        );
        $("#damage").click(function () {
            monster -= 10;
            health -= 10;
            $("#health").html(
                "<p id='health'>Health: "+ health + "/" + maxHealth +"</p>"
            );
            $("#monsterHealth").html(
                "<p id='monsterHealth'>Health: "+ monster + "/" + monsterMax +"</p>"
            );
            if(health <= 0){
                alert("You're dead!")
            }
        })
    })
});

