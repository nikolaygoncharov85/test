$(document).ready(function(){
    console.log('ready');
    $(".selected_country").click(function(){
        if($(".left_sidebar .country_list").hasClass('country_list_showed')){
            $(".left_sidebar .country_list").removeClass('country_list_showed');
        }else{
            $(".left_sidebar .country_list").addClass('country_list_showed');
        }
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });
    $(".left_main_li span.left_main_a").click(function(){
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
            $(this).parent().find('ul').slideUp();
        }else{
            $(this).parent().addClass('active');
            $(this).parent().find('ul').slideDown();
        }
    });
});