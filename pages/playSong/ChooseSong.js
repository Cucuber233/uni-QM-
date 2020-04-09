import $http from '../../untils/request.js'
import nextSong from './nextSong.js'
import lastSong from './lastSong.js'
import getLyrc from './getLyrc.js'

export default function ChooseSong(choose){
	if(choose == 1){
		if(this.indexSong > 0){
			this.indexSong -= 1
			let last_id = this.privileges[this.indexSong].id
			this.audioContext.destroy()
			let that = this
			lastSong.call(this,last_id).then(res => {
				that.SongStatus = true
			},err => {
				this.SongStatus = false
			})
			$http('song/detail?ids=' + last_id).then(res => {
				//console.log(res)
				this.Song = res.data.songs[0]
				this.SongerName = res.data.songs[0].ar[0].name
				let SongId = res.data.songs[0].id
			})
			//获取歌词
			getLyrc.call(this,last_id)
		}
	}
	if(choose == 2){
		if(this.privileges.length > this.indexSong){
			this.indexSong += 1
			let next_id = this.privileges[this.indexSong].id
			this.audioContext.destroy()
			let that = this
			nextSong.call(this,next_id).then(res => {
				that.SongStatus = true
			},err => {
				that.SongStatus = false
			})
			$http('song/detail?ids=' + next_id).then(res => {
				//console.log(res)
				this.Song = res.data.songs[0]
				this.SongerName = res.data.songs[0].ar[0].name
				let SongId = res.data.songs[0].id
			})
			//获取歌词
			getLyrc.call(this,last_id)
		}
	}
}
