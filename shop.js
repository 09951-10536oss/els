const SHOP_ITEMS = {

    health:{
        price:50,
        name:"Health Potion"
    },

    antidote:{
        price:50,
        name:"Antidote"
    },

    damage:{
        price:300,
        name:"Damage Potion"
    },

    invincible:{
        price:500,
        name:"Invincibility Potion"
    },

    rage:{
        price:5000,
        name:"Rage Full Potion"
    }

};


function updateShop(){

    const coins =
        document.getElementById("coins");

    if(coins)
        coins.textContent =
            playerData.coins;

}


function buy(item){

    const data =
        SHOP_ITEMS[item];


    if(!data)
        return;


    if(playerData.coins < data.price){

        alert(
            "💰 เหรียญไม่พอ!"
        );

        return;

    }


    playerData.coins -=
        data.price;


    addItem(item);


    saveGame(playerData);

    updateShop();


    alert(
        "✅ ซื้อ " +
        data.name +
        " สำเร็จ!"
    );

}


updateShop();
