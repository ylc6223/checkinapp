<template>
	<view class="container bg-gray">
		<text class="flex justify-center">规则1:每周一至周六09:00-17:30</text>
		<view class="card w-300 mx-auto">
			<tui-list-view unlined="top">
				<tui-list-cell :hover="false" :index="0" :unlined="true">
					<view>
						<view class="flex">
							<text>星期</text>
							<checkbox-group class="flex">
								<checkbox v-for="(item,index) in checkboxItems" :key="index" :checked="item.checked"
									:value="item.value" color="#f8683c" borderColor="#999" :id="'index'+index">
								</checkbox>
							</checkbox-group>
						</view>
						<view class="flex">
							<label v-for="(item,index) in checkboxItems" :for="'index'+index">
								<view class="flex justify-center items-center"
									style="background-color: antiquewhite;width: 50rpx;height: 50rpx;border-radius: 50%;">
									<text>{{item.name}}</text>
								</view>
							</label>
						</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :index="0" :unlined="true" :arrow="true">
					<view class="flex justify-start items-center">
						<tui-icon name="add" color="#3498db" size="24"></tui-icon>
						<view class="tui-list-cell_name">新增考勤组</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkboxItems: [{
						name: '一',
						value: '1',
						checked: true
					},
					{
						name: '二',
						value: '2',
						checked: false
					},
					{
						name: '三',
						value: '3',
						checked: false
					},
					{
						name: '四',
						value: '3',
						checked: false
					},
					{
						name: '五',
						value: '3',
						checked: false
					},
					{
						name: '六',
						value: '3',
						checked: false
					}, {
						name: '日',
						value: '3',
						checked: false
					}
				]
			};
		}
	}
</script>

<style lang="scss">

</style>
