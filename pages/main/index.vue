<template>
	<view class="main">
		<view class="nav_wrap" style="margin: 10upx 0 10upx 0;">
			<view class="img_menu">
				<image src="../../static/find/caidan.png" mode="widthFix"></image>
			</view>
		    <scroll-view scroll-x='ture'>
		      <view :class="currentTab == 0 ? 'nav_item_active' : ''"  @click="swichNav(0)">
		        我的
		      </view>
		      <view :class="currentTab == 1 ? 'nav_item_active' : ''"  @click="swichNav(1)">
		        发现
		      </view>
		      <view :class="currentTab == 2 ? 'nav_item_active' : ''"  @click="swichNav(2)">
		        朋友
		      </view>
		      <view :class="currentTab == 3 ? 'nav_item_active' : ''"  @click="swichNav(3)">
		        视频
		      </view>
		    </scroll-view>
			<view class="search" @click="search_choose">
				<image src="../../static/find/sousuo.png" mode="widthFix"></image>
			</view>
		</view>	
		<swiper :class="currentTab === 0 ? 'pageHeight_0' : currentTab === 1 ?  'pageHeight_1' : currentTab === 2 ? 'pageHeight_2' : 'pageHeight_3'"
		@change='currentPage' :indicator-dots="false" :autoplay="false" :interval="3000" :duration="500" :current='currentTab'>
			<swiper-item>
				<view class="swiper_item">
					<main-my />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper_item">
					<main-find />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper_item">
					<main-firend />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper_item">
					<main-video />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import $http from '../../untils/request.js'
	import mainFind from './find/index.vue'
	import mainFirend from './firend/index.vue'
	import mainMy from './my/index.vue'
	import mainVideo from './video/index.vue'
	import serve from '../../untils/search.js'
	
	export default{
		name: 'main_',
		components: {
			mainFind,
			mainFirend,
			mainMy,
			mainVideo
		},
		mounted(){
			uni.$on('goJump', data => {
				uni.navigateTo({
					url: '../songSheet/index?id=' + data.id + '&type=0',
					success() {
						console.log('跳转歌单页面')
					},
					fail() {
						console.log('跳转歌单额面失败')
					}
				})
			})
		},
		data() {
			return {
				currentTab: 1,
				chooseHeight: null
			}
		},
		methods: {
			swichNav(i){
				this.currentTab = i
			},
			search_choose(){
				uni.navigateTo({
					url: '../jm-search/jm-search',
					success() {
						console.log('跳转搜索页面')
					},
					fail() {
						console.log("跳转失败")
					}
				})
			},
			currentPage(event){
				this.currentTab = event.detail.current
			}
		}
	}
</script>

<style>
	.pageHeight_0{
		width: 100%;
		height: 1850upx;
	}
	.pageHeight_1{
		width: 100%;
		height: 3920upx;
	}
	.pageHeight_2{
		
	}
	.pageHeight_3{
		
	}
	
	.nav_wrap{
		display: flex;
		font-size: 43upx;
		align-items: center;
	}
	.nav_wrap view{
		display: inline-block;
		margin-left: 55rpx;
	}	
	
	.nav_item_active{
		font-size: 45upx;
		font-weight: 800;
	}
	/* swiper{
		width: 100%;
		height: 3920upx;
	} */
	
	.main .nav_wrap .img_menu{
		display: flex;
		align-items: center;
		margin-left: 0;
		width: 80rpx;
		height: 100rpx;
	}
	.main .nav_wrap .search{
		display: flex;
		align-items: center;
		margin-right: 20rpx;
		width: 80rpx;
		height: 30rpx;
	}
	.main .nav_wrap image{
		width: 100%;
		height: 100%;
	}
</style>