<template>
	<view class="container bg-gray flex flex-column items-center">
		<view class="mt-20 card w-300 flex flex-column">
			<view class="flex justify-between">
				<image class="avatar" src="../../static/icons/checkin-active.png" mode=""></image>
				<!-- #ifdef H5 || MP-WEIXIN -->
					<tui-tabs class="toggle-btns" :tabs="tabs" :currentTab="currentTab" @change="change" width="120" height="60" itemWidth="33%"></tui-tabs>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
					name: "日"
				}, {
					name: "周"
				}, {
					name: "月"
				}],
				currentTab:0,
			};
		},
		methods:{
			change({index}){
				this.currentTab=index
			}
		}
	}
</script>

<style lang="scss" scoped>
.card{
	height: calc(100vh - 70px);
	min-height: 400px;
}
.avatar{
	width: 50px;
	height: 50px;
}
.toggle-btns{

}
</style>
