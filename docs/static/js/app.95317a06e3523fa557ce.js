webpackJsonp([0],[,,function(t,s,n){"use strict";n.d(s,"f",function(){return a}),n.d(s,"e",function(){return e}),n.d(s,"d",function(){return i}),n.d(s,"c",function(){return c}),n.d(s,"b",function(){return o}),n.d(s,"a",function(){return r});var a="changeShowStatus",e="changeArticleList",i="changeTopicShow",c="displayArticle",o="changeLogin",r="changeLoginWay"},,,,,,,,,function(t,s,n){"use strict";var a=n(5),e=n(65),i=n(53),c=n.n(i),o=n(50),r=n.n(o),l=n(55),u=n.n(l),_=n(56),v=n.n(_),p=n(51),f=n.n(p),h=n(54),d=n.n(h),m=n(52),g=n.n(m);a.a.use(e.a);var C=new e.a({routes:[{path:"/",component:c.a,children:[{path:"/",name:"Home",component:r.a}]},{path:"/topic",component:u.a,children:[{path:"/",name:"Topic",component:v.a}]},{path:"/bonus",name:"bonus",component:f.a},{path:"/login",name:"login",component:d.a},{path:"/download",name:"download",component:g.a},{path:"*",name:"error",redirect:{name:"Home"}}]});C.beforeEach(function(t,s,n){n()}),s.a=C},function(t,s,n){"use strict";var a=n(5),e=n(1),i=n(15),c=n(16),o=(n.n(c),n(20)),r=n(18),l=n(22),u=n(19),_=n(17),v=n(21);a.a.use(e.b);s.a=new e.b.Store({actions:i,getters:c,modules:{Home:o.a,Article:r.a,Topic:l.a,bonus:u.a,app:_.a,login:v.a},trict:!1})},function(t,s,n){n(43);var a=n(0)(n(24),n(57),null,null);t.exports=a.exports},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(5),e=n(13),i=n.n(e),c=n(11),o=n(12);a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,store:o.a,template:"<App/>",components:{App:i.a}})},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),n.d(s,"changeArticleList",function(){return e}),n.d(s,"changeShowStatus",function(){return i}),n.d(s,"changeTopicShow",function(){return c}),n.d(s,"changeLogin",function(){return o}),n.d(s,"changeLoginWay",function(){return r});var a=n(2),e=function(t,s){(0,t.commit)(a.e,s)},i=function(t,s){(0,t.commit)(a.f,s)},c=function(t,s){(0,t.commit)(a.d,s)},o=function(t){(0,t.commit)(a.b)},r=function(t,s){(0,t.commit)(a.a,s)}},function(t,s){},function(t,s,n){"use strict";var a=n(3),e=n.n(a),i=n(2),c={show:"home",loginSuccess:!1},o=e()({},i.b,function(t){t.loginSuccess=!t.loginSuccess});s.a={state:c,mutations:o}},function(t,s,n){"use strict";var a=n(3),e=n.n(a),i=n(2),c=n(23),o=c.a.changeStaticUrl("url(../../static/vue-demo-hot.jpg)"),r=c.a.changeStaticUrl("url(../../static/vue-demo-new.jpg)"),l=c.a.changeStaticUrl("url(../../static/vue-demo-daily.jpg)"),u={fir:{author:"徐丹妮",title:"我不是学霸，只是比你努力一点而已",time:"大约6小时之前",read:"8498",comment:"248",like:"2342",pay:"2",src:o},sec:{author:"阿俊",title:"Learn by doing",time:"大约6小时之前",read:"3398",comment:"258",like:"232",pay:"88",src:r},thi:{author:"尸叔",title:"如何让你的自拍，惊爆朋友圈？看我是怎么设计的",time:"大约2小时之前",read:"3750",comment:"70",like:"190",pay:"0",src:l}},_={articles:[{author:"徐丹妮",title:"我不是学霸，只是比你努力一点而已",time:"大约6小时之前",read:"8498",comment:"248",like:"2342",pay:"2",src:o}]},v=e()({},i.e,function(t,s){switch(s){case"hot":t.articles=[u.fir];break;case"new":t.articles=[u.sec];break;case"daily":t.articles=[u.thi];break;default:t.articles=[u.sec]}});s.a={state:_,mutations:v}},function(t,s,n){"use strict";var a=n(3),e=n.n(a),i=n(2),c={texts:{Jan:{title:"给你90天，成为不一样的自己",content_1:"如果你应付不了现在的生活和工作",content_2:"无论你走到哪里，",content_3:"无论你换了什么工作，什么公司，",content_4:"都无济于事。",content_5:"因为你根本没想让自己成熟起来，",content_6:"想让变的更优秀也不过是一句口头禅。",author:"",bg:"url(../../static/bonus_1.jpg)"},Feb:{title:"使你更有思想的20本书",content_1:"真正伟大的当代文学，",content_2:"正如人们借由狄更斯来了解十九世纪的英国，",content_3:"后人也可以通过《自由》来了解",content_4:"二十一世纪初期的美国。",content_5:"",content_6:"",author:"",bg:"url(../../static/bonus_2.jpg)"},Mar:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_3.jpg)"},Apr:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_4.jpg)"},May:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_5.jpg)"},Jun:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_6.jpg)"},Jul:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_7.jpg)"},Aug:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_8.jpg)"},Sep:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_9.jpg)"},Oct:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_10.jpg)"},Nov:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_11.jpg)"},Dec:{title:"无感是最舒适的爱情",content_1:"爱情原本就是个很娇气的东西，",content_2:"它经不起太多的矫情，你死我活和无理取闹，",content_3:"也经不起任何的伪装，刻意讨好和忍辱负重。",content_4:"当她拂去所有的惊喜，荣幸，不敢置信和小心翼翼，",content_5:"才是爱情最原本的样子。",content_6:"当她不再刻意的感受他的存在，",author:"",bg:"url(../../static/bonus_12.jpg)"}}},o=e()({},i.c,function(t,s){t.currentArticles=s});s.a={state:c,mutations:o}},function(t,s,n){"use strict";var a=n(3),e=n.n(a),i=n(2),c={show:"hot"},o=e()({},i.f,function(t,s){t.show=s});s.a={state:c,mutations:o}},function(t,s,n){"use strict";var a=n(3),e=n.n(a),i=n(2),c={loginway:"login",user:""},o=e()({},i.a,function(t,s){console.log(s),t.loginway=s});s.a={state:c,mutations:o}},function(t,s,n){"use strict";var a,e=n(3),i=n.n(e),c=n(2),o={topics:{fir:{img:"../../static/topic_1.jpg",title:"游戏",par:"玩转简书的第一步，从这个专题开始。\t\t\t\t  想上首页热门榜么？好内容想被更多人看到么？来投稿吧！\t\t\t\t  如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。\t\t\t\t  投稿必须原创。如果发现有非...",number:"97233",concern:"121.7",keys:"故事、连载",time:"20160620"},sec:{img:"../../static/topic_3.jpg",title:"诗",par:"诗，让你感受自己的心灵。\t\t\t\t 专题主编：苏锦年 投稿须知：\t\t\t\t 1.本专题收录古诗、词、现代诗以及诗词点评及指导。                 2.内容必须为原创，切勿用其他诗人的诗句。                 3.文章排版整洁，注意...",number:"35420",concern:"146.6",keys:"诗",time:"20160630"}},show:"hot"},r=(a={},i()(a,c.c,function(t,s){t.currentArticles=s}),i()(a,c.d,function(t,s){t.show=s}),a);s.a={state:o,mutations:r}},function(t,s,n){"use strict";function a(t){return t.replace("../../","./")}s.a={changeStaticUrl:a}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1);s.default={data:function(){return{show:"home"}},computed:n.i(a.a)({login_success:function(t){return t.app.login_success}}),method:{changeLogin:function(t){this.$store.dispatch("changeLoginWay",t)},changeShow:function(t){this.show=t}},watch:{$route:function(t,s){t.name&&(this.show=t.name.toLowerCase()),t.params.loginWay&&this.$store.dispatch("changeLoginWay",t.params.loginWay)}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1);s.default={computed:n.i(a.a)({articles:function(t){return t.Article.articles}}),methods:{pushArticleInfo:function(){this.$router.push({name:"Home",params:{articleId:123}})}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1);s.default={computed:n.i(a.a)({articles:function(t){return this.texts=t.bonus.texts,[this.texts.Jan,this.texts.Feb,this.texts.Mar,this.texts.Apr,this.texts.May,this.texts.Jun,this.texts.Jul,this.texts.Aug,this.texts.Sep,this.texts.Oct,this.texts.Nov,this.texts.Dec]}})}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1);s.default={computed:n.i(a.a)({show:function(t){return t.Home.show}}),methods:{displayArticle:function(t){this.$store.dispatch("changeShowStatus",t),this.$store.dispatch("changeArticleList",t)}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1);s.default={data:function(){return{checked:"true",username:void 0,password:void 0}},computed:n.i(a.a)({loginway:function(t){return t.login.loginway},user:function(t){return t.login.user},login_success:function(t){return t.app.login_success}}),methods:{changeLoginWay:function(t){this.$store.dispatch("changeLoginWay",t)},verify:function(){this.username==user.name&&this.password==user.password?login_success="true":alert("password or username is not correct,please try again!")}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1);s.default={computed:n.i(a.a)({show:function(t){return t.Topic.show}}),methods:{changeTopicShow:function(t){this.$store.dispatch("changeTopicShow",t)}}}},function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1);s.default={data:function(){return{change:"hot"}},computed:n.i(a.a)({topic:function(t){return t.Topic.topics},show:function(t){return t.Topic.show}}),method:{sortContent:function(){this.$store.dispatch("sortContent")}}}},,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,n){n(44);var a=n(0)(n(25),n(58),null,null);t.exports=a.exports},function(t,s,n){n(46);var a=n(0)(n(26),n(61),null,null);t.exports=a.exports},function(t,s,n){n(48);var a=n(0)(null,n(63),null,null);t.exports=a.exports},function(t,s,n){n(45);var a=n(0)(n(27),n(60),null,null);t.exports=a.exports},function(t,s,n){n(49);var a=n(0)(n(28),n(64),null,null);t.exports=a.exports},function(t,s,n){var a=n(0)(n(29),n(59),null,null);t.exports=a.exports},function(t,s,n){n(47);var a=n(0)(n(30),n(62),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("div",{staticClass:"sidebar"},[n("ul",{staticClass:"dropdown"},[n("li",{class:{active:"home"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.changeShow("home")}}},[n("i",{staticClass:"fa fa-home"}),n("span",[t._v("  首页")])])],1),t._v(" "),n("li",{class:{active:"topic"===t.show}},[n("router-link",{attrs:{to:{name:"Topic"}},on:{click:function(s){t.changeShow("topic")}}},[n("i",{staticClass:"fa fa-th"}),n("span",[t._v("  专题")])])],1),t._v(" "),n("li",{class:{active:"download"===t.show}},[n("router-link",{attrs:{to:"/download"},on:{click:function(s){t.changeShow("download")}}},[n("i",{staticClass:"fa fa-mobile"}),n("span",[t._v("  下载手机应用")])])],1)]),t._v(" "),n("ul",{staticClass:"nav-user"},[n("li",[n("router-link",{attrs:{to:"/test"}},[n("i",{staticClass:"fa fa-font"}),n("span",[t._v("  显示模式")])])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:{name:"login"}}},[n("i",{staticClass:"fa fa-sign-in"}),n("span",[t._v("  登录")])])],1)])]),t._v(" "),n("div",{staticClass:"home",attrs:{id:"app"}},[n("transition",{attrs:{name:"display"}},[n("router-view",{attrs:{transition:"display","transition-mode":"out-in"}})],1)],1),t._v(" "),n("div",{staticClass:"rightbar"},[t.login_success?t._e():n("nav",[n("router-link",{attrs:{to:{name:"login",params:{loginWay:"login"}}}},[n("i",{staticClass:"fa fa-sign-in"}),t._v("登录")]),t._v(" "),n("router-link",{attrs:{to:{name:"login",params:{loginWay:"register"}}}},[n("i",{staticClass:"fa fa-user"}),t._v("注册")])],1),t._v(" "),"true"==t.login_success?n("nav",[n("router-link",{attrs:{to:{name:"login"}},on:{click:function(s){t.changeLogin("login")}}},[n("i",{staticClass:"fa fa-sign-in"}),t._v("个人信息")])],1):t._e()])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",t._l(t.articles,function(s){return n("li",{staticClass:"list",on:{click:function(s){t.pushArticleInfo()}}},[n("p",{staticClass:"list-top"},[n("a",{staticClass:"author",attrs:{href:"#"}},[n("span",[t._v(t._s(s.author))])]),n("span",{staticClass:"time"},[t._v(" - "+t._s(s.time))])]),t._v(" "),n("h2",{staticClass:"title"},[n("a",{attrs:{href:"#"}},[t._v(t._s(s.title))])]),t._v(" "),n("div",{staticClass:"small-text-group"},[n("span",{staticClass:"small-text"},[t._v("阅读 "+t._s(s.read)+" -")]),t._v(" "),n("span",{staticClass:"small-text"},[t._v("评论 "+t._s(s.comment)+" -")]),t._v(" "),n("span",{staticClass:"small-text"},[t._v("喜欢 "+t._s(s.like)+" -")]),t._v(" "),n("span",{staticClass:"small-text"},[t._v("打赏 "+t._s(s.pay))])]),t._v(" "),n("span",{staticClass:"image",style:{backgroundImage:s.src,backgroundSize:"100%",backgroundRepeat:"no-repat"}})])}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"article-page"},[t._m(1),t._v(" "),n("div",{staticClass:"article-list"},[n("ul",{staticClass:"btn-group"},[n("li",{class:{active:"hot"===t.show}},[n("a",{on:{click:function(s){t.changeTopicShow("hot")}}},[t._v("热门")])]),t._v(" "),n("li",{class:{active:"recommend"===t.show}},[n("a",{on:{click:function(s){t.changeTopicShow("recommend")}}},[t._v("推荐")])])])]),t._v(" "),n("router-view")],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"showbar"},[n("div",{staticClass:"cover-image_2"}),t._v(" "),n("div",{staticClass:"text",staticStyle:{"text-shadow":"1px 1px 1px #000000"}},[n("h1",[t._v("专题")]),t._v(" "),n("h3",[t._v("让思想汇聚，流传")]),t._v(" "),n("p",{staticStyle:{"font-size":"14px","margin-bottom":"5px"}},[t._v("专题内容由多位写作者提供")]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-pencil"}),t._v("  新建专题")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("nav",[n("span",{staticClass:"search clearfloat"},[n("span",{staticClass:"input"},[n("input",{attrs:{type:"search",placeholder:"搜索"}})]),t._v(" "),n("span",{staticClass:"search-icon"},[n("i",{staticClass:"fa fa-search"})])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"article-page"},[n("nav",[t._m(1),t._v(" "),n("span",{staticClass:"nav-text"},[n("router-link",{attrs:{to:{name:"bonus"}}},[t._v("2015精选")])],1),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"article-list clearfix"},[n("ul",{staticClass:"btn-group"},[n("li",{class:{active:"hot"===t.show}},[n("a",{on:{click:function(s){t.displayArticle("hot")}}},[t._v("热门")])]),t._v(" "),n("li",{class:{active:"new"===t.show}},[n("a",{on:{click:function(s){t.displayArticle("new")}}},[t._v("新上榜")])]),t._v(" "),n("li",{class:{active:"daily"===t.show}},[n("a",{on:{click:function(s){t.displayArticle("daily")}}},[t._v("日报")])]),t._v(" "),n("li",{class:{active:"weekhot"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.show="weekhot"}}},[t._v("七日热门")])],1),t._v(" "),n("li",{class:{active:"monthhot"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.show="monthhot"}}},[t._v("三十日热门")])],1),t._v(" "),n("li",{class:{active:"reward"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.show="reward"}}},[t._v("有奖活动")])],1),t._v(" "),n("li",{class:{active:"publish"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.show="publish"}}},[t._v("简书出版")])],1),t._v(" "),n("li",{class:{active:"video"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.show="vedio"}}},[t._v("简书播客")])],1),t._v(" "),n("li",{class:{active:"hotnews"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.show="hotnews"}}},[t._v("时事热闻")])],1),t._v(" "),n("li",{class:{active:"choice"===t.show}},[n("router-link",{attrs:{to:{name:"Home"}},on:{click:function(s){t.show="choice"}}},[t._v("专题精选")])],1)]),t._v(" "),n("router-view")],1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"showbar"},[n("div",{staticClass:"cover-image"}),t._v(" "),n("div",{staticClass:"text",staticStyle:{"text-shadow":"1px 1px 1px #000000"}},[n("h1",[t._v("简书")]),t._v(" "),n("h3",[t._v("交流故事，沟通想法")]),t._v(" "),n("p",[t._v("一个基于内容分享的社区")]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-home"}),t._v("提笔写篇文章")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",{staticClass:"nav-text fir"},[n("a",{attrs:{href:"#"}},[t._v("发现")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",{staticClass:"search clearfloat"},[n("span",{staticClass:"input"},[n("input",{attrs:{type:"search",placeholder:"搜索"}})]),t._v(" "),n("span",{staticClass:"search-icon"},[n("i",{staticClass:"fa fa-seaSrch"})])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"bonus-container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",{staticClass:"text-list"},t._l(t.articles,function(s){return n("li",{style:{background:s.bg,backgroundSize:"100%",backgroundRepeat:"no-repeat",backgroundColor:"#ffffff"}},[n("div",{staticClass:"content"},[t._m(2,!0),t._v(" "),n("div",{staticClass:"bonus-text"},[n("div",{staticClass:"bonus-text-title"},[t._v(t._s(s.title))]),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"bonus-text-content"},[t._v("\n\t\t\t\t\t\t"+t._s(s.content_1)),n("br"),t._v("\n\t\t\t\t\t\t"+t._s(s.content_2)),n("br"),t._v("\n\t\t\t\t\t\t"+t._s(s.content_3)),n("br"),t._v("\n\t\t\t\t\t\t"+t._s(s.content_4)),n("br"),t._v("\n\t\t\t\t\t\t"+t._s(s.content_5)),n("br"),t._v("\n\t\t\t\t\t\t"+t._s(s.content_6)),n("br")])]),t._v(" "),n("div",{staticClass:"author"})])])}))])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"bonus-header"},[n("span",{staticClass:"yellow"},[t._v("  简书2015")]),t._v(" "),n("i",[t._v(" · ")]),t._v(" "),n("span",[t._v("每月一篇好文章  ")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"share"},[n("span",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-mobile"}),t._v("手机查看效果更佳")])]),t._v(" "),n("span",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-weibo"}),t._v("分享到微博")])]),t._v(" "),n("span",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-wechat"}),t._v("分享到微信")])]),t._v(" "),n("span",[n("a",{attrs:{href:"#"}},[t._v("更多分享")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("a",{staticClass:"mask",attrs:{href:"#"}},[n("div",{staticClass:"button"},[t._v("阅读全文>")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"topic_article_container"},["recommend"===t.show?n("div",{staticClass:"sequence-nav"},[n("a",{class:{active:"new"===t.change},on:{click:function(s){t.sortContent("time"),t.change="new"}}},[t._v("最新更新  ·")]),t._v(" "),n("a",{class:{active:"hot"===t.change},on:{click:function(s){t.change="hot"}}},[t._v("热门排序  ·")]),t._v(" "),n("a",{class:{active:"concern"===t.change},on:{click:function(s){t.sortContent("concern"),t.change="new"}}},[t._v("关注度排序")])]):t._e(),t._v(" "),n("ul",t._l(t.topic,function(s){return n("li",[n("a",{staticClass:"topic_article_img",attrs:{href:""}},[n("img",{attrs:{src:s.img}})]),t._v(" "),n("div",{staticClass:"topic_content"},[n("h5",[t._v(t._s(s.title))]),t._v(" "),n("p",[t._v(t._s(s.par))]),t._v(" "),t._m(0,!0),t._v(" "),n("p",[n("a",{staticStyle:{color:"#4094c7"},attrs:{href:"#"}},[t._v(t._s(s.number)+"篇文章")]),t._v("\n\t\t\t\t\t  ·  "+t._s(s.concern)+"k人关注\n\t\t\t\t\t"),n("span",{staticClass:"topic_tag"},[n("i",{staticClass:"fa fa-tags"}),t._v(t._s(s.keys))])])])])}))])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"topic_button"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-fw fa-plus"}),n("span",[t._v("添加关注")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"download_container"},[n("div",{staticClass:"download_content"},[n("div",{staticClass:"page-left"},[n("div",{staticClass:"logo"}),t._v(" "),n("div",{staticClass:"download_btn"},[n("ul",{staticClass:"download"},[n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-android"}),t._v("Android版")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-mobile"}),t._v("iPhone版")])])]),t._v(" "),n("div",{staticClass:"download_img1"})]),t._v(" "),n("ul",{staticClass:"share_list"},[n("li",[t._v("关注我们")]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-qq"})]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-weibo"})]),t._v(" "),n("li",[n("i",{staticClass:"fa fa-wechat"})])])]),t._v(" "),n("div",{staticClass:"app-img"})])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-logo"}),t._v(" "),n("div",{staticClass:"login-header"},[n("a",{class:{active:"login"==t.loginway},on:{click:function(s){t.changeLoginWay("login")}}},[t._v("    登录    ·")]),t._v(" "),n("a",{class:{active:"register"==t.loginway},on:{click:function(s){t.changeLoginWay("register")}}},[t._v("    注册    ")])]),t._v(" "),"login"===t.loginway?n("div",{staticClass:"login-input"},[n("form",{staticClass:"form_login",attrs:{action:"http://localhost:5480/WebApp/login.php",method:"post"}},[n("div",{staticClass:"username"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"span2",attrs:{type:"text",name:"register_name",placeholder:"选一个昵称"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),t._v(" "),n("div",{staticClass:"password"},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"span2",attrs:{type:"password",name:"register_password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),n("button",{staticClass:"login-btn btn",on:{click:t.verify}},[n("span",[t._v("登录")])]),t._v(" "),n("div",{staticClass:"login-control",staticStyle:{color:"#555555","font-size":"12px"}},[n("span",{staticClass:"checkbox",class:{checked:!0===t.checked},staticStyle:{float:"left"},on:{click:function(s){t.checked=!t.checked}}},[n("input",{staticStyle:{position:"absolute",opacity:"0"},attrs:{type:"checkbox",checked:"checked"}}),t._v(" "),n("ins",{staticClass:"check"})]),t._v(" "),n("span",{staticStyle:{float:"left"}},[t._v("记住我")]),t._v(" "),t._m(2)])])]):t._e(),t._v(" "),"register"===t.loginway?n("div",{staticClass:"login-input"},[t._m(3)]):t._e(),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",{staticClass:"span1"},[n("i",{staticClass:"fa fa-user"})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",{staticClass:"span1"},[n("i",{staticClass:"fa fa-unlock-alt"})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("span",{staticStyle:{float:"right"}},[n("a",{staticStyle:{color:"#555555"},attrs:{href:"#"}},[t._v("忘记密码")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("form",{staticClass:"form_register",attrs:{method:"post",action:"http://localhost:5480/WebApp/register.php"}},[n("div",{staticClass:"email"},[n("span",{staticClass:"span1"},[n("i",{staticClass:"fa fa-envelope-o"})]),t._v(" "),n("input",{staticClass:"span2",attrs:{type:"text",name:"email_adress",placeholder:"你的邮件地址"}})]),t._v(" "),n("div",{staticClass:"username"},[n("span",{staticClass:"span1"},[n("i",{staticClass:"fa fa-user"})]),t._v(" "),n("input",{staticClass:"span2",attrs:{type:"text",name:"sign_in[name]",placeholder:"手机号码/电子邮件"}})]),t._v(" "),n("div",{staticClass:"password"},[n("span",{staticClass:"span1"},[n("i",{staticClass:"fa fa-unlock-alt"})]),t._v(" "),n("input",{staticClass:"span2",attrs:{type:"password",name:"sign_in[password]",placeholder:"密码"}})]),t._v(" "),n("button",{staticClass:"register-btn btn",attrs:{type:"submit"}},[n("span",[t._v("注册")])]),t._v(" "),n("p",{staticClass:"register_text"},[t._v("点击 “注册” 或下方社交登录按钮，即表示您同意并愿意遵守简书 "),n("a",{attrs:{href:"#"}},[t._v("用户协议")]),t._v(" 和 "),n("a",{attrs:{href:"#"}},[t._v("隐私政策")]),t._v(" 。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"login-way"},[n("h5",[t._v("您还可以通过以下方式登录")]),t._v(" "),n("ul",[n("li",{staticClass:"qqicon"},[n("i",{staticClass:"fa fa-qq"})]),t._v(" "),n("li",{staticClass:"weiboicon"},[n("i",{staticClass:"fa fa-weibo"})]),t._v(" "),n("li",{staticClass:"wechaticon"},[n("i",{staticClass:"fa fa-wechat"})]),t._v(" "),n("li",{staticClass:"googleicon"},[n("i",{staticClass:"fa fa-google-plus"})]),t._v(" "),n("li",{staticClass:"githubicon"},[n("i",{staticClass:"fa fa-github"})])])])}]}}],[14]);
//# sourceMappingURL=app.95317a06e3523fa557ce.js.map