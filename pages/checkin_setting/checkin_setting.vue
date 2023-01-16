<template>
	<tui-list-view>
		<tui-list-cell :index="0" :arrow="true" @click="navTo">
			<view>
				<text>新增考勤组</text>
			</view>
		</tui-list-cell>
		<tui-list-cell :index="1" :arrow="true" @click="navTo">
			<view>
				<text>修改考勤组</text>
			</view>
		</tui-list-cell>
		<tui-list-cell :index="2">
			<view class="flex">
				<text class="flex-1">当前考勤组</text>

				<tui-dropdown-list class="flex" :show="dropdownShow" :top="94" :height="400">
					<template v-slot:selectionbox>
						<block @click="dropDownList(-1)" class="selectionbox flex items-center">
							<text>{{curGroup}}</text>
							<tui-icon class="inline-block" name="turningdown" :size="20"></tui-icon>
						</block>
					</template>
					<template v-slot:dropdownbox>
						<view class="dropdownbox">
							<scroll-view scroll-y>
								<tui-radio-group>
									<tui-label v-for="(item,index) in dropdownlistData" :key="index">
										<block>
											<tui-list-cell backgroundColor="#ecf0f1" class="flex" padding="0"
												@click="dropDownList(index)" :unlined="false">
												<view class="dropdownlist-item p-10">
													<tui-radio checked="item.checked" value="item.label"
														color="#07c160" borderColor="#999">
													</tui-radio>
													<text>{{item.label}}</text>
												</view>
											</tui-list-cell>
										</block>

									</tui-label>
								</tui-radio-group>
<!-- 								<tui-radio-group>
									<block v-for="(item,index) in dropdownlistData" :key="index">
										<tui-list-cell backgroundColor="#ecf0f1" class="flex" padding="0"
											@click="dropDownList(index)" :unlined="false">

										</tui-list-cell>
									</block>
								</tui-radio-group> -->
							</scroll-view>
						</view>
					</template>
				</tui-dropdown-list>

			</view>
		</tui-list-cell>
	</tui-list-view>
</template>

<script>
	export default {
		data() {
			return {
				dropdownShow: false,
				curGroup:"考勤组1",
				dropdownlistData: [{
						label: "考勤组1",
						checked: true
					},
					{
						label: "考勤组2",
						checked: false
					},
				]
			};
		},
		methods: {
			navTo(obj) {
				const {
					index
				} = obj
				switch (index) {
					case 0:
						// 新增考勤组
						uni.navigateTo({
							url: "checkin-edit/checkin-edit"
						})
						break;
					case 1:
						//修改考勤组
						uni.navigateTo({
							url: "checkin-edit/checkin-edit"
						})
						break;
					case 2:
						break;
					default:
						break
				}
			},
			dropDownList(index) {
				if (index !== -1) {
					this.tui.toast("index：" + index)
				}
				this.dropdownShow = !this.dropdownShow
			},
		}
	}
</script>

<style lang="scss" scoped>
	.selectionbox {
		min-width: 250rpx;
		display: flex;
		justify-content: flex-end;

		tui-icon {}
	}

	tui-list-cell .dropdownlist-item {
		display: inline-block;
		width: 100%;
		font-size: 14px;
	}
</style>
