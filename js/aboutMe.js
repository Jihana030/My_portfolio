(function(){
    'use strict';

    // 이력서 다운 멘트
    const coYes = document.querySelector('.co-yes');
    const coNo = document.querySelector('.co-no');
    const coThank = document.querySelector('.co-thank');
    const coSad = document.querySelector('.co-sad');
    coYes.addEventListener('click', e=>{
        coYes.classList.toggle('co-dnone');
        coNo.classList.toggle('co-dnone');
        coThank.classList.toggle('co-dnone');
    })
    coNo.addEventListener('click', e=>{
        coYes.classList.toggle('co-dnone');
        coNo.classList.toggle('co-dnone');
        coSad.classList.toggle('co-dnone');
    })
})()