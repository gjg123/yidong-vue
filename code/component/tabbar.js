/*
Vue.component("tabbr",{
	props:["activeIndex"],
	template:'<div class="tabbr"> \
				<ul> \
					<a href="index.html"> \
						<li id="main" v-bind:class="{active:activeIndex==0}"> \
							<span></span> \
						<span>首页</span> \
						</li> \
					</a> \
					<a href="index.html"> \
						<li id="read" v-bind:class="{active:activeIndex==1}"> \
							<span></span> \
							<span>阅读</span> \
						</li> \
					</a>
					<a href="index.html"> \
						<li id="music" v-bind:class="{active:activeIndex==2}"> \
							<span></span> \
							<span>音乐</span> \
						</li> \
					</a> \
					<a href="index.html"> \
						<li id="movie" v-bind:class="{active:activeIndex==3}"> \
							<span></span> \
							<span>影视</span> \
						</li> \
					</a> \
				</ul> \
				
			</div>'
})
*/


Vue.component("tabbar",{
	props:['activeIndex'],
	template:'<div class="tabbar"> \
				<ul> \
					<a href="index.html"><li id="main" v-bind:class="{active:activeIndex==0}"> \
						<span></span> \
						<span class="kk">首页</span> \
					</li></a> \
					<a href="read.html"><li id="read" v-bind:class="{active:activeIndex==1}"> \
							<span></span> \
							<span>阅读</span> \
					</li></a> \
					<a href="music.html"><li id="music"  v-bind:class="{active:activeIndex==2}"> \
							<span></span> \
							<span>音乐</span> \
					</li></a> \
					<a href="movie.html"><li id="movie"  v-bind:class="{active:activeIndex==3}"> \
							<span></span> \
							<span>影视</span> \
					</li></a> \
				</ul> \
			</div>'
})
