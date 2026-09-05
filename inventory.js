function addItem(item, amount=1){

    if(!playerData.inventory[item])
        playerData.inventory[item] = 0;

    playerData.inventory[item] += amount;

    saveGame(playerData);

}


function removeItem(item, amount=1){

    if(!playerData.inventory[item])
        return false;

    if(playerData.inventory[item] < amount)
        return false;

    playerData.inventory[item] -= amount;

    saveGame(playerData);

    return true;

}


function usePotion(){

    if(removeItem("health")){

        heal(40);

        alert(
            "❤️ ใช้ Health Potion\n+40 HP"
        );

        updateUI();

    }

    else{

        alert(
            "ไม่มี Health Potion"
        );

    }

}


function renderInventory(){

    const box =
        document.getElementById(
            "inventory"
        );

    if(!box) return;


    box.innerHTML = "";


    const names = {

        health:"❤️ Health Potion",

        antidote:"🧪 Antidote",

        damage:"⚡ Damage Potion",

        invincible:"🛡️ Invincibility",

        rage:"🔥 Rage Potion"

    };


    Object.keys(
        playerData.inventory
    ).forEach(item=>{

        const div =
            document.createElement("div");

        div.className =
            "inventory-item";

        div.innerHTML = `

            <h2>
                ${names[item]}
            </h2>

            <p>
                จำนวน:
                ${playerData.inventory[item]}
            </p>

        `;

        box.appendChild(div);

    });

}
