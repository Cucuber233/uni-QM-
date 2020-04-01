<template>
	<view class="menu_wrap">
	  <view class="menu_item" @click="jump(1)">
		<view class="menu_icon">
			<image src="../../static/find/tuijian.png" mode="widthFix"></image>
		</view>
		<text>每日推荐</text>
	  </view>
	  <view class="menu_item" @click="jump(2)">
		<view class="menu_icon">
			<image src="../../static/find/gedan.png" mode="widthFix"></image>
		</view>
		<text>歌单</text>
	  </view>
	  <view class="menu_item" @click="jump(3)">
		<view class="menu_icon">
			<image src="../../static/find/paihangbang.png" mode="widthFix"></image>
		</view>
		<text>排行榜</text>
	  </view>
	  <view class="menu_item" @click="jump(4)">
		<view class="menu_icon">
			<image src="../../static/find/diantai.png" mode="widthFix"></image>
		</view>
		<text>电台</text>
	  </view>
	  <view class="menu_item" @click="jump(5)">
		<view class="menu_icon">
			<image src="../../static/find/zhibo.png" mode="widthFix"></image>
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
		},
		methods:{
			jump(i){
				if(i === 3)
				uni.navigateTo({
					url: '../../pages/rankingList/index',
					success() {
						console.log('跳转排行榜页面')
					},
					fail() {
						console.log('跳转排行榜页面失败')
					}
				})
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
	display: flex;
	justify-content: center;
	align-items: cneter;
	width: 100rpx;
	height: 100rpx;
	background-color: #3c9;
	border-radius: 50%;
	line-height: 100rpx;
}

.menu_item text {
	font-size: 24rpx;
	color: black;
}

.menu_wrap image{
	margin: 10rpx 0 0 6rpx;
	width: 75rpx;
	height: 50rpx;
}
</style>