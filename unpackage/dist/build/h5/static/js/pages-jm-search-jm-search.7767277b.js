(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jm-search-jm-search"],{"1d12":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-c342b7e0]{background:#fff}.ov[data-v-c342b7e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;overflow:hidden}.fl[data-v-c342b7e0]{font-weight:600;opacity:.7}.grace-search-remove[data-v-c342b7e0]{width:%?50?%;height:%?50?%}.grace-search-remove .img_remove[data-v-c342b7e0]{width:100%;height:100%}.searchTopBox[data-v-c342b7e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;background-color:#0b877f;height:%?100?%;box-sizing:border-box;padding-top:%?15?%}.searchBoxRadius[data-v-c342b7e0]{width:90%;height:%?70?%;background-color:#fff;margin-left:5%;overflow:hidden;border-radius:%?35?%}.searchBoxIcon[data-v-c342b7e0]{font-size:%?40?%;margin-top:%?20?%;margin-left:%?20?%;float:left}.searchBoxIpt[data-v-c342b7e0]{height:%?70?%;line-height:%?70?%;margin-left:%?20?%;float:left}.searchBotBox[data-v-c342b7e0]{width:100%;margin-top:%?30?%;padding:%?15?% 3%;box-sizing:border-box}.searchHistoryBox[data-v-c342b7e0]{width:100%;box-sizing:border-box;overflow:hidden;margin-top:%?40?%}.searchHistoryBoxItem[data-v-c342b7e0]{float:left;font-size:%?26?%;color:#666;line-height:%?46?%;height:%?46?%;padding:0 %?20?%;border-radius:%?23?%;margin-left:%?15?%;margin-bottom:%?20?%;border:1px solid #ccc}.image_search[data-v-c342b7e0]{position:absolute;margin-top:%?17?%;width:%?42?%;height:%?42?%}.search_show[data-v-c342b7e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search_item[data-v-c342b7e0]{padding:%?5?% 0 %?5?% %?20?%;border:1px solid #bdc3c7;border-radius:4%;background-color:#ecf0f1;width:95%}body.?%PAGE?%[data-v-c342b7e0]{background:#fff}",""]),e.exports=t},"20e2":function(e,t,a){e.exports=a.p+"static/img/sousuo.f423fa71.png"},"23a0":function(e,t,a){"use strict";var i=a("321d"),n=a.n(i);n.a},"321d":function(e,t,a){var i=a("1d12");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("e15a6eda",i,!0,{sourceMap:!1,shadowMode:!1})},"5cfe":function(e,t,a){e.exports=a.p+"static/img/qingchu1.ca256731.png"},"99f3":function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"searchTopBox"},[i("v-uni-view",{staticClass:"searchBoxRadius"},[i("v-uni-view",{staticClass:"grace-search-icon searchBoxIcon"}),i("v-uni-image",{staticClass:"image_search",attrs:{src:a("20e2")}}),i("v-uni-input",{staticClass:"searchBoxIpt",attrs:{type:"search",placeholder:"   关键字"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.searchNow(t)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.ipt,callback:function(t){e.ipt=t},expression:"ipt"}})],1)],1),i("v-uni-view",{staticClass:"search_show"},e._l(e.search_item,(function(t,a){return i("v-uni-view",{key:a,staticClass:"search_item"},[i("v-uni-text",{on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.search_history(t.name)}}},[e._v(e._s(t.name))])],1)})),1),i("v-uni-view",{staticClass:"searchBotBox"},[i("v-uni-view",{staticClass:"ov"},[i("v-uni-view",{staticClass:"fl"},[e._v("搜索历史")]),i("v-uni-view",{staticClass:"grace-search-remove",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearKey.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"img_remove",attrs:{src:a("5cfe")}})],1)],1),i("v-uni-view",{staticClass:"searchHistoryBox"},e._l(e.searchKey,(function(t,a){return i("v-uni-view",{key:a,staticClass:"searchHistoryBoxItem"},[e._v(e._s(t))])})),1)],1)],1)},c=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return i}))},c3ec:function(e,t,a){"use strict";a.r(t);var i=a("99f3"),n=a("eabc");for(var c in n)"default"!==c&&function(e){a.d(t,e,(function(){return n[e]}))}(c);a("23a0");var s,o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"c342b7e0",null,!1,i["a"],s);t["default"]=r.exports},cbda:function(e,t,a){"use strict";t.baseurl="https://netease.lzcdev.xyz/"},e856:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("6762"),a("2fdb");var n=i(a("ebe9")),c={data:function(){return{searchKey:[],ipt:"",searchClose:!0,search_item:[]}},onShow:function(){this.searchKey=uni.getStorageSync("searchLocal")},methods:{clearKey:function(){var e=this;uni.showModal({title:"提示",content:"点击确定将删除所有历史信息，确定删除吗？",success:function(t){t.confirm&&(e.searchKey=[],uni.setStorage({key:"searchLocal",data:e.searchKey}))}})},search:function(){var e=this,t=null;t||(clearTimeout(t),this.search_item=[],t=setTimeout((function(){(0,n.default)(e.ipt).then((function(t){t.data.result.songs.reduce((function(t,a){return console.log(a),t.includes(a.name)||(t.push(a.name),console.log(t),e.search_item.push(a)),t}),[])}))}),1e3))},search_history:function(e){this.searchKey.push(e),uni.setStorage({key:"searchLocal",data:this.searchKey})}}};t.default=c},eabc:function(e,t,a){"use strict";a.r(t);var i=a("e856"),n=a.n(i);for(var c in i)"default"!==c&&function(e){a.d(t,e,(function(){return i[e]}))}(c);t["default"]=n.a},ebe9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=a("cbda");function n(e){return new Promise((function(t,a){uni.request({url:i.baseurl+"search",data:{keywords:e},success:function(e){t(e)},fail:function(){console.log("请求失败")}})}))}}}]);