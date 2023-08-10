<template>
<div class="container">
    <!-- <div class="logo-brand"><img class=""  src="../../src/assets/image/newebPay.svg" /></div> -->
    <div class="container__content">
        <div class="container__content__item flex-4 timeCount">600秒自動登出</div>
        <div class="container__content__item flex-1"><img  src="../../assets/image/notifications_none.svg"></div>
        <div class="container__content__item flex-1" ><img  src="../../assets/image/help_outline.svg"></div>
    </div>
    <div>
        <el-menu
            :default-active="'1'"
            :ellipsis="false"
            mode="horizontal"
        >
            <el-sub-menu index="1">
                <template #title>智慧家居公司</template>
                <el-menu-item index="1-1">item</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</div>
</template>

<script>

</script>

<style scoped lang="scss">
.el-menu--horizontal {
    border-bottom: 0px solid transparent;
    background: transparent;
}

:deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) {
    color:#3B82F6;
    font-weight: 700;
    border-left: 1px solid #E5E7EB;
    height: 20px;
    font-size: 16px;
}
</style>