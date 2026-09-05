const DEFAULT_SAVE = {

    level:1,

    xp:0,

    coins:500,

    character:1,

    hp:100,

    maxHp:100,

    attack:18,

    rage:0,

    inventory:{

        health:2,

        antidote:0,

        damage:0,

        invincible:0,

        rage:0

    }

};


function loadGame(){

    const data =
        localStorage.getItem("scienceDungeonSave");

    if(!data){

        localStorage.setItem(
            "scienceDungeonSave",
            JSON.stringify(DEFAULT_SAVE)
        );

        return {...DEFAULT_SAVE};

    }

    return JSON.parse(data);

}


function saveGame(data){

    localStorage.setItem(
        "scienceDungeonSave",
        JSON.stringify(data)
    );

}


function resetGame(){

    localStorage.removeItem(
        "scienceDungeonSave"
    );

    location.reload();

}
