function setMainImg(selectImg){
    let src = selectImg.attr('src');
    let alt = selectImg.attr('alt');
    let title = selectImg.attr('title');

    $('.modal-content .image-name').text(title);
    $('.modal-content .main-img').attr('src', src);
    $('.modal-content .main-img').attr('alt', alt);
    $('.modal-content .main-img').attr('title', title);
}

let imgsModal = null;

$('.grid img').on("click", function() {

    let imgActive = $(this).attr('title');
    
    if ($(this).parents('.nature').length > 0){
        var imgs = $('.grid.nature img');
    } else if ($(this).parents('.city').length > 0) {
        var imgs = $('.grid.city img');
    }

    
    $('.modal-images').empty();

    for ( let img of imgs){

        if (img.title == imgActive){
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }

        let img_copty = img.cloneNode();
        
        $('.modal-images').append(img_copty);
    }

    let modalImgActive  = $('.modal-content img.active');
    setMainImg(modalImgActive);

    imgsModal = $('.modal-images img');

    $('.modal').css('animation','fade-in 1s linear');
    setTimeout(() => {
        $('.modal').css('z-index','5')
        $('.modal').css('visibility','visible');    
        $('.modal').css('opacity','1');   
    }, 900);    
});

$(document).on("click",".modal-content .prev-btn",function() {

    for ( let img of imgsModal){
       
        if (img.classList.contains('active')){
             
            $(img).removeClass('active');
            let prevImg = $(img).prev();
            
            if (prevImg.length < 1){
                prevImg = imgsModal[imgsModal.length-1];
                prevImg = $(prevImg);
            }
            prevImg.addClass('active');
            setMainImg(prevImg); 

            return;
        }
    }
});

$(document).on("click",".modal-content .next-btn",function() {

    for ( let img of imgsModal){
       
        if (img.classList.contains('active')){
             
            $(img).removeClass('active');
            let nextImg = $(img).next();
            
            if (nextImg.length < 1){
                nextImg = imgsModal[0];
                nextImg = $(nextImg);
            }
            nextImg.addClass('active');
            setMainImg(nextImg); 

            return;
        }
    }
});

$(document).on("click",".modal-images img",function() {

    $('.modal-images img').removeClass('active');
    $(this).addClass('active');

    setMainImg($(this));
});



$('.close-btn').on('click', () => {
    $('.modal').css('animation','fade-out 1s linear');
    setTimeout(() => {
        $('.modal').css('z-index','-1')
        $('.modal').css('visibility','hiddeb');    
        $('.modal').css('opacity','0');   
    }, 900);  
})


// $('body').on('click', '.btn.header-btn', function(e) {
//     //console.log('zhestkie-linzy-eroshevskogo');
//     ym(90260190,'reachGoal','click-ostavit-zaiavku');
// });
// $('body').on('click', '.btn.header-btn', function(e) {
//     //console.log('zhestkie-linzy-eroshevskogo');
//     ym(90260190,'reachGoal','otpravka-ostavit-zaiavku')
// });
// try {  
//     console.log($('.popup__window .errors > div'));
//     console.log($('.form__inline .errors > div'));
//     if ($('.popup__window .errors > div').text() == 'Форма отправлена'){
//         ym(90260190,'reachGoal','otpravka-ostavit-zaiavku');
//     } else if ($('.form__inline .errors > div').text() == 'Форма отправлена'){
//         ym(90260190,'reachGoal','ostavit-zaiavku-tablica');
//     }
// } catch(e){
//     console.error('error asm - ' + e );
// };