
// get slider item
const slides = $('.slider_container').children();
const count_slide = slides.length;


// 
$('.slider_nav').html('<ol></ol>');

const ol = $('.slider_nav ol');

let i = 0;

while(i < count_slide){
    if (i==0){
        ol.append('<li class="active" data-id="'+i+'"></li>');    
    } else {
        ol.append('<li data-id="'+i+'"></li>');
    }
    i++;
}


// set for slides data-id

let j = 0;

for (let li of slides){
    console.log(li.setAttribute('data-slide-id',j));
    j++;
}

// work slider
$('.slider_nav ol li').on('click', function(){

    let new_slide_id = $(this).attr('data-id');

    $('.slider_nav ol li.active').removeClass('active');
    $(this).addClass("active");

    $('.slider_container .slide.active').removeClass('active');
    $('.slider_container .slide[data-slide-id='+new_slide_id+']').addClass('active');
});