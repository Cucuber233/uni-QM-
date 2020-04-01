import $http from '../../untils/request.js'

export default function chooseSong(SongId){
	 return new Promise((resolve, rejject) => {
		 $http('song/url?id=' + SongId).then(res => {
		   // console.log(this.currentSongId)
	   	// 	console.log(res)
	   			this.audioContext = uni.createInnerAudioContext();
	   			this.audioContext.autoplay = true;
	   			this.audioContext.src = res.data.data[0].url;
	   			this.audioContext.onPlay(() => {
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
