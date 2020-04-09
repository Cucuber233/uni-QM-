import $http from '../../untils/request.js'

export default function getLyrc(SongId){
	//获取歌词
	$http('lyric?id=' + SongId).then(res => {
		//console.log(res)
		let ly = res.data.lrc.lyric.split(']')
		let lrc = ly.join(',')
		let lyrc = lrc.split('[')
		this.arr = []
		lyrc.forEach(el => {
			//console.log(el)
			let lxs = el.split(',')
			//console.log(lxs)
			this.arr.push(lxs[1])
		})
		let array = this.arr
		let one_ = this.one
		let two_ = this.two
		let three_ = this.three
		let four_ = this.four
		for(let i=0;i<26;i++){
			one_.push(array[i])
		}
		for(let i=26;i<52;i++){
			two_.push(array[i])
		}
		if(array.length > 52){
			for(let i=52;i<78;i++){
				three_.push(array[i])
			}
		}
		if(array.length > 78){
			for(let i=78;i<104;i++){
				four_.push(array[i])
			}
		}
		this.arr = array 
		this.one = one_
		this.two = two_
		this.three = three_
		this.four = four_
	})
}
