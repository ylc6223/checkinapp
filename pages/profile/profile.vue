<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			formatDate(date) {
				return `${date.getMonth() + 1}/${date.getDate()}`;
			},
			onConfirm(date) {
				this.show = false;
				this.date = this.formatDate(date);
			},
		}
	}
</script>

<style lang="scss">

</style>
