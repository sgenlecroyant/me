var openModalBtn = document.getElementById('open')
var closeModal = document.querySelector('#close')
var modalContainer = document.getElementById('modal_wrapper')

var learnMoreAboutMe = document.getElementById('open');

openModalBtn.addEventListener('click', (event) => {
    modalContainer.style.display = "block"
    console.log("open modal")
    
})

closeModal.addEventListener('click', (event) => {
    modalContainer.style.display = "none"
    console.log("close modal")
})


window.onscroll = function () {
            "use strict";
            if ((document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100)) {
                console.log("changing color")
                
                learnMoreAboutMe.classList.add("hide_about");
                learnMoreAboutMe.classList.remove("show_about");
            }
            else {
                
                learnMoreAboutMe.classList.add("show_about");
                learnMoreAboutMe.classList.remove("hide_about");
            }
        };