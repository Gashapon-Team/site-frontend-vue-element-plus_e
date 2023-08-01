<template>
    <div class="demo-image">
        <div class="flex flex-column">
            <el-image :style=styleObject :src="url" :fit="fit" />
        </div>
    </div>
</template>

<script>
import { ref,toRefs } from 'vue';

export default{
    props:['fit','imageTitle','url','Imagewidth','Imageheight'],
    setup(props,{emit}){
        const {fit,imageTitle,url,Imageheight,Imagewidth} = toRefs(props);
        const styleObject = ref({
            width:Imagewidth,
            height:Imageheight,
        })
        

        return{
            fit,
            imageTitle,
            url,
            Imageheight,
            Imagewidth,
            styleObject,
        }
    }
}
</script>

<style scoped>
/* .demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
} */

/* .demo-image .block:last-child {
    border-right: none;
} */

.demo-image .demonstration {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
}
</style>
