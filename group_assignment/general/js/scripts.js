window.addEventListener("scroll", function () {
    var t = document.querySelector("#back-top");
    t.classList.toggle("sticky", window.scrollY > 100);
})

document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');

    navbar_height = document.querySelector('.navbar').offsetHeight;
     
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else if(scroll_top > 100){
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }
}); 
