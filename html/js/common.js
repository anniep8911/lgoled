const hdr =document.querySelector('.hdrWrap');
const ftr =document.querySelector('.ftrWrap');
const wid = window.innerWidth;

hdr.innerHTML=`<header>
   <div class="logo"><a href="./index.html">lg signiture</a></div>
   <nav>
       <h4><a href="./aboutus.html">about us</a></h4>
       <h4><a href="./products.html">products</a></h4>
       <h4><a href="./magazine.html">magazine</a></h4>
       <h4>lounge</h4>
       <h4>showroom</h4>
    </nav>
</header>`;
ftr.innerHTML=`<footer>
    <div class="logo">LG signiture</div>
    <ul class="nav">
        <li> youtube</li>
        <li> instagram</li>
        <li> facebook</li>
        <li> blogger</li>
    </ul>
</footer>`;
if(wid>700){
    window.document.oncontextmenu = new Function("return false");
    window.document.onselectstart = new Function("return false");
    window.document.ondragstart = new Function("return false");
}