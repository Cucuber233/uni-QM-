<template>
	<view class="menu_wrap">
	  <view class="menu_item">
		<view class="menu_icon">
		  <view bindtap="openNewView" data-id="0" class="iconfont icon-meirituijian-" style="font-size:50rpx;"></view>
		</view>
		<text>每日推荐</text>
	  </view>
	  <view class="menu_item">
		<view class="menu_icon">
		  <view bindtap="openNewView" data-id="1" class="iconfont icon-gedan" style="font-size:50rpx;"></view>
		</view>
		<text>歌单</text>
	  </view>
	  <view class="menu_item">
		<view class="menu_icon">
		  <view bindtap="openNewView" data-id="2" class="iconfont icon-paixingbang" style="font-size:50rpx;"></view>
		</view>
		<text>排行榜</text>
	  </view>
	  <view class="menu_item">
		<view class="menu_icon">
		  <view bindtap="openNewView" data-id="3" class="iconfont icon-diantai" style="font-size:50rpx;"></view>
		</view>
		<text>电台</text>
	  </view>
	  <view class="menu_item">
		<view class="menu_icon">
		  <view bindtap="openNewView" data-id="4" class="iconfont icon-zhibo" style="font-size:50rpx;"></view>
		</view>
		<text>直播</text>
	  </view>
	</view>
</template>

<script>
	export default{
		name: 'find',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.menu_wrap {
	  display: flex;
	  padding: 5rpx;
	  justify-content: space-around;
	  text-align: center;
	  padding-top: 30rpx;
	  padding-bottom: 30rpx;
	}
	
	.menu_item {
	  width: 100rpx;
	}
	
	.menu_icon {
	  width: 100rpx;
	  height: 100rpx;
	  background-color: #3c9;
	  border-radius: 50%;
	  line-height: 100rpx;
	}
	
	.menu_icon view {
	  color: white;
	}
	
	.menu_item text {
	  font-size: 24rpx;
	  color: black;
	}
</style>