<template>
    <div class="common-layout">
        <el-container>
            <el-header><AdminHeader/></el-header>
            <el-container class="validation_container">
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>
                        <Process/>
                        <div class="">
                            <div class="title">實名認證 (KYC)</div>
                            <div class="title__description">依據《第三方支付服務業防制洗錢及打擊資恐辦法》規定，藍新有義進行客戶身分調查 ...... 完成實名認證，請放心，身分資料僅用於 ......</div>
                            <el-card class="box-card">
                                <AdminForm/>
                            </el-card>
                        </div>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
  

<script>
import Process from '../components/Process.vue';
import AdminHeader from '../components/AdminHeader.vue';
import AdminForm from '../components/AdminBasicForm.vue'

export default {
    name: 'validation',
    components: {
        Process,
        AdminHeader,
        AdminForm
    }
}



</script>

<style lang="scss" scoped>
.validation_container{
    background-color:#fbfcfd;
    height:100vh
}

.title{
    color: var(--gray-800, #1F2937);
    font-size: 20px;
    font-weight: 700;
    line-height: 28px; /* 140% */
    letter-spacing: 0.8px;
    &__description{
        color: var(--gray-600, #4B5563);
        margin: 20px 0;
    }
}

</style>
