let playerData = loadGame();


function setupPlayer(){

    const character =
        Number(
            localStorage.getItem("selectedCharacter")
        ) || 1;


    playerData.character = character;


    if(character === 1){

        playerData.maxHp = 100;
        playerData.hp = 100;
        playerData.attack = 18;

    }

    else{

        playerData.maxHp = 180;
        playerData.hp = 180;
        playerData.attack = 28;

    }


    saveGame(playerData);

}


function gainXP(amount){

    playerData.xp += amount;


    const needed =
        playerData.level * 100;


    if(playerData.xp >= needed){

        playerData.xp -= needed;

        playerData.level++;

        playerData.maxHp += 15;

        playerData.hp =
            playerData.maxHp;

        playerData.attack += 3;

        alert(
            "🎉 LEVEL UP!\n\nLevel " +
            playerData.level
        );

    }


    saveGame(playerData);

}


function gainCoins(amount){

    playerData.coins += amount;

    saveGame(playerData);

}


function takeDamage(amount){

    playerData.hp -= amount;

    if(playerData.hp < 0)
        playerData.hp = 0;

    saveGame(playerData);

}


function heal(amount){

    playerData.hp += amount;

    if(playerData.hp > playerData.maxHp)
        playerData.hp = playerData.maxHp;

    saveGame(playerData);

}


function addRage(amount){

    playerData.rage += amount;

    if(playerData.rage > 100)
        playerData.rage = 100;

    saveGame(playerData);

}
