const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const line = document.querySelector('.cont-line');

// Js navbar
btnMenu.addEventListener('click', () => {
    line.classList.toggle('active');
    nav.classList.toggle('menu-visible');
})

if(window.matchMedia('(max-width: 1300px)')){
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible');
            line.classList.toggle('active');
        })
    })
}
// end Js navbar

// Animation profil
const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(50)
.typeString('Software Engineer | ')
.pauseFor(300)
.typeString('Developer Full-Stack <span style="color: #EFD91C; font-weight: bold">JS</span>')
.pauseFor(1000)
.deleteChars(24)
.typeString('<span style="color: #036F00"> NodeJs</span> & <span style="color: #306CE7">Kubernetes</span> Lover')
.pauseFor(1000)
.deleteChars(25)
.typeString('<span style="color: #B960A1"> DevOps</span> Enthousiast ⚙️')
.start();

// Animation contact

const input_fields = document.querySelectorAll('input');

for (let i = 0; i < input_fields.length; i++) {
    let field = input_fields[i];
    field.addEventListener('input', (e) =>{
        if (e.target.value !== '') {
            e.target.parentNode.classList.add('animation')
        }else if(e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })
}

// Animation GSAP + ScrollMagic home
const navbar = document.querySelector('.nav-gauche');
const title = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-home')
const btnMedia = document.querySelectorAll('.media');
const btnRondHome = document.querySelector('.btn-rond')
const tl1 = gsap.timeline({paused: true})

tl1
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.5})
.from(title, {y: -50, opacity: 0, ease:Power3.easeOut, duration:0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedia, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondHome, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4}, '-=1')
window.addEventListener('load', () => {
    tl1.play();
})

// Animation About me
const aboutContainer = document.querySelector('.presentation');
const aboutTitle = document.querySelector('.title-pres');
const presgauche = document.querySelector('.pres-gauche');
const listePres = document.querySelectorAll('.item-list');
const tlpres = new TimelineMax();

tlpres
.from(aboutTitle, {y: -200, opacity: 0, duration: 0.6})
.from(presgauche, {opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listePres, 1, {opacity: 0}, 0.4, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: aboutContainer,
    triggerHook:0.5,
    reverse: false
})
.setTween(tlpres)
// .addIndicators()
.addTo(controller)

// Animation Portfolio
const portfolioContainer = document.querySelector('.portfolio')
const titlePortfolio = document.querySelector('.title-port')
const itemPortfolio = document.querySelectorAll('.vague1')
const itemPortfolio2 = document.querySelectorAll('.vague2')
const tlport = new TimelineMax()

tlport
.from(titlePortfolio, {y:-50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.4, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook:0.5,
    reverse: false
})
.setTween(tlport)
// .addIndicators()
.addTo(controller)

// vague2
const tlport2 = new TimelineMax()

tlport2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.4, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook:0.2,
    reverse: false
})
.setTween(tlport2)
// .addIndicators()
.addTo(controller)

// Animation competences
const sectionComp = document.querySelector('.skills');
const titleComp = document.querySelector('.title-skills');
const allLabel = document.querySelectorAll('.label-skill')
const allPourcent = document.querySelectorAll('.number-skill')
const allBarres = document.querySelectorAll('.barre-skill')
const allShadowBarres = document.querySelectorAll('.barre-grises')
const tlcomp = new TimelineMax()

tlcomp
.from(titleComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(tlcomp)
// .addIndicators()
.addTo(controller)

// Contact
