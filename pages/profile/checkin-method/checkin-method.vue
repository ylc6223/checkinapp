<template>
	<view class="container bg-gray flex flex-column">
		<view class="mt-20">
			<tui-list-view>
				<tui-list-cell :arrow="true" @click="navTo">
					地点打卡
				</tui-list-cell>
				<tui-list-cell :arrow="true">
					WIFI打卡
				</tui-list-cell>
				<tui-list-cell :arrow="true">
					其他
				</tui-list-cell>
			</tui-list-view>
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
			navTo({
				index
			}) {
				switch (index) {
					case 0:
					uni.navigateTo({
						url: "/pages/profile/location/location"
					})
						break
					default:
						break
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
