<template>
	<view class="">
		<view class="partitionLine"></view>
		<view class="songSheet_title_wrap">
		  <view class="songSheet_title">
			<text>推荐歌单</text>
		  </view>
		  <view class="songSheet_square">
			<text>歌单广场</text>
		  </view>
		</view>
		
		<view class="songSheet_wrap">
		  <!-- 控制遍历数量6个 -->
		  <view @click="jump(item.id)" class="songSheet_item" v-for='(item, index) in info_song' :key='index'>
			<!-- 图片容器 -->
			<view class="songSheet_img">
			  <!-- 图片 -->
			  <image mode="widthFix" :src="item.picUrl" />
			  <!-- 播放量。。。 -->
			  <view class="songSheet_info">
				<!-- 播放量 -->
				<view class="play_count_wrap">
				  <!-- 图标 -->
				  <text class="iconfont icon-play" style="font-size:30rpx;"></text>
				  <!-- 数值 -->
				  <text class="play_count">{{item.playCount/10000}}万</text>
				</view>
			  </view>
			</view>
			<!-- 标题 -->
			<view class="songSheet_titles">{{item.name}}</view>
		  </view>
		</view>
		
	</view>
</template>

<script>
	export default{
		name: 'recommendSong',
		props: {
			info_song: Array
		},
		methods:{
			jump(id){
				if(id){
					console.log(11111)
					uni.$emit('goJump', {id})
				}
			}
		},
		data(){
			return{
				
			}
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
	
	.songSheet_title {
	  padding: 20rpx 0;
	}
	
	.songSheet_title text {
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
	
	.songSheet_wrap {
	  display: flex;
	  flex-wrap: wrap;
	  padding: 5rpx;
	  justify-content: space-around;
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
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	}
</style>
