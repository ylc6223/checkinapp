<template>
	<view class="container bg-gray flex flex-column">
		<view class="mt-20">
			<tui-list-view>
				<tui-list-cell @click="navTo">
					<template v-slot:default>
						<view class="flex justify-between items-center">
							<text>WIFI打卡</text>
							<tui-switch @change="change"></tui-switch>
						</view>
					</template>
				</tui-list-cell>
				<tui-list-cell @click="addLocation">
					添加+
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
		}
	}
</script>

<style lang="scss">

</style>
