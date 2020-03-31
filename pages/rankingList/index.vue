<template>
	<view class="ranking">
		<view style="height: 100%">
		    <template />
		</view>
		<view class="main">
		    <!-- 官方榜 -->
		    <view class="officialList">
		        <view class="officialList_title">
		            <text>官方榜</text>
		        </view>
		        <view @click='jump(item.name)' class="officialList_wrap" v-for="(item, index) in official" :key='index'>
		            <view class="officialList_img">
		                <image mode="widthFix" :src="item.coverImgUrl" />
		                <view class="officialList_info">
		                    <view class="officialList_wrap">
		                        <text>{{item.updateFrequency}}</text>
		                    </view>
		                </view>
		            </view>
		            <view class="officialList_desc">
		               <view v-for="(el, inx) in item.tracks" :key='inx'>
		                    <text>{{inx+1}}.{{el.first}}-{{el.second}}</text>
		                </view>
		            </view>
		        </view>
		    </view>
		    <!-- 推荐榜 -->
		    <view class="officialList">
		        <view class="officialList_title">
		            <text>推荐榜</text>
		        </view>
		        <view class="recommendationList_wrap">
		            <view class="recommendationList_item" @click='jump(item.name)' v-for="(item, index) in recommend" :key='index'>
		                <view class="recommendationList_img">
		                    <image mode="widthFix" :src="item.coverImgUrl" />
		                    <view class="recommendationList_info">
		                        <!-- 播放量 -->
		                        <view>
		                            <text>{{item.updateFrequency}}</text>
		                        </view>
		                    </view>
		                </view>
		                <!-- 标题 -->
		                <view class="recommendationList_titles">{{item.name}}</view>
		            </view>
		        </view>
		    </view>
		    <!-- 全球榜 -->
		    <view class="officialList">
		        <view class="officialList_title">
		            <text>全球榜</text>
		        </view>
		        <view class="recommendationList_wrap">
		            <view class="recommendationList_item" @click='jump(item.name)' v-for="(item, index) in global_" :key='index'>
		                <view class="recommendationList_img">
		                    <image mode="widthFix" :src="item.coverImgUrl" />
		                    <view class="recommendationList_info">
		                        <!-- 播放量 -->
		                        <view>
		                            <text>{{item.updateFrequency}}</text>
		                        </view>
		                    </view>
		                </view>
		                <!-- 标题 -->
		                <view class="recommendationList_titles">{{item.name}}</view>
		            </view>
		        </view>
		    </view>
		    <!-- 更多榜单 -->
		    <view class="officialList">
		        <view class="officialList_title">
		            <text>更多榜单</text>
		        </view>
		        <view class="recommendationList_wrap">
		            <view class="recommendationList_item" @click='jump(item.name)' v-for="(item, index) in more" :key='index'>
		                <view class="recommendationList_img">
		                    <image mode="widthFix" :src="item.coverImgUrl" />
		                    <view class="recommendationList_info">
		                        <!-- 播放量 -->
		                        <view>
		                            <text>{{item.updateFrequency}}</text>
		                        </view>
		                    </view>
		                </view>
		                <!-- 标题 -->
		                <view class="recommendationList_titles">{{item.name}}</view>
		            </view>
		        </view>
		    </view>
		</view>
	</view>
</template>

<script>
	import $http from '../../untils/request.js'
	export default{
		name: 'ranking',
		data(){
			return{
				data: null,
				official: [],
				recommend: [],
				global_: [],
				more: []
			}
		},
		created() {
			$http('toplist/detail').then(res => {
				//console.log(res)
				//console.log(res.data.list)
				 for (var index in res.data.list) {
						var name = res.data.list[index].name
						if (name == "云音乐飙升榜" || name == "云音乐新歌榜" || name == "网易原创歌曲榜" || name == "云音乐热歌榜") {
						  this.official.push(res.data.list[index])
						} else if (name == "江小白YOLO云音乐说唱榜" || name == "说唱TOP榜" || name == "云音乐电音榜" || name == "云音乐ACG音乐榜" || name == "云音乐欧美新歌榜" || name == "抖音排行榜") {
						  this.recommend.push(res.data.list[index])
						} else if (name == "美国Billboard周榜" || name == "UK排行榜周榜" || name == "Beatport全球电子舞曲榜" || name == "日本Oricon周榜" || name == "iTunes榜" || name == "香港电台中文歌曲龙虎榜") {
						  this.global_.push(res.data.list[index])
						} else {
						  this.more.push(res.data.list[index])
						}
					  }
					  // console.log(this.official)
					  // console.log(this.recommend)
					  // console.log(this.global_)
					  // console.log(this.more)
			})
		},
		methods:{
			jump(name){
				let id;
				if (name == "云音乐新歌榜") {
				    id = 0;
				}
				if (name == "云音乐热歌榜") {
					id = 1;
				}
				if (name == "网易原创歌曲榜") {
					id = 2;
				}
				if (name == "云音乐飙升榜") {
					id = 3;
				}
				if (name == "云音乐电音榜") {
					id = 4;
				}
				if (name == "UK排行榜周榜") {
					id = 5;
				}
				if (name == "美国Billboard周榜") {
					id = 6;
				}
				if (name == "KTV嗨榜") {
					id = 7;
				}
				if (name == "iTunes榜") {
					id = 8;
				}
				if (name == "Hit FM Top榜") {
					id = 9;
				}
				if (name == "日本Oricon周榜") {
					id = 10;
				}
				if (name == "韩国Melon排行榜周榜") {
					id = 11;
				}
				if (name == "韩国Mnet排行榜周榜") {
					id = 12;
				}
				if (name == "韩国Melon原声周榜") {
					id = 13;
				}
				if (name == "中国TOP排行榜(港台榜)") {
					id = 14;
				}
				if (name == "中国TOP排行榜(内地榜)") {
					id = 15;
				}
				if (name == "香港电台中文歌曲龙虎榜") {
					id = 16;
				}
				if (name == "华语金曲榜") {
					id = 17;
				}
				if (name == "中国嘻哈榜") {
					id = 18;
				}
				if (name == "法国 NRJ EuroHot 30周榜") {
					id = 19;
				}
				if (name == "台湾Hito排行榜") {
					id = 20;
				}
				if (name == "Beatport全球电子舞曲榜") {
					id = 21;
				}
				if (name == "云音乐ACG音乐榜") {
					id = 22;
				}
				if (name == "云音乐嘻哈榜") {
					id = 23;
				}
				uni.navigateTo({
					url: '../songSheet/index?id=' + id + '&type=1',
					success() {
						console.log('跳转歌单页面')
					},
					fail() {
						console.log('跳转歌单页面失败')
					}
				})
			}
		}
	}
</script>

<style scoped>
	.officialList {
	    margin-left: 30rpx;
	}
	
	.officialList_title {
	    margin-top: 30rpx;
	    margin-bottom: 20rpx;
	}
	
	.officialList_title text {
	    font-size: 35rpx;
	    font-weight: 600;
	}
	
	.officialList_wrap {
	    display: flex;
	    align-items: center;
	}
	
	.officialList_img {
	    width: 30%;
	    margin-bottom: 20rpx;
	    position: relative;
	}
	
	.officialList_img image {
	    width: 100%;
	    border-radius: 15rpx;
	}
	
	.officialList_img .officialList_info {
	    position: absolute;
	    left: 10rpx;
	    bottom: 20rpx;
	    width: 100%;
	    color: #fff;
	    font-size: 24rpx;
	}
	
	.officialList_desc {
	    width: 63%;
	    margin-left: 20rpx;
	    line-height: 70rpx;
	    margin-bottom: 40rpx;
	}
	
	.officialList_desc text {
		margin-left: 4rpx;
		opacity: .8;
	    font-size: 30rpx;
	    color: rgb(99, 97, 95);
	    display: -webkit-box;
	    overflow: hidden;
	    white-space: normal;
	    text-overflow: ellipsis;
	    word-wrap: break-word;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	
	/* 推荐榜 */
	
	.recommendationList_wrap {
	    display: flex;
	    flex-wrap: wrap;
	}
	
	.recommendationList_item {
	    width: 30%;
	    margin-bottom: 20rpx;
	    margin-right: 20rpx;
	}
	
	.recommendationList_img {
	    position: relative;
	}
	
	.recommendationList_img image {
	    width: 100%;
	    border-radius: 15rpx;
	}
	
	.recommendationList_img .recommendationList_info {
	    position: absolute;
	    left: 10rpx;
	    bottom: 20rpx;
	    width: 100%;
	    color: #fff;
	    font-size: 24rpx;
	}
	
	.recommendationList_titles {
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
