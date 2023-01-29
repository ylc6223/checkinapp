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
			</tui-list-view>
		</view>
		<view class="mt-20">
			<tui-list-view>
				<tui-list-cell v-for="(item,index) in wifiList" :key="index">
					<view class="flex justify-between items-center">
						<view>
							<view>{{item.name}}</view>
							<view>{{item.mac}}</view>
						</view>
						<view @click="delWifi($event,index)">
							<tui-icon name="close" size="24"></tui-icon>
						</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
		<!-- 确认删除操作 -->
		<tui-dialog :buttons="buttons" :show="visibleDialog" title="删除WIFI" @close="close" @click="buttonTap">
			<template v-slot:content>
				确认要删除吗？
			</template>
		</tui-dialog>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//包含确定和取消按钮
				buttons: [{
					text: '取消'
				}, {
					text: '确定',
					color: '#586c94'
				}],
				visibleDialog: false,
				wifiList: [{
						name: "Data-2G",
						mac: "94:D9:B3:8F:DB:FE"
					},
					{
						name: "Data-3G",
						mac: "94:D9:B3:8F:DB:FE"
					},
					{
						name: "Data-4G",
						mac: "94:D9:B3:8F:DB:FE"
					},
					{
						name: "Data-5G",
						mac: "94:D9:B3:8F:DB:FE"
					},
				],
				tobeDelIndex: 0, //将要被删除的wifi索引
			};
		},
		methods: {
			//删除打卡使用的wifi
			delWifi(event, index) {
				this.visibleDialog = !this.visibleDialog
				this.tobeDelIndex = index
			},
			//关闭dialog
			close() {

			},
			buttonTap({
				index,
				item
			}) {
				//取消
				if (!index) {
					this.visibleDialog = false
				}
				//确定
				else {
					this.wifiList = this.wifiList.filter((item1, index1) => {
						return this.tobeDelIndex !== index1
					})
					this.visibleDialog = false
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
