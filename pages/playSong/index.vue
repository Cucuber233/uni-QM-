<template>
	<view class="Song">
		<swiper class="swiper" :current="current_item" :indicator-dots="false" :autoplay="false" interval="interval" duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<view class="content">
						<view class="status-bar"></view>
						<!-- header -->
						<view class="player-header">
							<text class="player-header-icon"></text>
							<view class="player-header-title">
								<view class="title-name">
									{{Song.name}}
								</view>
								<view class="title-msg">
									{{SongerName}}
								</view>
							</view>
							<text class="player-header-share"></text>
						</view>
						<!-- videodisc -->
						<view class="player-videodisc">
							<image src="./videodisc.png" mode="widthFix"></image>
						</view>
						<!-- optBar -->
						<view class="play-opt-bar">
							<view @click='jumpTalk' class="play_talk">
								<text class="iconfont">&#xe62f;</text>
							</view>
						</view>
						<!-- slider -->
						<view class="player-slider">
							<view class="player-currentTime">
								<!-- {{chCurrentTime[0]}}:{{chCurrentTime[1]}} -->
							</view>
							<slider class="slider" min="0" max="duration" value="currentTime"
								activeColor="#b6b6b6" backgroundColor="#dedede" block-size="12"/>
							<view class="player-duration">
								<!-- {{chDuration[0]}}:{{chDuration[1]}} -->
							</view>
						</view>
						<!-- playbar -->
						<view class='play-bar'>
							<view class="play_item">
								<view>
									<text @click="lastSong_" class="iconfont">&#xe61d;</text>
								</view>
								<view>
									<text @click='status' class="iconfont" style="font-size: 120rpx">{{SongStatus == 0 ?  '&#xe608;' : '&#xe61e;'}}</text>
								</view>
								<view>
									<text @click='nextSong_' class="iconfont">&#xe514;</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<swiper class="swiper_colum" :vertical="true" :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000">
					<swiper-item class="swiper_colum_item">
						<text  v-for='(item, index) in one' :key='index' class="position_item">{{item}}</text>
					</swiper-item>
					<swiper-item class="swiper_colum_item" v-if='arr.length > 26'>
						<text  v-for='(item, index) in two' :key='index' class="position_item">{{item}}</text>
					</swiper-item>
					<swiper-item class="swiper_colum_item" v-if='arr.length > 52'>
						<text  v-for='(item, index) in three' :key='index' class="position_item">{{item}}</text>
					</swiper-item>
					<swiper-item class="swiper_colum_item" v-if='arr.length > 78'>
						<text  v-for='(item, index) in four' :key='index' class="position_item">{{item}}</text>
					</swiper-item>
				</swiper>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import $http from '../../untils/request.js'
	import ChooseSong from './ChooseSong.js'
	import getLyrc from './getLyrc.js'
	export default {
		data() {
			return {
				audioContext: '',
				Song: '',
				SongerName: '',
				currentSongId: 0,
				SongStatus: true,
				privileges: '',
				indexSong: '',
				SongID: '',
				arr: [],
				one: [],
				two: [],
				three: [],
				four: []
			}
		},
		onLoad(option){
			//console.log(option.index)
			this.indexSong = option.index
			//console.log(option.type)
			//console.log(option.lastId)
			//排行榜详情
			if(option.type == 1){
				$http('top/list?idx=' + option.lastId).then(res => {
					//console.log(res)
					// this.data = res.data.playlist
					// this.creator = res.data.playlist.creator
					this.privileges = res.data.privileges
					this.currentID = res.data.privileges[option.index].id
					// console.log(this.privileges)
					// console.log(this.currentID)
					// this.scriCount()
					// this.bg = `background-image: url(${this.creator.backgroundUrl})`
				})
			}
			if(option.type == 0){
				//歌单详情
				$http('playlist/detail?id=' + option.lastId).then(res => {
					//console.log(res)
					// this.data = res.data.playlist
					// this.creator = res.data.playlist.creator
					this.privileges = res.data.privileges
					this.currentID = res.data.privileges[option.index].id
					// console.log(this.privileges)
					// console.log(this.currentID)
					// this.scriCount()
					// this.bg = `background-image: url(${this.creator.backgroundUrl})`
				})
			}
			//获取歌曲详情
			setTimeout(() => {
				let currentId = this.currentID
				$http('song/detail?ids=' + currentId).then(res => {
						//console.log(res)
						this.Song = res.data.songs[0]
						this.SongerName = res.data.songs[0].ar[0].name
						let SongId = res.data.songs[0].id
						this.SongID = res.data.songs[0].id
					//console.log(this.Song)
					//获取歌曲url
					$http('song/url?id=' + SongId).then(res => {
						this.audioContext = uni.createInnerAudioContext();
						this.audioContext.autoplay = true;
						this.audioContext.src = res.data.data[0].url;
						this.audioContext.onPlay(() => {
						  console.log('开始播放');
						});
						this.audioContext.onError((res) => {
						  console.log('播放失败');
						}); 
						this.audioContext.onEnded(() => {
							that.SongStatus = true
						})
					})
					//获取歌词
					getLyrc.call(this,SongId)
					console.log(this.arr)
				})
			},3000)
		},
		methods: {
			lastSong_(){
				let choose = 1
				ChooseSong.call(this,choose)
				console.log(this.arr)
			},
			nextSong_(){
				let choose = 2
				ChooseSong.call(this,choose)
				console.log(this.arr)
			},
			status(){
				this.SongStatus = !this.SongStatus
				if(this.audioContext.paused === true){
					this.audioContext.play()
				}else{
					this.audioContext.pause()
				}
			},
			jumpTalk(){
				let songId = this.currentID
				//console.log(this.SongId)
				uni.navigateTo({
					url: './talk/index?id=' + songId,
					success() {
						console.log("跳转评论页面")
					},
					fail() {
						console.log('跳转评论页面失败')
					}
				})
			}
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
	}
	
	.swiper{
		width: 100%;
		height: 1250rpx;
		background-image: linear-gradient(to bottom,#1e6997, #af946a, #1e6997);
	}
	
	.swiper_colum{
		width: 100%;
		height: 100%;
	}
	
	.swiper_colum_item{
		position: relative;
		width: 100%;
		height: 20rpx;
	}
	
	.position_item{
		position: relative;
		right: -10rpx;
	}
	
	.lyrs_item{
		padding: 20rpx;
	}
	
	.content{
		position: reslative;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.status-bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	.player-header{
		width: 100%;
		height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #FFFFFF;
	}
	.player-header-icon{
		width: 54upx;
		font-size: 26px;
		margin-left: 25upx;
	}
	.player-header-share{
		width: 54upx;
		font-size: 26px;
		margin-right: 25upx;
	}
	.player-header-title{
		height: 100%;
		flex: 1;
	}
	.player-header-title .title-name{
		padding: 15rpx 20rpx;
		font-size: 18px;
	}
	.player-header-title .title-msg{
		padding: 10rpx 20rpx;
		font-size: 12px;
		color: #d0d0d0;
	}
	.player-videodisc image{
		width: 500upx;
		height: 500upx;
		margin-top: 300upx;
	}
	.play-opt-bar{
		width: 100%;
		height: 60upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 70upx;
		font-size: 34px;
		position: absolute;
		bottom: 320upx;
		padding-left: 180%;
	}
	.player-slider{
		width: 650upx;
		height: 50upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		bottom: 220upx;
	}
	.player-slider .player-currentTime,
	.player-slider .player-duration{
		width: 20upx;
		height: 100%;
		font-size: 10px;
		color: #c1c1c1;
		line-height: 44upx;
	}
	.slider{
		flex: 1;
	}
	.play-bar{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30px;
		position: absolute;
		bottom: 0rpx;
		left: -130rpx;
		padding: 0 70rpx;
	}
	.play-bar .play_item{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: absolute;
		font-size: 30px;
		bottom: 50upx;
	}
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
	  font-size: 40px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
</style>

