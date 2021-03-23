var hidden = document.getElementById('hidden-text'); 
var mobileNav = document.getElementById('mobile-nav'); 

    hidden.addEventListener('click', () => {

            if(mobileNav.style.display === 'none'? 
            mobileNav.style.display = 'block' : 
            mobileNav.style.display = 'none'); 

    });     

    setInterval(() => {
        if((window.outerWidth > 516) && (mobileNav.style.display === 'none')){
        mobileNav.style.display = 'block'; 
    }}, 10);

    


    





 

