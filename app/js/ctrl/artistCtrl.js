/**
 * Created by Administrator on 2017/1/1.
 */
/**
 * 歌手：js写在toplistCtrl
 */
angular.module('controllers')
    .controller('artistCtrl', function ($scope) {

        var data1 = [
            {"name": "张惠妹", "icon": "images/r-images/t_1.png"},
            {"name": "尚雯婕", "icon": "images/r-images/t_2.png"},
            {"name": "羽泉", "icon": "images/r-images/t_3.png"},
            {"name": "李志", "icon": "images/r-images/t_4.png"},
            {"name": "马頔", "icon": "images/r-images/t_5.png"},
            {"name": "沈庆", "icon": "images/r-images/t_6.png"},
            {"name": "吴莫愁", "icon": "images/r-images/t_7.png"},
            {"name": "洪启", "icon": "images/r-images/t_8.png"},
            {"name": "李霄云", "icon": "images/r-images/t_9.png"},
            {"name": "孙楠", "icon": "images/r-images/t_10.png"}
        ];
        var data2 = [
            {"name": "周杰伦", "icon": "images/r-images/b_1.png"},
            {"name": "陈奕迅", "icon": "images/r-images/b_2.png"},
            {"name": "薛之谦", "icon": "images/r-images/b_3.png"},
            {"name": "BIGBANG", "icon": "images/r-images/b_4.png"},
            {"name": "林俊杰", "icon": "images/r-images/b_5.png"},
            {"name": "Maroon 5", "icon": "images/r-images/b_6.png"},
            {"name": "王菲", "icon": "images/r-images/b_7.png"},
            {"name": "李荣浩", "icon": "images/r-images/b_8.png"},
            {"name": "G.E.M.邓紫棋", "icon": "images/r-images/b_9.png"},
            {"name": "张学友", "icon": "images/r-images/b_10.png"}
        ];
        var data3 = [
            {"name": "张惠妹", "icon": "images/r-images/t_1.png"},
            {"name": "尚雯婕", "icon": "images/r-images/t_2.png"},
            {"name": "羽泉", "icon": "images/r-images/t_3.png"},
            {"name": "李志", "icon": "images/r-images/t_4.png"},
            {"name": "马頔", "icon": "images/r-images/t_5.png"},
            {"name": "沈庆", "icon": "images/r-images/t_6.png"},
            {"name": "吴莫愁", "icon": "images/r-images/t_7.png"},
            {"name": "洪启", "icon": "images/r-images/t_8.png"},
            {"name": "李霄云", "icon": "images/r-images/t_9.png"},
            {"name": "孙楠", "icon": "images/r-images/t_10.png"},
            {"name": "周杰伦", "icon": "images/r-images/b_1.png"},
            {"name": "陈奕迅", "icon": "images/r-images/b_2.png"},
            {"name": "薛之谦", "icon": "images/r-images/b_3.png"},
            {"name": "BIGBANG", "icon": "images/r-images/b_4.png"},
            {"name": "林俊杰", "icon": "images/r-images/b_5.png"},
            {"name": "Maroon 5", "icon": "images/r-images/b_6.png"},
            {"name": "王菲", "icon": "images/r-images/b_7.png"},
            {"name": "李荣浩", "icon": "images/r-images/b_8.png"},
            {"name": "G.E.M.邓紫棋", "icon": "images/r-images/b_9.png"},
            {"name": "张学友", "icon": "images/r-images/b_10.png"}
        ];
        //r-top歌手图片添加 start
        var ul = document.getElementById("r_ul");
        var innerSinger = ul.getElementsByTagName("ol")[0];
        var hotSinger = ul.getElementsByTagName("ol")[1];

        for (var i = 1; i < data1.length; i++) {
            append(data1, innerSinger);
            append(data2, hotSinger);
        }
        //添加函数
        function append(arr, element) {
            var data = arr[i];
            var dd = innerSinger.getElementsByTagName("dd")[0].cloneNode(true);
            var image = dd.firstElementChild.firstElementChild;
            image.src = data.icon;
            var span = image.nextElementSibling.children[0];
            span.innerText = data.name;
            if (i === 4 || i === 9) {
                dd.className = "last";
            }
            element.appendChild(dd);
        }

        //*r-top歌手图片添加 end*/

        //r-bottom 歌手名添加 start
        var singerName = document.getElementById("r_singerName");

        for (var k = 0; k < 5; k++) {
            var ul1 = document.createElement("ul");
            for (var j = 0; j < data1.length; j++) {
                var data = data1[j];
                var li = document.createElement("li");

                ul1.appendChild(li);
                var a = document.createElement("a");

                a.href = "javascript:;";
                a.innerHTML = data.name;
                li.appendChild(a);
                var i = document.createElement("i");

                li.appendChild(i);
            }
            singerName.appendChild(ul1);
        }
        //r-bottom 歌手名添加 end

        //随机给i标签添加图片
        appendImg(30);

        function appendImg(num) {

            var hot = document.getElementById("r_hot");
            var hotImgs = hot.getElementsByTagName("i");
            var randomNum = getRandom(70);
            for (var i = 0; i < 70; i++) {
                hotImgs[i].style.backgroundImage = "";
            }
            for (var j = 0; j < num; j++) {

                hotImgs[randomNum[j]].style.backgroundImage = "url(images/r-images/logo.png)";
            }
        }

        //切换图片
        var rTable = document.getElementById("r_table");
        var singerTables = rTable.getElementsByTagName("dd");

        var singerImg = ul.getElementsByTagName("img");

        var singerSpan = ul.getElementsByTagName("span");
        ;
        for (var i = 0; i < singerTables.length; i++) {
            singerTables[i].onclick = function () {

                appendImg(30);
                var randomNum1 = getRandom(20);
                for (var i = 0; i < singerImg.length; i++) {

                    console.log(data3[randomNum1[i]].icon);
                    singerImg[i].src = data3[randomNum1[i]].icon;
                    singerSpan[i].innerHTML = data3[randomNum1[i]].name;
                }
            };
        }
//
        function getRandom(num) {
            var arrNum = [];
            arrNum[0] = parseInt(Math.random() * num);
            do {
                var random1 = parseInt(Math.random() * num);
                var flag = true;
                for (var i = 0; i < arrNum.length; i++) {

                    if (arrNum[i] === random1) {
                        var random1 = parseInt(Math.random() * num);
                        flag = false;
                        break;
                    }
                }

                if (flag) {
                    arrNum.push(random1);
                }
            } while (arrNum.length < num);

            return arrNum;
        }
    });