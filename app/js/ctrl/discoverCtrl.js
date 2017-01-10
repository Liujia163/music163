/**
 * Created by Administrator on 2017/1/1.
 */
angular.module('controllers')
/**
 * 主页：js写在discoverCtrl
 */
    .controller('discoverCtrl', function($scope) {
        //var hpLogin = document.getElementById("hp-login");
        //console.log(hpLogin);
        //找人
        var timer = null;
        var banner = document.getElementById("s-banner");
        var imgBanner = banner.children[0];
        var ul = imgBanner.children[0];
        var ulLis = ul.children;
        var ol = imgBanner.children[1];
        var arrowsLeft = banner.children[1];
        var arrowsRight = banner.children[2];
        var imgWidth = imgBanner.offsetWidth;
        //1.0动态生成结构
        imgWidth = 730;
        //0.1根据ul的li标签 来生成OL的LI标签
        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement("li");
            ol.appendChild(li);
        }
        //获取OL的LI
        var olLis = ol.children;
        olLis[0].className = "current";

        //2.鼠标经过按钮
        //鼠标经过按钮 按钮排他 然后根据当前按钮的索引移动ul到指定位置
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].index = j;
            olLis[j].onclick = function () {
                //干掉所有人
                for (var k = 0; k < olLis.length; k++) {
                    olLis[k].className = "";
                }
                //留下我自己
                this.className = "current";
                //还要 让ul 移动到指定位置
                //目标 和 当前按钮的索引有关 和 图片的宽度有关 而且是负数
                var target = -this.index * imgWidth;
                animate(ul, target);
                pic = square = this.index;
            }
            //鼠标经过banner 清理定时器停止自动播放
            banner.onmouseover = function () {
                clearInterval(timer);
            }
            //鼠标离开banner 设置定时器继续自动播放
            banner.onmouseout = function () {
                timer =  setInterval(function(){
                    arrowsRight.onclick();
                },2000);
            }

            var pic = 0;//记录当前显示的图片的索引
            var square = 0;//记录当前亮起的按钮的索引
            //点击右箭头切换
            arrowsRight.onclick = function () {
                if (pic === ulLis.length - 1) {
                    ul.style.left = 0;
                    pic = 0;//索引号归零 后续的代码会让 ul从的第一张渐渐地移动到第二张
                }
                pic++;
                var target = -pic * imgWidth;
                animate(ul, target);

                if (square < olLis.length - 1) {
                    square++;
                } else {
                    square = 0;
                }
                //干掉所有人
                for (var i = 0; i < olLis.length; i++) {
                    olLis[i].className = "";
                }
                //留下对应的
                olLis[square].className = "current";
            }
            //添加自动滚动事件
            clearInterval(timer);
            timer = setInterval(function(){
                 arrowsRight.onclick();
             },2000);//每隔一秒播放下一张
            //点击左箭头来切换
            arrowsLeft.onclick = function () {
                //如果是第一张 瞬间跳到最后 然后做从最后一张到倒数第二张的动画
                if (pic === 0) {
                    ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
                    pic = ulLis.length - 1;
                }
                pic--;
                var target = -pic * imgWidth;
                animate(ul, target);
                if (square > 0) {
                    square--;
                } else {
                    square = olLis.length - 1;
                }
                //干掉所有人
                for (var i = 0; i < olLis.length; i++) {
                    olLis[i].className = "";
                }
                //留下对应的
                olLis[square].className = "current";
            };

        }



        //这是给箭头做鼠标移动事件开始
        arrowsLeft.onmouseover = function(){
            this.style.background ="url(images/banner1.png) 0 -428px no-repeat";
            clearInterval(timer);
        }
        arrowsLeft.onmouseout = function(){
            this.style.background ="url(images/banner1.png) 0 -357px no-repeat";
        }
        arrowsRight.onmouseover = function(){
            this.style.background ="url(images/banner1.png) 0 -570px no-repeat";
        }
        arrowsRight.onmouseout = function(){
            this.style.background ="url(images/banner1.png) 0 -499px no-repeat";
        }
        //这是给箭头做鼠标移动事件结束


        //这是动态框架的封装
        function animate(obj, target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var leader = obj.offsetLeft;
                var step = 30;
                step = leader < target ? step : -step;
                if (Math.abs(target - leader) >= Math.abs(step)) {
                    leader = leader + step;
                    obj.style.left = leader + "px";
                } else {
                    obj.style.left = target + "px";
                    clearInterval(obj.timer);
                }
            }, 15);
        }
        //这是img的开始
        var main = document.getElementById("s-main");
        var content = main.children[0];
        var imgBig = content.children[1];
        var img = imgBig.children[0];
        var arrImg = [
            "一个人的旅行，",
            "너에게 닿기를",
            "初学者",
            "当你想念",
            "最佳歌手",
            "Born To Lose",
            "冲动",
            "十年",
        ];
        for( var i = 0;i < 7; i++){
            var clone = img.cloneNode(true);
            clone.children[0].src='images/s-image/0'+(i+2)+'.jpg' ;
            clone.children[1].innerHTML=""+(arrImg[i+1])+"";
            img.parentNode.appendChild(clone);
        }
        //这是榜单内容的开始
        var bigBox = document.getElementById("bigBox");
        var li = document.getElementById("li");
        var span = document.getElementById("span");
        var arr = ["周游",
            "Somebody",
            "너에게 닿기를",
            "初学者",
            "当你想念",
            "最佳歌手",
            "Born To Lose",
            "冲动",
            "十年",
            "北京北京"];
        li.onmouseover = function(){//这是给鼠标做移动事件的
            span.style.opacity = 1;
        }
        li.onmouseout = function(){
            span.style.opacity = 0;
        }
        //给li标签克隆
        for(var i=0; i<9; i++){
            var clone =li.cloneNode(true);//深度克隆LI、
            //注意克隆，事件是不能被克隆
            clone.onmouseover = function(){
                this.children[1].style.opacity = 1;
            }
            clone.onmouseout = function(){
               this.children[1].style.opacity = 0;
            }
          clone.children[0].children[0].innerHTML = ""+(i+2)+"";
                clone.children[0].children[1].innerHTML = ""+(arr[i+1])+"";

            li.parentNode.appendChild(clone);//给父级元素传回节点
            if (i % 2 === 0) {//i是偶数 到页面上对于用户来说就是奇数行
                li.style.backgroundColor = "#F4F4F4";//隔行换色
            } else {
                li.style.backgroundColor = "#E8E8E8";

            }

        }

        var navDatas = ["张惠妹", "尚雯婕", "羽泉", "李志", "马頔", "沈庆", "吴莫愁", "洪启", "李霄云", "孙楠", "周杰伦", "陈奕迅", "薛之谦", "BIGBANG", "林俊杰", "Maroon 5", "王菲", "李荣浩", "G.E.M.邓紫棋", "张学友"];
        //这是榜单内容的结束
        //最后给整个盒子来克隆
        var bigBox = document.getElementById("bigBox");
        var smallBox = bigBox.children[0];
        for( var i = 0;i <2; i++){
        var big = smallBox.cloneNode(true);//这是给smallBox来深度克隆
            //这是让其图片利用循环切换
          big.children[0].src='images/s-image/00'+(i+2)+'.jpg' ;
            //console.log(big.children[4]);
            for(var m=0;m<big.children[4].children.length;m++){
                big.children[4].children[m].children[0].children[1].innerHTML=navDatas[i*10+m];
                big.children[4].children[m].onmouseover = function(){
                    span.id = "span";
                    this.children[1].style.opacity = 1;
                }
                big.children[4].children[m].onmouseout = function(){
                    this.children[1].style.opacity = 0;
                }
            }
        smallBox.parentNode.appendChild(big);//回递
        }



        //这是侧边栏的开始

        var sidebar = document.getElementById("s-sidebar");
        var hpdengl=sidebar.children[0].children[1].children[0];

        hpdengl.onclick=function(){
            alertlogin();
        }
        var person = sidebar.children[2];
        var woman = ["张惠妹",
                    "尚雯婕",
                    "刘佳",
                    "徐帅领",
                    "涂浩",
                    "黄鹏",
                    "赵薇",
                    "邹云霞",
                    "柳友仁",
                    "刘曦",
                    "邹云霞",
                    "张惠妹",
                    "涂浩",
                    "柳友仁",
                    "刘曦" ];
        var ip = ["台湾歌手张惠妹",
            "最佳新人",
            "传智美男子",
            "帅的哥哥，人称帅哥",
            "我最爱最爱...",
            "大神也奈..",
            "小叶子",
            "相当作家的美女子",
            "认不得",
            "唱歌的还不错",
            "日本爱好者",
            "愤青小青年2",
            "愤青小青年3",
            "愤青小青年4",
            "愤青小青年5",];
        //深度克隆
        for(var j=0;j<8;j++){
            var clone = person.cloneNode(true);
            clone.children[0].src='images/s-image/person'+(j+1)+'.png';
            clone.children[1].children[0].innerHTML = ""+(woman[j+1])+"";
            clone.children[1].children[1].innerHTML = ""+(ip[j+1])+"";
            person.parentNode.appendChild(clone);
        }
        //这是侧边栏的结束
    });
