$(document).ready(function(){
    $(function(){
    var days    = parseInt( $('.e-m-days').html() );
    var hours   = parseInt( $('.e-m-hours').html() );
    var minutes = parseInt( $('.e-m-minutes').html() );
    var seconds = parseInt( $('.e-m-seconds').html() );

    var minutesWrap = 0; 
    var hoursWrap = 0; 
    var daysWrap; 
    var hoursRem = hours;

    var timer = seconds; 
    var counter =seconds;

    function countOrdersRemainingTime(){
        var id = setTimeout(countOrdersRemainingTime, 1000); 

        if(timer < 0){
            minutesWrap ++; 

            timer = 59;

        }

        var minRem = minutes - minutesWrap; 

        if( minRem == -1 ){
            hoursWrap + 1;
            minRem = 59;
            var hoursRem = hours - 1;
        }

        if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
            clearTimeout(id);
        }






        $('.e-m-seconds').html(timer);
        $('.e-m-minutes').html(minRem);
        $('.e-m-hours').html(hoursRem);


        timer --; 
    }

    countOrdersRemainingTime();


});

$('.filter').on('click', function() {
var selectedCategory = $(this).data('filter');
if (selectedCategory === 'all') {
  $('.items').stop().fadeOut('slow');
$('.items').stop().fadeIn('slow');
    $('.load').fadeOut('slow')
} else {
    $('.items').stop().fadeOut('slow');
    $('.items[data-category="' + selectedCategory + '"]').stop().fadeIn('slow');
}
$( '.filter' ).each(function( ) {
if($(this).hasClass('active')){
    $(this).removeClass('active')
}
});

if($(this).hasClass('active')){
$(this).removeClass('active')
} else {
$(this).addClass('active')
}

if(selectedCategory === 'all'){
$('.load-btn').show('slow')
}else{
$('.load-btn').hide('slow')
}



});
$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
dots:false,
responsive:{
0:{
    items:1
},
600:{
    items:2
},
1000:{
    items:3
}
}
})

$('.item').mouseenter(function(){
$(this).addClass('active')
})
$('.item').mouseleave(function(){
$(this).removeClass('active')
})

$('.items').mouseenter(function(){
$(this).addClass('active')
})
$('.items').mouseleave(function(){
$(this).removeClass('active')
})

})