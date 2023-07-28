<template>
    <div class="sideMenuContainer">
        <div class="sideMenuContainer__hamburger">
            <Hamgburger @click="isCollapse = !isCollapse" />
        </div>
        <div>
            <el-menu 
            default-active="2" 
            class="el-menu-vertical-demo side-menu" 
            text-color="#fff"
            :collapse="isCollapse" 
            @open="handleOpen" 
            @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>金流管理</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>Group One</span></template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>物流管理</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>電子發票</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>會員中心</template>
            </el-menu-item>
        </el-menu>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import Hamgburger from '../components/Hamgburger.vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'


export default {
    name: 'index',
    components: {
        Document,
        Location,
        Setting,
        IconMenu,
        Hamgburger
    },
    setup() {
        const isCollapse = ref(true)
        let collapseCount = ref(0);
        const handleOpen = (key, keyPath) => {
            console.log('1',key, keyPath)
        }
        const handleClose = (key, keyPath) => {
            console.log('2',key, keyPath)
        }

        return {
            isCollapse,
            handleOpen,
            handleClose,
            // toggleClick,
            collapseCount
        }

    },
}







</script>

<style lang="scss" scoped>
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//     width: 200px;
//     min-height: 400px;
// }

.side-menu {
    min-height: 100vh;
    background: linear-gradient(11.83deg, #112B7D -26.54%, #485C9D 91.28%);
    padding-top: 20px;
}

.sideMenuContainer{
    position: relative;
    &__hamburger{
        position: absolute;
        z-index: 999;
        left: 5px;
    }
}
</style>
