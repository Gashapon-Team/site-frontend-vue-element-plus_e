<template>
<div class="container">
    <!-- <div class="logo-brand"><img class=""  src="../../src/assets/image/newebPay.svg" /></div> -->
    <div class="mr-5">600秒自動登出</div>
    <div class="header-other mr-5">
        <div><img class="mr-5"  src="../../assets/image/notifications_none.svg"></div>
        <div><img class=""  src="../../assets/image/icon_Help.svg"></div>
    </div>
    <div>
        <el-menu
            :default-active="'1'"
            :ellipsis="false"
            mode="horizontal"
        >
            <el-sub-menu index="1" calss="companyName">
                <template #title>智慧家居公司</template>
                <el-menu-item index="1-1">item</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</div>
<!-- <el-page-header :icon="null"> -->

    <!-- <template #default>
        <span class="text-large font-600 mr-3"> Title </span>
    </template> -->
<!-- </el-page-header> -->
</template>

<script>

</script>

<style scoped lang="scss">
.companyName{
    height: 30px;
    border-bottom: 0;
}

.el-menu--horizontal {
    border-bottom: 0px solid transparent;
    background: transparent;
}

:deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) {
    color:#1E40AF;
    font-weight: 700;
    border-left: 1px solid #E5E7EB;
    height: 20px;
}
</style>