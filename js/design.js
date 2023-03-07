(function(){
    'use strict'

    //explain 제목 설명
    const exTitle = document.querySelector('.ex-title');
    const exDetail = document.querySelector('.ex-detail');
    // 슬라이드 엑티브
    const sidActive = document.querySelector('.swiper-slide-active');
    
    // json fetch
    function loadItems(){
        return fetch("../js/data.json")
        .then((response)=>response.json())
        .then((json)=>json.design);
    }
    loadItems().then((design)=>{
        design.forEach((ele, idx) => {
            
        // swiper
        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // loop: true, //루프 버그 극혐
            slidesPerView: 1,
            on: {
                activeIndexChange : function() {
                    //이벤트 또는 조건문으로 이용하면 된다.
                    if(swiper.realIndex === (idx)){
                        exTitle.innerHTML = `${ele.title}`;
                        exDetail.innerHTML = `${ele.detail}`;
                    }
                },
            }
        });
            
        })
    })
    
})()