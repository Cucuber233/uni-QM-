<template>
	<view class="movie">
		<view class="main">
		  <!-- 视频播放 -->
		  <view class="video_wrap">
		    <!-- 自动播放：autoplay -->
		    <video id="myVideo" autoplay='false' :src="mvUrl" auto-pause-if-open-native auto-pause-if-navigate controls></video>
		  </view>
		  <view class="context">
		    <!-- 视频名称 -->
		    <view class="video_info">
		      <view class="video_name">
		        <text>{{mvDetail.name || mvDetail.title}}</text>
		      </view>
		      <view class="video_desc_icon">
		        <text class="iconfont"
				 style="color:#868585;font-siz:20rpx;"></text>
		      </view>
		    </view>
		    <!-- 视频简介 -->
		    <view class="video_desc">
		      <view>
		        <text>{{timeComments(mvDetail.publishTime)}} 发布</text>
		      </view>
		      <view>
		        <text>{{mvDetail.desc==null?"":mvDetail.desc}}</text>
		      </view>
		    </view>
		    <!-- 观看次数 -->
		    <view class="video_watch_info">
		      <view class="video_playCount">
		        <text>{{utils(mvDetail.playCount || mvDetail.playTime)}}万次观看</text>
		      </view>
		      <view class="video_Label">
		        <text>mv</text>
		      </view>
		      <view class="video_Label">
		        <text>流行</text>
		      </view>
		      <view class="video_Label">
		        <text>音乐</text>
		      </view>
		    </view>
		    <!-- 菜单栏 -->
		    <view class="video_menu">
		      <view>
		        <view>
		          <text class="iconfont" style="font-size:60rpx;color:#242323">&#xe507;</text>
		        </view>
		        <view class="video_menu_text">
		          <text>{{mvDetail.likeCount || mvDetail.praisedCount}}</text>
		        </view>
		      </view>
		      <view>
		        <view>
		          <text class='iconfont' style="font-size:60rpx;color:#242323">&#xe653;</text>
		        </view>
		        <view class="video_menu_text">
		          <text>{{mvDetail.subCount || mvDetail.subscribeCount}}</text>
		        </view>
		      </view>
		      <view>
		        <view>
		          <text class="iconfont" style="font-size:60rpx;color:#242323">&#xe623;</text>
		        </view>
		        <view class="video_menu_text">
		          <text>{{mvDetail.commentCount}}</text>
		        </view>
		      </view>
		      <view class="">
		        <view class="">
		          <text class="iconfont" style="font-size:60rpx;color:#242323">&#xe7ad;</text>
		        </view>
		        <view class="video_menu_text">
		          <text>{{mvDetail.shareCount}}</text>
		        </view>
		      </view>
		    </view>
		    <!-- 歌手信息(无) -->
		    <!-- 相关音乐（无） -->
		    <!-- 相关视频 -->
		    <view class="relatedAllvideo_title">
		      <text class="">相关视频</text>
		    </view>
		    <view @click="jump(item.vid)" class="relatedAllvideo" v-for='(item, index) in relevantMv'>
		      <view class="relatedAllvideo_img">
		        <image mode="aspectFill" :src="item.coverUrl" />
		        <view class="relatedAllvideo_playCount">
		          <text class="iconfont" style="font-size:30rpx;">&#xe507;</text>
		          <text>{{utils(item.playTime)}}万</text>
		        </view>
		      </view>
		      <view class="relatedAllvideo_desc">
		        <view class="relatedAllvideo_desc_title">
		          <text id="mv" style="font-size:40rpx;color:red"></text>
		          <text>{{item.title}}</text>
		        </view>
		        <view class="relatedAllvideo_desc_creator">
		          {{durationms(item.durationms)}}  by
		          <text decode="true">{{item.creator[0].userName}}</text>
		        </view>
		      </view>
		    </view>
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
		      <text class="comment_total" decode="true">&nbsp;{{total}}</text>
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
	import $http from '../../untils/request.js'
	export default{
		name: 'movie',
		onLoad(option) {
			//获取相关视频
			$http('related/allvideo?id=' + option.id).then(res => {
				//console.log(res)
				this.relevantMv = res.data.data
				//console.log(this.relevantMv)
			})
			if(option.type == 0){
				//mv数据
				$http('mv/detail?mvid=' + option.id).then(res => {
					//console.log(res)
					this.mvDetail = res.data.data
					//console.log(res)
				})
				//mv播放地址
				$http('mv/url?id=' + option.id).then(res => {
					//console.log(res)
					this.mvUrl = res.data.data.url
				})
				//获取评论
				$http('comment/mv?id=' + option.id).then(res => {
					//console.log(res)
					this.hotComments = res.data.hotComments
					this.newComments = res.data.comments
					//console.log(this.newComments)
				})
			}
			if(option.type == 1){
				//相关视频的Video数据
				$http('video/url?id=' + option.id).then(res => {
					//console.log(res)
					this.mvUrl = res.data.urls[0].url
				})
				$http('video/detail?id=' + option.id).then(res => {
					//console.log(res)
					this.mvDetail = res.data.data
					//console.log(this.mvDetail)
				})
				$http('comment/video?id=' + option.id).then(res => {
					console.log(res)
					this.newComments = res.data.comments
					this.total = res.data.total
				})
			}
			
		},
		methods:{
			utils(data){
				let num = Number(data)
				return Math.floor(num/10000)
			},
			durationms(data){
				let newTime = data/1000/60
				let min = Math.floor(newTime)
				let secTime = newTime + ''
				let secT = (secTime.split('.')[1])/10*6
				let sec = (secT + '').substring(0,2)
				return `${min}:${sec}`
			},
			timeComments(data){
				 let time = new Date(data)
				 let year = time.getFullYear()
				 let mon = time.getMonth() + 1
				 let date = time.getDate()
				 let hour = time.getHours()
				 let min = time.getMinutes()
				 return `${year}年${mon}月${date}日${hour}:${min}`
			},
			jump(id){
				if(id){
					uni.navigateTo({
						url: './index?id=' + id + '&type=1',
						success() {
							console.log('刷新mv页面')
						},
						fail() {
							console.log('刷新mv页面失败')
						}
					})
				}
			}
		},
		data(){
			return {
				mvDetail: '',
				mvUrl: '',
				relevantMv: '',
				hotComments: '',
				newComments: '',
				total: ''
			}
		}
	}
</script>

<style scoped>
.main {
	width: 100%;
}

.video_wrap {
	width: 100%;
}

.context {
	width: 100%;
}

.video_wrap video {
	width: 100%;
	height: 400rpx;
}

.video_info {
	display: flex;
	justify-content: space-between;
	/* border: 1px solid black; */
	padding: 25rpx 40rpx;
}

.video_name text {
	font-size: 35rpx;
	font-weight: 600;
}

.video_desc {
	width: 90%;
	padding: 0rpx 40rpx;
	padding-bottom: 25rpx;
	/* border: 1px solid black; */
}

.video_desc text {
	font-size: 30rpx;
	color: #868585;
	word-break: keep-all;
	word-wrap: break-word;
}

.video_watch_info {
	display: flex;
	justify-content: flex-start;
	/* border: 1px solid black; */
	padding: 0rpx 40rpx;
}

.video_playCount text {
	font-size: 30rpx;
	color: #868585;
}

.video_Label {
	/* display: block; */
	margin-left: 30rpx;
	margin-top: 6rpx;
	width: 90rpx;
	height: 50rpx;
	/* border: 1px solid #cccccc; */
	background-color: #e0dddd;
	text-align: center;
	border-radius: 25rpx;
	line-height: 40rpx;
}

.video_Label text {
	font-size: 30rpx;
	color: #242323;
}

.video_menu {
	/* border: 1px solid #cccccc; */
	/* width: 100%; */
	display: flex;
	justify-content: space-between;
	text-align: center;
	margin: 0rpx 60rpx;
	margin-top: 60rpx;
}

.video_menu_text {
	font-size: 25rpx;
	color: #868585;
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

#mv{
	/* display: block; */
	margin-right: 10rpx;
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
