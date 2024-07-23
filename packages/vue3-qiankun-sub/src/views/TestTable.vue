<template>
    <div>
        <h3>测试mock API&表格</h3>

    </div>
</template>

<script setup lang="ts">
import request from '@/config/request';
import { onMounted, ref } from 'vue'

onMounted(() => {
    request.get('/elder/list/').then((res: any) => {
        console.log("mock api test::", { result: res.data });
    })
})
</script>

<style scoped></style>
