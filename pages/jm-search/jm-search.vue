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
				<view @tap="clearKey" class="grace-search-remove">
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
				search_item: []
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
</style>
