<template>
<el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs validation_container">
    <el-tab-pane label="User"></el-tab-pane>
    <el-tab-pane label="Config"></el-tab-pane>
    <el-tab-pane label="Role"></el-tab-pane>
    <el-tab-pane label="Task"></el-tab-pane>
</el-tabs>
</template>

<script>
import { ref } from 'vue';

export default {
    name:'leftTab',
    setup(){
        const tabPosition = ref('left')

        return{
            tabPosition
        }
    }

}
</script>

<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    background-color:#fbfcfd;
    height:100vh !important
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
    height: 100%;
}
</style>
