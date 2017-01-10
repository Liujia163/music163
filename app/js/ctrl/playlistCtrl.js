/**
 * Created by Administrator on 2017/1/1.
 */
/**
 * 歌单：js写在toplistCtrl
 */
angular.module('controllers')
    .controller('playlistCtrl', function ($scope) {
        var ul = document.getElementById("l-content");
        //console.log(ul);//
        var mian1Datas = [
            {"name": "苏仨", "msg": "没有你陪伴真的好孤单", "text": "创作|翻唱"},
            {"name": "晚安沐语", "msg": "Vol.190 你永远都等不到一个求婚了", "text": "美文读物"},
            {"name": "睡不着电台", "msg": "那你听见了吗，我不安的心脏", "text": "情感调频"},
            {"name": "民谣与诗", "msg": "记忆不会被忘记，只会被覆盖。再见2016。", "text": "音乐故事"},
            {"name": "可可曾的翻唱", "msg": "人生若只如初见", "text": "创作|翻唱"},
            {"name": "美少女大劈叉", "msg": "人生若只如初见", "text": "脱口秀"},
            {"name": "圣人请卸妆", "msg": "舌尖上的《清明上河图》【上】", "text": "脱口秀"},
            {"name": "烂英文终结者", "msg": "英文新闻 | 为吃麦当劳 4岁男孩开玩具车狂飙", "text": "外语世界"},
            {"name": "任志宏诗歌散文朗诵", "msg": "《婆娘们》 朗诵: 任志宏 作者: 张行健", "text": "美文读物"},
            {"name": "银临的剪刀手", "msg": "银临茶舍丨第二期. Aki阿杰带着乐乐来开车", "text": "创作|翻唱"}
        ];
        createpic();
        function createpic(){
            var   json={};
            for (var i = 2; i < 31; i++) {
                var flagr=true;
                //生成随机数，让图片随机生成
                var random = parseInt(Math.random() * 29 + 2);
                while(flagr){
                    if(json[random]){
                        random = parseInt(Math.random() * 29 + 2);
                    }else{
                        json[random]=1;
                        flagr=false;
                    }
                }
                var ms=parseInt(Math.random() * 10);
                var li = ul.firstElementChild.cloneNode(true);
                li.firstElementChild.firstElementChild.firstElementChild.style.background = "url(images/l-images/" + random + ".jpg)";
                li.firstElementChild.children[1].children[0].children[0].innerHTML=mian1Datas[ms].name;
                li.firstElementChild.children[1].children[1].children[0].innerHTML=mian1Datas[ms].text;
                ul.appendChild(li);
            }
            console.log(json);
        }
        //给最新和热门添加排他 和 随机改变图片位置
        var l_xin = document.getElementById("l_xin")
        var as = l_xin.children;
        for (var j = 0; j < as.length; j++) {
            as[j].onclick = function () {
                for (var k = 0; k < as.length; k++) {
                    as[k].className = "";
                }
                this.className = "l-lr";
                var li = ul.firstElementChild.cloneNode(true);
                ul.innerHTML = "";
                ul.appendChild(li);
                createpic();
            }
        }
        //底部按钮和翻页按钮排他
        var ull = document.getElementById("ull");
        var liss = ull.getElementsByTagName("a");
        for (var l = 0; l < liss.length; l++) {
            liss[l].onclick = function () {
                for (var l = 0; l < liss.length; l++) {
                    liss[l].className = "";
                }
                this.className = "l_red";
                var li = ul.firstElementChild.cloneNode(true);
                ul.innerHTML = "";
                ul.appendChild(li);
                createpic();
            }
        }
    });