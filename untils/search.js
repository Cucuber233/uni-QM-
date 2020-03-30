import { baseurl } from './api.js'

export default function(parmas){
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseurl + 'search',
			data: {
				keywords: parmas
			},
			success(res) {
				resolve(res)
			},
			fail() {
				console.log('请求失败')
			}
		})
	})
}