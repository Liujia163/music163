/**
 * Created by Administrator on 2017/1/1.
 */
/**
 * 排行榜：js写在toplistCtrl
 */
angular.module('controllers')
    .controller('toplistCtrl', function ($scope) {
        /*=----------------------left↓---------------------=*/
        /*特色榜*/
        //提取  父盒子
        var teSeBang = document.getElementById("x_teSeBang");
        //把父盒子所有儿子 赋值给它  div>孩子
        var tsbChildren = teSeBang.children;
        //模拟数据
        var tsb_arr = [
            //{url: '11.jpg', hot: '云音乐飙升榜',tip:'每天更新'},
            {url: '22.jpg', hot: '云音乐新歌榜', tip: '每天更新'},
            {url: '33.jpg', hot: '网易原创歌曲榜', tip: '每周四更新'},
            {url: '44.jpg', hot: '云音乐热歌榜', tip: '每周四更新'}
        ];
        var mtb_arr = [
            {url: 's1.jpg', hot: '云音乐ACG音乐榜', tip: '每周四更新'},
            {url: 's2.jpg', hot: '云音乐古典音乐榜', tip: '每周四更新'},
            {url: 's3.jpg', hot: '云音乐电音榜', tip: '每周五更新'},
            {url: 's4.jpg', hot: 'UK排行榜周榜', tip: '刚刚更新'},
            {url: 's5.jpg', hot: '美国Billboard周榜', tip: '每周三更新'},
            {url: 's6.jpg', hot: 'Beatport全球电子舞曲榜', tip: '每周四更新'},
            {url: 's7.jpg', hot: '法国 NRJ Vos Hits 周榜', tip: '每周五更新'},
            {url: 's8.jpg', hot: 'KTV唛榜', tip: '每周五更新'},
            {url: 's9.jpg', hot: 'iTunes榜', tip: '刚刚更新'},
            {url: 's10.jpg', hot: '日本Oricon周榜', tip: '每周三更新'},
            {url: 's11.jpg', hot: '韩国Melon排行榜周榜', tip: '刚刚更新'},
            {url: 's12.jpg', hot: '韩国Melon原声周榜', tip: '每周一更新'},
            {url: 's13.jpg', hot: '韩国Mnet排行榜周榜', tip: '每周一更新'},
            {url: 's14.jpg', hot: 'Hit FM Top榜', tip: '每周一更新'},
            {url: 's15.jpg', hot: '台湾Hito排行榜', tip: '每周一更新'},
            {url: 's16.jpg', hot: '中国TOP排行榜（港台榜）', tip: '每周一更新'},
            {url: 's17.jpg', hot: '中国TOP排行榜（内地榜）', tip: '每周一更新'},
            {url: 's18.jpg', hot: '香港电台中文歌曲龙虎榜', tip: '每周五更新'},
            {url: 's19.jpg', hot: '华语金曲榜', tip: '每周一更新'},
            {url: 's20.jpg', hot: '中国嘻哈榜', tip: '每周五更新'},
        ];

        //遍历tsb_arr  实现改变每个数据
        for (var i = 0; i < tsb_arr.length; i++) {

            //把父盒子的第2个孩子(ul)的首个节点(li)深度克隆 给lis
            var lis = tsbChildren[1].firstElementChild.cloneNode(true);

            //获取所有li标签的节点  给   liChildren
            var liChildren = lis.children;

            //找到 li标签第一个孩子(icon)的首页孩子(a)的首页孩子(a)  替换图片
            var img = liChildren[0].firstElementChild.firstElementChild;
            img.src = 'images/img/' + tsb_arr[i].url;

            //找到 li标签第二个孩子(key)的首页孩子(p)的首页孩子(a)   替换标题
            var txts = liChildren[1].firstElementChild.firstElementChild;
            txts.innerHTML = tsb_arr[i].hot;

            //找到 li标签第二个孩子(key)的首页孩子(p)   替换小标题
            var tips = liChildren[1].firstElementChild.nextElementSibling;
            tips.innerHTML = tsb_arr[i].tip;

            //添加li标签到  父盒子的第2个孩子(ul)的里面
            tsbChildren[1].appendChild(lis);
        }

        //把父盒子(div)第2个孩子(ul)浅克隆 给ul
        var ul = tsbChildren[1].cloneNode(false);

        //父盒子里面添加ul
        teSeBang.appendChild(ul);
        //遍历mtb_arr  实现改变每个数据
        for (var i = 0; i < mtb_arr.length; i++) {

            //父盒子(div)第2个孩子(ul)的首个子孩子(li)深克隆  给li
            var li = tsbChildren[1].firstElementChild.cloneNode(true);

            //提取里的所有节点
            var lis = li.children;

            //替换图片
            var img = li.firstElementChild.firstElementChild.firstElementChild;
            img.src = 'images/img/' + mtb_arr[i].url;

            //替换标题
            var txts = lis[1].firstElementChild.firstElementChild;
            txts.innerHTML = mtb_arr[i].hot;

            //替换小标题
            var tips = lis[1].firstElementChild.nextElementSibling;
            tips.innerHTML = mtb_arr[i].tip;

            //添加标签
            ul.appendChild(li);
        }

        var lis = teSeBang.getElementsByTagName("li");
        lis[0].classList.add("bac");


        //添加点击事件


        /*=-------------------left↑----------------=*/
        /*=----------------right↓-------------------=*/
        /*=--------获取日期↓---------=*/
        var x_riQi = document.getElementById('riqi');
        var date = new Date();
        var yue = date.getMonth() + 1;
        var ri = date.getDate();
        yue = yue < 10 ? "0" + yue : yue;
        ri = ri < 10 ? "0" + ri : ri;
        var riqi = yue + "月" + ri + "日";
        x_riQi.innerHTML = riqi;
        /*=--------获取日期↑---------=*/
        /*<!--=========TOP button========-->*/
        var x_TopBen = document.getElementById('x_TopBtn');
        var x_TopBtns = x_TopBen.children;
        var em = x_TopBtns[0].firstElementChild.firstElementChild;

        function is(i) {
            return x_TopBtns[i].firstElementChild;
        }

        onMouseOver(x_TopBtns[0], 0, -469, em, -28, -1622);
        onMouseOut(x_TopBtns[0], 0, -387, em, 0, -1622);

        onMouseOver(x_TopBtns[2], 0, -1063, is(2), -245, -1106);
        onMouseOut(x_TopBtns[2], 0, -977, is(2), -245, -1020);

        onMouseOver(x_TopBtns[3], 0, -1268, is(3), -245, -1106);
        onMouseOut(x_TopBtns[3], 0, -1225, is(3), -245, -1020);

        onMouseOver(x_TopBtns[4], 0, -2805, is(4), -245, -1106);
        onMouseOut(x_TopBtns[4], 0, -2761, is(4), -245, -1020);

        onMouseOver(x_TopBtns[5], 0, -1508, is(5), -245, -1106);
        onMouseOut(x_TopBtns[5], 0, -1465, is(5), -245, -1020);

        function onMouseOver(id1, x1, y1, id2, x2, y2) {
            id1.onmouseover = function () {
                this.style.backgroundPosition = x1 + "px " + y1 + "px";
                id2.style.backgroundPosition = x2 + "px " + y2 + "px";
            }
        }

        function onMouseOut(id1, x1, y1, id2, x2, y2) {
            id1.onmouseout = function () {
                this.style.backgroundPosition = x1 + "px " + y1 + "px";
                id2.style.backgroundPosition = x2 + "px " + y2 + "px";
            }
        }

        /*<!--=========TOP button========-->*/


        /*=----------------right↑-------------------=*/
        /*=------------克隆tr↓-------------------=*/
        var tr_arr = [
            {url: 'images/img/bsb1.jpg', icon: '-74px -304px', geName: '(동영상) 짜라빠빠 댄스<', shichang: '03:49', Name: '李慧'},
            {url: 'images/img/bsb2.jpg', icon: '-67px -289px', geName: '一枝孤芳', shichang: '04:19', Name: '钟汉良'},
            {url: 'images/img/bsb3.jpg', icon: '-67px -289px', geName: '周游', shichang: '03:45', Name: '陈粒'},
            {url: '', icon: '-67px -289px', geName: "Somebody Else's LoverMV", shichang: '03:49', Name: '谭晶'},
            {url: '', icon: '-67px -289px', geName: "眼前 - (电视剧《孤芳不自赏》主题曲)", shichang: '03:51', Name: '叶辰'},
            {url: '', icon: '-67px -289px', geName: "心藏（原唱：张继科）", shichang: '03:45', Name: '任然'},
            {url: '', icon: '-67px -289px', geName: "凉城", shichang: '03:52', Name: '谢春花'},
            {url: '', icon: '-67px -289px', geName: "荏苒冬春去", shichang: '04:28', Name: '黄盖'},
            {url: '', icon: '-67px -289px', geName: "易燃易爆炸（Cover：华晨宇）", shichang: '03:45', Name: '霍尊'},
            {url: '', icon: '-67px -289px', geName: "孤芳不自赏 - (电视剧《孤芳不自赏》主题曲)", shichang: '05:06', Name: '宋佳兴'},
            {url: '', icon: '-67px -289px', geName: "痕", shichang: '04:59', Name: '暗杠'},
            {url: '', icon: '-67px -289px', geName: "一生所爱 （Cover 卢冠廷）", shichang: '04:16', Name: '韦礼安/郭静'},
            {url: '', icon: '-67px -289px', geName: "一万个不回头的方法MV", shichang: '04:37', Name: '魏如萱'},
            {url: '', icon: '-67px -289px', geName: "天高路远", shichang: '04:09', Name: '南征北战'},
            {
                url: '',
                icon: '-67px -289px',
                geName: "Kill Em with Kindness (Felix Cartal Remix)",
                shichang: '03:16',
                Name: '华晨宇'
            },
            {url: '', icon: '-67px -289px', geName: "国王与乞丐", shichang: '02:57', Name: '张赫宣'},
            {url: '', icon: '-67px -289px', geName: "如果还有一次如果", shichang: '04:12', Name: '郝云'},
            {url: '', icon: '-67px -289px', geName: "四季不败 MV", shichang: '04:27', Name: '尚雯婕'},
            {
                url: '',
                icon: '-67px -289px',
                geName: "single boy (Filatov & Karas remix)",
                shichang: '04:19',
                Name: '刘昊霖/kidult.'
            },
            {url: '', icon: '-67px -289px', geName: "Landing Guy", shichang: '04:06', Name: 'San Holo'},
            {url: '', icon: '-67px -289px', geName: "Light", shichang: '04:00', Name: 'A-Lin'},
            {url: '', icon: '-67px -289px', geName: "梦话", shichang: '03:54', Name: '漆柚'},
            {url: '', icon: '-67px -289px', geName: "松烟入墨", shichang: '04:37', Name: '小义'},
            {url: '', icon: '-67px -289px', geName: "Nevada (Original Mix)MV", shichang: '03:28', Name: 'Snakehips/MØ'},
            {url: '', icon: '-67px -289px', geName: "Don't LeaveMV", shichang: '03:34', Name: 'WRLD/San Holo'},
            {url: '', icon: '-67px -289px', geName: "Light (WRLD Remix)", shichang: '03:29', Name: '杨朗朗'},
            {url: '', icon: '-67px -289px', geName: "这个冬天", shichang: '04:09', Name: '栗先达'},
            {url: '', icon: '-67px -289px', geName: "相守MV", shichang: '04:15', Name: '苏醒'},
            {url: '', icon: '-67px -289px', geName: "原地", shichang: '04:53', Name: '刘思涵'},
            {url: '', icon: '-67px -289px', geName: "我的时代 - (网易CC直播年度主题曲)", shichang: '04:18', Name: '韩熙贞'},
            {url: '', icon: '-67px -289px', geName: "꿈꾼다 - (做梦)", shichang: '04:02', Name: '简弘亦'},
            {url: '', icon: '-67px -289px', geName: "你就不要想起我 (cover田馥甄)", shichang: '04:40', Name: '李玉刚'},
            {url: '', icon: '-67px -289px', geName: "有什么奇怪", shichang: ' 03:42', Name: '郭顶'},
            {url: '', icon: '-67px -289px', geName: "Party Till We DieMV", shichang: '02:38', Name: '阿细'},
            {url: '', icon: '-67px -289px', geName: "你还要我怎样（粤语Cover：薛之谦）", shichang: '05:07', Name: '徐心妍'},
            {url: '', icon: '-67px -289px', geName: "我在人民广场吃炸鸡 《情圣》电影 翻唱版 (cover 赵大格)", shichang: '03:05', Name: '卫兰'},
            {url: '', icon: '-67px -289px', geName: "验伤", shichang: '03:47', Name: 'DAY6'},
            {url: '', icon: '-67px -289px', geName: "Stay With Me (cover：灿烈、Punch)", shichang: '03:17', Name: '李维特'},
            {url: '', icon: '-67px -289px', geName: "Setting Fires (Sigma Remix)", shichang: '04:15', Name: '鹏泊'},
            {url: '', icon: '-67px -289px', geName: "啷个哩个啷", shichang: '03:07', Name: 'Laymen'},
            {url: '', icon: '-67px -289px', geName: "四季（Cover:陈奕迅）", shichang: '04:04', Name: '周二珂'},
            {url: '', icon: '-67px -289px', geName: "告白气球 - (原唱：周杰伦)MV", shichang: '03:33', Name: 'Pixie Paris'},
            {url: '', icon: '-67px -289px', geName: "Es rappelt im KartonMV", shichang: '03:24', Name: '双笙/囧菌'},
            {
                url: '',
                icon: '-67px -289px',
                geName: "We Don't Talk Anymore03:33' +45素年锦时",
                shichang: '03:23',
                Name: '王亚伟'
            },
            {url: '', icon: '-67px -289px', geName: "说散就散（Cover JC）", shichang: '03:50', Name: 'IR拖鞋'},
            {url: '', icon: '-67px -289px', geName: "雨好", shichang: '04:15', Name: '陈鸿宇'},
            {url: '', icon: '-67px -289px', geName: "爱的青春短", shichang: '04:33', Name: '李行亮'},
            {url: '', icon: '-67px -289px', geName: "We Can Fly MV", shichang: '04:36', Name: '朱娜'},
            {url: '', icon: '-67px -289px', geName: "七月上", shichang: '03:10', Name: 'Jam'},
            {url: '', icon: '-67px -289px', geName: "偏执狂 - (原曲：Underneath The Stars)", shichang: '03:29', Name: '陈势安'},
        ];


        var x_cen_List = document.getElementById('list');//获取tbody
        for (var i = 0; i < tr_arr.length; i++) {
            var content_Tr = x_cen_List.children[0].cloneNode(true);//获取tr


            var ranking = content_Tr.children[0].children[0];//获取tr1里面的div
            if (i > 2) {
                ranking.style.marginTop = 10 + "px";//改div的margin
            }


            var geName = content_Tr.children[1].children[0].children[1].children[1];//获取歌名
            geName.innerHTML = tr_arr[i].geName;//改变歌名


            var shichang = content_Tr.children[2].children[0];//获取歌的时长
            shichang.innerHTML = tr_arr[i].shichang;//改时长


            var Name = content_Tr.children[3].children[0];//获取作者
            Name.innerHTML = tr_arr[i].Name;//改变作者


            var icon_png = content_Tr.children[0].children[0].children[1];//改顺序的小图片
            icon_png.style.backgroundPosition = tr_arr[i].icon;
            //-74px -299px;上
            //-74px -318px;下


            var order = content_Tr.children[0].children[0].children[0];//获取顺序
            order.innerHTML = i + 1;//改变顺序


            var td_imgs = content_Tr.children[1].children[0].children[0];//获取tr2里面的图片
            td_imgs.src = tr_arr[i].url;//改图片
            if (tr_arr[i].url == "") {
                content_Tr.children[1].children[0].removeChild(td_imgs);//删除img路径
            }


            x_cen_List.appendChild(content_Tr);
        }

        x_cen_List.firstElementChild.style.display = "none";


        /*隔行变色*/
        var x_Trs = x_cen_List.children;
        for (var i = 0; i < x_Trs.length; i++) {
            if (i % 2 == 0) {
                x_Trs[i].style.backgroundColor = '#f7f7f7';
            }
        }
        /*隔行变色*/

        /*=------------克隆tr↑-------------------=*/

        /*---------bottom↓---------*/

        /*=------------克隆tr↑-------------------=*/

        /*---------bottom↓---------*/

        var user_arr = [
            {pic: 'yh1', name: '阿萌小朋友', content: '：第一第二支持了', riqi: '12:49'},
            {pic: 'yh2', name: '慧慧的脑残粉', content: '：我要给你生猴子', riqi: '12:34'},
            {pic: 'yh3', name: '4kas', content: '：跑个屁😒', riqi: '12:29'},
            {pic: 'yh4', name: '李慧隔壁家的王先生', content: '舞蹈跳的不错,有时间一个探讨', riqi: '12:04'},
            {pic: 'yh5', name: '邓小呆sally', content: '：光·年·之·外', riqi: '12:03'},
            {pic: 'yh6', name: '010来了', content: '：非常好听', riqi: '12:02'},
            {pic: 'yh7', name: '李慧我耐你', content: ':全天下就流行音乐好听了，呵呵', riqi: '11:42'},
            {pic: 'yh8', name: '看过霉霉和大哥的演唱会再改名', content: '：慧老板！', riqi: '11:20'},
            {pic: 'yh9', name: 'A尘宸橙', content: '：是呦', riqi: '10:38'},
            {pic: 'yh10', name: '永远perFect', content: '：光年之外很厉害呦', riqi: '10:35'},
            {pic: 'yh11', name: 'JustSoSo小夏同学', content: '：厉害了我慧', riqi: '09:51'},
            {pic: 'yh12', name: 'Anitasky', content: '：今天还要听光年之外哦', riqi: '09:12'},
            {pic: 'yh13', name: 'wuli花轮', content: '：为什么没有我pakho的有生一天?', riqi: '?09:11'},
            {pic: 'yh14', name: '陌上尘destiny', content: '：大毛四杀@DMao酱', riqi: '03:01'},
            {pic: 'yh15', name: '柠柠柠kkk', content: '：老慧威武昨天', riqi: '00:42'},
            {pic: 'yh16', name: 'Qtghost', content: '：昨天', riqi: '23:57'},
            {pic: 'yh17', name: 'Ally包', content: '：❤️大家想拥有骚猪直播时展示的动态桌面吗', riqi: '23:03'},
            {pic: 'yh18', name: 'z皮皮虾', content: '：华晨宇，南屏晚钟昨天', riqi: '22:44'},
            {pic: 'yh19', name: '只听华晨宇的歌', content: '：我邓的光年之外不错啊', riqi: '22:30'},
            {
                pic: 'yh20',
                name: '死亡岛国',
                content: '：慧老板来了 ！各位快跑啊 没时间了 下周各个榜就更新了qwq！！',
                riqi: '22:28',
            }
        ];
        var x_publish = document.getElementById('publish');
        for (var i = 0; i < 20; i++) {
            var x_user = x_publish.children[1].cloneNode(true);//获取评论区

            //改图片
            var x_user_img = x_user.children[0];
            //console.log(x_user_img);
            x_user_img.style.background = 'url(images/img/' + user_arr[i].pic + '.jpg)';
            //改名字
            var x_user_name = x_publish.children[1].children[1].children[0];
            x_user_name.innerHTML = user_arr[i].name;
            //改内容
            var x_user_content = x_publish.children[1].children[1].children[1];
            x_user_content.innerHTML = user_arr[i].content;
            //改日期
            var x_user_riqi = x_publish.children[1].children[1].children[4].children[0];
            x_user_riqi.innerHTML = user_arr[i].riqi;
            //改赞数
            var praise = Math.floor(Math.random() * 50);
            var x_user_praises = x_publish.children[1].children[1].children[4].children[2];
            x_user_praises.innerHTML = ' <i class="icon2-png"></i>(' + praise + ')';


            x_publish.appendChild(x_user);
        }
        x_publish.children[1].style.display = "none";

        /*---------bottom↑---------*/
        /*------------点击事件------------*/
        //点击云音乐特色榜
        var x_title = document.getElementById('x_title');
        var title_arr = [
            {url: '1', name: '云音乐飙升榜'},
            {url: '2', name: '云音乐新歌榜'},
            {url: '3', name: '网易原创歌曲榜'},
            {url: '4', name: '云音乐热歌榜'}
        ];
        var title_tr_arr = [
            {url: 'images/img/bsb1.jpg', icon: '-74px -304px', geName: '(동영상) 짜라빠빠 댄스<', shichang: '03:49', Name: '李慧'},
            {url: 'images/img/bsb2.jpg', icon: '-67px -289px', geName: '一枝孤芳', shichang: '04:19', Name: '钟汉良'},
            {url: 'images/img/bsb3.jpg', icon: '-67px -289px', geName: '周游', shichang: '03:45', Name: '陈粒'},
            {url: 'images/img/xgb1.jpg', icon: '-74px -304px', geName: 'Shape of YouMV', shichang: '03:53', Name: 'Ed Sheeran'},
            {url: 'images/img/xgb2.jpg', icon: '-67px -289px', geName: 'Castle on the HillMV', shichang: '04:21', Name: 'Ed Sheeran'},
            {url: 'images/img/xgb3.jpg', icon: '-67px -289px', geName: '光年之外 - (电影《太空旅客》中文主题曲)MV', shichang: '03:55', Name: 'G.E.M.邓紫棋'},
            {url: 'images/img/ycb1.jpg', icon: '-74px -304px', geName: '只道寻常', shichang: '04:36', Name: '谢春花'},
            {url: 'images/img/ycb2.jpg', icon: '-67px -289px', geName: '嘿，抬头！', shichang: '04:10', Name: '贰佰'},
            {url: 'images/img/ycb3.jpg', icon: '-67px -289px', geName: '配不上你MV', shichang: '05:14', Name: 'Fine乐团'},
            {url: 'images/img/rgb1.jpg', icon: '-74px -304px', geName: '告白气球', shichang: '03:35', Name: '周杰伦'},
            {url: 'images/img/rgb2.jpg', icon: '-67px -289px', geName: '童话镇', shichang: '04:17', Name: '陈一发儿'},
            {url: 'images/img/rgb3.jpg', icon: '-67px -289px', geName: '演员MV', shichang: '04:21', Name: '薛之谦'}
        ];


        var title_length = tsbChildren[1].children;//获取左边每一个标题
        for (var i = 0; i < title_length.length; i++) {
            title_length[i].index = i;
            title_length[i].onclick = function () {

                var title_img = x_title.children[0].children[0];//右边标题图片
                title_img.src = "images/img/" + title_arr[this.index].url + ".jpg";//改变标题图片

                var title_name = x_title.children[1].children[0];//获取标题名字
                title_name.innerHTML = title_arr[this.index].name;//改变标题名字


                song_list(this,"0");
                song_list(this,"1");
                song_list(this,"2");
                song_list(this,"3");

                        for (var j = 0; j < lis.length; j++) {
                            lis[j].className = "x-box-left-tese clearfix"
                        }
                        this.className = "x-box-left-tese clearfix bac"




            }
        }

        function song_list(obj,title_length){
            if(obj.index == title_length) {
                for (var j = 0; j < 3; j++) {
                    x_cen_List.children[j + 1].children[1].children[0].children[0].src = title_tr_arr[obj.index + (title_length*2) + j].url;
                    x_cen_List.children[j + 1].children[1].children[0].children[1].children[1].innerHTML = title_tr_arr[obj.index + (title_length*2) + j].geName;
                    x_cen_List.children[j + 1].children[2].children[0].innerHTML = title_tr_arr[obj.index + (title_length*2) + j].shichang;
                    x_cen_List.children[j + 1].children[3].children[0].innerHTML = title_tr_arr[obj.index + (title_length*2) + j].Name;
                }
            }
        }
        //点击事件
        for (var i =4; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onclick = function () {
                for (var j = 0; j < lis.length; j++) {
                    lis[j].className = "x-box-left-tese clearfix"
                }
                this.className = "x-box-left-tese clearfix bac"
            }
        }


        //img.url = 'images/img/' + tsb_arr[i].url;
        //var head_txt = liChildren[1].firstElementChild.firstElementChild;
        //txts.innerHTML = tsb_arr[i].hot;
    }
)



