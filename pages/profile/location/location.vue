<template>
	<view class="container bg-gray flex flex-column">
		<view class="mt-20">
			<tui-list-view>
				<tui-list-cell @click="navTo">
					<template v-slot:default>
						<view class="flex justify-between items-center">
							<text>地点打卡</text>
							<tui-switch></tui-switch>
						</view>
					</template>
				</tui-list-cell>
				<tui-list-cell @click="selectedLocation">
					添加+
				</tui-list-cell>
			</tui-list-view>
		</view>
	</view>
</template>

<script>
	//地图选址页 引入小程序地图选址插件 相关用法参见https://lbs.qq.com/miniProgram/plugin/pluginGuide/locationPicker
	var QQMapWX = require('../../../sdk/qqmap-wx-jssdk');
	var qqmapsdk;
	export default {
		data() {
			return {
				key: 'IBTBZ-GUPYJ-LUTFY-FJHNN-4FD4V-A6FVU', //使用在腾讯位置服务申请的key
				referer: 'xfab-checkinapp', //调用插件的app的名称
				location: JSON.stringify({
					latitude: 39.89631551,
					longitude: 116.323459711
				}),
				category: '生活服务,娱乐休闲',
			};
		},
		methods: {
			navTo({
				index
			}) {

			},
			selectedLocation() {
				// #ifdef MP-WEIXIN
				wx.navigateTo({
					url: 'plugin://chooseLocation/index?key=' + this.key + '&referer=' + this.referer +
						'&location=' +
						this.location + '&category=' + this.category
				})
				// #endif
			}
		},
		created() {

		},
		mounted() {
			// 实例化API核心类
			qqmapsdk = new QQMapWX({
				key: "IBTBZ-GUPYJ-LUTFY-FJHNN-4FD4V-A6FVU"
			});
			// 调用接口
			// qqmapsdk.search({
			// 	keyword: '酒店',
			// 	success: function(res) {
			// 		console.log(res);
			// 	},
			// 	fail: function(res) {
			// 		console.log(res);
			// 	},
			// 	complete: function(res) {
			// 		console.log(res);
			// 	}
			// });
		}

	}
</script>

<style lang="scss">

</style>
