const ENEMIES = {

    snake:{

        name:"Enraged Snake",

        icon:"🐍",

        hp:70,

        attack:8,

        xp:25,

        coins:30

    },


    monkey:{

        name:"Enraged Monkey",

        icon:"🐒",

        hp:85,

        attack:10,

        xp:30,

        coins:35

    },


    wolf:{

        name:"Demon Wolf",

        icon:"🐺",

        hp:120,

        attack:15,

        xp:45,

        coins:55

    },


    rootDemon:{

        name:"Root Demon",

        icon:"🌳",

        hp:150,

        attack:18,

        xp:55,

        coins:70

    },


    gargan:{

        name:"GARGAN",

        icon:"👹",

        hp:450,

        attack:30,

        xp:250,

        coins:500,

        boss:true

    }

};


function getEnemyForRoom(room){

    if(room === 10)
        return {...ENEMIES.gargan};

    if(room <= 3){

        return Math.random() < .5
            ? {...ENEMIES.snake}
            : {...ENEMIES.monkey};

    }

    return Math.random() < .5
        ? {...ENEMIES.wolf}
        : {...ENEMIES.rootDemon};

}
