$(document).ready(function(){

   // for navbar to appear on scroll
     $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //typing effects

    var typed = new Typed(".typing-1",{
        strings:['Software Engineer','Developer','Programer','Desiginer'],                 
       
        typeSpeed:100,
        backsSpeed:60,
        loops: true,
    });
    var typed = new Typed(".typing-2",{
        strings:['Software Engineer','Developer','Programer','Desiginer'],                 
       
        typeSpeed:100,
        backsSpeed:60,
        loops: true,
    });
    


});