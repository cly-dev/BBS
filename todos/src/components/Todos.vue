<template>
  <input autofocus autocomplete="off" placeholder="请输入代办事项" @keyup.enter="confirmThing" v-model="info"/>
  <ul>
      <li v-for="(value,key) in list" :key="value.id" :class="{complated:value.complate,editoring:value=== editorTode }">
      <!--绑定完成状态 -->
      <div class="view">
          <input type="checkbox" v-model="value.complate">
           <label @dblclick="Editoring(value)"> {{key + 1}} {{value.info}}</label>
           <button @click="deteleinfo(key)">X</button>
      </div>
      <div class="editor">
        <input type="text"
        v-focus='value === editorTode'
        v-model="value.info"
        @blur="doneEditor(value)"
        @keyup.enter="doneEditor(value)"
        @keyup.exact="cancelEditor(value)"
        />
      </div>
        </li>
  </ul>
</template>

<script>
import {reactive,toRefs,onMounted} from 'vue';
export default {
    setup(){
        const todos = reactive({
            info:'',
            list:[],
            beforeEditor:'',
            editorTode:null
        })
        function confirmThing(){
            todos.list.push({
                id:todos.list.length + 1,
                info:todos.info,
                time:new Date().getDay(),
                complate:false,
            });
            todos.info="";
        };
        function deteleinfo(key){
            todos.list.splice(key,1);
            localStorage.setItem('task',todos.list);
        };
        function doneEditor(value){
             todos.editorTode=null;
        }

        function Editoring(value){
            todos.editorTode=value;
            console.log(value);
        }
        function cancelEditor(value){ 
        }
        onMounted(()=>{
               
            })
        return{
            ...toRefs(todos),
            confirmThing,
            deteleinfo,
            doneEditor,
            Editoring,
            cancelEditor
        }
    },
    //自定义组件
    directives:{
        "focus":(el,{value})=>{
            if(value){
                el.focus();
            }
        }
    }
}
</script>

<style>
.complated label{   
    text-decoration: line-through;

}
.editoring .view,.editor{
    display:none;
}
.editoring .editor,.view{
    display:block;
}

</style>