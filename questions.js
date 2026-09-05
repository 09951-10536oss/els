const QUESTIONS = [

{

    q:"ดาวเคราะห์ดวงใดอยู่ใกล้ดวงอาทิตย์ที่สุด?",

    answers:[
        "โลก",
        "ดาวพุธ",
        "ดาวอังคาร",
        "ดาวพฤหัสบดี"
    ],

    correct:1

},

{

    q:"น้ำมีสูตรทางเคมีว่าอะไร?",

    answers:[
        "CO₂",
        "O₂",
        "H₂O",
        "NaCl"
    ],

    correct:2

},

{

    q:"แรงที่ดึงวัตถุเข้าหาโลกเรียกว่าอะไร?",

    answers:[
        "แรงเสียดทาน",
        "แรงโน้มถ่วง",
        "แรงแม่เหล็ก",
        "แรงลอยตัว"
    ],

    correct:1

},

{

    q:"อวัยวะใดทำหน้าที่สูบฉีดเลือด?",

    answers:[
        "ปอด",
        "ตับ",
        "หัวใจ",
        "ไต"
    ],

    correct:2

},

{

    q:"พืชสร้างอาหารด้วยกระบวนการใด?",

    answers:[
        "การหายใจ",
        "การสังเคราะห์ด้วยแสง",
        "การย่อยอาหาร",
        "การระเหย"
    ],

    correct:1

},

{

    q:"ก๊าซใดมีปริมาณมากที่สุดในอากาศ?",

    answers:[
        "ออกซิเจน",
        "คาร์บอนไดออกไซด์",
        "ไนโตรเจน",
        "ไฮโดรเจน"
    ],

    correct:2

},

{

    q:"หน่วยพื้นฐานของสิ่งมีชีวิตคืออะไร?",

    answers:[
        "อะตอม",
        "เซลล์",
        "เนื้อเยื่อ",
        "อวัยวะ"
    ],

    correct:1

},

{

    q:"แสงเดินทางได้เร็วที่สุดในสิ่งใด?",

    answers:[
        "สุญญากาศ",
        "น้ำ",
        "แก้ว",
        "อากาศ"
    ],

    correct:0

}

];


function showScienceQuestion(){

    const modal =
        document.getElementById(
            "questionModal"
        );

    const question =
        QUESTIONS[
            Math.floor(
                Math.random() *
                QUESTIONS.length
            )
        ];


    document.getElementById(
        "questionText"
    ).textContent = question.q;


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    question.answers.forEach(
        (answer,index)=>{

            const button =
                document.createElement("button");

            button.textContent =
                answer;

            button.onclick = ()=>{

                modal.classList.add(
                    "hidden"
                );


                if(index === question.correct){

                    gainCoins(200);

                    addRage(25);

                    gainXP(20);

                    alert(
                        "✅ ตอบถูก!\n+200 เหรียญ\n+25 Rage"
                    );

                }

                else{

                    alert(
                        "❌ ยังไม่ถูก\nลองเรียนรู้แล้วตอบคำถามต่อไป!"
                    );

                }

                updateUI();

            };


            answers.appendChild(button);

        }
    );


    modal.classList.remove("hidden");

}
