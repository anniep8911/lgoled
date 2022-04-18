let [crn,on]=[0,0];
let [now,divBy,size,crnFin]=[[],[],[],[]];

const grid =document.querySelectorAll('.grid');
const art = document.querySelectorAll('article');
const img = document.querySelectorAll('.ovrGrid');
const sg = document.querySelector('.o1').getBoundingClientRect().width;
const gr = document.querySelector('.gr');

grid.forEach((e)=>{now.push(e.getBoundingClientRect().y); divBy.push(e.getBoundingClientRect().height)});

function findIdx(crn){
    for(i=0; i<grid.length+1;i++){
       if(now[i]<=crn && now[i+1]>=crn){
           return i;
        }else if(now[i]<=crn && now[i+1]==null){
            return i;
        }
    }
};

function fade(crn){
        size[0]=parseInt(crn/(divBy[0]/6));
        img.forEach(e=>{for(i=1;i<=6;i++)e.className=`ovrGrid`});
        for(i = 0; i<=size[0]; i++){
            img[i+1].className += ' show';
        }
}

function mvSide(crn){
    size[1] =crn-now[1];
    if(size[i]>=gr.getBoundingClientRect().width-sg) size[1] = gr.getBoundingClientRect().width-sg;
    gr.style.transform = `translateX(${size[1]}px)`;
}



window.addEventListener('scroll',function(){
    crn = parseInt(this.pageYOffset);
    on = findIdx(crn);

    art.forEach(e=>{e.classList.remove('on')});
    if(on>=0){
        art[on].className='on';
    }
    
    switch(on){
        case 0: fade(crn);
        break;
        case 1: mvSide(crn);
        break;
        defualt;
    } 
});