import { baseurl } from './api.js'

//const baseurl  = "https://netease.lzcdev.xyz/"

export default function $http(url){
	return new Promise((resolve, reject) => {
		 uni.request({
			url: baseurl + url,
			method:'GET',
			success(res) {
				resolve(res)
			},
			fail(){
				reject('请求失败')
			}
		})
	})
}