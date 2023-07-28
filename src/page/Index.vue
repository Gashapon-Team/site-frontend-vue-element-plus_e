<template>
<div class="common-layout">
    <el-container style="height:100vh">
        <el-aside>
            <AdminSideMenu/>
        </el-aside>
        <el-container class="admin-cotainer">
        <el-header class="admin-header">
            <AdminHeader/>
        </el-header>
            <el-main style="background-color: #F7F8FC;"><router-view class="p-3"></router-view></el-main>
            <el-footer><AdminFooter/></el-footer>
        </el-container>
    </el-container>
</div>
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue';
import AdminSideMenu from '../components/AdminSideMenu.vue';
import DatePicker from '../components/DatePicker.vue';
import AdminFooter from '../components/AdminFooter.vue';

export default {
    name:'index',
    components:{
        AdminHeader,
        AdminSideMenu,
        DatePicker,
        AdminFooter
    },
    setup() {
        
    },
}
</script>

<style scoped>
.admin-header{
    box-shadow: 0px 2px 2px -1px rgba(27, 36, 44, 0.04);
}

.el-header{
    --el-header-padding: 0 30px
}
</style>
