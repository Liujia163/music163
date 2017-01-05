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

        for (var i = 2; i < 31; i++) {
            //生成随机数，让图片随机生成
            //var random=parseInt(Math.random()*29+2);
            var li = ul.firstElementChild.cloneNode(true);
            li.firstElementChild.firstElementChild.firstElementChild.style.background="url(images/l-images/"+i+".jpg)";

            ul.appendChild(li);

        }
        //瀑布流布局函数
       /* document.onscroll=function(){
            for (var i = 2; i < 30; i++) {
                var li = ul.firstElementChild.cloneNode(true);
                li.firstElementChild.firstElementChild.firstElementChild.style.background="url(images/l-images/"+i+".jpg)";

                ul.appendChild(li);

            }
        }*/


    });