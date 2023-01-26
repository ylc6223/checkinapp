<template>
	<view class="container">
		<view class="tui-page-title">登录</view>
		<view class="tui-form">
			<view class="tui-cell-text">
				<view hover-class="tui-opcity" :hover-stay-time="150">
					没有账号？
					<text class="tui-color-primary">注册</text>
				</view>
			</view>
			<view class="tui-btn-box">
				<!-- 				<tui-button :disabledGray="true" :disabled="disabled" :shadow="true" shape="circle" @click="login">一键登录
				</tui-button> -->
				<button type="primary" open-type="getPhoneNumber" @getphonenumber="login">一键登录</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				password: '',
				popupShow: false,
				openid: "",
				loginCode: "",
				code: "", //换取手机号所必须的登录凭证
			};
		},
		//页面加载时候进行登录拿到openid
		onLoad(options) {
			let that = this;
			wx.login({
				success(res) {
					if (res.code) {
						that.loginCode = res.code
						wx.request({
							url: 'http://test.5g-link.cn:9027/SysWechatOpen/snsOAuth2',
							method: "POST",
							data: {
								code: res.code
							},
							success(res1) {
								that.openid = res1.data.result
								wx.setStorage("openid", that.openid)
							}
						})
					}
				}
			})
		},
		methods: {
			//点击登录时候使用手机号进行登录，带上openid
			login(e) {
				let that = this;
				// console.log(e.detail.code)
				// #ifdef MP-WEIXIN
				wx.request({
					url: 'http://test.5g-link.cn:9027/sysWechatUser/PhoneCodeLogin',
					method: "POST",
					data: {
						"phoneCode": e.detail.code,
						"openId": that.openid
					},
					success(res1) {
						console.log(res1);
						wx.switchTab({
							url: "/pages/index/index"
						})
					}
				})
				// #endif
			}
		}
	};
</script>

<style lang="scss">
	.container {
		.tui-status-bar {
			width: 100%;
			height: var(--status-bar-height);
		}

		.tui-header {
			width: 100%;
			padding: 40rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
		}

		.tui-page-title {
			width: 100%;
			font-size: 48rpx;
			font-weight: bold;
			color: $uni-text-color;
			line-height: 42rpx;
			padding: 40rpx;
			box-sizing: border-box;
		}

		.tui-form {
			padding-top: 50rpx;

			.tui-view-input {
				width: 100%;
				box-sizing: border-box;
				padding: 0 40rpx;

				.tui-cell-input {
					width: 100%;
					display: flex;
					align-items: center;
					padding-top: 48rpx;
					padding-bottom: $uni-spacing-col-base;

					input {
						flex: 1;
						padding-left: $uni-spacing-row-base;
					}

					.tui-icon-close {
						margin-left: auto;
					}
				}
			}

			.tui-cell-text {
				width: 100%;
				padding: $uni-spacing-col-lg $uni-spacing-row-lg;
				box-sizing: border-box;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-grey;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.tui-color-primary {
					color: $uni-color-primary;
				}
			}

			.tui-btn-box {
				width: 100%;
				padding: 0 $uni-spacing-row-lg;
				box-sizing: border-box;
				margin-top: 80rpx;
			}
		}

		.tui-login-way {
			width: 100%;
			font-size: 26rpx;
			color: $uni-color-primary;
			display: flex;
			justify-content: center;
			position: fixed;
			left: 0;
			bottom: 80rpx;

			view {
				padding: 12rpx 0;
			}
		}
	}
</style>
