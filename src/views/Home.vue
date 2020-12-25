<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <p>数据回显{{params.status}}</p>
    <p>computed {{pageCount}}</p>
  </div>
</template>

<script lang="ts">
  import { Component} from "vue-property-decorator";
  //引入js
  import home from '@/assets/js/home/index';
  export default class Home extends Component(home) {} 
</script>
