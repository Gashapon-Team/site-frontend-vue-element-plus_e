<template>
    <div class="flex flex-column">
        <!-- 身分資料 -->
        <div class="basicForm flex justify-center items-start ">
            <div class="w-30">
                <div class="section__title">身分資料</div>
                <div class="section__caption">這裡是說明文字</div>
            </div>
            <el-form class="w-70" ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition"
                :size="size">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="中文姓名">
                            <el-input v-model="sizeForm.name" placeholder="您的中文姓名" />
                            <div class="captionText">We'll never share your email with anyone else.</div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="flex">
                    <el-row>
                        <el-col :span="10" style="margin-right: 12px;">
                            <el-form-item el-form-item label="英文名字">
                                <el-input v-model="englishForm.firstname" placeholder="First Name" />
                                <div class="captionText">與護照相同英文名字</div>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="英文姓氏">
                                <el-input v-model="englishForm.lastname" placeholder="Last Name" />
                                <div class="captionText">與護照相同英文姓氏</div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <el-form-item label="出生年月日">
                    <el-col :span="11">
                        <el-date-picker v-model="sizeForm.date1" type="date" placeholder="選擇日期" :prefix-icon="customPrefix"
                            class="date-picker" style="width: 100%" />
                    </el-col>
                </el-form-item>
            </el-form>
        </div>
        <el-divider border-style="double" />
        <!-- 國民身分證 -->
        <div class="basicForm flex justify-center items-start ">
            <div class="w-30">
                <div class="section__title">國民身分證</div>
                <div class="section__caption">這裡是說明文字</div>
            </div>
            <el-form class="w-70" ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition"
                :size="size">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="身分證資料">
                            <el-input v-model="sizeForm.name" placeholder="身分證字號10瑪" />
                            <div class="captionText">1碼英文+9碼數字</div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="flex">
                    <el-row>
                        <el-col :span="7" style="margin-right: 12px;">
                            <div class="basicForm__idTitle">發證民國年</div>
                            <el-select v-model="initIdPlace.year" class="m-2" placeholder="請選擇">
                                <el-option v-for="item in IDOptionsYear" :key="item" :value="item" />
                            </el-select>
                        </el-col>
                        <el-col :span="7" style="margin-right: 12px;">
                            <div class="basicForm__idTitle">月份</div>
                            <el-select v-model="initIdPlace.month" class="m-2" placeholder="請選擇">
                                <el-option v-for="item in IDOptionsMonth" :key="item" :value="item" />
                            </el-select>
                        </el-col>
                        <el-col :span="7" style="margin-right: 12px;">
                            <div class="basicForm__idTitle">日期</div>
                            <el-select v-model="initIdPlace.day" class="m-2" placeholder="請選擇">
                                <el-option v-for="item in IDOptionsDay" :key="item" :value="item" />
                            </el-select>
                        </el-col>
                    </el-row>
                </div>
                <div class="mt-4">
                    <el-row>
                        <el-col :span="4" style="margin-right: 12px;">
                            <div class="basicForm__idTitle">發證地點</div>
                            <el-select v-model="initIdPlace.place" class="m-2" placeholder="Select">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-col>
                        <el-col :span="4" style="margin-right: 12px;">
                            <div clas="basicForm__idTitle">領補換類別</div>
                            <el-select v-model="value" class="m-2" placeholder="Select">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>
        <el-divider border-style="double" />
        <!-- 雙證件影像檔 -->
        <div class="basicForm flex justify-center items-start ">
            <div class="w-30">
                <div class="section__title">雙證件影像檔</div>
                <div class="section__caption">這裡是說明文字</div>
            </div>
            <el-form class="w-70" ref="form" :model="sizeForm" label-width="auto" :label-position="labelPosition"
                :size="size">
                <el-row>
                    <el-col :span="6">
                        <div class="basicForm__idTitle">國民身分證 (正面)</div>
                    </el-col>
                </el-row>
                <div class="flex">
                    <el-row>
                        <el-col style="margin-right: 12px;">
                            <Image :fit="'contain'" :imageTitle="'國民身分證 (正面)'" :url="'../../src/assets/image/container.png'"
                                :Imageheight="'220px'" :Imagewidth="'350px'" :titleColor="'#1F2937'" />
                        </el-col>
                        <el-col style="margin-right: 12px;margin-top: 12px">
                            <el-upload class="upload-demo" drag
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                                <div class="el-upload__text">
                                    Drop file here or <em>click to upload</em>
                                </div>
                                <template #tip>
                                    <div class="el-upload__tip">
                                        jpg/png files with a size less than 500kb
                                    </div>
                                </template>
                            </el-upload>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ref, h, shallowRef, computed } from 'vue';
import Image from '../Image/Image.vue';

export default {
    name: 'basicForm',
    components: {
        Image
    },
    setup() {
        const sizeForm = ref({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        })

        const englishForm = ref({
            firstname: '',
            lastname: ''
        })

        const size = ref('default')
        const labelPosition = ref('top')

        const customPrefix = shallowRef({
            render() {
                return h('p', { class: 'calcendar' })
            },
        })

        // 身分證選單
        const initIdPlace = ref({
            year: '',
            month: '',
            day: '',
            place: ''
        })

        const IDOptionsYear = computed(() => {
            let max = new Date().getFullYear() - 1911
            let min = max - 100;
            let years = []

            for (var i = max; i >= min; i--) {
                let tmpY = i.toString();
                tmpY = tmpY.length < 3 ? '0' + tmpY : tmpY;
                years.push(tmpY);
            }
            return years
        })

        const IDOptionsMonth = computed(() => {
            let tmpArr = Array.from({ length: 12 }, (v, i) => i + 1);
            return tmpArr.map(key => {
                if (key.toString().length < 2) {
                    return '0' + key.toString();
                } else {
                    return key.toString();
                }
            })
        })

        const IDOptionsDay = computed(() => {
            let tmpArr = Array.from({ length: 31 }, (v, i) => i + 1);
            return tmpArr.map(key => {
                if (key.toString().length < 2) {
                    return '0' + key.toString();
                } else {
                    return key.toString();
                }
            })
        })


        //select
        const value = ref('')

        const options = [
            {
                value: 'Option1',
                label: 'Option1',
            },
            {
                value: 'Option2',
                label: 'Option2',
            },
            {
                value: 'Option3',
                label: 'Option3',
            },
            {
                value: 'Option4',
                label: 'Option4',
            },
            {
                value: 'Option5',
                label: 'Option5',
            },
        ]

        return {
            sizeForm,
            customPrefix,
            size,
            labelPosition,
            englishForm,
            value,
            options,
            IDOptionsYear,
            initIdPlace,
            IDOptionsMonth,
            IDOptionsDay
        }
    },

}
</script>

<style lang="scss">
.basicForm {
    padding: 40px 20px;
    color: #1F2937;

    &__idTitle {
        font-size: 14px;
    }

    .el-radio-group {
        margin-right: 12px;
    }

    .demo-date-picker {
        display: flex;
        width: 100%;
        padding: 0;
        flex-wrap: wrap;
    }

    .demo-date-picker .block {
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--el-border-color);
        flex: 1;
    }

    .demo-date-picker .block:last-child {
        border-right: none;
    }

    .demo-date-picker .demonstration {
        display: block;
        color: var(--el-text-color-secondary);
        font-size: 14px;
        margin-bottom: 20px;
    }

    .captionText {
        color: var(--gray-400, #9CA3AF);
        font-size: 12px;
    }

    .section {
        &__title {
            color: var(--gray-800, #1F2937);
            /* Web/Headline/H5 */
            margin-bottom: 18px;
            font-size: 18px;
            font-weight: 700;
            line-height: 28px;
            /* 155.556% */
        }

        &__caption {
            font-size: 14px;
        }
    }

    .calcendar {
        background-image: url('../../assets/image/date_range.svg');
        background-size: contain;
        background-repeat: no-repeat;
        height: 50px;
        width: 50px;
        background-position: center 50%;
    }
}

.divider {
    border-bottom: 1px solid #E5E7EB;
    width: 100%;
}

.el-form-item__label {
    color: #1F2937;
}
</style>
