(function () {
    'use strict'
    
    function loadItems(){
        return fetch("../js/data.json")
        .then((response)=>response.json())
        .then((json)=>json.team);
    }
    loadItems().then((team)=>{
        team.forEach((ele, idx) => {
        })
    })

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})()