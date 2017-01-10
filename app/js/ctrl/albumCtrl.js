/**
 * Created by Administrator on 2017/1/1.
 */
/**
            * 新碟上架：js写在toplistCtrl
        */
        angular.module('controllers')
            .controller('albumCtrl', function($scope) {

                var date1s = [{"src":"images/album/3265549619786723.jpg","instruter":"苏打绿故事未了音乐...","auther":"苏打绿"},
                    {"src":"images/album/3265549619786723.jpg","instruter":"无法长大","auther":"赵雷"},
                    {"src":"images/album/18791753231780958.jpg","instruter":"WONDERLAND","auther":"Jessica"},
                    {"src":"images/album/18760966906426800.jpg","instruter":"天籁之战 半决赛第二场","auther":"群星"},
                    {"src":"images/album/18510278255279563.jpg","instruter":"钉子花","auther":"伍佰&China Blue"},
                    {"src":"images/album/18338754440205163.jpg","instruter":"アンコール","auther":"back number"},
                    {"src":"images/album/18591642115767144.jpg","instruter":"皇后区的皇后","auther":"葛仲珊"},
                    {"src":"images/album/18760966906426800.jpg","instruter":"The Great Wall(orali...","auther":"Ramin Djawadi"},
                    {"src":"images/album/18826937604101006.jpg","instruter":"2016 WINNER EXIT T...","auther":"WINNER"} ,
                    {"src":"images/album/18677404023325116.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"}

        ];
        var newarr=[];
        var date2s = [
            {"src":"images/album/18576248952955359.jpg","instruter":"爱在当下","auther":"邰正宵"},
            {"src":"images/album/18677404023325116.jpg","instruter":"我赖你","auther":"苏打绿"},
            {"src":"images/album/3265549619786723.jpg","instruter":"First Miracle DIAID ||","auther":"DIA"},
            {"src":"images/album/3265549619786723.jpg","instruter":"苏打绿故事未了音乐...","auther":"苏打绿"},
            {"src":"images/album/18825838092456954.jpg","instruter":"无法长大","auther":"赵雷"},
            {"src":"images/album/18791753231780958.jpg","instruter":"WONDERLAND","auther":"Jessica"},
            {"src":"images/album/18760966906426800.jpg","instruter":"天籁之战 半决赛第二场","auther":"群星"},
            {"src":"images/album/18510278255279563.jpg","instruter":"钉子花","auther":"伍佰&China Blue"},
            {"src":"images/album/18338754440205163.jpg","instruter":"アンコール","auther":"back number"},
            {"src":"images/album/18591642115767144.jpg","instruter":"皇后区的皇后","auther":"葛仲珊"},
            {"src":"images/album/18760966906426800.jpg","instruter":"The Great Wall(orali...","auther":"Ramin Djawadi"},
            {"src":"images/album/18826937604101006.jpg","instruter":"2016 WINNER EXIT T...","auther":"WINNER"},
            {"src":"images/album/18677404023325116.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/18545462627395444.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/18654314278532429.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/18656513301803726.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/18625726976227894.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/18766464464579639.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/18766464464579630.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/18673005976799477.jpg","instruter":"乖乖","auther":"谭晶 / 吴亦凡"},
            {"src":"images/album/3302932937352414.jpg","instruter":"WONDERLAND","auther":"Jessica"},
            {"src":"images/album/18528969952981754.jpg","instruter":"天籁之战 半决赛第二场","auther":"群星"},
            {"src":"images/album/3312828542446343.jpg","instruter":"钉子花","auther":"伍佰&China Blue"},
            {"src":"images/album/18673005976799477.jpg","instruter":"アンコール","auther":"back number"},
            {"src":"images/album/18268385695999708.jpg","instruter":"皇后区的皇后","auther":"葛仲珊"},
            {"src":"images/album/18224405230885700.jpg","instruter":"WONDERLAND","auther":"Jessica"},
            {"src":"images/album/18497084115770402.jpg","instruter":"天籁之战 半决赛第二场","auther":"群星"},
            {"src":"images/album/18665309394734384.jpg","instruter":"钉子花","auther":"伍佰&China Blue"},
            {"src":"images/album/18665309394734384.jpg","instruter":"アンコール","auther":"back number"},
            {"src":"images/album/18563054813428519.jpg","instruter":"皇后区的皇后","auther":"葛仲珊"},
            {"src":"images/album/18663110371478977.jpg","instruter":"WONDERLAND","auther":"Jessica"},
            {"src":"images/album/18656513301803726.jpg","instruter":"天籁之战 半决赛第二场","auther":"群星"},
            {"src":"images/album/18654314278532429.jpg","instruter":"钉子花","auther":"伍佰&China Blue"},
            {"src":"images/album/18625726976227894.jpg","instruter":"アンコール","auther":"back number"},
            {"src":"images/album/18598239185504008.jpg","instruter":"皇后区的皇后","auther":"葛仲珊"},

        ];
        var newarr2=[];


        var flag =1;
        var index =0;
        var pic1=document.getElementById("pic1");
        var pic2=document.getElementById("pic2");
        var ul =document.createElement("ul");
        var ul2=document.createElement("ul");
        var block7=document.getElementById("block7");
        var spans = block7.getElementsByTagName("span");
        var diandian=document.getElementById("diandian");
        var left=document.getElementById("left");
        var right=document.getElementById("right");
        var zList=document.getElementById("z-list");
                console.log(zList);
             for(var m=0;m<zList.children.length;m++){
                 zList.children[m].onclick=function(){
                     changePic(date1s,date2s);
                 }
             }

                var num = 0;//记录索引
        var newArr1=[];
        var newArr2=[];
        pic1.appendChild(ul);
        pic2.appendChild(ul2);
        function getRandom(num){
                    var arrNum=[];
                    arrNum[0]=parseInt(Math.random()*num);
                    do{
                        var random1=parseInt(Math.random()*num);
                        var flag=true;
                        for(var i=0;i<arrNum.length;i++){

                            if(arrNum[i]===random1){
                                var random1=parseInt(Math.random()*num);
                                flag=false;
                                break;
                            }
                        }

                        if(flag){
                            arrNum.push(random1);
                        }
                    }while(arrNum.length<num);

                    return arrNum;
                }
        function changePic(date1,date2){
            ul.innerHTML='';
            ul2.innerHTML='';
            newarr=[];
            newarr2=[];
            var num=getRandom(date1.length);
            for(var i=0;i<date1.length;i++){
                var date=date1[num[i]];
                var str = '<li>' +
                    '<a href="javascript:;" target="_blank">' +
                    '<img src="'+date.src+'">' +
                    '</a>' +
                    '<p>' +
                    date.instruter+
                    '</p>'+
                    '<p>' +
                    date.auther+
                    '</p>'
                newarr.push(str);
            }
            var num=getRandom(date2.length);
            for(var i=0;i<date2.length;i++){
                var date=date2[num[i]];
                var str2 = '<li>' +
                    '<a href="javascript:;" target="_blank">' +
                    '<img src="'+date.src+'">' +
                    '</a>' +
                    '<p>' +
                    date.instruter+
                    '</p>'+
                    '<p>' +
                    date.auther+ '</p>';
                newarr2.push(str2);
            }
             ul.innerHTML=newarr.join('');
             ul2.innerHTML=newarr2.join('');
        }
        changePic(date1s,date2s);
        for(var i=0;i<spans.length;i++){
            if(spans[i].className=="hade"){
                spans[i].style.display="none"
            }
            spans[i].index=i;
            spans[i].onmouseover=function(){
                for(var i=0;i<spans.length;i++){
                    spans[i].style.background='';
                }
                index=this.index;
                flag=index;
                this.style.background='#e8f4f2';
            }
            spans[i].onmouseout=function(){

                this.style.background='';
            }
            spans[i].onclick=function(){
                var numeric1 =Math.floor(Math.random()*8)+2;
                var numeric2 =Math.floor(Math.random()*33)+2;
                for(var i=0;i<numeric1;i++){
                    newArr1= date1s.unshift(date1s.pop());
                }
                for(var i=0;i<numeric2;i++){
                    newArr2= date2s.unshift(date2s.pop());
                }
                changePic(date1s,date2s);
            }
        }


        right.onclick=function(){
            changePic(date1s,date2s);
            if(flag>14){
                return;
            }
            for(var i=0;i<spans.length;i++){
                spans[i].removeAttribute("class");
            }
            isTrue();
            num= flag;
            flag++;

            spans[num].setAttribute("class","current")

        }
        left.onclick=function() {
            changePic(date1s,date2s);
            if (flag < 0) {
                return;
            }

            for (var i = 0; i < spans.length; i++) {
                spans[i].removeAttribute("class");


            }
            if (flag === 6) {
                for (var i = 0; i < 6; i++) {
                    //spans[i].style.display = !spans[i].style.display
                    spans[i].style.display = "inline-block";
                    spans[i+8].style.display = "none";
                    spans[i].setAttribute("class", "sp");
                    diandian.style.display = "inline-block";

                }
            }
            isTrue();


            num = flag;
            flag--;

            spans[num].setAttribute("class", "current")


        }
        function isTrue(){
            if (flag === 8) {
                spans[flag - 8].style.display = "none"
                spans[flag].style.display = "inline-block";
                spans[flag].setAttribute("class", "sp");

            }
            if (flag === 9) {
                spans[flag - 8].style.display = "none"
                spans[flag].style.display = "inline-block";
                spans[flag].setAttribute("class", "sp");

            }
            if (flag === 10) {
                spans[flag - 8].style.display = "none"
                spans[flag].style.display = "inline-block";
                spans[flag].setAttribute("class", "sp");
            }
            if (flag === 11) {
                spans[flag - 8].style.display = "none"
                spans[flag].style.display = "inline-block";
                spans[flag].setAttribute("class", "sp");
            }
            if (flag === 12) {
                spans[flag - 8].style.display = "none"
                spans[flag].style.display = "inline-block";
                spans[flag].setAttribute("class", "sp");
            }
            if (flag === 13) {
                diandian.style.display = "none";
                spans[flag - 8].style.display = "none"
                spans[flag].style.display = "inline-block";
                spans[flag].setAttribute("class", "sp");

            }
        }
    });