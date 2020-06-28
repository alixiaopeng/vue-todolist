new Vue({
	el: "#app",
	data: {
		editMaskFlag: false,
		deleteMaskFlag: false,
		inputBoxVal: "",
		todos: [],
	},
	methods: {
		/**
		 * 显示添加信息弹出框
		 */
		showEditMask() {
			this.editMaskFlag = true;
		},

		/**
		 * 隐藏添加信息弹出框
		 */
		hideEditMask() {
			this.editMaskFlag = false;
		},

		/**
		 * 显示删除信息弹出框
		 */
		showDeleteTipsMask() {
			this.deleteMaskFlag = true;
		},

		/**
		 * 隐藏删除信息弹出框
		 */
		hideDeleteTipsMask() {
			this.deleteMaskFlag = false;
		},

		/**
		 * 将数据保存在localStorage中
		 */
		setStore(name, data) {
			localStorage.setItem(name, JSON.stringify(data));
		},

		/**
		 * 添加信息
		 */
		add() {
			// 如果输入为空，提示用户
			if (this.inputBoxVal == "") {
				alert("输入不能为空");
			}
			// 将用户输入的信息存放在数组todos中
			this.todos.push({
				id: this.todos.length + 1,
				task: this.inputBoxVal,
			});
			// 将输入框清空
			this.inputBoxVal = "";
			// 隐藏添加信息弹出框
			this.hideEditMask();
		},
	},
});
