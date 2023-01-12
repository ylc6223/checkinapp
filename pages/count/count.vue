<template>
	<view class="container bg-gray flex flex-column items-center">
		<view class="mt-20 card w-300 flex flex-column">
			<!-- head -->
			<view class="flex justify-between items-center">
				<image class="avatar" src="../../static/icons/checkin-active.png" mode=""></image>
				<view class="names flex-1">
					<text class="block">Jerry</text>
					<text class="block">研发部</text>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<!-- #endif -->
				<view class="flex bg-gray date-selector">
					<view v-for="(item,index) in tabs" :key="index" class="flex-1 flex justify-center items-center date-selector-item" :class="{active:curSelectorIndex==index}" @click="select($event,index)">
						<text>{{item.label}}</text>
					</view>
				</view>
			</view>
			<!-- content -->
			<!-- 按日期展示 -->
			<view class="mt-20">
				<view class="timesbox">
					<text>2023</text>
					<text>&nbsp;|&nbsp;</text>
					<text>01.12</text>
				</view>
				<zsyCalendar :sundayIndex="6" @change="change"/>
			</view>
			<!-- 按周展示 -->
			<view v-show="false"></view>
			<!-- 按月份展示 -->
			<view v-show="false"></view>
		</view>
	</view>
</template>

<script>
// https://ext.dcloud.net.cn/plugin?id=7307 日历组件链接
import zsyCalendar from '@/components/zsy-calendar/zsy-calendar'
	export default {
		components:{
			zsyCalendar
		},
		data() {
			return {
				curSelectorIndex:0,	//当前0表示默认按单日展示
				tabs:[
					{
						label:"日"
					},
					{
						label:"周"
					},
					{
						label:"月"
					}
				],

			};
		},
		methods:{
			//点击按日周月按钮时触发
			select(e,index){
				console.log(index);
				this.curSelectorIndex=index
			},
			// 日历选中日期改变事件回调
			change(e) {
				console.log(e)
			}
			// formatDate(date) {
			// 	return `${date.getMonth() + 1}/${date.getDate()}`;
			// },
			// onConfirm(date) {
			// 	this.show = false;
			// 	this.date = this.formatDate(date);
			// },
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped>
.calendar_container {

}
.card{
	height: calc(100vh - 140rpx);
	min-height: 800rpx;
}
.avatar{
	width: 100rpx;
	height: 100rpx;
}
.names{
	margin-left: 10px;
	margin-right: 20px;
}
.date-selector{
	max-width: 280rpx;
	max-height: 70rpx;
	border-radius: 8px;
}
.date-selector-item{
	margin: 10rpx;
	border-radius: 4px;
}
.date-selector-item text{
	padding: 20rpx;
}
.date-selector-item.active{
	background-color: #FFF;
}

</style>
