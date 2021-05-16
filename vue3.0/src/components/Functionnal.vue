<script>
	import {h} from 'vue';
  function Model(props,context){
	  //pros:从父组件传过来的值
	  //context:上下文，其中包括 atrrs和emit
	  console.log(context);
	 return h(`h${props.level}`,context.attrs,context.slots);
  }
	// Model.props=['level'];
export default Model;
</script>


