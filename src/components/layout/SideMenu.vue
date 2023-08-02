<template>
    <el-row class="tac">
        <el-col class="sideMenuContainer">
            <div class="sideMenuContainer__hamburger">
                <img src="../../assets/image/NewebPay_Logo.svg" />
            </div>
            <el-scrollbar>
                <el-menu default-active="2" text-color="#fff" class="el-menu-vertical-demo side-menu"
                    active-text-color="#00000" @open="handleOpen" @close="handleClose">
                    <el-sub-menu class="side-menu__item" v-for="(data, index1) in sideMenu" :index="index1" :key="index1">
                        <template #title>
                            <el-icon>
                                <component :is="data.icon" />
                            </el-icon>
                            <span>{{ data.title }}</span>
                        </template>
                        <el-menu-item v-for="(datachild, index2) in data.item" :index="`${index1}-${index2}`"
                            :key="datachild">
                            <router-link class="router" :to=datachild.path>
                                {{ datachild.subtitle }}
                            </router-link>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
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

import sideMenuItem from '../../scripts/sideMenu';
import InsertComment from '../icon/InsertComment.vue';
import PostAdd from '../icon/PostAdd.vue'
import LocalGrocery from '../icon/LocalGrocery.vue';
import AttachMoney from '../icon/AttachMoney.vue';

import { ref } from 'vue';

export default {
    name: 'collaspe',
    components: {
        Document,
        Location,
        Setting,
        IconMenu,
        sideMenuItem,
        InsertComment,
        PostAdd,
        LocalGrocery,
        AttachMoney
    },
    setup() {
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath)
        }

        const sideMenu = ref(sideMenuItem)


        return {
            handleOpen,
            handleClose,
            sideMenu
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
    &__item {
        padding: 10px;
    }
}

.el-menu-item:hover {
    background-color: #397EF2 !important;
    color: #ffffff;
}

.sideMenuContainer {
    position: relative;

    &__hamburger {
        position: absolute;
        z-index: 999;
        left: 5px;

        img {
            padding: 24px 32px 24px 32px
        }
    }
}

:deep .el-menu {
    background-color: inherit;
}

.router {
    color: #FFFFFF;
    width: 100%;
}

.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
}
</style>
