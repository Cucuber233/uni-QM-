<template>
	<view class="main">
		<view class="nav_wrap" style="margin: 10upx 0 10upx 0;">
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
			<view class="search" @click="search">
				框
			</view>
		</view>	
		<swiper style='width:100%; height:3920upx' :indicator-dots="false" :autoplay="false" :interval="3000" :duration="500" :current='currentTab'>
			<swiper-item>
				<view class="swiper_item">
					<main-my />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper_item">
					<main-find @click='choose_height(data)' />
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
	
	export default{
		name: 'main_',
		components: {
			mainFind,
			mainFirend,
			mainMy,
			mainVideo
		},
		data() {
			return {
				currentTab: 1,
				chooseHeight: null
			}
		},
		onLoad() {
		
		},
		methods: {
			swichNav(i){
				this.currentTab = i
			},	
			choose_height(height_){
				
			}		
		}
	}
</script>

<style>
	.nav_wrap{
		display: flex;
		font-size: 43upx;
	}
	.nav_wrap view{
		display: inline-block;
		margin-left: 70upx;
	}	
	.nav_wrap .search{
		
	}
	.nav_item_active{
		font-size: 45upx;
		font-weight: 800;
	}
	/* swiper{
		width: 100%;
		height: 3920upx;
	} */
</style>