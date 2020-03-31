<template>
	<view class="songSheet">
		<view class='play-list-bg' :style="bg"/>
		<view class="main">
		  <!-- 头部 -->
		  <view class="title_wrap">
			<!-- 图片 -->
			<view class="photo">
			  <image mode="widthFix" :src="data.coverImgUrl" />
			</view>
			<!-- 内容 -->
			<view class="content">
			  <view class="content_title">{{data.name}}</view>
			  <!-- 头像及个人信息 -->
			  <view class="content_info">
				<view class="content_headPortrait">
				  <image :src='creator.avatarUrl'></image>
				</view>
				<view class="content_nickname">{{creator.nickname}}</view>
				<view class="iconfont icon-jiankuohaoxiyou"
				 style="color:#F5F5F5;line-height: 73rpx;font-size:35rpx;"></view>
			  </view>
			  <view class="content_description">
				{{data.description}}
			  </view>
			</view>
		  </view>
		  <!-- 图标菜单 -->
		  <view class="iconMenu_wrap">
			<view class="menu_item">
			  <view style="font-size:60rpx;color:white;margin-left: 38rpx;">
				  <text class="iconfont">&#xe65a;</text>
			  </view>
			  <view class="menu_title">{{data.commentCount/10000}}万</view>
			</view>
			<view class="menu_item">
			  <view style="font-size:60rpx;color:white">
				  <text class="iconfont">&#xe7ad;</text>
			  </view>
			  <view class="menu_title">{{data.shareCount}}</view>
			</view>
			<view class="menu_item">
			  <view style="font-size:60rpx;color:white">
				  <text class="iconfont">&#xe62b;</text>
			  </view>
			  <view class="menu_title">下载</view>
			</view>
			<view class="menu_item">
			  <view style="font-size:60rpx;color:white">
				  <text class="iconfont">&#xe57a;</text>
			  </view>
			  <view class="menu_title">多选</view>
			</view>
		  </view>
		  <!-- 歌曲列表 -->
		  <view class="songList_wrap">
			<view class="songList_wrap_title">
			  <view id="play" class="iconfont icon-bofang" style="font-size:50rpx;color:#333333">
				  <text class="iconfont">&#xe634;</text>
			  </view>
			  <view class="paly2">
				播放全部
				<text class="songCount">(共{{data.trackCount}}首)</text>
			  </view>
			  <view class="play3_border">
				<view class="paly3">+ 收藏({{subscribedCount}}万)</view>
			  </view>
			</view>
			<view class="songArray_wrap" v-for="(item, index) in data.tracks" :key='index'>
			  <view class="songArray_inex">{{index+1}}</view>
			  <view class="songArray_content">
				<view class="content_1">
				  {{item.name}}
				  <!-- undefined处理 -->
				  <text class="content_2">{{item.alia[0]==null?"":'('+item.alia[0]+')'}}</text>
				</view>
				<view class="content_3">
				  <!-- SQ音质图标处理 -->
				  <view v-if='privileges[index].maxbr === 999000' style="display: inline-block; margin-right: 15rpx; background-color: #ecf0f1; border-radius: 10%; padding: 0 5rpx 0 5rpx;">
				  	<text style="color:red;">SQ</text>
				  </view>
				  {{item.ar[0].name}}-{{item.al.name}}
				</view>
			  </view>
			  <!-- MV图标处理 -->
			  <view class='songArray_mv'>
				<view>
				  <view @click='jump(item.mv)' id="songArray_mv" style="margin-bottom: 10rpx;" v-if="item.mv !== 0">
					  <text class="iconfont" style="font-size: 40rpx;">&#xe79b;</text>
				  </view>
				</view>
			  </view>
			  <view id="songArray_other" style="color:#CCCCCC;">
				  <text class="iconfont" style="font-size: 35rpx;">&#xe506;</text>
			  </view>
			</view>
		  </view>
		</view>
	</view>
</template>

<script>
	import $http from '../../untils/request.js'
	export default{
		name: 'songSheet',
		onLoad(option) {
			if(option.type == 1){
				$http('top/list?idx=' + option.id).then(res => {
					//console.log(res)
					this.data = res.data.playlist
					this.creator = res.data.playlist.creator
					this.privileges = res.data.privileges
					this.scriCount()
					this.bg = `background-image: url(${this.creator.backgroundUrl})`
				})
			}
			if(option.type == 0){
				$http('playlist/detail?id=' + option.id).then(res => {
					//console.log(res)
					this.data = res.data.playlist
					this.creator = res.data.playlist.creator
					this.privileges = res.data.privileges
					this.scriCount()
					this.bg = `background-image: url(${this.creator.backgroundUrl})`
				})
			}
			
		},
		methods:{
			scriCount(){
				let scr = this.data.subscribedCount/10000 + ''
				this.subscribedCount = Number(scr.split('.')[0]) 
			},
			jump(id){
				console.log(id)
				uni.navigateTo({
					url:'../mv/index?id=' + id + '&type=0',
					success() {
						console.log("跳转mv页面")
					},
					fail() {
						console.log('跳转mv页面失败')
					}
				})
			}
		},
		data(){
			return{
				data: '',
				subscribedCount: '',
				creator: '',
				bg: ''
			}
		}
	}
</script>

<style scoped>
.main { 
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  }
.main::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
/* 背景处理 */

.play-list-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

.play-list-bg, .play-list-bg::after {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 420rpx;
}

.play-list-bg::after {
  content: '';
  background-color: rgba(0, 0, 0, 0.25);
}

/* 内容 */

.main {
  position: absolute;
  z-index: 2;
  width: 100%;
}

.title_wrap {
  padding-top: 50rpx;
  display: flex;
  width: 98%;
  justify-content: space-around;
  /* border: 1rpx solid black; */
}

.photo {
  /* width: 30%; */
  margin-left: 30rpx;
}

.photo image {
  width: 260rpx;
  height: 260rpx;
  border-radius: 10rpx;
}

.content {
  /* width: 50%; */
  margin-left: 50rpx;
}

.content_title {
  /* width: 60%; */
  font-size: 34rpx;
  font-weight: 600;
  letter-spacing: 4rpx;
  color: white;
}

.content_info {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 12rpx 0;
}

.content_headPortrait image {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
}

.content_nickname {
  margin-left: 20rpx;
  font-size: 30rpx;
  color: #f5f5f5;
  font-weight: 100;
  line-height: 70rpx;
}

.content_description {
	font-weight: 700;
  font-size: 30rpx;
  line-height: 40rpx;
  color: #ccc;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.iconMenu_wrap {
  padding: 40rpx 0;
  display: flex;
  justify-content: space-around;
}

.menu_item .menu_title {
  color: #ccc;
  text-align: center;
  font-size: 30rpx;
  /* padding-right: 0rpx; */
}

/* 列表 */

.songList_wrap {
  overflow: hidden;
  background-color: white;
  border-radius: 20rpx;
  /* height: 100%; */
}

.songList_wrap_title {
  padding: 40rpx 0;
  display: flex;
  justify-content: space-between;
}

.songList_wrap_title {
  font-size: 38rpx;
  color: #333;
}

#play {
  padding-left: 40rpx;
}

.paly2 {
  margin-right: 50rpx;
}

.songCount {
  font-size: 30rpx;
  color: #ccc;
}

.play3_border {
  margin-right: 20rpx;
  width: 220rpx;
  height: 80rpx;
  background-color: red;
  border-radius: 40rpx;
  margin-top: -12rpx;
  text-align: center;
}

.paly3 {
  color: white;
  font-size: 30rpx;
  line-height: 80rpx;
}

/* 歌曲内容 */

.songArray_wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0;
}

.songArray_inex {
  padding-left: 40rpx;
  color: #ccc;
  line-height: 70rpx;
  width: 10%;
}

.songArray_content {
  width: 65%;
}

.content_1 {
  font-size: 35rpx;
  /* 超过省略号 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.songArray_content .content_2 {
  font-size: 35rpx;
  color: #ccc;
}

.songArray_content .content_3 {
  font-size: 25rpx;
  color: #ccc;
  margin-top: 10rpx;
  /* 超过省略号 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.songArray_mv {
  width: 10%;
}

#songArray_mv {
  width: 10%;
  line-height: 70rpx;
}

#songArray_other {
  /* color: #CCCCCC; */
  width: 10%;
  line-height: 70rpx;
}

/* 字体图标 */
/* @font-face {
	font-family: 'iconfont';
	src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
}
.test {
	font-family: iconfont;
	margin-left: 20rpx;
} */

@font-face {
  font-family: 'iconfont';
  src: url('./icon/iconfont.eot');
  src: url('./icon/iconfont.eot?#iefix') format('embedded-opentype'),
      url('./icon/iconfont.woff2') format('woff2'),
      url('./icon/iconfont.woff') format('woff'),
      url('./icon/iconfont.ttf') format('truetype'),
      url('./icon/iconfont.svg#iconfont') format('svg');
}
.iconfont {
	font-family: "iconfont" !important;
	font-size: 60rpx;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
