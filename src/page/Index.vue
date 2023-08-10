<template>
<div class="common-layout">
    <el-container style="height:100vh">
            <el-aside>
                <SideMenu/>
            </el-aside>
            <el-container class="admin-cotainer">
                <el-header class="admin-header">
                    <AdminHeader/>
                </el-header>
                <el-main style="background-color: #F7F8FC;">
                    <router-view class="p-3"></router-view>
                </el-main>
                <el-footer>
                    <AdminFooter/>
                </el-footer>
            </el-container>
    </el-container>
</div>
</template>

<script>
import AdminHeader from '../components/layout/AdminHeader.vue';
import SideMenu from '../components/layout/SideMenu.vue';
// import DatePicker from '../components/DatePicker.vue';
import AdminFooter from '../components/layout/AdminFooter.vue';

export default {
    name:'index',
    components:{
        AdminHeader,
        SideMenu,
        // DatePicker,
        AdminFooter
    },
    setup() {
        
    },
}
</script>

<style scoped>
.admin-header{
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}

.el-header{
    --el-header-padding: 0 30px;
}

.el-footer{
    height: 60px;
}

.el-container{
    min-width: 540px;
}
</style>
