<template>
	<view class="relative">
		<tui-list-view>
			<tui-list-cell :index="0" :unlined="true" :hover="false">
				<view class="flex justify-between">
					<tui-input labelSize="28" size="28" label="考勤组名称" required placeholder="输入考勤组名称"></tui-input>
				</view>
			</tui-list-cell>
			<tui-list-cell :index="1" :arrow="true" @click="navTo">
				<view>
					<text>考勤人员</text>
				</view>
			</tui-list-cell>
			<tui-list-cell :index="2" :unlined="true" :arrow="true" @click="navTo">
				<view>
					<view>考勤时间设置</view>
				</view>
			</tui-list-cell>
			<tui-list-cell :index="3" :unlined="true" :arrow="true" @click="navTo">
				<view class="flex justify-between">
					<view>考勤地点设置</view>
					<view style="margin-right: 20rpx;">{{address}}</view>
				</view>
			</tui-list-cell>
			<tui-list-cell :index="4" :unlined="true" :arrow="true" @click="navTo">
				<view>
					<view>考勤WIFI设置</view>
				</view>
			</tui-list-cell>
		</tui-list-view>
		<tui-button type="primary" class="absolute">保存设置</tui-button>
	</view>

</template>

<script>
	//地图选址页 引入小程序地图选址插件 相关用法参见https://lbs.qq.com/miniProgram/plugin/pluginGuide/locationPicker
	var QQMapWX = require('../../../sdk/qqmap-wx-jssdk');
	const chooseLocation = requirePlugin('chooseLocation');
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
				address: "暂未选择地址"
			};
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
		},
		onShow() {
			if (!chooseLocation.getLocation()) {
				return
			}
			const {
				address
			} = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
			this.address = address
		},
		methods: {
			navTo(obj) {
				const {
					index
				} = obj
				switch (index) {
					case 0:
						break;
					case 1:
						//选择参与考勤人员
						uni.navigateTo({
							url: "/pages/indexlist/indexlist"
						})
						break;
					case 2:
						//考勤时间设置
						break;
					case 3:
						//考勤地点设置
						// #ifdef MP-WEIXIN
						wx.navigateTo({
							url: 'plugin://chooseLocation/index?key=' + this.key + '&referer=' + this.referer +
								'&location=' +
								this.location + '&category=' + this.category
						})
						// #endif
						break;
					case 4:
						//考勤WIFI设置
						break;
					default:
						break
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	view.relative{
		min-height: 100vh;
	}
	tui-list-cell:first-child {
		padding: 0;
	}

	tui-button.absolute {
		left: 50%;
		bottom: 40rpx;
		transform: translateX(-50%);
	}
</style>
