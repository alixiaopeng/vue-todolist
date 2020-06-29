new Vue({
	el: "#app",
	data: {
		editMaskFlag: false,
		deleteMaskFlag: false,
		activeIndex: 0,
		inputBoxVal: "",
		todos: [],
		newTodos: [],
		allFlag: true,
		finishFlag: false,
		UnFinishFlag: false,
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
		showDeleteTipsMask(index) {
			this.deleteMaskFlag = true;
			//将当前元素索引值赋给activeIndex
			this.activeIndex = index;
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
				flag: false,
			});
			this.newTodos = this.todos;
			// 将输入框清空
			this.inputBoxVal = "";
			// 隐藏添加信息弹出框
			this.hideEditMask();
		},

		/**
		 * 删除信息
		 */
		remove(index) {
			this.todos.splice(index, 1);
			this.newTodos = this.todos;
			this.hideDeleteTipsMask();
		},

		/**
		 * 改变当前一项的flag，来改变选中按钮的状态
		 */
		changeFlag(index) {
			this.todos[index].flag = !this.todos[index].flag;
		},

		/**
		 * 点击所有按钮
		 */
		checkedAll() {
			this.newTodos = this.todos;
			this.allFlag = true;
			this.finishFlag = false;
			this.UnFinishFlag = false;
		},

		/**
		 * 点击完成按钮
		 */
		checkedFinish() {
			this.newTodos = this.todos.filter((item) => item.flag);
			this.allFlag = false;
			this.finishFlag = true;
			this.UnFinishFlag = false;
		},

		/**
		 * 点击未完成按钮
		 */
		checkedUnFinish() {
			this.newTodos = this.todos.filter((item) => !item.flag);
			this.allFlag = false;
			this.finishFlag = false;
			this.UnFinishFlag = true;
		},
	},
});
