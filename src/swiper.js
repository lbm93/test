/*
const swiper = new Swiper('.swiper', {

    autoplay : {
        delay : 3000, // 슬라이드 이동 시간 간격
        disableOnInteraction : false, // 버튼을 이용하여 컨트롤 한 이후에도 자동 재생 유지되도록
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    pagination : {
        el : '.swiper-pagination', // 해당 html의 클래스명 넣기
        clickable : true, // 클릭하여 슬라이드 컨트롤을 가능케 함. default는 false임.
        type : 'fraction', // 해당 요소 추가시 현재 위치를 숫자로 알랴쥼 ex) 2/5 (다섯개의 슬라이드 중 2번째임)
        renderBullet : function(index, className) { // bullet을 커스텀 할 때 사용
                return '<li class="' + className + '">' + (index+1) + '</li>';
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
/*
var swiper = new Swiper('.swiper', {
 
    // 1. 슬라이드 네비게이션 버튼
    navigation : { 
        prevEl : '.swiper .swiper-button-prev', // 해당 html의 클래스명 넣기 
        nextEl : '.swiper .swiper-button-next'
    },
 
    // 2. 페이지네이션 버튼
    pagination : {
        el : '.swiper', // 해당 html의 클래스명 넣기
        clickable : true, // 클릭하여 슬라이드 컨트롤을 가능케 함. default는 false임.
        type : 'fraction' // 해당 요소 추가시 현재 위치를 숫자로 알랴쥼 ex) 2/5 (다섯개의 슬라이드 중 2번째임)
        renderBullet : function(index, className) { // bullet을 커스텀 할 때 사용
                return '<li class="' + className + '">' + (index+1) + '</li>';
        }
    },
 
    // 3. 무한루프
    loop: true,
 
    // 4. 한 화면의 슬라이드 갯수
    slidesPerView : 1,
 
     // 5. 한 번에 넘어가는 슬라이드 갯수
    slidesPerGroup : 1,
 
    // 6. 슬라이드 첫 시작은 가운데부터
    centeredSlides : true, // 기본은 false임.
 
    // 7. 자동 재생
    autoplay : {
        delay : 3000, // 슬라이드 이동 시간 간격
        disableOnInteraction : false, // 버튼을 이용하여 컨트롤 한 이후에도 자동 재생 유지되도록
    },
 
    // 8. 슬라이드의 간격
    spaceBetween : 20, // margin-right로 간격을 조정해 줌
 
    // 9. slide가 아닌 fade animation 넣기
    effect : 'fade', // slidePerView는 반드시 1이어야 함
 
})*/
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });