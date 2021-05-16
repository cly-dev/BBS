import Vue from "vue";
//Vue.observable()类似于vuex,可以储存属性的状态 小项目可用
export const state=Vue.observable({
		count:0,
		name:'阿勇'
})
export const mutations=Vue.observable({
		setCount(){
			state.count++;
		},
		setName(name){
			state.name=name;
		}
	})
