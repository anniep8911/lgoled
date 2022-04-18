const viewAll = document.querySelector('.content .btn');
const artVw = document.querySelector('.content .artView');
const vid = document.querySelector('main video');
const tab =  document.querySelectorAll('.tab li');
const arts =  document.querySelectorAll('article');
let flag= true;


tab.forEach((e,ind)=>{
    if(ind>0){
        e.addEventListener('click',function(){
            let now = this.attributes[0].nodeValue;
            arts.forEach(ev=>{
                if(ev.classList.contains(now))ev.style.display='block';
                else ev.style.display='none';
                artVw.className += ' all';
                viewAll.innerText = 'Back to See all Products +';
                flag=false;
            })
        });
    }
});


viewAll.addEventListener('click',function(){
    if(flag){
        artVw.className += ' all';
        this.innerText = 'close -';
        flag=false;
    }else{
        arts.forEach(e=>{
            e.style.display='block';
        });
        this.innerText = 'All Products >';
        artVw.classList.remove('all');
        flag=true;
    }
});


window.onscroll=function(){
    let now = this.scrollY;
    if(now>=100){
        vid.pause();
    }else{
        vid.play();
    }
}
