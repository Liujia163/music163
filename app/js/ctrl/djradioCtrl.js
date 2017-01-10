/**
 * Created by Administrator on 2017/1/1.
 */
/**
 * 主播电台：js写在toplistCtrl
 */
angular.module('controllers')
    .controller('djradioCtrl', function ($scope) {

        var navDatas = [
            {"name": "明星做主播"},
            {"name": "创作翻唱"},
            {"name": "脱口秀"},
            {"name": "美文读物"},
            {"name": "音乐故事"},
            {"name": "情感调频"},
            {"name": "有声小说"},
            {"name": "人文历史"},
            {"name": "外语世界"},
            {"name": "二次元"},
            {"name": "旅途城市"},
            {"name": "影视娱乐"},
            {"name": "3D|电子"},
            {"name": "校园|教育"},
            {"name": "亲子宝贝"},
            {"name": "广播剧"},
            {"name": "相声曲艺"},
            {"name": "我要做主播"}
        ];
        var mian1Datas = [
            {"name": "苏仨", "msg": "没有你陪伴真的好孤单", "text": "创作|翻唱"},
            {"name": "晚安沐语", "msg": "Vol.190 你永远都等不到一个求婚了", "text": "美文读物"},
            {"name": "睡不着电台 | storybook", "msg": "那你听见了吗，我不安的心脏", "text": "情感调频"},
            {"name": "民谣与诗", "msg": "记忆不会被忘记，只会被覆盖。再见2016。", "text": "音乐故事"},
            {"name": "可可曾的翻唱", "msg": "人生若只如初见", "text": "创作|翻唱"},
            {"name": "美少女大劈叉", "msg": "人生若只如初见", "text": "脱口秀"},
            {"name": "圣人请卸妆", "msg": "舌尖上的《清明上河图》【上】", "text": "脱口秀"},
            {"name": "烂英文终结者", "msg": "英文新闻 | 为吃麦当劳 4岁男孩开玩具车狂飙", "text": "外语世界"},
            {"name": "任志宏诗歌散文朗诵", "msg": "《婆娘们》 朗诵: 任志宏 作者: 张行健", "text": "美文读物"},
            {"name": "银临的剪刀手", "msg": "银临茶舍丨第二期. Aki阿杰带着乐乐来开车", "text": "创作|翻唱"}

        ];
        var mian2Datas = [
            {"num": "01", "name": "程一电台", "msg": "愿你爱的像孩子。", "wid": "100%"},
            {"num": "02", "name": "苏仨", "msg": "没有你陪伴真的好孤单", "wid": "95%"},
            {"num": "03", "name": "一个人听", "msg": "你要他有车有房，那你有什么？", "wid": "90%"},
            {"num": "04", "name": "见字如面", "msg": "蒋勤勤--林徽因写给徐志摩", "wid": "85%"},
            {"num": "05", "name": "轩子巨2兔 【ASMR】", "msg": "激烈运动后的场景】~3D助眠~AS", "wid": "80%"},
            {"num": "06", "name": "晓苏电台", "msg": "听说，你至今还放不下前任", "wid": "75%"},
            {"num": "07", "name": "淘漉音乐", "msg": "王菲、窦靖童、窦唯：愿世人不看故", "wid": "69%"},
            {"num": "08", "name": "小北电台", "msg": '"找一个永远不会腻的人在一起"', "wid": "65%"},
            {"num": "09", "name": "谷阿莫AmoGood", "msg": "谷阿莫：5分钟听完电影《爵迹》", "wid": "60%"},
            {"num": "10", "name": "机核GADIO游戏电台", "msg": "真田幸村与大阪之阵【GADIOPRO V", "wid": "50%"}

        ];
        var main3Datas = [
            {"name": "美文读物","name1":"见字如面","name2":"一听散文","name3":"最牛英文书单","name4":"而我想…成为一个有趣的妞"},
            {"name": "脱口秀","name1":"真相大白话","name2":"女王炸谈","name3":"蔡骏的悬疑世界","name4":"开普勒452b"},
            {"name": "情感调频","name1":"我可能声音不好感情不到发音不准但是我想说","name2":"夜半的双子电台","name3":"米莉.听见花开","name4":"女流"},
            {"name": "创作|翻唱","name1":"沈谧仁mile的广播中心","name2":"KC IS REAL","name3":"张钰琪音乐电台","name4":"听白无常唱歌"},
            {"name": "人文历史","name1":"网易历史|耳语者","name2":"国梁故事奇谈","name3":"围炉夜话","name4":"cookie地理学"},
        ];
        var main4Datas = [
            {"name1":"明星给你读那些感人的书信","name2":"优秀散文随时听","name3":"让你10分钟爱上一本书","name4":"演绎自己文字的F小姐"},
            {"name1":"冷知识纯干货，绝不带汤！","name2":"有态度，不吐不快。","name3":"作家蔡骏和你说故事","name4":"李维嘉主持的星座大数据脱口秀"},
            {"name1":"这里有童话故事","name2":"一起听他们的故事","name3":"睡前的治愈故事","name4":"女流的心灵砒霜"},
            {"name1":"听起来让人心疼的温暖男声","name2":"牛灿党酷girl的韩文翻唱","name3":"演唱爆发力连羽泉都称赞","name4":"超级萌音翻唱"},
            {"name1":"讲述那些不为人知的历史","name2":"民间故事，奇闻怪谈","name3":"终极吃货的练成宝典","name4":"一分钟听世界"}
        ];
        var main5Datas = [
            {"img1":"images/th-djrimg/zuihou/05.jpg","img2":"images/th-djrimg/zuihou/06.jpg","img3":"images/th-djrimg/zuihou/07.jpg","img4":"images/th-djrimg/zuihou/08.jpg"},
            {"img1":"images/th-djrimg/zuihou/09.jpg","img2":"images/th-djrimg/zuihou/10.jpg","img3":"images/th-djrimg/zuihou/11.jpg","img4":"images/th-djrimg/zuihou/12.jpg"},
            {"img1":"images/th-djrimg/zuihou/13.jpg","img2":"images/th-djrimg/zuihou/14.jpg","img3":"images/th-djrimg/zuihou/15.jpg","img4":"images/th-djrimg/zuihou/16.jpg"},
            {"img1":"images/th-djrimg/zuihou/17.jpg","img2":"images/th-djrimg/zuihou/18.jpg","img3":"images/th-djrimg/zuihou/19.jpg","img4":"images/th-djrimg/zuihou/20.jpg"},
            {"img1":"images/th-djrimg/zuihou/21.jpg","img2":"images/th-djrimg/zuihou/22.jpg","img3":"images/th-djrimg/zuihou/23.jpg","img4":"images/th-djrimg/zuihou/24.jpg"},
        ];


        var g_wrap = document.getElementById("th_g_wrap");
        var newul = document.createElement("ul");
        var main = document.getElementById("th_main");
        var n = 0;
        newul.className = "th-nav";
        //g_wrap.appendChild(newul);
        g_wrap.insertBefore(newul, main);
        var arr = [];
        for (var i = 0; i < navDatas.length; i++) {
            var str = '<li>' +
                '<a href="#/djradio">' +
                '<div>' +
                '</div>' +
                '<em>' + navDatas[i].name + '</em>' +
                '</a>' +
                '</li>' +
                '</ul>';
            arr.push(str);
        }
        newul.innerHTML = arr.join("");
        var icons = newul.getElementsByTagName("div");
        var as = newul.getElementsByTagName("a");
        var ems = newul.getElementsByTagName("em");
        for (var j = 0; j < icons.length; j++) {
            if (j + 1 < 10) {
                icons[j].style.background = "url(images/th-djrimg/0" + (j + 1) + ".png) no-repeat "
            } else {
                icons[j].style.background = "url(images/th-djrimg/" + (j + 1) + ".png) no-repeat"
            }
            as[j].onclick = function () {

                for (var i = 0; i < as.length; i++) {
                    as[i].index = i;
                    as[i].style.borderColor = "transparent";
                    n = this.index;
                    icons[i].style.backgroundPosition = "0 0";
                    ems[i].style.color = "";
                }
                this.style.borderColor = "#DB5E5E";
                icons[n].style.backgroundPosition = "-48px 0";
                ems[n].style.color = "#D35757";
                column();
            };
            as[j].onmouseover = function () {
                for (var i = 0; i < as.length; i++) {
                    as[i].style.backgroundColor = "";
                }
                this.style.backgroundColor = "#F6F7F7";
                as[n].style.backgroundColor = "";
            };
            as[j].onmouseout = function () {
                for (var i = 0; i < as.length; i++) {
                    as[i].style.backgroundColor = "";
                }
            };
        }


        var main = document.getElementById("th_main");
        //主体第一部分
        //创建第一个div
        column();
        function column(){
            main.innerHTML='';
            var column1 = document.createElement("div");
            column1.className = "th-column1";
            main.appendChild(column1);
            var mainH3a = document.createElement("div");
            mainH3a.className = "th-H3a";
            mainH3a.innerHTML = '<h3>' +
                '<a href="javascript:;">' +
                '节目推荐' +
                '</a>' +
                '</h3>' +
                '<a href="javascript:;">' +
                ' 更多 >' +
                '</a>';
            column1.appendChild(mainH3a);
            var h3a = mainH3a.children[0];
            h3a.className = "th-h3-1";
            var h3a = mainH3a.children[1];
            h3a.className = "th-h3a1";

            //创建第二个div
            var mainbf1 = document.createElement("ul");
            mainbf1.className = "th-mainbf1";
            column1.appendChild(mainbf1);

            var arr1 = [];
            for (var k = 0; k < mian1Datas.length; k++) {
                var str1 = '<li>' +
                    '<a class="a1" href="javascript:;">' +
                    '<i>' +
                    '</i>' +
                    '<img src="" alt=""/>' +
                    '</a>' +
                    '<div class="d1">' +
                    '<h3>' +
                    '<a href="javascript:;">' + mian1Datas[k].msg +
                    '</a>' +
                    '</h3>' +
                    '<p>' +
                    '<a href="javascript:;">' + mian1Datas[k].name +
                    '</a>' +
                    '</p>' +
                    '</div>' +
                    '<a class="txt" href="javascript:;">' + mian1Datas[k].text + '</a>' +
                    '</li>';
                arr1.push(str1);
            }
            mainbf1.innerHTML = arr1.join("");

            var imgs = mainbf1.getElementsByTagName("img");
            var is = mainbf1.getElementsByTagName("i");
            var lis = mainbf1.children;
            var bg1 = null;
            var x = 0;
            for (var m = 0; m < imgs.length; m++) {
                if (m + 1 < 10) {
                    imgs[m].src = "images/th-djrimg/tuijian/0" + (m + 1) + ".jpg";
                } else {
                    imgs[m].src = "images/th-djrimg/tuijian/" + (m + 1) + ".jpg";
                }
                if (m % 2 === 0) {
                    lis[m].style.backgroundColor = "#F7F7F7";
                } else {
                    lis[m].style.backgroundColor = "FFF";
                }
            }
            //lis
            for (var i = 0; i < lis.length; i++) {
                lis[i].onmouseover = function () {
                    for (var i = 0; i < lis.length; i++) {
                        lis[i].index = i;
                        bg1 = this.style.backgroundColor;
                        x = this.index;
                        is[i].className = "";
                    }
                    this.style.backgroundColor = "#EEE";
                    is[x].className = "th-i";

                }
                lis[i].onmouseout = function () {
                    this.style.backgroundColor = bg1;
                    is[x].className = "";
                }
            }

            //主体第二部分
            var column2 = document.createElement("div");
            column2.className = "th-column2";
            main.appendChild(column2);
            var mainH3b = document.createElement("div");
            mainH3b.className = "th-H3b";
            mainH3b.innerHTML = '<h3>' +
                '<a href="javascript:;">' +
                '节目排行榜' +
                '</a>' +
                '</h3>' +
                '<a href="javascript:;">' +
                ' 更多 >' +
                '</a>';
            column2.appendChild(mainH3b);
            var h3b = mainH3b.children[0];
            h3b.className = "th-h3-2";
            var h3b = mainH3b.children[1];
            h3b.className = "th-h3a2";

            //创建第二个盒子
            var mainbf2 = document.createElement("ul");
            mainbf2.className = "th-mainbf2";
            column2.appendChild(mainbf2);

            var arr2 = [];
            for (var k = 0; k < mian2Datas.length; k++) {
                var str2 = '<li>' +
                    '<div class="d2a">' +
                    '<em>' + mian2Datas[k].num +
                    '</em>' +
                    '<b>' +
                    '</b>' +
                    '</div>' +
                    '<a class="a2" href="javascript:;">' +
                    '<i>' +
                    '</i>' +
                    '<img src="" alt=""/>' +
                    '</a>' +
                    '<div class="fl d3">' +
                    '<h3>' +
                    '<a href="javascript:;">' + mian2Datas[k].msg +
                    '</a>' +
                    '</h3>' +
                    '<p>' +
                    '<a href="javascript:;">' + mian2Datas[k].name +
                    '</a>' +
                    '</p>' +
                    '</div>' +
                    '<span><b style="width:' + mian2Datas[k].wid + ';"></b></span>' +
                    '</li>';
                arr2.push(str2);
            }
            mainbf2.innerHTML = arr2.join("");
            //主体最后
            var imgss = mainbf2.getElementsByTagName("img");
            var liss = mainbf2.children;
            var iss = mainbf2.getElementsByTagName("i");
            var bg2 = null;
            var z = 0;
            for (var u = 0; u < mian2Datas.length; u++) {
                if (u + 1 < 10) {
                    imgss[u].src = "images/th-djrimg/paihangbang/0" + (u + 1) + ".jpg";
                } else {
                    imgss[u].src = "images/th-djrimg/paihangbang/" + (u + 1) + ".jpg";
                }
                if (u % 2 === 0) {
                    liss[u].style.backgroundColor = "#F7F7F7";
                } else {
                    liss[u].style.backgroundColor = "FFF";
                }
            }
            //liss
            for (var i = 0; i < liss.length; i++) {
                liss[i].onmouseover = function () {
                    for (var i = 0; i < liss.length; i++) {
                        liss[i].index = i;
                        bg2 = this.style.backgroundColor;
                        z = this.index;
                        iss[i].className = "";
                    }
                    this.style.backgroundColor = "#EEE";
                    iss[z].className = "th-i1";

                }
                liss[i].onmouseout = function () {
                    this.style.backgroundColor = bg2;
                    iss[z].className = "";
                }
            }
        }




        //最后部分
        var th_last0 = document.getElementById("th_last0");
        var th_last1 = th_last0.firstElementChild;
        for (var i = 0; i < main3Datas.length; i++) {
            var th_last1Clone = th_last1.cloneNode(true);
            //th_last1Clone.firstElementChild.firstElementChild.firstElementChild.innerHTML = main3Datas[i].name;
            th_last1Clone.children[0].children[0].children[0].innerHTML = main3Datas[i].name;
            //标题
            th_last1Clone.children[1].children[0].children[1].children[0].innerHTML = main3Datas[i].name1;
            th_last1Clone.children[1].children[1].children[1].children[0].innerHTML = main3Datas[i].name2;
            th_last1Clone.children[1].children[2].children[1].children[0].innerHTML = main3Datas[i].name3;
            th_last1Clone.children[1].children[3].children[1].children[0].innerHTML = main3Datas[i].name4;
            //文字
            th_last1Clone.children[1].children[0].children[1].children[1].innerHTML = main4Datas[i].name1;
            th_last1Clone.children[1].children[1].children[1].children[1].innerHTML = main4Datas[i].name2;
            th_last1Clone.children[1].children[2].children[1].children[1].innerHTML = main4Datas[i].name3;
            th_last1Clone.children[1].children[3].children[1].children[1].innerHTML = main4Datas[i].name4;
            //图片
            th_last1Clone.children[1].children[0].children[0].children[0].src = main5Datas[i].img1;
            th_last1Clone.children[1].children[1].children[0].children[0].src = main5Datas[i].img2;
            th_last1Clone.children[1].children[2].children[0].children[0].src = main5Datas[i].img3;
            th_last1Clone.children[1].children[3].children[0].children[0].src = main5Datas[i].img4;
            th_last0.appendChild(th_last1Clone);
        }
    });
