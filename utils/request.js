import http from '../components/common/httpRequest.js'
//初始化请求配置项
http.create({
	host: 'https://www.thorui.cn',
	header: {
		'content-type': 'application/x-www-form-urlencoded'
	}
})
//请求拦截
http.interceptors.request.use(config => {
	let token = uni.getStorageSync('thorui_token');
	if (config.header) {
		config.header['Authorization'] = token
	} else {
		config.header = {
			'Authorization': token
		}
	}
	return config
})
//响应拦截
http.interceptors.response.use(response => {
	//TODO
	return response
})
export default http;
