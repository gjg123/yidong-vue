Vue.component("navigation",{
	props:["leftImg","leftPath","title","rightImg","rightPath"],
	data:function(){
		return {
			innerRightPath:""
		}
	},
		
	
	template:'<div class="navigation"> \
				<div class="nav-left"> \
					<a v-bind:href="leftPath"><img v-bind:src="leftImg"/></a> \
				</div> \
				<div class="nav-title"> \
					{{title}} \
				</div> \
				<div class="nav-right"> \
					<a v-bind:href="innerRightPath"><img v-bind:src="rightImg"/></a> \
				</div> \
			</div>',
			/*实例或组件初始化执行的函数*/
			created:function(){
/*//				修改导航栏组件里面    rightPath里面的值   重新用新的定义的变量来代替*/
				this.innerRightPath = this.$props.rightPath;
				/*如果导航栏里的路径也就是登陆框的路径没被定义  */
				if(this.$props.rightPath == undefined){
//					就让他跳到登陆页面
					this.innerRightPath = "login.html"
				}
			/*	如果是登陆状态就跳到用户主页*/
				if(localStorage.isLogin){
					this.innerRightPath = "user.html"
				}
			}
})
