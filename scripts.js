jQuery(window.document).ready(function(){
    if($(window).height()>$('body').height()){
        $('.sidebar').height('100%');
    }
    else
        $('.sidebar').height($('body').height());
});
