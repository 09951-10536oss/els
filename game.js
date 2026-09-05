let room =
    Number(
        localStorage.getItem("room")
    ) || 1;


let enemy;

let attacking = false;

let rageActive = false;


setupPlayer();

enemy =
    getEnemyForRoom(room);


function updateUI(){

    document.getElementById(
        "level"
    ).textContent =
        "LV " +
        playerData.level;


    document.getElementById(
        "coins"
    ).textContent =
        "💰 " +
        playerData.coins;


    document.getElementById(
        "room"
    ).textContent =
        room;


    const hpPercent =
        (playerData.hp /
        playerData.maxHp) * 100;


    document.getElementById(
        "hpBar"
    ).style.width =
        hpPercent + "%";


    document.getElementById(
        "rageBar"
    ).style.width =
        playerData.rage + "%";


    document.getElementById(
        "enemyHpBar"
    ).style.width =
        (enemy.hp /
        enemy.maxHp) * 100 + "%";


    document.getElementById(
        "enemyName"
    ).textContent =
        enemy.name;


    document.getElementById(
        "enemy"
    ).textContent =
        enemy.icon;


    document.getElementById(
        "player"
    ).textContent =
        playerData.character === 1
        ? "🗡️"
        : "🛡️";

}


enemy.maxHp =
    enemy.hp;


updateUI();


function normalAttack(){

    if(attacking)
        return;


    attacking = true;


    let damage =
        playerData.attack;


    if(rageActive)
        damage *= 1.5;


    damage =
        Math.floor(damage);


    enemy.hp -= damage;


    showDamage(damage);


    addRage(8);


    if(enemy.hp <= 0){

        enemy.hp = 0;

        updateUI();

        setTimeout(
            enemyDefeated,
            500
        );

        return;

    }


    updateUI();


    setTimeout(
        enemyAttack,
        500
    );


    setTimeout(
        ()=>{
            attacking=false;
        },
        800
    );

}


function enemyAttack(){

    if(enemy.hp <= 0)
        return;


    let damage =
        enemy.attack;


    if(enemy.boss)
        damage *= 1.2;


    damage =
        Math.floor(damage);


    takeDamage(damage);


    showDamage(
        damage,
        true
    );


    updateUI();


    if(playerData.hp <= 0){

        setTimeout(
            gameOver,
            300
        );

    }

}


function showDamage(
    damage,
    enemyDamage=false
){

    const text =
        document.getElementById(
            "damageText"
        );


    text.textContent =
        (enemyDamage ? "-" : "+")
        + damage;


    text.style.left =
        enemyDamage
        ? "65%"
        : "25%";


    text.style.top =
        "40%";


    text.style.transform =
        "scale(1.3)";


    setTimeout(()=>{

        text.textContent="";

    },400);

}


function useSkill(skill){

    if(attacking)
        return;


    attacking=true;


    let damage=0;


    if(playerData.character === 1){

        if(skill === 1){

            damage =
                playerData.attack * 2.2;

        }

        else if(skill === 2){

            damage =
                playerData.attack * 2.8;

        }

        else if(skill === 3){

            damage =
                playerData.attack * 1.5;

            alert(
                "⚡ Shadow Speed!\nโจมตีเร็วขึ้น"
            );

        }

    }

    else{

        if(skill === 1){

            damage =
                playerData.attack * 2.5;

        }

        else if(skill === 2){

            damage =
                playerData.attack * 2.8;

        }

        else if(skill === 3){

            damage =
                playerData.attack * 2;

            alert(
                "💥 Shield Stomp!"
            );

        }

    }


    damage =
        Math.floor(damage);


    enemy.hp -= damage;


    addRage(15);


    showDamage(damage);


    if(enemy.hp <= 0){

        enemy.hp=0;

        updateUI();

        setTimeout(
            enemyDefeated,
            500
        );

        return;

    }


    updateUI();


    setTimeout(
        enemyAttack,
        700
    );


    setTimeout(
        ()=>{
            attacking=false;
        },
        1000
    );

}


function activateRage(){

    if(playerData.rage < 100){

        alert(
            "🔥 Rage ยังไม่เต็ม!"
        );

        return;

    }


    rageActive=true;

    playerData.rage=0;

    saveGame(playerData);


    alert(
        "🔥🔥 FRENZY MODE! 🔥🔥\nพลังโจมตีเพิ่มขึ้น!"
    );


    updateUI();


    setTimeout(()=>{

        rageActive=false;

        alert(
            "Rage Mode หมดเวลา"
        );

    },10000);

}


function enemyDefeated(){

    attacking=false;


    gainXP(enemy.xp);

    gainCoins(enemy.coins);


    if(Math.random() < .20){

        addItem("health");

        alert(
            "🎁 ศัตรูดรอป Health Potion!"
        );

    }


    if(room >= 10){

        bossVictory();

        return;

    }


    showScienceQuestion();


    room++;

    localStorage.setItem(
        "room",
        room
    );


    setTimeout(()=>{

        enemy =
            getEnemyForRoom(room);

        enemy.maxHp =
            enemy.hp;

        updateUI();

    },300);

}


function bossVictory(){

    gainCoins(500);

    gainXP(250);


    alert(
        "🏆 VICTORY!\n\n"+
        "คุณปราบ GARGAN สำเร็จ!\n"+
        "+500 Coins\n"+
        "+250 XP"
    );


    localStorage.removeItem("room");


    location.href =
        "dungeon.html";

}


function gameOver(){

    alert(
        "💀 คุณพ่ายแพ้!\n\n"+
        "ลองอัปเกรดตัวละครแล้วกลับมาใหม่"
    );


    playerData.hp =
        playerData.maxHp;


    saveGame(playerData);


    location.href =
        "character.html";

}


window.addEventListener(
    "beforeunload",
    ()=>{
        saveGame(playerData);
    }
);
