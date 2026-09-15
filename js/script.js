const typing=document.getElementById("typing");

const words=[
    "Aspiring Software Engineer",
    "CSBS Student @ BIET",
    "AI & ML Developer",
    "Cybersecurity & IoT Enthusiast",
    "Java & Python Developer"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){
    if(!typing) return;

    let currentWord=words[wordIndex];

    if(!deleting){
        typing.innerHTML=currentWord.substring(0,charIndex);
        charIndex++;

        if(charIndex>currentWord.length){
            deleting=true;
            setTimeout(typeEffect,1200);
            return;
        }
    }else{
        typing.innerHTML=currentWord.substring(0,charIndex);
        charIndex--;

        if(charIndex<0){
            deleting=false;
            wordIndex++;

            if(wordIndex>=words.length){
                wordIndex=0;
            }
        }
    }

    setTimeout(typeEffect,deleting?50:120);
}

typeEffect();

const contactForm=document.getElementById("contactForm");

if(contactForm){
    contactForm.addEventListener("submit",function(e){
        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");
        const name = inputs[0] ? inputs[0].value : "";
        const email = inputs[1] ? inputs[1].value : "";
        const message = inputs[2] ? inputs[2].value : "";

        // Save message locally in localStorage
        const savedMessages = JSON.parse(localStorage.getItem("portfolioMessages") || "[]");
        savedMessages.push({
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toLocaleString()
        });
        localStorage.setItem("portfolioMessages", JSON.stringify(savedMessages));

        // Open user's email app addressed to Rahul
        const subject = encodeURIComponent(`Portfolio Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:rahulkumarpokhriyal1029@gmail.com?subject=${subject}&body=${body}`;

        alert(`Thank you, ${name}! Your message has been prepared for rahulkumarpokhriyal1029@gmail.com and saved to your browser session.`);
        contactForm.reset();
    });
}

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
    let current="";

    sections.forEach(section=>{
        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){
            current=section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){
            link.classList.add("active");
        }
    });
});

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    if(window.scrollY>40){
        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";
    }else{
        navbar.style.boxShadow="none";
    }
});

const cards=document.querySelectorAll(".about-card,.skill,.skill-category,.project-card,.cert-card,.exp-card,.hackathon-card");

window.addEventListener("scroll",reveal);

function reveal(){
    let trigger=window.innerHeight-100;

    cards.forEach(card=>{
        let top=card.getBoundingClientRect().top;

        if(top<trigger){
            card.style.opacity="1";
            card.style.transform="translateY(0)";
        }
    });
}

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".8s";
});

reveal();

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        btn.style.transform="scale(1.05)";
    });

    btn.addEventListener("mouseleave",()=>{
        btn.style.transform="scale(1)";
    });
});

const projects=document.querySelectorAll(".project-card");

projects.forEach(card=>{
    card.addEventListener("click",()=>{
        alert(card.querySelector("h3").innerText);
    });
});

const image=document.querySelector(".hero-image img");

if(image){
    image.addEventListener("mouseenter",()=>{
        image.style.transform="rotate(5deg) scale(1.05)";
    });

    image.addEventListener("mouseleave",()=>{
        image.style.transform="rotate(0deg) scale(1)";
    });
}

document.querySelectorAll("a[href^='#']").forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";
topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="45px";
topBtn.style.height="45px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#22c55e";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="1000";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

const footer=document.querySelector("footer p");

if(footer){
    footer.innerHTML="©️ "+new Date().getFullYear()+" Rahul Pokhriyal | All Rights Reserved.";
}

console.log("Portfolio Loaded Successfully 🚀");