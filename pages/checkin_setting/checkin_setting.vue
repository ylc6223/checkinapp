<template>
	<view class="container bg-gray flex flex-column items-center">
		<view class="mt-20 card w-300 mx-auto">
			<tui-list-view unlined="top">
				<tui-list-cell :index="0" :unlined="true" :arrow="true">
					<view class="flex justify-start items-center">
						<tui-icon name="add" color="#3498db" size="24"></tui-icon>
						<view class="tui-list-cell_name">新增考勤组</view>
					</view>
				</tui-list-cell>
				<!-- warning -->
				<tui-radio-group>
					<tui-slide-view :buttons="buttons" v-for="(item,index) in checkinGroups" :key="index">
						<tui-list-cell :index="index+1" :unlined="true">
							<view class="flex justify-between">
								<text>{{item.name}}</text>
								<tui-radio :scaleRatio="1.2" color="#EB0909" :checked="item.checked"
									:value="item.value">
								</tui-radio>
							</view>
						</tui-list-cell>
					</tui-slide-view>
				</tui-radio-group>
			</tui-list-view>
		</view>

		<view class="mt-20 card w-300 mx-auto">
			<tui-list-view unlined="top">
				<tui-list-cell :index="0" :arrow="true" @click="navTo">
					<view>
						<text class="tui-list-cell_name">考勤时间设置</text>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="1" :arrow="!address" @click="navTo">
					<view class="flex justify-between">
						<text class="tui-list-cell_name">考勤地点设置</text>
						<view style="margin-right: 20rpx;">{{address}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="2" :unlined="true" :arrow="true" @click="navTo">
					<view>
						<text class="tui-list-cell_name">考勤WIFI设置</text>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="3" :unlined="true" :arrow="true" @click="navTo">
					<view>
						<text class="tui-list-cell_name">考勤人员设置</text>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="4" :unlined="true" :arrow="true">
					<view>
						<text class="tui-list-cell_name">考勤奖励设置</text>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
		<!-- 保存设置 -->
		<view class="savebtn-wrap flex justify-evenly bg-white w-full">
			<tui-button width="300rpx" height="60rpx" plain>预览规则</tui-button>
			<tui-button width="300rpx" height="60rpx">保存</tui-button>
		</view>
	</view>
</template>

<script>
	//地图选址页 引入小程序地图选址插件 相关用法参见https://lbs.qq.com/miniProgram/plugin/pluginGuide/locationPicker
	var QQMapWX = require("../../sdk/qqmap-wx-jssdk");
	const chooseLocation = requirePlugin('chooseLocation');
	var qqmapsdk;
	var latitude;
	var longitude;
	uni.getLocation({
		type: 'wgs84',
		success: function(res) {
			latitude = res.latitude
			longitude = res.longitude
			console.log('当前位置的经纬度：' + res.longitude + '，' + res.latitude);
		}
	});
	export default {
		data() {
			return {
				buttons: [
					// 	{
					// 	text: '修改',
					// 	color: '#fff',
					// 	background: '#3498db'
					// }, 
					{
						text: '删除',
						color: '#fff',
						background: '#FA5151'
					},
				],
				checkinGroups: [{
						name: '考勤组1',
						value: '1',
						checked: true
					},
					{
						name: '考勤组2',
						value: '2',
						checked: false
					}
				],
				key: 'IBTBZ-GUPYJ-LUTFY-FJHNN-4FD4V-A6FVU', //使用在腾讯位置服务申请的key
				referer: 'xfab-checkinapp', //调用插件的app的名称
				location: JSON.stringify({
					latitude,
					longitude
				}),
				category: '',
				address: ""
			};
		},
		methods: {
			navTo(obj) {
				const that = this
				const {
					index
				} = obj
				switch (index) {
					//时间设置
					case 0:
						uni.navigateTo({
							url: "/pages/checkin_setting/times-setting/times-setting"
						})
						break;
						//地点设置
					case 1:
						uni.navigateTo({
							url: 'plugin://chooseLocation/index?key=' + that.key + '&referer=' + that.referer +
								'&location=' + that.location + '&category=' + that.category
						})
						break;
						//WIFI设置	
					case 2:
						uni.navigateTo({
							url: "/pages/checkin_setting/wifi-setting/wifi-setting"
						})
						break;
						//人员设置	
					case 3:
						uni.navigateTo({
							url: "/pages/checkin_setting/indexlist/indexlist"
						})
						break;
						//奖励设置	
					case 4:
						uni.navigateTo({
							url: "/pages/profile/checkin-method/checkin-method"
						})
						break;
					default:
						break
				}
			},
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
		// #ifdef MP-WEIXIN 
		onShow() {
			if (!chooseLocation.getLocation()) {
				return
			}
			const {
				address
			} = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
			this.address = address
		},
		onUnload() {
			// 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
			chooseLocation.setLocation(null);
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
	}

	.savebtn-wrap {
		position: absolute;
		bottom: 0;
		padding: 20rpx;
	}
</style>
