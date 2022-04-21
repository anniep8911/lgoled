const viewAll = document.querySelector('.content .btn');
const artVw = document.querySelector('.content .artView');
const vid = document.querySelector('main video');
const tab =  document.querySelectorAll('.tab li');
const arts =  document.querySelectorAll('article');
let flag= true, flag2=false, data=[];


tab.forEach((e,ind)=>{
    if(ind>0){
        e.addEventListener('click',function(){
            viewAll.innerText = 'close -';
            let now = this.attributes[0].nodeValue;
            artVw.className += ' all';
            flag=false;
            data.push(ind);
            if(ind == data[data.length-2]){
                if(!flag2){
                    arts.forEach(ev=>{
                        if(ev.classList.contains(now)){
                          ev.style.width='block';
                        }else{
                            ev.style.display='none'; 
                        }
                        flag2=true;
                    });
                }else{
                    arts.forEach(ev=>{
                        if(!ev.classList.contains(now)){
                            ev.style.display='block';
                            flag2=false; 
                        }
                    });
                }
            }else{
                arts.forEach(ev=>{
                    ev.style.display='block'; 

                    if(ev.classList.contains(now)){
                      ev.style.width='block';
                    }else{
                        ev.style.display='none'; 
                    }
                    flag2=true;
                });
            }
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
