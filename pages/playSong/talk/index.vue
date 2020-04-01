<template>
	<view class="talk">
		<!-- 精彩评论 -->
		    <view class="relatedAllvideo_title">
		      <text class="comment_title">精彩评论</text>
		    </view>
		    <!-- 评论主体 -->
		    <view class='comment_wrap' v-for='(item ,index) in hotComments' :key='index'>
		      <!-- 左边头像 -->
		      <view class="comment_left">
		        <image :src="item.user.avatarUrl" />
		      </view>
		      <!-- 右边内容 -->
		      <view class="comment_right">
		        <!-- 名称及点赞 -->
		        <view class="comment_info">
		          <view class="comment_info_left">
		            <view class="comment_name">{{item.user.nickname}}</view>
		            <view class="comment_time">{{timeComments(item.time)}}</view>
		          </view>
		          <view class="comment_info_right">
		            <text class="comment_dianzan">{{item.likedCount}}</text>
		            <text class="iconfont" style="font-size:48rpx;color:#b6b3b3">&#xe507;</text>
		          </view>
		        </view>
		        <!-- 内容 -->
		        <view class="comment_content">
					<text>{{item.content}}</text>
		          <!-- <text> -->
		         <!-- <block>
		            <block>re.text</block>
		            <block>
		              <image class="wxEmoji" src="http://s1.music.126.net/style/web2/emt//emoji_{re.text}.png" />
		            </block>
		          </block> -->
		          <!-- </text> -->
		        </view>
		        <!-- 回复无 -->
		        <view></view>
		        <!-- 分割线 -->
		        <view class="xian"></view>
		      </view>
		    </view>
		    <!-- 最新评论 -->
		    <view class="relatedAllvideo_title">
		      <text class="comment_title">最新评论</text>
		    </view>
		    <view class='comment_wrap' v-for="(item, index) in newComments">
		      <!-- 左边头像 -->
		      <view class="comment_left">
		        <image :src="item.user.avatarUrl" />
		      </view>
		      <!-- 右边内容 -->
		      <view class="comment_right">
		        <!-- 名称及点赞 -->
		        <view class="comment_info">
		          <view class="comment_info_left">
		            <view class="comment_name">{{item.user.nickname}}</view>
		            <view class="comment_time">{{timeComments(item.time)}}</view>
		          </view>
		          <view class="comment_info_right">
		            <text class="comment_dianzan">{{item.likedCount}}</text>
		            <text class="iconfont" style="font-size:48rpx;color:#b6b3b3">&#xe507;</text>
		          </view>
		        </view>
		        <!-- 内容 -->
		        <view class="comment_content">
					<text>{{item.content}}</text>
		          <!-- <text> -->
		         <!-- <block>
		            <bloc>re.text</block>
		            <block>
		              <image class="wxEmoji" src="http://s1.music.126.net/style/web2/emt//emoji_{re.text}.png" />
		            </block>
		          </block> -->
		          <!-- </text> -->
		        </view>
		        <!-- 回复 -->
		        <view></view>
		        <!-- 分割线 -->
		        <view class="xian"></view>
		      </view>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	import $http from '../../../untils/request.js'
	export default{
		data(){
			return {
				hotComments: '',
				newComments: ''
			}
		},
		onLoad(option) {
			console.log(option.id)
			//获取评论
			$http('comment/music?id=' + option.id).then(res => {
				//console.log(res)
				this.hotComments = res.data.hotComments
				this.newComments = res.data.comments
				//console.log(this.newComments)
			})
		},
		methods:{
			timeComments(data){
				 let time = new Date(data)
				 let year = time.getFullYear()
				 let mon = time.getMonth() + 1
				 let date = time.getDate()
				 let hour = time.getHours()
				 let min = time.getMinutes()
				 return `${year}年${mon}月${date}日${hour}:${min}`
			},
		}
	}
</script>

<style scoped>
	.main {
		width: 100%;
	}
	
	.context {
		width: 100%;
	}
	
	.video_wrap video {
		width: 100%;
		height: 400rpx;
	}
	
	.relatedAllvideo_title {
		margin-left: 40rpx;
		margin-top: 40rpx;
	}
	
	.relatedAllvideo_title comment_title {
		font-size: 35rpx;
		font-weight: 600;
	}
	
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
	
	.relatedAllvideo_desc_creator {
		font-size: 25rpx;
		color: #a3a0a0;
		text-align: justify;
		margin-top: 10rpx;
	}
	
	.comment_wrap {
		display: flex;
		justify-content: space-between;
		/* border: 1px solid #cccccc; */
		margin-left: 40rpx;
		margin-right: 40rpx;
		margin-top: 40rpx;
	}
	
	.comment_info {
		display: flex;
		justify-content: space-between;
	}
	
	.comment_left {
		width: 10%;
		margin-right: 25rpx;
	}
	
	.comment_left image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}
	
	.comment_right {
		width: 90%;
	}
	
	.comment_name {
		font-size: 30rpx;
		color: rgb(155, 153, 153);
	}
	
	.comment_time {
		font-size: 22rpx;
		color: #b6b3b3;
	}
	
	.comment_dianzan {
		font-size: 30rpx;
		color: #b6b3b3;
		margin-right: 10rpx;
	}
	
	
	/* .comment_content {
		padding-bottom: 30rpx;
		border-bottom: 1rpx solid #ece8e8;
	} */
	
	.comment_content {
		font-size: 30rpx;
		padding-top: 30rpx;
	}
	
	.wxEmoji {
		vertical-align: middle;
		width: 42rpx;
		height: 42rpx;
		margin: 0 3rpx;
	}
	
	.xian {
		width: 100%;
		height: 30rpx;
		border-bottom: 1rpx solid #ece8e8;
	}
	
	.comment_total {
		font-size: 30rpx;
		color: #b6b3b3;
		padding-left: 10rpx;
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
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
</style>
