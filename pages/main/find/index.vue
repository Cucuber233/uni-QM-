<template>
	<view class="find">
		<!-- 轮播图 -->
		<swiper-find :img_data='swiper_data'/>
		<!-- 菜单栏 -->
		<tab-nav />	
		<!-- 主要内容 -->
		<recommend-song :info_song='songInfo'/>
		<new-song :newSong='songNew' />
		<new-releases :newReleases='releasesNew'/>
		<view class="footer_title">
			<text>到底了</text>
		</view>
	</view>
</template>

<script>
	import $http from '../../../untils/request.js'
	import tabNav from '../../../components/tab_nav/main_nav.vue'
	import swiperFind from './swiper/index.vue'
	import recommendSong from './recommendSong/index.vue'
	import newSong from './newSong/index.vue'
	import newReleases from './newReleases/index.vue'
	export default{
		name: 'find',
		components: {
			tabNav,
			swiperFind,
			recommendSong,
			newSong,
			newReleases
		},
		created() {
			$http('banner').then(res => {
				this.swiper_data = res.data.banners
				//console.log(this.swiper_data)
			})
			//获取推荐歌单信息
			$http('personalized?limit=6').then(res => {
				this.songInfo = res.data.result
				//console.log(this.songInfo)
			})
			//获取新歌信息
			$http('personalized/newsong').then(res => {
				this.songNew = res.data.result
				//console.log(this.songNew)
			})
			//获取新碟信息
			$http('album/newest').then(res => {
				this.releasesNew = res.data.albums
				//console.log(this.releasesNew)
			})
		},
		data(){
			return{
				swiper_data: null,
				songInfo: null,
				songNew: null,
				releasesNew: null
			}
		}
	}
</script>
	
<style scoped>
	.footer_title{
		font-size: 35upx;
		font-weight: 800;
		opacity: .2;
		display: flex;
		justify-content: center;
	}
</style>