(function(){
    'use strict'

    //explain 제목 설명
    const exTitle = document.querySelector('.ex-title');
    const exDetail = document.querySelector('.ex-detail');
    // see detail
    const thumSee = document.querySelector('.thum-txt');
    // thum slide
    const thumImg =  document.querySelectorAll('.thum-slide');
    // side img
    // const sideImg = document.querySelectorAll('.side-img');
    const side1th = document.querySelector('.side-1th');
    const side2th = document.querySelector('.side-2th');
    const side3th = document.querySelector('.side-3th');
    
    // json fetch
    function loadItems(){
        return fetch("../js/data.json")
        .then((response)=>response.json())
        .then((json)=>json.design);
    }
    loadItems().then((design)=>{
        design.forEach((ele, idx) => {
        // slide 내용 함수
        function slideContents(){
            if(swiper.realIndex === (idx)){
                for(let i=0; i<=swiper.realIndex; i++){
                    thumImg[i].src = `${ele.image}`
                }
                side1th.src = `${ele.side}`
                side2th.src = `${ele.side}`
                side3th.src = `${ele.side}`
                exTitle.innerHTML = `${ele.title}`;
                exDetail.innerHTML = `${ele.detail}`;
                thumSee.href = `${ele.url}`;
            }
        }
        // swiper
        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 5000,
            },
            // loop: true, //루프 버그 극혐
            slidesPerView: 1,
            on: {
                beforeResize : slideContents,
                activeIndexChange : slideContents,
            }
        });
            
        })
    })
    
})()