<script setup lang="ts">
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import '@/mock'; // 导入Mock数据
import TestTable from './views/TestTable.vue'
import HelloWorld from './components/HelloWorld.vue'

console.log('from App.vue:: ', { __POWERED_BY_QIANKUN__: qiankunWindow.__POWERED_BY_QIANKUN__ })
</script>

<template>
  <div class="root-container">
    <div>

      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>


    <!-- <div>
      <HelloWorld msg="Vite + Vue" />

    </div> -->

    <div>Vue子应用</div>

    <test-table />


    <div>
      <router-link to="/cat">cat</router-link>|
      <router-link to="/dog">dog</router-link>
    </div>
  </div>

  <div>

    <router-view></router-view>
  </div>


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.root-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f9fafb;

}
</style>
