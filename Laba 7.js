document.body.onload = function(){

    setTimeout(function() {
        var preloader = document.getElementById('page_preloader');  
        if( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done');
        }
    }, 1000);
}

bgmenu.onclick = function(){
    var x = document.getElementById('topline');

    if(x.className === "topline"){
        x.className += " responsive";

    }else{
        x.className = "topline";
    }

}


/*
const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll',animOmScroll);
    function animOmScroll(){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint)&& pageXOffset<(animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }else{
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return{ top:rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}
*/