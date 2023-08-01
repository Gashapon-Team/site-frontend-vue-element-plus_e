<template>
<div class="flex justify-center">
    <el-card class="box-card relative">
        <router-link to="/validationInfo" class="router">
        <div class="handlevalidation flex justify-center items-center absolute cursor-pointer">
            <img src="../assets/image/admin_panel_settings.svg" />
            前往認證
        </div></router-link>
        <div class="validation__title">實名認證 (KYC)</div>
        <div class="validation__content">
            依據《第三方支付服務業防制洗錢及打擊資恐辦法》規定，藍新有義進行客戶身分調查 ...... 完成實名認證，請放心，身分資料僅用於 ......
        </div>
    </el-card>
</div>
</template>

<script>

</script>

<style scoped lang="scss">
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 1000px;
}

.validation{
    &__content{
        width: 80%;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.56px;
    }
    &__title{
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px; 
        letter-spacing: 0.8px;
    }
}

.handlevalidation{
    border-radius: 6px;
    background: var(--blue-800, #1E40AF);
    width: 118px;
    height: 36px;
    color:#fff;
    right: 20px;
}

.router{
    color:#FFFFFF;
}
</style>