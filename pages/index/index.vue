<template>
	<view class="container bg-gray flex flex-column items-center">
		<view class="mt-20 card w-300 flex items-center">
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

		<view class="mt-20 h-full card w-300 flex flex-column">
			<view class="checkin-states flex justify-between">
				<view class="flex-1 flex flex-column bg-gray rounded-md p-10">
					<text>上班09:00</text>
					<text>未打卡</text>
				</view>
				<view class="flex-1 flex flex-column bg-gray rounded-md p-10">
					<text>下班18:00</text>
					<text>未打卡</text>
				</view>
			</view>

			<!-- 打卡操作 -->
			<view class="checkin-btn mx-auto rounded-full flex flex-column justify-center items-center">
				<text class="text-white">下班打卡</text>
				<text>15:36:03</text>
			</view>
			<!-- 打卡tips -->
			<view class="tips mx-auto">
<!-- 				<text class="icon">&#xe72d;</text>
				<text>已进入考勤范围:深蓝工业园</text> -->
				<text class="mt-20 block" style="font-size: 12px;color:red">准时打卡不迟到，即可获得5元现金红包</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				iconType: ['success'],
			}
		},
		onLoad() {
			// #ifdef APP-PLUS|| MP-WEIXIN
			this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search',
				'clear'
			]
			// #endif
			// #ifdef MP-ALIPAY
			this.iconType = ['info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear', 'success',
				'success_no_circle', 'loading'
			]
			// #endif
			// #ifdef MP-BAIDU
			this.iconType = ['success', 'info', 'warn', 'waiting', 'success_no_circle', 'clear', 'search', 'personal',
				'setting', 'top', 'close', 'cancel', 'download', 'checkboxSelected', 'radioSelected', 'radioUnselect'
			]
			// #endif
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.avatar {
		width: 50px;
		height: 50px;
	}

	.names {
		margin-left: 10px;
		margin-right: 20px;
	}

	.action-btn {
		width: 50px;
		height: 50px;
	}

	.card:last-child {
		height: calc(100vh - 160px);
		min-height: 400px;
	}

	.checkin-states>view:first-child {
		margin-right: 5px;
	}

	.checkin-states>view:last-child {
		margin-left: 5px;
	}

	.checkin-btn {
		width: 150px;
		height: 150px;
		margin-top: 40px;
		box-shadow: 0 4px 10px -1px rgba(185, 147, 214, 1), 0 2px 8px -2px rgba(140, 166, 219, 1);
		background: #00d2ff;
		/* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #3a7bd5, #00d2ff);
		/* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #3a7bd5, #00d2ff);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	.tips {
		margin-top: 20px;
	}
</style>
