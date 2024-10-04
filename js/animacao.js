window.sr = ScrollReveal({ reset: true});


sr.reveal('.info-home h1', { 
    duration: 2000,
    origin:'left',
    distance:'50px',
});
sr.reveal('.animation', { 
    duration: 2000,
    origin:'left',
    distance:'50px',
    delay: 500
});
sr.reveal('.paragrafo-home', { 
    duration: 2000,
    origin:'left',
    distance:'50px',
    delay: 800
});
sr.reveal('.info-home a', { 
    duration: 2000,
    origin:'left',
    distance:'50px',
    delay: 1000
});


AOS.init();

const containerImg = document.querySelector('#sobre');
const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');

function startAnimacao(elem, x){
    gsap.to(elem, {
        x: x,
        duration: 3,
        ease: Power4.easeOut,
        scrollTrigger: {
            trigger: containerImg,
            start: 'top center',
            end: 'center center',
            scrub: true
        }
    })
}
startAnimacao(img1, 250);
startAnimacao(img2, 85);
startAnimacao(img3, -85);
startAnimacao(img4, -250);
