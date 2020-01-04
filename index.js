const hero = $('#input').val();
let maxHp = 100;
let hp = 100;
let atk = 5;
let def = 2;
let weapon = 0;
let weaponName = "(none)";
let armor = 0;
let armorName = "(none)";
let exp = 0;
let expMax = 100;
let lvl = 1;
let money = 50000;
let trenchCoat = false;
let knightArmor = false;
let galaxyArmor = false;
let woodSword = false;
let powerSword = false;
let galaxySword = false;
let job1 = false;
let job2 = false;
let job3 = false;
let job4 = false;
let introMusic = document.getElementById("music");

$("#intro").click(function () {
    introMusic.play();
    $("#main").addClass("show");
    $("#intro").addClass("hide");

    console.log("clicked")
});


$("#start").click(function () {
    const hero = $('#input').val();
    if (hero.length >= 3) {
        introMusic.pause();
        $("#nav").html(
            "<div id='heroBackground' style='margin: 10px'>" +
            "<img id='hero' src='assets/hero.png' alt=''>" +
            "</div>" +
            "<br>" +
            hero +
            "<p id='level'>Level:" + lvl + "</p>" +
            "<p id='exp'>EXP:" + exp + "/" + expMax + "</p>" +
            "<p id='money'>Money: $" + money + "</p>" +
            "<p id='health'>Health: " + hp + "/" + maxHp + "</p>" +
            "<p id='attack'>Attack: " + atk + "+" + weapon + weaponName + "</p>" +
            "<p id='defense'>Defense: " + def + "+" + armor + armorName + "</p>"
        );
        $("#content").html(
            "<h1>Chapter 1</h1>" +
            "<p class='text' style='display: none'>We find ourselves deep in the outer reaches of space looking for new work.</p>" +
            "<p>You are the great Space Bounty Hunter, </p>" +
            hero +
            ", and now we must find a new job." +
            "<button class='next'>Next</button>"
        );
        $('.text').show("slow");

    } else {
        alert("Name must be at least 3 characters long!")
    }
    $('.next').click(function () {
        choice()
    });


});

function choice() {
    $("#content").html(
        "<p>What do you want to do?</p>" +
        "<button id='shop' class='next'>Online Shop</button>" +
        "<button id='job' class='next'>Job Board</button>" +
        "<button id='practice' class='next'>Practice</button>" +
        "<button id='heal' class='next'>Rest</button>"
    );
    $('#shop').click(function () {
        shop();
    });
    $('#job').click(function () {
        job();
    });
    $('#practice').click(function () {
        practice();
    });
    $('#heal').click(function () {
        hp = maxHp;
        $("#health").html(
            "<p id='health'>Health: " + hp + "/" + maxHp + "</p>"
        );
    });
}

// function attack(monster, monsterMax, monsterDef, atk, weapon) {
//
//     let attack = Math.round(Math.random() * (atk - (atk / 2)) + (atk / 2));
//     let monDef = Math.round(Math.random() * (monsterDef - (monsterDef / 2)) + (monsterDef / 2));
//     monster = Math.round(monster - ((attack + weapon) - monDef));
//     $("#monsterHealth").html(
//         "<p id='monsterHealth'>Health: " + monster + "/" + monsterMax + "</p>"
//     );
//
// }


function levelUp(expGain) {
    exp += expGain;
    if (exp >= expMax) {
        let leftOverExp = exp - expMax;
        lvl += 1;
        expMax += 50;
        exp = leftOverExp;
        atk += 2;
        def += 2;
        maxHp += 10;
        hp = maxHp;
    }
    $("#level").html(
        "<p id='level'>Level:" + lvl + "</p>"
    );
    $("#exp").html(
        "<p id='exp'>EXP:" + exp + "/" + expMax + "</p>"
    );
    $("#health").html(
        "<p id='health'>Health: " + hp + "/" + maxHp + "</p>"
    );
    $("#attack").html(
        "<p id='attack'>Attack: " + atk + "+" + weapon + weaponName + "</p>"
    );
    $("#defense").html(
        "<p id='defence'>Defense: " + def + "+" + armor + armorName + "</p>"
    );
}


function shop() {

    $('#content').html(
        "<div id='shop'>" +
        "<div id='shopspace'>" +
        "<div id='weapons'>Weapons</div>" +
        "<div id='armor'>Armor</div>" +
        "</div>" +
        "<button id='return'>Return</button>" +
        "</div>"
    );
    $('#weapons').click(function () {
        $('#shop').html(
            "<div id='shopspace'>" +
            "</div>" +
            "<button id='return'>Return</button>"
        );
        if (woodSword === false) {
            $('#shopspace').append(
                "<div id='woodSword'>Wood Sword: $500</div>"
            )
        }
        if (powerSword === false) {
            $('#shopspace').append(
                "<div id='powerSword'>Power Sword: $1500</div>"
            )
        }
        if (galaxySword === false) {
            $('#shopspace').append(
                "<div id='galaxySword'>Galaxy Sword: $5000</div>"
            )
        }
        if (woodSword && powerSword && galaxySword === true) {
            $('#shopspace').append(
                "<h1>Everything in sold out!</h1>"
            )
        }
        $('#woodSword').click(function () {
            if (money >= 500) {
                money -= 500;
                $('#money').html(
                    "<p id='money'>Money: $" + money + "</p>"
                );
                weapon = 2;
                weaponName = "(Wood Sword)";
                $('#attack').html(
                    "<p id='attack'>Attack: " + atk + "+" + weapon + weaponName + "</p>"
                );
                woodSword = true;
                shop();
            } else {
                alert("You don't have enough money!")
            }
        });
        $('#powerSword').click(function () {
            if (money >= 1500) {
                money -= 1500;
                $('#money').html(
                    "<p id='money'>Money: $" + money + "</p>"
                );
                weapon = 6;
                weaponName = "(Power Sword)";
                $('#attack').html(
                    "<p id='attack'>Attack: " + atk + "+" + weapon + weaponName +"</p>"
                );
                powerSword = true;
                shop();
            } else {
                alert("You don't have enough money!")
            }
        });
        $('#galaxySword').click(function () {
            if (money >= 5000) {
                money -= 5000;
                $('#money').html(
                    "<p id='money'>Money: $" + money + "</p>"
                );
                weapon = 10;
                weaponName = "(Galaxy Sword)";
                $('#attack').html(
                    "<p id='attack'>Attack: " + atk + "+" + weapon + weaponName +"</p>"
                );

                galaxySword = true;
                shop();
            } else {
                alert("You don't have enough money!")
            }
        });
        $('#return').click(function () {
            shop();
        })
    });
    $('#armor').click(function () {

        $('#shop').html(
            "<div id='shopspace'>" +
            "</div>" +
            "<button id='return'>Return</button>"
        );
        if (trenchCoat === false) {
            $('#shopspace').append(
                "<div id='trenchCoat'>Trench Coat: $500</div>"
            )
        }
        if (knightArmor === false) {
            $('#shopspace').append(
                "<div id='knightArmor'>Knight Armor: $1500</div>"
            )
        }
        if (galaxyArmor === false) {
            $('#shopspace').append(
                "<div id='galaxyArmor'>Galaxy Armor: $5000</div>"
            )
        }
        if (trenchCoat && knightArmor && galaxyArmor === true) {
            $('#shopspace').append(
                "<h1>Everything in sold out!</h1>"
            )
        }


        $('#trenchCoat').click(function () {
            if (money >= 500) {
                money -= 500;
                $('#money').html(
                    "<p id='money'>Money: $" + money + "</p>"
                );
                armor = 2;
                armorName = "(Trench Coat)";
                $('#defense').html(
                    "<p id='defense'>Defense: " + def + "+" + armor + armorName + "</p>"
                );
                $('#heroBackground').html(
                "<img id='hero' src='assets/trenchCoat.png' alt=''>"
                );
                trenchCoat = true;
                shop();

            } else {
                alert("You don't have enough money!")
            }
        });
        $('#knightArmor').click(function () {
            if (money >= 1500) {
                money -= 1500;
                $('#money').html(
                    "<p id='money'>Money: $" + money + "</p>"
                );
                armor = 6;
                armorName = "(Knight Armor)";
                $('#defense').html(
                    "<p id='defense'>Defense: " + def + "+" + armor + armorName + "</p>"
                );
                $('#heroBackground').html(
                    "<img id='hero' src='assets/knightArmor.png' alt=''>"
                );
                knightArmor = true;
                shop();
            } else {
                alert("You don't have enough money!")
            }
        });
        $('#galaxyArmor').click(function () {
            if (money >= 5000) {
                money -= 5000;
                $('#money').html(
                    "<p id='money'>Money: $" + money + "</p>"
                );
                armor = 10;
                armorName = "(Galaxy Armor)";
                $('#defense').html(
                    "<p id='defense'>Defense: " + def + "+" + armor + armorName + "</p>"
                );
                $('#heroBackground').html(
                    "<img id='hero' src='assets/galaxyArmor.png' alt=''>"
                );
                galaxyArmor = true;
                shop();
            } else {
                alert("You don't have enough money!")
            }
        });
        $('#return').click(function () {
            shop();
        });
    });
    $('#return').click(function () {
        choice();
    });
}

    function job() {

        $("#content").html(
            "<h3>Job Board:</h3>" +
            "<div id='jobs'></div>" +
            "<button id='return'>Return</button>"
        );
        if (job1 === false) {
            $("#jobs").append(
                "<p id='job1'>1. Kill the wolves</p>"
            )
        }
        if (job2 === false) {
            $("#jobs").append(
                "<p id='job2'>2. Do something</p>"
            )
        }
        if (job3 === false) {
            $("#jobs").append(
                "<p id='job3'>3. Fight something</p>"
            )
        }
        if (job4 === false) {
            $("#jobs").append(
                "<p id='job4'>4. Kill something</p>"
            )
        }
        if (job1 && job2 && job3 && job4 === true) {
            $('#content').html(
                "<h1>You Win!</h1>"
            )
        }
        $('#return').click(function () {
            choice();
        });

    }


    function practice() {
        let monsterMax = 50;
        let monster = monsterMax;
        $("#content").html(
            "<img src='assets/wolf.png' alt='' class='pic'>" +
            "<p>Wolf</p>" +
            "<p id='monsterHealth'>Health: " + monster + "/" + monsterMax + "</p>" +
            "<br>" +
            "<button id='damage'>Attack</button>"
        );
        $("#damage").click(function () {
            let monsterDef = 2;
            let monsterAtk = 5;
            let hit = Math.round(Math.random() * (monsterAtk - (monsterAtk/ 2)) + (monsterAtk / 2));
            let attack = Math.round(Math.random() * (atk - (atk / 2)) + (atk / 2));
            let monDef = Math.round(Math.random() * (monsterDef - (monsterDef / 2)) + (monsterDef / 2));
            monster = Math.round(monster - ((attack + weapon) - monDef));
            $("#monsterHealth").html(
                "<p id='monsterHealth'>Health: " + monster + "/" + monsterMax + "</p>"
            );
            if (monster <= 0) {
                levelUp(20);
                money += 100;
                $('#money').html(
                    "<p id='money'>Money: $" + money + "</p>"
                );
                choice();
            } else {
                hp = Math.round(hp - (hit - (def + armor)));
                $("#health").html(
                    "<p id='health'>Health: " + hp + "/" + maxHp + "</p>"
                );
            }
        })
    }





