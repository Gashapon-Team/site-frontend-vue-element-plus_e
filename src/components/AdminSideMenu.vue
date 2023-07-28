<template>
    <el-row class="tac">
        <el-col class="sideMenuContainer">
            <div class="sideMenuContainer__hamburger">
                <img src="../assets/image/NewebPay_Logo.svg" />
            </div>
            <el-menu 
            default-active="2" 
            text-color="#fff"
            class="el-menu-vertical-demo side-menu" 
            active-text-color="#00000"
            @open="handleOpen" 
            @close="handleClose">
                <el-sub-menu index="1" class="side-menu__item">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>會員中心</span>
                    </template>
                    <!-- <el-menu-item-group title="Group One"> -->
                    <router-link class="text-white" to="/infoSetting">
                        <el-menu-item index="1-1">
                            基本資料設定
                        </el-menu-item>
                    </router-link>
                    <router-link class="text-white" to="/kFCValidation">
                        <el-menu-item index="1-2">
                            實名認證(KYC)
                        </el-menu-item>
                    </router-link>
                    <!-- </el-menu-item-group> -->
                    <!-- <el-menu-item-group title="Group Two"> -->
                        <el-menu-item index="1-3">item three</el-menu-item>
                    <!-- </el-menu-item-group> -->
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="2" class="side-menu__item">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>Navigator two</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="2-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

export default{
    name:'collaspe',
    components:{
        Document,
        Location,
        Setting,
        IconMenu,
    },
    setup(){
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath)
        }


        return{
            handleOpen,
            handleClose,
        }

    }
}

</script>

<style lang="scss" scoped>
.side-menu {
    min-height: 100vh;
    // background: linear-gradient(11.83deg, #112B7D -26.54%, #485C9D 91.28%);
    background: linear-gradient(205deg, #3B82F6 -36.4%, 
    #397EF2 -31.69%, #377AED -26.99%,
    #3676E9 -22.29%, #3472E4 -17.58%,
    #326DE0 -12.88%, #3069DB -8.18%,
    #2E65D7 -3.48%, #2D61D3 1.23%, 
    #2B5DCE 5.93%, #2959CA 10.63%, 
    #2755C5 15.34%, #2551C1 20.04%, 
    #234CBC 24.74%, #2248B8 29.45%, #2044B3 34.15%, #1E40AF 38.85%);
    padding-top: 50px;
    &__item{
        padding: 10px;
    }
}

.el-menu-item:hover{
    background-color:#397EF2 !important;
    color:#ffffff;
}

.sideMenuContainer{
    position: relative;
    &__hamburger{
        position: absolute;
        z-index: 999;
        left: 5px;
        img{
            padding:24px 32px 24px 32px
        }
    }
}

:deep .el-menu{
    background-color:inherit;
}

.text-white{
    color:#FFFFFF;
}
</style>
