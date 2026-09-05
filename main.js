let musicOn =
    localStorage.getItem("music") !== "off";


function showDetails(){

    document.getElementById("popupTitle")
        .textContent = "📖 Game Details";

    document.getElementById("popupText")
        .textContent =
        "Science Dungeon คือเกมผจญภัยที่ผสมการต่อสู้กับคำถามวิทยาศาสตร์ ผู้เล่นจะต้องกำจัดศัตรู เก็บ XP และเหรียญ แล้วตอบคำถามเพื่อเพิ่มพลัง Rage";

    document.getElementById("popup")
        .classList.remove("hidden");

}


function showHowToPlay(){

    document.getElementById("popupTitle")
        .textContent = "🎮 วิธีเล่น";

    document.getElementById("popupText")
        .textContent =
        "เลือกตัวละคร เข้าดันเจี้ยน ต่อสู้กับศัตรู ใช้สกิล เก็บเหรียญและ XP เมื่อเคลียร์ห้องจะพบคำถามวิทยาศาสตร์ ตอบถูกจะได้รับรางวัล";

    document.getElementById("popup")
        .classList.remove("hidden");

}


function closePopup(){

    document.getElementById("popup")
        .classList.add("hidden");

}


function toggleMusic(){

    musicOn = !musicOn;

    localStorage.setItem(
        "music",
        musicOn ? "on" : "off"
    );

    document.getElementById("musicButton")
        .textContent =
        musicOn
        ? "🔊 MUSIC : ON"
        : "🔇 MUSIC : OFF";

}


if("serviceWorker" in navigator){

    window.addEventListener("load",()=>{

        navigator.serviceWorker
            .register("sw.js")
            .catch(console.error);

    });

}
