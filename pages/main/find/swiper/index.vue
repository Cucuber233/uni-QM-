<template>
	<!-- 轮播图 -->
	<view class="swiper_">
		 <swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="2000" indicator-active-color='green'>
			<swiper-item v-for="(item, index) in img_data" :key="index">
				<navigator url="">
					<image :src='item.imageUrl' mode='scaleToFill' style="width: 100%;"></image>
				</navigator>
			</swiper-item>
	  </swiper>
	</view>
</template>

<script>
	export default{
		name: 'swiper',
		props: {
			img_data: Array
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.asaad image{
		width: 10px;
		height: 10px;
	}
</style>
