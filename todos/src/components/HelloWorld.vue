<template>
  <Todos></Todos>
</template>

<script>
import Todos from './Todos.vue'
export default {
  components: { Todos },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
