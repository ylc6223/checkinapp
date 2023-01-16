<template>
	<view>
		<tui-list-view unlined="top">
			<view class="p-10">
				<view class="flex justify-center items-center">
					<image class="avatar" src="../../static/icons/checkin-active.png" mode=""></image>
					<view class="names flex-1">
						<text class="block">Jerry</text>
						<text class="block">研发部</text>
					</view>
					<view class="actions">
						<button class="action-btn flex justify-center items-center">
							<text class="icon">&#xe6da;</text>
						</button>
						<text class="block">{{value}}</text>
					</view>
				</view>
			</view>

			<!-- 管理员身份显示考勤设置 -->
			<!-- <tui-list-cell v-if="false" :index="0" :unlined="true"> -->
			<tui-list-cell :index="0" :unlined="true" :arrow="true" @click="navTo">
				<view>
					<text class="tui-list-cell_name">考勤设置</text>
				</view>
			</tui-list-cell>
			<!-- <tui-list-cell v-if="true" :index="1" :unlined="true" @click="navTo"> -->
			<tui-list-cell :index="1" :unlined="true" :arrow="true" @click="navTo">
				<view>
					<text class="tui-list-cell_name">考勤记录</text>
				</view>
			</tui-list-cell>
			<tui-list-cell :index="2" :unlined="true" :arrow="true" @click="navTo">
				<view>
					<text class="tui-list-cell_name">个人设置</text>
				</view>
			</tui-list-cell>
			<tui-list-cell :index="3" :unlined="true" :arrow="true">
				<view>
					<view class="tui-list-cell_name">关于我们</view>
				</view>
			</tui-list-cell>
		</tui-list-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			navTo({
				index
			}) {
				console.log("点击了");
				switch (index) {
					case 0:
						// 考勤设置页
						uni.navigateTo({
							url: "/pages/checkin_setting/checkin_setting",
						})
						break;
					case 1:
						uni.switchTab({
							url: "/pages/count/count"
						})
						break;
					case 2:
						// 用户个人设置
						uni.navigateTo({
							url: "/pages/user/user"
						})
						break;
					case 3:
						break;
					default:
						break;
				}
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

	.avatar {
		width: 50px;
		height: 50px;
	}
</style>
