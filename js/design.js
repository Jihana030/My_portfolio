(function(){
    'use strict'

    // swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true, 
        slidesPerView: 1,
    });
    // json fetch
    loadItems().then((design)=>{
        items.forEach((ele, index) => {

        })
    })
})()