<template>
	<view class="container bg-gray flex flex-column items-center">
		<view class="mt-20 card w-300 mx-auto">
			<tui-list-view unlined="top">
				<tui-list-cell :index="0" :arrow="true" @click="navTo">
					<view>
						<text class="tui-list-cell_name">考勤人员</text>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="1" :unlined="true" :arrow="true">
					<view>
						<view class="tui-list-cell_name">考勤组名称</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>

		<view class="mt-20 card w-300 mx-auto">
			<tui-list-view unlined="top">
				<tui-list-cell :index="2" :arrow="true">
					<view>
						<text class="tui-list-cell_name">考勤类型</text>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="3" :arrow="true">
					<view>
						<text class="tui-list-cell_name">考勤时间</text>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="4" :unlined="true" :arrow="true" @click="navTo">
					<view>
						<text class="tui-list-cell_name">打卡方式</text>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>

		<view class="mt-20 card w-300 mx-auto">
			<tui-list-view unlined="all">
				<tui-list-cell :index="5" :unlined="true" :arrow="true">
					<view>
						<text class="tui-list-cell_name">更多设置</text>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
		<view class="mt-20 h-full card w-300 flex justify-center items-center mx-auto">
			<tui-list-view unlined="all">
				<tui-list-cell padding="0" :unlined="true" :arrow="true">
					<view>
						<text style="color: orange;">删除考勤组</text>
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
	export default {
		data() {
			return {

			};
		},
		methods: {
			navTo(obj) {
				const {
					index
				} = obj
				console.log(index);
				switch (index) {
					case 0:
						uni.navigateTo({
							url: "/pages/indexlist/indexlist"
						})
						break;
					case 1:
						break;
					case 2:
						break;
					case 3:
						break;
					case 4:
						uni.navigateTo({
							url: "/pages/profile/checkin-method/checkin-method"
						})
						break;
					default:
						break
				}
			},
		}
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
