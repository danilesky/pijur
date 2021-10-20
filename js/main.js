var content = document.getElementsByClassName('page-content')[0]
var can = document.getElementsByClassName('pijur_cans_right')[0]
var pijur_about = document.getElementsByClassName('pijur_about')[0]
var pijur_about_mid = document.getElementsByClassName('pijur_about_mid')[0]
var pijur_about_left = document.getElementsByClassName('pijur_about_left')[0]
var pijur_about_right = document.getElementsByClassName('pijur_about_right')[0]
var quote = pijur_about_right.firstElementChild

//get element position
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
}

//scrolling event
document.addEventListener('scroll',()=>{
    //Contact button makes itself short
    if(window.pageYOffset>0){
        contact_button.classList.add('hide')
    }
    //move body
    if(offset(can)< window.pageYOffset + (window.innerHeight/2)){
        can.style.top = 0
    }
    //drink effect
    if(offset(pijur_about)< window.pageYOffset + (window.innerHeight/1.5)){
        pijur_about_mid.style.top="-400px"
        pijur_about_left.classList.add('animate')
        pijur_about_right.classList.add('animate')
        setTimeout(()=>{
            quote.style.opacity= 1
        },500)
    }
})

//animated intro

var pijur_intro = document.getElementsByClassName('pijur_intro')[0]

document.addEventListener("DOMContentLoaded", ()=>{
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
    }
    setTimeout(()=>{
        pijur_intro.classList.add('animation')
        setTimeout(()=>{
            content.style.top = 0
            pijur_intro.style.display = 'none'
            document.getElementsByTagName('html')[0].style.overflowY= 'auto'
        },1000)
    },1000)
})

//contact form displaying

var contact_button = document.getElementsByClassName('contact_us')[0]
var contact_form = document.getElementsByClassName('pijur_contact_form')[0]
var close_button = document.getElementsByClassName('close_button')[0]

if(contact_button){
    //open modal
    contact_button.addEventListener('click',()=>{
        if(contact_form.style.display === '' || contact_form.style.display === 'none'){
            contact_form.style.display = 'flex'
        }
        else{
            contact_form.style.display = 'none'
        }
    })
    close_button.addEventListener('click',()=>{
        //close modal
        if(contact_form.style.display === 'flex'){
            contact_form.style.display = ''
        }
    })
}


