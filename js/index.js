let [cnt,st,en]=[0,0,0];
let [flag,ch1,ch2]=[false,false,false];

const vid = document.querySelector('main video');
const per =  document.querySelectorAll('.innerPer');
const sbVid = document.querySelector('.head video');
const artGr = document.querySelectorAll('.artGroup');
const heart = document.querySelectorAll('.heart');
const cart = document.querySelectorAll('.cart');
const tutorial = document.querySelectorAll('.stand header .text');
const stand =  document.querySelectorAll('.stand section .i2');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');
const cntWrap = document.querySelectorAll('.cntWrap');
const topH = cntWrap[2].getBoundingClientRect().top-100;


window.onscroll=function(){
    let now = this.scrollY;
    if(now>=100){
        vid.pause();
    }else{
        vid.play();
    }
}

function backSet(side, ind, info ,mvdeg){
    setTimeout(function(){
        if(side=='left'){
            artGr[ind].append(artGr[ind].children[0]);
        }else{
            artGr[ind].prepend(artGr[ind].children[5]);
        }
        if(info==0){
            artGr[ind].animate({
                marginLeft:mvdeg
            },{
                duration:0,
                iterations:1,
                fill:'forwards'
            });
        }else{
            artGr[ind].animate({
                marginRight:mvdeg
            },{
                duration:0,
                iterations:1,
                fill:'forwards'
            });   
        }
        flag=false;
        let now2= artGr[ind].children[1].classList;
        if(now2.contains('like')){
            heart[ind].style.color = 'red';
        }else{
            heart[ind].style.color = '#333';
        }
        if(now2.contains('cart')){
            cart[ind].style.color = 'blue';
            ch2=true;
        }else{
            cart[ind].style.color = '#333';
            ch2=false;
        }
    },500);
}


function leftSlide(ind,side,mvdeg,bkdeg){
    if(!flag){
        if(side=='left'){
            let now = artGr[ind].children[2].attributes[0].nodeValue;
            artGr[ind].animate({
                marginLeft:mvdeg
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
            per[ind].animate({
                width : now*16.66+'%'
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
        }else{
            let now = artGr[ind].children[0].attributes[0].nodeValue;
            artGr[ind].animate({
                marginLeft:mvdeg
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
            per[ind].animate({
                width : now*16.66+'%'
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
        }
        backSet(side,ind,0,bkdeg);
    }
}
function rightSlide(ind,side,bkdeg){
    if(!flag){
        if(side=='left'){
            let now = artGr[ind].children[2].attributes[0].nodeValue;
            artGr[ind].animate({
                marginRight:'-50%'
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
            per[ind].animate({
                width : now*16.66+'%'
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
        }else{
            let now = artGr[ind].children[0].attributes[0].nodeValue;
            artGr[ind].animate({
                marginRight:'-0%'
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
            per[ind].animate({
                width : now*16.66+'%'
            },{
                duration:500,
                iterations:1,
                fill:'forwards'
            });
        }
        backSet(side,ind,1,bkdeg);
    }
}


heart.forEach((e,ind)=>{
    e.addEventListener('click',function(){
        if(!ch1){
            artGr[ind].children[1].className += ' like';
            ch1=true;
            this.style.color='red';
        }else{
            artGr[ind].children[1].classList.remove('like');
            this.style.color='#333';
            ch1=false;
        }
    });
})
cart.forEach((e,ind)=>{
    e.addEventListener('click',function(){
        if(!ch2){
            artGr[ind].children[1].className += ' cart';
            ch2=true;
            this.style.color='blue'
        }else{
            artGr[ind].children[1].classList.remove('cart');
            this.style.color='#333';
            ch2=false;
        }
    });
})


tutorial.forEach((e)=>{
    e.onclick=function(){
        let nowVid = e.attributes[1].nodeValue;
        sbVid.src=nowVid;
        stand[1].className+=" show";
        sbVid.nextElementSibling.addEventListener('click',(e)=>{
            stand[1].classList.remove('show');
            nowVid = e.currentTarget.attributes[1].nodeValue;
            sbVid.src=nowVid;
        });
        if(wid>=700)window.scrollTo({top:topH,behavior: 'smooth'});
    };
});




left[0].addEventListener('click',function(){
    leftSlide(0,'left','-50%','-25%');
    flag=true;
    ch1=true;
    ch2=true;
});
right[0].addEventListener('click',function(){
    leftSlide(0,'right','0%','-25%');
    flag=true;
    ch1=true;
    ch2=true;
});
left[1].addEventListener('click',function(){
    rightSlide(1,'left','-25%');
    flag=true;
    ch1=true;
    ch2=true;
});
right[1].addEventListener('click',function(){
    rightSlide(1,'right','-25%');
    flag=true;
    ch1=true;
    ch2=true;
});



if(wid<=700){
    artGr.forEach((e,i)=>{
        let [stX,stY,edX,edY] =[0,0];
        e.addEventListener('touchstart',function(ev){
            stX = ev.changedTouches[0].screenX;
            stY = ev.changedTouches[0].screenY;
        },false);
        e.addEventListener('touchend',function(ev){
            edX = ev.changedTouches[0].screenX;
            edY = ev.changedTouches[0].screenY;
            if(stX>edX && Math.abs(stY-edY)<=70){
                leftSlide(i,'left','-66.66%','-33.33%');
                alert('레프트니!!');
            }else if(stX<edX && Math.abs(stY-edY)<=70){
                leftSlide(i,'right','0%','-33.33%');
                alert('라이트니!!');
            }
        },false);

    });
}