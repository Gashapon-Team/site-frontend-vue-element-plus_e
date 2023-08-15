<template>
<div>
    <ul class="item_link">
        <li :class="isActive == i ? 'active': ''"
        v-for='(item,i) in data' :key="i" class="item-style" :id="item.id + '_nav'">
        <a @click="handlerPosition(item,i)">{{ item.text }}</a>
        </li>
    </ul>
</div>
</template>

<script>
import SideNavLink from "../../constant/Validation_sideMenu";
import { onMounted, ref, onBeforeUnmount } from 'vue';

export default{
    name:'sideNavLink',
    setup(){
        const data = ref(SideNavLink);
        const isActive = ref(0);
        const observer = ref(null);

        
        // menu click function
        const handlerPosition = (item,i) =>{
            let position = document.querySelector('#' + item.id)
            position.scrollIntoView({ behavior: "smooth" });
            isActive.value = i;
        }

        
        /*
        *  observer scroll 
        */
        
        // callback函式
        const onElementObserved = (entries) =>{ // entries : IntersectionObserver array
            entries.forEach(({ target, isIntersecting }) => { // isIntersecting：target 是否可見
                const id = target.getAttribute('id');
                if (isIntersecting) {
                    document.querySelector(`#${id}_nav`).classList.add('active')
                } else {
                    document.querySelector(`#${id}_nav`).classList.remove('active')
                }
            })
        }

        observer.value = new IntersectionObserver(onElementObserved, { // callback: 指定的重疊條件發生時要執行的函式
            root:  document.querySelector('.item_link'), // 欲觀察的root
            threshold: 1, // target 可見度
        })

        onMounted(()=>{
            let form = document.querySelector('#validation')
            form.querySelectorAll('.basicFormInner [id]').forEach((section) => {
                // 開始監聽
                observer.value.observe(section);
            })
        })

        onBeforeUnmount(()=>{
            observer.disconnect()
        })
        

        return{
            data,
            handlerPosition,
            isActive,
            observer,
            onElementObserved,
        }
    }
}
</script>

<style scoped lang="scss">
.item-style{
    cursor: pointer;
    padding: 8px 16px;
}

.item_link{
    list-style-type: none;
    border-left: 2px solid #9CA3AF;
        a{
            color:#9CA3AF;
        }
    .active{
        border-left: 2px solid #3B82F6;
        a{
            color:#3B82F6
        }
    }
}
</style>
