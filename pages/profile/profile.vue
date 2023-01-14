<template>
	<view class="container bg-gray flex flex-column items-center">
<!-- 		<tui-tabs color="#a5a5a5" selectedColor="#000" :tabs="tabs" itemWidth="50%" :currentTab="currentTab"
			@change="change"></tui-tabs> -->

		<view class="mt-20 h-full card w-300 flex flex-column mx-auto">
			<view class="card-header">
				<button class="w-full flex justify-start items-center">
					<text class="icon">&#xe777;</text>
					<text>新增考勤组</text>
				</button>
			</view>
			<view class="card-body flex justify-between" @click="changeCheckin">
				<view>
					<text>公司考勤</text>
				</view>
				<view>
					<text>共2人</text>
				</view>
			</view>
			<view class="card-footer"></view>
		</view>
		<!-- 更多设置 -->
		<view class="mt-20 h-full card w-300 flex flex-column mx-auto">
			<view>更多设置</view>
			<view class="item-list">
				<view class="flex justify-evenly flex-wrap">
					<!-- 					<view v-for="item in itemList" class="item flex flex-column justify-center items-center">
						<text class="icon">{{item.icon}}</text>
						<text>{{item.label}}</text>
					</view> -->
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
					<view class="item flex flex-column justify-center items-center">
						<text class="icon">&#xe655;</text>
						<text>班次管理</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				tabs: [{
					name: "考勤设置"
				}, {
					name: "我的设置"
				}],
				itemList: [{
						label: "班次管理",
						icon: "&#xe655;"
					},
					{
						label: "排班管理",
						icon: "&#xe63f;"
					},
					{
						label: "考勤规则",
						icon: "&#xe715;"
					},
					{
						label: "防作弊",
						icon: "&#xe72d;"
					},
					{
						label: "个性化",
						icon: "&#xe7e8;"
					},
					{
						label: "通知管理",
						icon: "&#xe605;"
					},
					{
						label: "假勤审批",
						icon: "&#xe8d0;"
					},
					{
						label: "健康考勤",
						icon: "&#xe8d0;"
					},
				]
			};
		},
		methods: {
			// tab页切换事件
			change({
				index
			}) {
				this.currentTab = index
			},
			// 修改考勤设置
			changeCheckin(){
				console.log("click");	
				uni.navigateTo({
					url:"/pages/checkin_setting/checkin_setting",
					success(){
						console.log("跳转成功");
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		max-width: 140rpx;
		margin: 10rpx;
	}

	.item .icon {
		font-size: 20px;
	}
</style>
