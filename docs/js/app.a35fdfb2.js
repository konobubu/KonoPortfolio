(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/KonoPortfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2dc9":function(t,e,a){"use strict";var n=a("da6f"),s=a.n(n);s.a},"345e":function(t,e,a){t.exports=a.p+"img/tin.78c8d1ae.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"nav"},[a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"nav-item",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"nav-item",attrs:{to:"/contact"}},[t._v("Contact")])],1)]),a("router-view"),t._m(0)],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("strong",[t._v("Kono Portfolio")]),t._v(" by "),a("span",[t._v("Kono")])])}],i=(a("f5df1"),{name:"App"}),l=i,o=(a("5c0b"),a("2877")),c=Object(o["a"])(l,s,r,!1,null,null,null),u=c.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Top")],1)},p=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio-ttl"},[a("vue-typer",{attrs:{text:"This is Kono Portfolio",repeat:0,"type-delay":80}})],1)},m=[],_=(a("ac1f"),a("1276"),a("e956")),y={components:{VueTyper:_["VueTyper"]},data:function(){return{text:"This is Kono Portfolio",textCount:"",txt:[],index:[1,2,3,4,5,6,7,8,9,10],array:{ind:"",tx:"This is Kono Portfolio"}}},methods:{addArray:function(){this.textCount=this.text.length;for(var t=0;t<this.textCount;t++)this.txt=this.text.split(""),this.index.push(t)},shuffle:function(){for(var t=this.array.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),a=this.array[t];this.array[t]=this.array[e],this.array[e]=a}}},created:function(){this.array.ind=this.index,this.addArray(),this.shuffle()}},h=y,b=(a("c3c8"),Object(o["a"])(h,v,m,!1,null,"736f9f74",null)),C=b.exports,g={name:"Home",components:{Top:C}},x=g,k=(a("f47a"),Object(o["a"])(x,f,p,!1,null,"031dc31d",null)),w=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("Profile"),a("div",{staticClass:"skill-wrapper"},[a("div",{directives:[{name:"inview",rawName:"v-inview:animate",value:"fadeInLeft",expression:"'fadeInLeft'",arg:"animate"}],staticClass:"skill"},[t._l(t.skillText,(function(e,n){return a("span",{key:n,staticClass:"skill-txt",style:{animationDelay:100*n+100+"ms"}},[t._v(" "+t._s(e)+" ")])})),a("Skill",{attrs:{skills:t.mySkill}})],2),a("div",{staticClass:"study"},[t._l(t.studyText,(function(e,n){return a("span",{key:n,staticClass:"study-txt",style:{animationDelay:100*(t.count-n)+400+"ms"}},[t._v(" "+t._s(e)+" ")])})),a("Skill",{attrs:{studies:t.StudyNow}})],2)])],1)},j=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skill-table"},[a("table",{staticClass:"myskill-table"},[a("tbody",t._l(t.skills,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"skill-lang"},[t._v(t._s(e.lang))]),a("td",{staticClass:"teble-conect"},[t._v("・・・・")]),t._v(" "),a("td",{staticClass:"skill-star"},[a("span",{staticClass:"star-rating",style:{width:e.star+"%"}},[t._v(t._s(t.star))])])])})),0)]),a("table",{staticClass:"study-table"},[a("tbody",t._l(t.studies,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"skill-lang"},[t._v(t._s(e.lang))]),a("td",{staticClass:"teble-conect"},[t._v("・・・・")]),a("td",{staticClass:"skill-star"},[a("span",{staticClass:"star-rating",style:{width:e.star+"%"}},[t._v(t._s(t.star))])])])})),0)])])},O=[],T={name:"Skill",props:{skills:Array,studies:Array},data:function(){return{star:"★★★★★"}}},E=T,$=(a("713d"),Object(o["a"])(E,P,O,!1,null,"193636f7",null)),A=$.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-wrapper"},[n("div",{staticClass:"profile"},[n("div",{staticClass:"profile-img"},[n("figure",[n("img",{attrs:{src:a("345e")}})])]),n("div",{staticClass:"profile-txt"},[n("h2",[t._v("Profile")]),n("p",[t._v("はじめまして。1998年生まれの向野佑基と申します。気軽にこのっちなんて呼んでください。 学校は近畿大学産業理工学部。2021年卒予定です。 ベンチャー企業での長期インターンを通して、サイトを運営していくうちに自分で作った機能が実装されたり、 新しい技術に挑戦するのが楽しくなりwebエンジニアとしての就活を始めることを決意しました。")])])])])}],H=(a("e6ed"),{}),L=Object(o["a"])(H,K,M,!1,null,"0b64a8d1",null),N=L.exports,q={components:{Skill:A,Profile:N},data:function(){return{skillText:"MySkill",studyText:"Study",count:"",mySkill:[{id:0,lang:"HTML",star:40},{id:1,lang:"CSS",star:40},{id:2,lang:"Ruby(Ruby on Rails)",star:25},{id:3,lang:"PHP",star:30},{id:4,lang:"WordPress",star:30}],StudyNow:[{id:0,lang:"JavaScript",star:45},{id:1,lang:"Vue.js",star:45}]}},created:function(){this.count=this.studyText.length}},I=q,R=(a("2dc9"),Object(o["a"])(I,S,j,!1,null,"799b2b82",null)),D=R.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v("勉強会やイベントなど、お気軽にご連絡ください！")]),a("form",{attrs:{action:t.action}},[a("div",{staticClass:"contact-form"},[a("div",{staticClass:"contact-name-wrapper"},[t._m(0),a("input",{staticClass:"input-content",attrs:{id:"name",type:"text",name:t.name,required:""}})]),a("div",{staticClass:"contact-mail-wrapper"},[t._m(1),a("input",{staticClass:"input-content",attrs:{id:"email",type:"text",name:t.email,required:""}})]),a("div",{staticClass:"contact-msg-wrapper"},[t._m(2),a("textarea",{staticClass:"txtarea-content",attrs:{id:"msg",name:t.msg,required:""}})]),a("button",{staticClass:"contact-btn",attrs:{value:"送信"}},[t._v("送信")])])])])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-label"},[a("label",{attrs:{for:"name"}},[t._v("お名前")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-label"},[a("label",{attrs:{for:"email"}},[t._v("メールアドレス")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-label"},[a("label",{attrs:{for:"msg"}},[t._v("お問い合わせ内容")])])}],V={data:function(){return{action:"https://docs.google.com/forms/d/e/1FAIpQLSd7ijE551XtnN__81ixUDyouLW3nHR_IN5u_QS9tYq3kKsfiQ/viewform?usp=sf_link",name:"entry.2005620554",email:"entry.1045781291",msg:"entry.839337160",submitted:!1}}},W=V,F=(a("a080"),Object(o["a"])(W,J,Q,!1,null,"3159979d",null)),U=F.exports;n["a"].use(d["a"]);var X=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:D},{path:"/contact",name:"Contact",component:U}],Y=new d["a"]({mode:"history",base:"/KonoPortfolio/",routes:X}),z=Y,B=a("2f62");n["a"].use(B["a"]);var G=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=a("7ba4"),tt=a.n(Z);n["a"].use(tt.a),n["a"].config.productionTip=!1,new n["a"]({router:z,store:G,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},6590:function(t,e,a){},"6e02":function(t,e,a){},"713d":function(t,e,a){"use strict";var n=a("6590"),s=a.n(n);s.a},"9c0c":function(t,e,a){},a080:function(t,e,a){"use strict";var n=a("dde8"),s=a.n(n);s.a},c3c8:function(t,e,a){"use strict";var n=a("dba0"),s=a.n(n);s.a},d14a:function(t,e,a){},da6f:function(t,e,a){},dba0:function(t,e,a){},dde8:function(t,e,a){},e6ed:function(t,e,a){"use strict";var n=a("6e02"),s=a.n(n);s.a},f47a:function(t,e,a){"use strict";var n=a("d14a"),s=a.n(n);s.a}});
//# sourceMappingURL=app.a35fdfb2.js.map