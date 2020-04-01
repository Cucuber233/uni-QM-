import $http from '../../untils/request.js'

export default function chooseSong(SongId){
   return new Promise((resolve, reject) => {
			$http('song/url?id=' + SongId).then(res => {
				//console.log(res)
					this.audioContext = uni.createInnerAudioContext();
					this.audioContext.autoplay = true;
					this.audioContext.src = res.data.data[0].url;
					this.audioContext.onPlay(() => {
					  console.log('开始播放');
					  resolve('播放成功')
				});
					this.audioContext.onError((res) => {
					  console.log('播放失败');
				}); 
				this.audioContext.onEnded(() => {
					that.SongStatus = true
				})
			})  
   })
}
