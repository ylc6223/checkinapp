<template>
	<view class="container bg-gray">
		<text class="flex justify-center p-10">规则1:每周一至周六09:00-18:00</text>
		<view class="card w-300 mx-auto mt-20">
			<tui-list-view unlined="top">
				<tui-list-cell :hover="false" :index="0" :unlined="true">
					<view class="flex items-center">
						<view class="flex">
							<text>星期</text>
							<checkbox-group class="flex" @change="checkboxChange">
								<checkbox v-for="(item,index) in checkboxItems" :key="index" :checked="item.checked"
									:value="item.value" color="#f8683c" borderColor="#999" class="hidden"
									:id="'index'+index">
								</checkbox>
							</checkbox-group>
						</view>
						<view class="flex justify-evenly">
							<label v-for="(item,index) in checkboxItems" :for="'index'+index" :key="index">
								<view class="flex justify-center items-center circle"
									:class="{'circle-checked':item.checked}">
									<text>{{item.name}}</text>
								</view>
							</label>
						</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="0" :unlined="true" :hover="false" :arrow="true" @click="showPicker">
					<view class="flex items-center">
						<text>上下班时间</text>
						<text style="margin-left: 20rpx;">{{time}}</text>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
		<view class="card w-300 mx-auto mt-20">
			<tui-list-view unlined="top">
				<tui-list-cell v-for="item in 10" :key="item" :index="item" :unlined="true" :hover="false"
					:arrow="false">
				</tui-list-cell>
			</tui-list-view>
		</view>
		<time-picker ref="timePicker" :title="'选择时间段'" @confirm="confirmTime"></time-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkboxItems: [{
						name: '一',
						value: 0,
						checked: false
					},
					{
						name: '二',
						value: 1,
						checked: false
					},
					{
						name: '三',
						value: 2,
						checked: false
					},
					{
						name: '四',
						value: 3,
						checked: false
					},
					{
						name: '五',
						value: 4,
						checked: false
					},
					{
						name: '六',
						value: 5,
						checked: false
					}, {
						name: '日',
						value: 6,
						checked: false
					}
				],
				time: "",
			};
		},
		methods: {
			showPicker() {
				this.$refs.timePicker.open()
			},
			//确认
			confirmTime(e) {
				console.log(e)
				this.time = e.start.hour + ":" + e.start.min + "~" + e.end.hour + ":" + e.end.min
			},
			checkboxChange({
				detail
			}) {
				const items = JSON.parse(JSON.stringify(this.checkboxItems))
				const values = detail.value
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false

					for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true
							break
						}
					}
				}
				this.checkboxItems = items
			}
		}
	}
</script>

<style lang="scss" scoped>
	.circle {
		width: 65rpx;
		height: 65rpx;
		margin: 0 5rpx;
		border-radius: 50%;
		color: #3498db;
		background-color: #FFF;
		border: 1px solid #3498db;
	}

	.circle-checked {
		background-color: #3498db;
		color: #FFF;
	}
</style>
