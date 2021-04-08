<template>
  <div class="department_main">
    <div class="title" style="margin-top: -10px;padding-bottom: 20px;">
    <i class="el-icon-guide"></i>
    <span>课外时光</span>
    </div>
      <div class="department">
        <top :modification="department.modification" :name="department.name" :list="departmentlist"></top>
        <top :modification="association.modification" :name="association.name" :list="associationlist"></top>
        <top :modification="hot" :list="hoslist"></top>
    </div>
  </div>
</template>

<script>
  import top from './Top.vue';
  export default{
    name:'department',
    data:function(){
      return {
          department:{name:'部门',modification:'department'},
          association:{name:'协会',modification:'association'},
          hot:"hot",
          departmentlist:this.$attrs.departmentlist,
          associationlist:this.$attrs.associationlist,
          hoslist:this.$attrs.hotlist
      }
    },
    created() {
      console.log(this.$attrs);
    },
    components:{
      top
    },
  }
</script>

<style lang="less" scoped="scoped">
</style>
