import { baseurl } from './api.js'

//const baseurl  = "https://netease.lzcdev.xyz/"

export default function $http(path){
	return new Promise((resolve, reject) => {
		 uni.request({
			url: baseurl + path,
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