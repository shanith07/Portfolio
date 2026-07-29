// const words = [
//     "Python Developer",
//     "Django Developer",
//     "Backend Developer"
// ];

// let wordIndex = 0;
// let charIndex = 0;
// let deleting = false;

// const typing = document.getElementById("typing");

// function type() {

//     let currentWord = words[wordIndex];

//     if (!deleting) {

//         typing.textContent = currentWord.substring(0, charIndex++);

//         if (charIndex > currentWord.length) {
//             deleting = true;
//             setTimeout(type, 1500);
//             return;
//         }

//     } else {

//         typing.textContent = currentWord.substring(0, charIndex--);

//         if (charIndex < 0) {
//             deleting = false;
//             wordIndex = (wordIndex + 1) % words.length;
//         }

//     }

//     setTimeout(type, deleting ? 60 : 120);
// }

// type();

// // Counter Animation

// const counters = document.querySelectorAll(".counter");

// counters.forEach(counter => {

//     const updateCounter = () => {

//         const target = +counter.getAttribute("data-target");

//         const count = +counter.innerText;

//         const increment = target / 100;

//         if(count < target){

//             counter.innerText = Math.ceil(count + increment);

//             setTimeout(updateCounter,20);

//         }else{

//             counter.innerText = target + "+";

//         }

//     };

//     updateCounter();

// });



// =========================
// Typing Animation
// =========================

const words = [
    "Python Developer",
    "Django Developer",
    "Backend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

if (typing) {
    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    typeEffect();
}


// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});


// =========================
// Scroll To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");

let isSubmitting = false;

contactForm.addEventListener("submit", function (e) {

    if (isSubmitting) {
        e.preventDefault();
        return;
    }

    isSubmitting = true;

    sendBtn.disabled = true;
    sendBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Sending...
    `;
});




const toast = document.getElementById("toast");

if(toast){

    setTimeout(()=>{

        toast.style.animation="toastHide .5s forwards";

        setTimeout(()=>{

            toast.remove();

        },500);

    },3000);

}
