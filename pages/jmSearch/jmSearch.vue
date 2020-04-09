<template>
	<view>
		<!-- 搜索条 -->
		<view class="searchTopBox">
			<view class="searchBoxRadius">
				<view class="grace-search-icon searchBoxIcon"></view>
					<image class="image_search" src="../../static/find/sousuo.png"></image>
				<input class="searchBoxIpt" type="search" v-model="ipt"
				 @confirm="searchNow($event)" placeholder="   关键字"
				 @input="search"></input>
			</view>
		</view>
		<!-- 搜索展示 -->
		<view class="search_show">
			<view class="search_item" v-for='(item, index) in search_item' :key='index'>
				<text @click='search_history(item.name)'>{{item.name}}</text>
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="searchBotBox">
			<view class="ov">
				<view class="fl">搜索历史</view>
				<view @click="clearKey" class="grace-search-remove">
					<image class="img_remove" src="../../static/qingchu1.png"></image>
				</view>
			</view>
			<view class="searchHistoryBox">
				<view class="searchHistoryBoxItem" v-for="(item,index) in searchKey" 
				:key='index'>
					{{item}}
				</view>
			</view>
		</view>
		 <!-- 搜索结果 -->
			<view class="search_content_wrap">
				<swiper class="swiper" current="currentTab" duration="200" bindchange="swiperChange">
					<swiper-item class="swiper-item">
						<scroll-view scroll-y="true" bindscrolltolower="loadMore" style='height:100%'>
							<template/>
							<!-- 单曲处理开始 -->
							<view class="songArray_wrap">
								<view class="songArray_inex">index+1</view>
								<view class="songArray_content">
									<view class="content_1">item.name</view>
									<view class="content_3">item.ar[0].name-item.al.name</view>
								</view>
								<!-- MV图标处理 -->
								<view class='songArray_mv'>
									<view>
										<view id="songArray_mv" class="iconfont icon-Youtube"></view>
									</view>
									<view wx:else>
										<view id="songArray_mv" class="iconfont icon-Youtube" style="color:white;"></view>
									</view>
								</view>
								<view id="songArray_other" class="iconfont icon-caidan2" style="color:#CCCCCC;"></view>
							</view>
							<!-- 单曲处理结束 -->
							<template/>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y="true" bindscrolltolower="loadMore" style='height:100%'>
							<template/>
							<!-- 视频处理开始 -->
							<view class="relatedAllvideo">
								<view class="relatedAllvideo_img">
									<image mode="aspectFill" src="" />
									<view class="relatedAllvideo_playCount">
										<text class="iconfont icon-play" style="font-size:30rpx;"></text>
										<text>util.formatPlayCount(item.playTime)</text>
									</view>
								</view>
								<view class="relatedAllvideo_desc">
									<view class="relatedAllvideo_desc_title">
										<text id="mv" class="iconfont icon-MV" style="font-size:40rpx;color:red"></text>
										<text>item.title</text>
									</view>
									<view class="relatedAllvideo_desc_creator">
										util.formatTime(item.durationms)
										<text>by</text>
										<text decode="true">&nbsp;item.creator[0].userName</text>
									</view>
								</view>
							</view>
							<!-- 视频处理结束 -->
							<template/>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y="true" bindscrolltolower="loadMore" style='height:100%'>
							<template/>
							<!-- 歌手处理开始 -->
							<view class="artists_wrap">
								<view class="touxiang">
									<image src=''></image>
								</view>
								<view class="mingzi">
									<text>item.name</text>
								</view>
							</view>
							<!-- 歌手处理结束 -->
							<template/>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y="true" bindscrolltolower="loadMore" style='height:100%'>
							<template/>
							<!-- 专辑处理开始 -->
							<view class="album_wrap">
								<view class="album_pic">
									<image src='item.picUrl'></image>
								</view>
								<view class="album_desc">
									<view class=" album_name">
										<text>item.name</text>
										<!-- 此处格式化有样式问题,干脆不要 -->
										<!-- <text class="album_alias" decode="true">{{item.alias[0]==null?"":'&nbsp;('+item.alias[0]+')'}}</text> -->
									</view>
									<view class="album_artists">
										<text>item.artist.name item.publishTime</text>
									</view>
								</view>
							</view>
							<!-- 专辑处理结束 -->
							<template/>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y="true" bindscrolltolower="loadMore" style='height:100%'>
							<template/>
							<!-- 歌单处理开始 -->
							<view class="playlists_wrap">
								<view class="playlists_pic">
									<image src=''></image>
								</view>
								<view class="playlists_desc">
									<view class=" playlists_name">
										<text>item.name</text>
									</view>
									<view class="playlists_artists">
										<text decode="true">
											item.trackCount首&nbsp;by&nbsp;item.creator.nickname，播放util.formatPlayCount(item.playCount)次
										</text>
									</view>
								</view>
							</view>
							<!-- 歌单处理结束 -->
							<template/>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y="true" bindscrolltolower="loadMore" style='height:100%'>
							<template/>
							<!-- 电台处理开始 -->
							<view class="djRadios_wrap">
								<view class="djRadios_pic">
									<image src=''></image>
								</view>
								<view class="djRadios_desc">
									<view class=" djRadios_name">
										<text>item.name</text>
									</view>
									<view class="djRadios_artists">
										<text decode="true">item.dj.nickname</text>
									</view>
								</view>
							</view>
							<!-- 电台处理结束 -->
							<template/>
						</scroll-view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<scroll-view scroll-y="true" bindscrolltolower="loadMore" style='height:100%'>
							<template/>
							<!-- 用户处理开始 -->
							<view class="userprofiles_wrap">
								<view class="userprofiles_touxiang">
									<image src=''></image>
								</view>
								<view class="userprofiles_desc">
									<view class="userprofiles_desc_wrap">
										<view class="nickname">
											<text>item.nickname</text>
										</view>
										<view class="userprofiles_gender">
											<view class="iconfont icon-nan" style="color:#6699FF;line-height: 50rpx;font-size:35rpx;"></view>
											<view class="iconfont icon-nv" style="color:#FF6699;line-height: 50rpx;font-size:30rpx;"></view>
										</view>
									</view>
									<view class="signature">
										<text>item.signature</text>
									</view>
								</view>
								<view class="userprofiles_follow">
									<text>+关注</text>
								</view>
							</view>
							<!-- 用户处理结束 -->
							<template/>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>
<script>
	import $http from '../../untils/search.js'
	export default {
		data() {
			return {
				searchKey: [],
				ipt: '',
				searchClose: true,
				search_item: [],
				searchType: [{
				            "id": 1,
				            "name": "单曲"
				        },
				        {
				            "id": 1014,
				            "name": "视频"
				        },
				        {
				            "id": 100,
				            "name": "歌手"
				        },
				        {
				            "id": 10,
				            "name": "专辑"
				        },
				        {
				            "id": 1000,
				            "name": "歌单"
				        },
				        {
				            "id": 1009,
				            "name": "主播电台"
				        },
				        {
				            "id": 1002,
				            "name": "用户"
				        }
				        ],
			}
		},
		onShow() {
			this.searchKey = uni.getStorageSync('searchLocal')
		},
		methods: {
			clearKey: function() {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '点击确定将删除所有历史信息，确定删除吗？',
					success: function(res) {
						if (res.confirm) {
							that.searchKey = [];
							uni.setStorage({
								key: 'searchLocal',
								data: that.searchKey
							});	
						}
					}
				});

			},
			search(){
				let timeOut = null
				if(!timeOut){
					clearTimeout(timeOut)
					this.search_item = []
					timeOut = setTimeout(() => {
						$http(this.ipt).then(res => {
							let el = [];
							let newData = res.data.result.songs.reduce((el, cur) => {
								console.log(cur);
								if(!el.includes(cur.name)){
									el.push(cur.name)
									console.log(el)
									this.search_item.push(cur)
								}
								return el
							}, [])
							//console.log(this.search_item)
						})
					},1000)
				}
			},
			search_history(params){
				this.searchKey.push(params)
				uni.setStorage({
					key: 'searchLocal',
					data: this.searchKey
				});	
			}
		}
	}
</script>
<style>
	page {
		background: #FFF;
	}

	.ov {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	}

	.fl {
		font-weight: 600;
		opacity: .7;
	}

	.grace-search-remove {
		width: 50rpx;
		height: 50rpx;
	}
	
	.grace-search-remove .img_remove{
		width: 100%;
		height: 100%;
	}

	.searchTopBox {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: #0b877f;
		height: 100upx;
		box-sizing: border-box;
		padding-top: 15upx;
	}

	.searchBoxRadius {
		width: 90%;
		height: 70upx;
		background-color: #fff;
		margin-left: 5%;
		overflow: hidden;
		border-radius: 35upx;
	}

	.searchBoxIcon {
		font-size: 40upx;
		margin-top: 20upx;
		margin-left: 20upx;
		float: left;
	}

	.searchBoxIpt {
		height: 70upx;
		line-height: 70upx;
		margin-left: 20upx;
		float: left;
	}

	.searchBotBox {
		width: 100%;
		margin-top: 30upx;
		padding: 15upx 3%;
		box-sizing: border-box;
	}

	.searchHistoryBox {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		margin-top: 40upx;
	}

	.searchHistoryBoxItem {
		float: left;
		font-size: 26upx;
		color: #666;
		line-height: 46upx;
		height: 46upx;
		padding: 0 20upx;
		border-radius: 23upx;
		margin-left: 15upx;
		margin-bottom: 20upx;
		border: 1px solid #ccc;
	}
	
	.image_search{
		position: absolute;
		margin-top: 17rpx;
		width: 42rpx;
		height: 42rpx;
	}
	
	.search_show{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.search_item{
		padding: 5rpx 0 5rpx 20rpx;
		border: 1px solid #bdc3c7;
		border-radius: 4%;
		background-color: #ecf0f1;
		width: 95%;
	}
	
	/*  搜索结果 */
	.search_result_wrap {
	    border-bottom: 1px solid #e2dcdc;
	    margin-top: 78rpx;
	    /* animation: searchTop .5s ease-in-out;
	    position: fixed;
	    z-index: 100;
	    background-color: white; */
	}
	
	.searchResult {
	    /* white-space: nowrap;
	    line-height: 50rpx;
	    width: 98%; */
	}
	
	.searchResult_scroll {
	    height: 100rpx;
	    width: 750rpx;
	    overflow: scroll;
	    white-space: nowrap;
	}
	
	.search_result_item {
	    width: 150rpx;
	    height: 100rpx;
	    /* padding: 20rpx 45rpx; */
	    font-size: 30rpx;
	    display: inline-block;
	    /* border: 1px solid red; */
	    text-align: center;
	    line-height: 100rpx;
	}
	
	.search_result_item_active {
	    width: 150rpx;
	    height: 100rpx;
	    text-align: center;
	    line-height: 100rpx;
	    /* padding: 20rpx 45rpx; */
	    font-size: 30rpx;
	    display: inline-block;
	    color: #33CC99;
	    /* border: 1px solid red; */
	    border-bottom: 2px solid #33CC99;
	}
	
	/* swiper处理 */
	
	swiper {
	    width: 100%;
	    /* height: 100vh; */
	    height: calc(100vh - 168.5rpx);
	    /* height: calc(100vh - 168.5rpx); */
	    padding: 0;
	}
	
	swiper-item {
	    /* line-height: 350px; */
	    /* overflow: scroll; */
	    overflow: auto;
	}
	
	swiper-item::-webkit-scrollbar {
	    display: none;
	}
	
	/* 分类型处理，单曲 */
	
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
	    font-size: 32rpx;
	    /* 超过省略号 */
	    text-overflow: -o-ellipsis-lastline;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	.songArray_content .content_3 {
	    font-size: 25rpx;
	    color: rgb(190, 189, 189);
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
	    width: 10%;
	    line-height: 70rpx;
	}
	
	/* 分类型处理，视频 */
	
	.relatedAllvideo {
	    margin-top: 30rpx;
	    /* border: 1px solid #cccccc; */
	    display: flex;
	    justify-content: flex-start;
	    align-items: center;
	    margin-left: 40rpx;
	    margin-right: 40rpx;
	}
	
	.relatedAllvideo_img {
	    position: relative;
	}
	
	.relatedAllvideo_img image {
	    width: 280rpx;
	    height: 160rpx;
	    border-radius: 5%;
	}
	
	.relatedAllvideo_playCount {
	    position: absolute;
	    top: 5rpx;
	    right: 5rpx;
	    width: 100%;
	    display: flex;
	    justify-content: flex-end;
	    color: #fff;
	    font-size: 24rpx;
	}
	
	.relatedAllvideo_desc {
	    width: 55%;
	    margin-left: 20rpx;
	    /* margin-right: 20rpx; */
	    line-height: 40rpx;
	    /* border: 1px solid #cccccc; */
	}
	
	.relatedAllvideo_desc_title {
	    font-size: 30rpx;
	    /* 两行省略 */
	    display: -webkit-box;
	    overflow: hidden;
	    white-space: normal;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	
	#mv {
	    /* display: block; */
	    margin-right: 10rpx;
	}
	
	.relatedAllvideo_desc_creator {
	    font-size: 25rpx;
	    color: #a3a0a0;
	    text-align: justify;
	    margin-top: 10rpx;
	}
	
	/* 歌手 */
	
	.artists_wrap {
	    display: flex;
	    /* flex-direction: row; */
	    justify-content: flex-start;
	    align-items: center;
	    margin-top: 40rpx;
	    margin-left: 40rpx;
	}
	
	.touxiang {
	    width: 20%;
	}
	
	.touxiang image {
	    width: 100rpx;
	    height: 100rpx;
	    border-radius: 50%;
	}
	
	.mingzi {
	    width: 80%;
	    padding-bottom: 30rpx;
	}
	
	.mingzi text {
	    font-size: 30rpx;
	}
	
	/* 专辑 */
	
	.album_wrap {
	    display: flex;
	    justify-content: flex-start;
	    align-items: center;
	    margin-top: 40rpx;
	    margin-left: 40rpx;
	}
	
	.album_pic image {
	    width: 120rpx;
	    height: 120rpx;
	    border-radius: 10rpx;
	}
	
	.album_desc {
	    margin-left: 40rpx;
	}
	
	.album_name {
	    /* 一行省略 */
	    display: -webkit-box;
	    overflow: hidden;
	    white-space: normal;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	.album_name text {
	    font-size: 35rpx;
	    /* line-height: 60rpx; */
	}
	
	.album_alias {
	    color: rgb(175, 171, 171);
	}
	
	.album_artists text {
	    font-size: 28rpx;
	}
	
	/* 歌单 */
	
	.playlists_wrap {
	    display: flex;
	    justify-content: flex-start;
	    align-items: center;
	    margin-top: 5rpx;
	    margin-left: 40rpx;
	}
	
	.playlists_pic image {
	    width: 120rpx;
	    height: 120rpx;
	    border-radius: 10rpx;
	}
	
	.playlists_desc {
	    margin-left: 25rpx;
	}
	
	.playlists_name {
	    /* 一行省略 */
	    display: -webkit-box;
	    overflow: hidden;
	    white-space: normal;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	.playlists_name text {
	    font-size: 30rpx;
	}
	
	.playlists_artists {
	    line-height: 18rpx;
	    margin-bottom: 30rpx;
	}
	
	.playlists_artists text {
	    font-size: 28rpx;
	    color: #b3adad;
	}
	
	/* 电台 */
	
	.djRadios_wrap {
	    display: flex;
	    justify-content: flex-start;
	    align-items: center;
	    margin-top: 20rpx;
	    margin-left: 40rpx;
	}
	
	.djRadios_pic image {
	    width: 120rpx;
	    height: 120rpx;
	    border-radius: 10rpx;
	}
	
	.djRadios_desc {
	    margin-left: 25rpx;
	}
	
	.djRadios_name {
	    /* 一行省略 */
	    display: -webkit-box;
	    overflow: hidden;
	    white-space: normal;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	.djRadios_name text {
	    font-size: 30rpx;
	}
	
	.djRadios_artists text {
	    font-size: 28rpx;
	    color: #b3adad;
	}
	
	/* 用户 */
	
	.userprofiles_wrap {
	    display: flex;
	    /* flex-direction: row; */
	    justify-content: flex-start;
	    align-items: center;
	    margin-top: 40rpx;
	    margin-left: 40rpx;
	}
	
	.userprofiles_touxiang {
	    width: 20%;
	}
	
	.userprofiles_touxiang image {
	    width: 100rpx;
	    height: 100rpx;
	    border-radius: 50%;
	}
	
	.userprofiles_desc {
	    width: 55%;
	}
	
	.userprofiles_desc_wrap {
	    display: flex;
	    justify-content: flex-start;
	}
	
	.userprofiles_gender {
	    margin-left: 10rpx;
	    padding-bottom: 10rpx;
	}
	
	.nickname {
	    font-size: 33rpx;
	    margin-bottom: 10rpx;
	}
	
	.signature {
	    font-size: 25rpx;
	    color: rgb(141, 139, 139);
	    /* 一行省略 */
	    display: -webkit-box;
	    overflow: hidden;
	    white-space: normal;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	.userprofiles_follow {
	    width: 120rpx;
	    height: 50rpx;
	    border: 1rpx solid red;
	    border-radius: 50rpx;
	    text-align: center;
	    line-height: 45rpx;
	}
	
	.userprofiles_follow text {
	    font-size: 30rpx;
	    color: red;
	}
</style>
