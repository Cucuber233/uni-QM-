<template>
	<view>
		<view class="songSheet_title_wrap">
		  <view class="newest_title">
			<text>新歌</text>
		  </view>
		  <view class="songSheet_square">
			<text>新歌推荐</text>
		  </view>
		</view>
		
		<view class="songSheet_wrap">
		  <!-- 控制遍历数量3个 -->
		  <view class="songSheet_item" v-for='(item, index) in newSong' :key='index'>
			<!-- 图片容器 -->
			<view v-if='index === 9 ? 0 : 1'>
				<view class="songSheet_img">
					 <!-- 图片 -->
					 <image mode="widthFix" :src="item.picUrl" />
					</view>
					<!-- 标题 -->
					<view class="songSheet_titles">{{item.name}}</view>
					<view class="songSheet_titles">{{item.song.alias[0]}}</view>
				 </view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		name: 'newSong',
		props: {
			newSong: Array
		}
	}
</script>

<style scoped>
	.songSheet_title_wrap {
	  display: flex;
	  flex-wrap: wrap;
	  padding-top: 20rpx;
	  width: 94%;
	  justify-content: space-between;
	  margin-left: 3%;
	}
	
	.newest_title {
	  padding: 20rpx 0;
	}
	
	.newest_title text {
	  font-size: 40rpx;
	  font-weight: 800;
	  color: black;
	}
	
	 .songSheet_square {
	  margin: 20rpx 0;
	  width: 130rpx;
	  height: 40rpx;
	  line-height: 31rpx;
	  border: 1px solid #666;
	  border-radius: 20rpx;
	  text-align: center;
	}
	
	 .songSheet_square text {
	  font-size: 23rpx;
	}
/* ------------------------------------------- */	
	.songSheet_wrap {
	  display: flex;
	  flex-wrap: wrap;
	  padding: 5rpx;
	  justify-content: space-around;
	}
	
	.songSheet_wrap_active {
	  display: flex;
	  flex-wrap: wrap;
	  padding: 5rpx;
	  justify-content: space-around;
	  margin-bottom: 100rpx;
	}
	
	.songSheet_item {
	  width: 30%;
	  margin-bottom: 20rpx;
	}
	
	.songSheet_img {
	  position: relative;
	}
	
	.songSheet_img image {
	  width: 100%;
	  border-radius: 15rpx;
	}
	
	.songSheet_img .songSheet_info {
	  position: absolute;
	  top: 5rpx;
	  right: 5rpx;
	  width: 100%;
	  display: flex;
	  justify-content: flex-end;
	  color: #fff;
	  font-size: 24rpx;
	}
	
	.songSheet_titles {
		font-size: 28rpx;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>
