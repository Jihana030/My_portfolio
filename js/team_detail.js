(function () {
    'use strict'
    // mainImg
    const mainImg = document.querySelector('.mainImg');
    // reference
    const ref1 = document.querySelector('.ref1');
    const ref2 = document.querySelector('.ref2');
    const ref3 = document.querySelector('.ref3');
    const ref4 = document.querySelector('.ref4');
    // skill
    const sk1 = document.querySelector('.sk1');
    const sk2 = document.querySelector('.sk2');
    const sk3 = document.querySelector('.sk3');
    function loadItems(){
        return fetch("../js/data.json")
        .then((response)=>response.json())
        .then((json)=>json.team);
    }
    loadItems().then((team)=>{
        team.forEach((ele, idx) => {
            mainImg.src=`${ele.mainImg}`
            ref1.src=`${ele.ref1}`;
            ref2.src=`${ele.ref2}`;
            ref3.src=`${ele.ref3}`;
            ref4.src=`${ele.ref4}`;
            sk1.src=`${ele.skill1}`;
            sk2.src=`${ele.skill2}`;
            sk3.src=`${ele.skill3}`;
        })
    })

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 1000,
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})()