(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/playSong/index"],{4458:function(t,n,o){"use strict";var e,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}))},"5c09":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=u(o("5bd6")),a=u(o("ecba")),i=u(o("3943"));function u(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{audioContext:"",Song:"",SongerName:"",currentSongId:0,SongStatus:!0,privileges:"",indexSong:"",SongID:"",arr:[],one:[],two:[],three:[],four:[]}},onLoad:function(n){var o=this;this.indexSong=n.index,1==n.type&&(0,e.default)("top/list?idx="+n.lastId).then((function(t){o.privileges=t.data.privileges,o.currentID=t.data.privileges[n.index].id})),0==n.type&&(0,e.default)("playlist/detail?id="+n.lastId).then((function(t){o.privileges=t.data.privileges,o.currentID=t.data.privileges[n.index].id})),setTimeout((function(){var n=o.currentID;(0,e.default)("song/detail?ids="+n).then((function(n){o.Song=n.data.songs[0],o.SongerName=n.data.songs[0].ar[0].name;var a=n.data.songs[0].id;o.SongID=n.data.songs[0].id,(0,e.default)("song/url?id="+a).then((function(n){o.audioContext=t.createInnerAudioContext(),o.audioContext.autoplay=!0,o.audioContext.src=n.data.data[0].url,o.audioContext.onPlay((function(){console.log("开始播放")})),o.audioContext.onError((function(t){console.log("播放失败")})),o.audioContext.onEnded((function(){that.SongStatus=!0}))})),(0,e.default)("lyric?id="+a).then((function(t){var n=t.data.lrc.lyric.split("]"),e=n.join(","),a=e.split("[");o.arr=[],a.forEach((function(t){var n=t.split(",");o.arr.push(n[1])}));for(var i=o.arr,u=o.one,s=o.two,r=o.three,d=o.four,l=0;l<26;l++)u.push(i[l]);for(var c=26;c<52;c++)s.push(i[c]);if(i.length>52)for(var f=52;f<78;f++)r.push(i[f]);if(i.length>78)for(var g=78;g<104;g++)d.push(i[g])}))}))}),3e3)},methods:{lastSong:function(){var t=this;if(this.indexSong>0){this.indexSong-=1;var n=this.privileges[this.indexSong].id;this.audioContext.destroy();var o=this;i.default.call(this,n).then((function(t){o.SongStatus=!0}),(function(n){t.SongStatus=!1})),(0,e.default)("song/detail?ids="+n).then((function(n){t.Song=n.data.songs[0],t.SongerName=n.data.songs[0].ar[0].name;n.data.songs[0].id}))}},nextSong:function(){var t=this;if(this.privileges.length>this.indexSong){this.indexSong+=1;var n=this.privileges[this.indexSong].id;this.audioContext.destroy();var o=this;a.default.call(this,n).then((function(t){o.SongStatus=!0}),(function(t){o.SongStatus=!1})),(0,e.default)("song/detail?ids="+n).then((function(n){console.log(n),t.Song=n.data.songs[0],t.SongerName=n.data.songs[0].ar[0].name;n.data.songs[0].id}))}},status:function(){this.SongStatus=!this.SongStatus,!0===this.audioContext.paused?this.audioContext.play():this.audioContext.pause()},jumpTalk:function(){var n=this.currentID;console.log(this.SongId),t.navigateTo({url:"./talk/index?id="+n,success:function(){console.log("跳转评论页面")},fail:function(){console.log("跳转评论页面失败")}})}}};n.default=s}).call(this,o("543d")["default"])},7627:function(t,n,o){"use strict";var e=o("8872"),a=o.n(e);a.a},"7b5d":function(t,n,o){"use strict";o.r(n);var e=o("4458"),a=o("86ab");for(var i in a)"default"!==i&&function(t){o.d(n,t,(function(){return a[t]}))}(i);o("7627");var u,s=o("f0c5"),r=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"3edf1422",null,!1,e["a"],u);n["default"]=r.exports},"86ab":function(t,n,o){"use strict";o.r(n);var e=o("5c09"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a},8872:function(t,n,o){},abb3:function(t,n,o){"use strict";(function(t){o("30e3"),o("921b");e(o("66fd"));var n=e(o("7b5d"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])}},[["abb3","common/runtime","common/vendor"]]]);