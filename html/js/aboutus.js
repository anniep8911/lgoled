let [cnt,fin,flag,nowImg] =[0,0,false,''];
const txts =document.querySelectorAll('text');
const content = document.querySelector('.content');
const artGr = document.querySelectorAll('.artGr');
const left = document.querySelectorAll('.left');
const right = document.querySelectorAll('.right');
const bg = document.querySelector('.bg');
const hg = document.querySelector('.cntWrap').getBoundingClientRect().height;

window.addEventListener('scroll',function(){
    if(wid>=450){
        cnt=this.scrollY*0.3;
    }else{
        cnt=this.scrollY*5;  
    }
    fin=430-cnt;
    if(fin<=0){
        fin=0;
    }
    
    txts[0].style.strokeDashoffset=fin;
    txts[1].style.strokeDashoffset=fin;

});

function slider(ind,dir){
    if(dir=='left'){
        nowImg=getComputedStyle(artGr[ind].children[1].children[0]).backgroundImage;
        bg.style.backgroundImage=nowImg;
        artGr[ind].animate({marginLeft:'-200%'},{
            duration: 500,
            iterations:1,
            fill:'forwards',
        });
        bg.animate({backgroundPosition:['-300%','0%']},{
            duration: 500,
            iterations:1,
            fill:'forwards'
        });
        
    }else{
        nowImg=getComputedStyle(artGr[ind].children[0].children[0]).backgroundImage;
        bg.style.backgroundImage=nowImg;
        artGr[ind].animate({marginLeft:'0%'},{
            duration: 500,
            iterations:1,
            fill:'forwards',
        });

        bg.animate({backgroundPosition:['0%','-300%']},{
            duration: 500,
            iterations:1,
            fill:'forwards'
        });
    }
  setTimeout(function(){
      artGr[ind].animate({marginLeft:'-100%'},{
          duration:0,
          iterations:1,
          fill:'forwards' 
        });
        if(dir=='left'){
            artGr[ind].append(artGr[ind].children[0]);
      
        }else{
            artGr[ind].prepend(artGr[ind].children[3]);
            nowImg=getComputedStyle(artGr[ind].children[0].children[0]).backgroundImage;
            bg.style.backgroundImage=nowImg;
            bg.animate({backgroundPosition:['300%','0']},{
                duration: 500,
                iterations:1,
                fill:'forwards'
            });
            bg.animate({opacity:[0.8,1]},{
                duration: 300,
                iterations:1,
                fill:'forwards'
            });
        }

        flag= false;
  },500);

}

left.forEach((e,ind)=>e.addEventListener('click',function(){
    if(!flag){
        slider(ind,'left');
        flag= true;
    }
}));
right.forEach((e,ind)=>e.addEventListener('click',function(){
    if(!flag){
        slider(ind,'right');
        flag= true;
    }
}));

