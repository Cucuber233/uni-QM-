<template>
	<view class="div1">
		我的
		<view>
		    <text class="test">&#xe600;</text>
		    <text class="test">&#xe687;</text>
		    <text class="test">&#xe60b;</text>
		</view>
	</view>
</template>

<script>
	export default{
		name: 'my',
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	@font-face {
	    font-family: 'iconfont';
	    src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
	}
	.test {
	    font-family: iconfont;
	    margin-left: 20rpx;
	}
</style>
