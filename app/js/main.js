/**
 * nav导航栏的js
 */
window.onload=function(){
    var login=document.getElementById('login');
    var music=document.getElementById('music');
    var nav=document.getElementsByClassName('nav')[0];
    login.onmouseover=function(){
        this.lastElementChild.className='up';
        this.nextElementSibling.style.display='block';
    }
    login.onmouseout=function(){
        this.lastElementChild.className='';
        this.nextElementSibling.style.display='none';
    }
    login.nextElementSibling.onmouseover=function(){
        login.lastElementChild.className='up';
        this.style.display='block';
    }
    login.nextElementSibling.onmouseout=function(){
        login.lastElementChild.className='';
        this.style.display='none';
    }

    var controls=music.nextElementSibling.getElementsByTagName('i');
    var musici=10;
    controls[2].onclick=function(){
        musici++;
        music.src='music/'+musici%2+'.mp3';
        music.load();
        music.play();
    }
    controls[0].onclick=function(){
        musici--;
        music.src='music/'+musici%2+'.mp3';
        music.load();
        music.play();
    }
    var isbtn=false;
    controls[1].onmouseover=function(){
        if(isbtn){
            this.style.background="url(images/playbar_8.png) repeat-x -40px -164px";
        }else{
            this.style.background="url(images/playbar_8.png) repeat-x -40px -203px";
        }
    }
    controls[1].onmouseout=function(){
        if(isbtn){
            this.style.background="url(images/playbar_8.png) repeat-x 0px -164px";
        }else{
            this.style.background="url(images/playbar_8.png) repeat-x 0px -203px";
        }
    }
    controls[1].onclick=function(){
        isbtn=!isbtn;
        if(isbtn){
            this.style.background="url(images/playbar_8.png) repeat-x 0px -164px";
            timer=null;
            music.play();
            bofang();
        }else{
            this.style.background="url(images/playbar_8.png) repeat-x 0px -203px";
            music.pause();
            console.log(music.currentTime);
            timer=null;
        }
    }
    var smflag=true;
    //给全局添加事件找到鼠标位置
    window.onmousemove=function(e){
        if(smflag){
            if(e.screenY>680){
                music.parentNode.style.display='block';
                animate(music.parentNode,{'height':63})
            } else{
                animate(music.parentNode,{'height':16})
                //music.parentNode.style.display='block';
            }
        }
    }

    //给lock添加事件

    var sm=document.getElementsByClassName('sm')[0];
    sm.onclick=function(){
        smflag=!smflag;
        if(smflag){
            this.style.background='url(images/playbar_8.png) repeat-x 72px -380px';

        }else{
            this.style.background='url(images/playbar_8.png) repeat-x 52px -380px';
            music.parentNode.style.display='block';
        }

    }
    var ctimer=document.getElementsByClassName('timer')[0];
    var timer1=ctimer.children[1];
    var tbtn=ctimer.children[0];
    //放歌时候，让按钮往前跑，且时间也会变化
    music.oncanplay=function(){
        var allT=music.duration;
        var min=parseInt(allT/60)>10?parseInt(allT/60):'0'+parseInt(allT/60);
        var sec=parseInt(allT%60)>=10?parseInt(allT%60):'0'+parseInt(allT%60);
        timer1.children[1].innerHTML=min+':'+sec;
        //console.log(allT);
    }
    var timer=null;
    function bofang(){
        timer=setInterval(function () {
            var allT=music.currentTime;
            var min=parseInt(allT/60)>10?parseInt(allT/60):'0'+parseInt(allT/60);
            var sec=parseInt(allT%60)>=10?parseInt(allT%60):'0'+parseInt(allT%60);
            timer1.children[0].innerHTML=min+':'+sec;
            tbtn.style.width=600*allT/music.duration+'px';
            tbtn.children[0].style.left=-10+600*allT/music.duration+'px';
        },1000)
    }
    //完成登录框
    hpalert();

}
function hpalert(){
    var hpLogin = document.getElementById("hp-login");
    //console.log(hpLogin.children[1].children[1].children[1].children[0]);
    hpLogin.children[1].children[1].children[1].children[0].onclick=function(){
        hpLogin.children[1].style.display='none';
        hpLogin.children[0].style.display='block';
    }
    hpLogin.children[0].children[1].children[0].children[2].onclick=function(){
        hpLogin.children[0].style.display='none';
        hpLogin.children[1].style.display='block';
    }
    hpLogin.children[0].children[0].children[1].onclick=function(){
        hpLogin.style.display='none';
        window.document.body.onscroll=null;
    }
    hpLogin.children[1].children[0].children[1].onclick=function(){
        hpLogin.style.display='none';
        window.document.body.onscroll=null;
    }
}
var htop=0;
function alertlogin(){
    var hpLogin = document.getElementById("hp-login");
    hpLogin.style.display='block';
    htop=window.pageYOffset;
    window.document.body.onscroll=function(){
        window.scrollTo(0,htop);
    }
}

