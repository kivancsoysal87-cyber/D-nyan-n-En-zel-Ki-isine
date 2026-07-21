// =======================
// ANA SAYFA
// =======================

function nextPage(){
    window.location.href = "letter.html";
}

// =======================
// MEKTUP
// =======================

const text = `ilk olarak doğum günün kutlu olsunn nice mutlu seneleree!!!

Benim için cidden çok çok kıymetli biri olduğun için böyle elimden geleni yapma kararı aldım ki bu yaptığım şey seni ne denli sevdiğimi ve kıymet verdiğiim anlatamayacak bile olsa ne kadar değerli olduğunu bilmen için yaptım.

Senin sayende ne kadar mükemmel zamanlar geçirdiğimi anlatamam hani kelimeler, eylemler yetersiz kalıyor bu anıların güzelliğini anlatmaya.

Sadece mutlu olduğum zamanlarda değil aynı zamanda da kötü olduğum zamanlarda bile yanımda olduğun için o kadar minnetarım ki sana ve bunu daha yeni yeni biri tanıdığına yapman. Cidden çok özel ve iyi birisin. İyi ki varsın keşke daha erken bile tanışabilseydik senle.

Ama olsun erken tanışamamışız olabiliriz ama daha beraber geçirecek daha çok zamanımız var!!! Benden uzunca bi süre kurtuluşun yok o yüzden umarım hep beraber hem çok mutlu oluruz hem birbimizin yanında oluruz.

Elimden şimdilik bu kadar geliyor :(( Ama beğeniceğini düşünüyom yani umuyorum ki çok daha iyi hediyeleri bile hakediyon!!

Yaparken kan, ter, gözyaşı akmış olsa bile değdi sonuna kadar

Çok uzun tutmayim ben yazıyı sığmıyor yoksa 😰 ama daha sana diyebiliceğim onlarca pozitif şey olduğunu da unutma bak

Tekrardan doğum günün kutlu olsun, iyi ki varsın ❤️`;

let i = 0;

function showLetter(){

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.style.display="none";

        document.querySelector("h2").style.display="none";

        document.querySelector(".instruction").style.display="none";

        document.getElementById("letter").style.display="block";

        document.getElementById("typing").innerHTML="";

        i=0;

        typeWriter();

    },700);

}

function typeWriter(){

    if(i<text.length){

        document.getElementById("typing").innerHTML+=text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }else{

        const btn=document.getElementById("memoryBtn");

        if(btn){

            btn.style.display="block";

            setTimeout(()=>{

                btn.style.opacity="1";

            },50);

        }

    }

}

function goMemories(){

    window.location.href="memories.html";

}

// =======================
// POPUP
// =======================

function openPopup(photo,message){

    document.getElementById("popup").style.display="flex";

    document.getElementById("popupImg").src=photo.src;

    document.getElementById("popupText").innerHTML=message;

}

function closePopup(){

    document.getElementById("popup").style.display="none";

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closePopup();

    }

});

// =======================
// YILDIZLAR
// =======================

for(let s=0;s<100;s++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.width=(2+Math.random()*3)+"px";

    star.style.height=star.style.width;

    star.style.animationDelay=Math.random()*3+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    document.body.appendChild(star);

}

// =======================
// FINAL
// =======================

function celebrate(){

document.getElementById("music").play();

    const candles=document.getElementById("candles");

    if(candles){

        candles.innerHTML="💨💨💨";

        const msg=document.getElementById("finalMessage");

msg.style.display="block";

setTimeout(()=>{
    msg.classList.add("show");
},30);

setTimeout(heartRain,3000);

    }

    const colors=[
        "#ff5a5f",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ff99cc"
    ];

    for(let i=0;i<180;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.animationDelay=Math.random()+"s";

        confetti.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

    const msg=document.getElementById("finalMessage");

    if(msg){

        msg.style.display="block";

        msg.animate(
        [
            {
                opacity:0,
                transform:"translateY(50px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],
        {
            duration:900,
            fill:"forwards",
            easing:"ease"
        });

    }

}
function heartRain(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="-30px";
        heart.style.fontSize=(20+Math.random()*20)+"px";
        heart.style.transition="5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="110vh";
            heart.style.transform="rotate(360deg)";

        },50);

        setTimeout(()=>heart.remove(),5000);

    }

}