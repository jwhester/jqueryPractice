const hero = $('#input').val();
let maxHp = 100;
let hp = 100;
let atk = 5;
let def = 2;
let weapon = 0;
let armor = 0;
let exp = 0;
let expMax = 100;
let lvl = 1;
let money = 0;

function choice() {
    $("#content").html(
        "<p>What do you want to do?</p>" +
        "<button id='shop' class='next'>Online Shop</button>" +
        "<button id='job' class='next'>Job Board</button>" +
        "<button id='practice' class='next'>Practice</button>"
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
}


$("#start").click(function () {
    const hero = $('#input').val();
    if (hero.length >= 3) {
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
            "<p id='attack'>Attack: " + atk + "+" + weapon + "</p>" +
            "<p id='defense'>Defense: " + def + "+" + armor + "</p>"
        );
        $("#content").html(
            "<img class='pic' src='assets/king.png' alt=''>" +
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

function defend(hp, maxHp, def, armor, monAtk) {

}

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
        "<p id='attack'>Attack: " + atk + "+" + weapon + "</p>"
    );
    $("#defence").html(
        "<p id='defence'>Defence: " + def + "+" + armor + "</p>"
    );
}
let trenchCoat = false;
let knightArmor = false;
let galaxyArmor = false;
let woodSword = false;
let powerSword = false;
let galaxySword = false;

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
                "<div id='woodSword'>$500</div>"
            )
        }
        if (powerSword === false) {
            $('#shopspace').append(
                "<div id='powerSword'>$1500</div>"
            )
        }
        if (galaxySword === false) {
            $('#shopspace').append(
                "<div id='galaxySword'>$5000</div>"
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
                $('#attack').html(
                    "<p id='attack'>Attack: " + atk + "+" + weapon + "(wood sword)</p>"
                );
                woodSword = true;
                $('#woodSword').html(
                    "<div id='woodSword' style='color: darkgray'>SOLD OUT</p>"
                );
                $('#woodSword').click(function () {
                    alert('SOLD OUT');
                })
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
                $('#attack').html(
                    "<p id='attack'>Attack: " + atk + "+" + weapon + "(power sword)</p>"
                );
                powerSword = true;
                $('#powerSword').html(
                    "<div id='powerSword' style='color: darkgray'>SOLD OUT</div>"
                );
                $('#powerSword').click(function () {
                    alert('SOLD OUT');
                })
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
                $('#attack').html(
                    "<p id='attack'>Attack: " + atk + "+" + weapon + "(galaxy sword)</p>"
                );

                galaxySword = true;
                $('#galaxySword').html(
                    "<div id='galaxySword' style='color: darkgray'>SOLD OUT</div>"
                );
                $('#galaxySword').click(function () {
                    alert('SOLD OUT');
                })
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
                "<div id='trenchCoat'>$500</div>"
            )
        }
        if (knightArmor === false) {
            $('#shopspace').append(
                "<div id='knightArmor'>$1500</div>"
            )
        }
        if (galaxyArmor === false) {
            $('#shopspace').append(
                "<div id='galaxyArmor'>$5000</div>"
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
                $('#defense').html(
                    "<p id='defense'>Defense: " + def + "+" + armor + "(trench coat)</p>"
                );
                $('#heroBackground').html(
                "<img id='hero' src='assets/trenchCoat.png' alt=''>"
                );
                trenchCoat = true;
                $('#trenchCoat').html(
                    "<div id='trenchCoat' style='color: darkgray'>SOLD OUT</div>"
                );
                $('#trenchCoat').click(function () {
                    alert('SOLD OUT');
                })
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
                $('#defence').html(
                    "<p id='defense'>Defense: " + def + "+" + armor + "(knight armor)</p>"
                );
                $('#heroBackground').html(
                    "<img id='hero' src='assets/knightArmor.png' alt=''>"
                );
                knightArmor = true;
                $('#knightArmor').html(
                    "<div id='knightArmor' style='color: darkgray'>SOLD OUT</div>"
                );
                $('#knightArmor').click(function () {
                    alert('SOLD OUT');
                })
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
                $('#defense').html(
                    "<p id='defense'>Defense: " + def + "+" + armor + "(galaxy armor)</p>"
                );
                $('#heroBackground').html(
                    "<img id='hero' src='assets/galaxyArmor.png' alt=''>"
                );
                galaxyArmor = true;
                $('#galaxyArmor').html(
                    "<div id='galaxyArmor' style='color: darkgray'>SOLD OUT</div>"
                );
                $('#galaxyArmor').click(function () {
                    alert('SOLD OUT');
                })
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
let job1 = false;
let job2 = false;
let job3 = false;
let job4 = false;
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
            }
        })
    }
    function addMoney(moneyAmount) {
        money += moneyAmount;
    }




