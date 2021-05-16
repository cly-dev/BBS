<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Model></Model>
  <h1>{{name}}</h1>
  <Emait @click="Onlick" @tis="Ontis"></Emait> -->
  <ul>
    <li>
      <navlink to="/hello"></navlink>

      <!-- <router-link to="/hello"></router-link> -->
    </li>
      <li>
          <navlink to="/about"></navlink>

    </li>
      <li>
          <navlink to="/about/info"></navlink>

    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
import navlink from './components/Navlink.vue';
import HelloWorld from './components/HelloWorld.vue'
import Model from "./components/model.vue"
import Emait from "./components/Emait.vue"


export default {
  name: 'App',
  setup(){
	function Onlick(){
	  		console.log("我被点击了");
	  };
	 function Ontis(){
		
	 }
	 return {Onlick,Ontis}
  },
  methods:{
	 
  },
  components: {
    HelloWorld,
	Model,
  Emait,
  navlink

  }
}
</script>
