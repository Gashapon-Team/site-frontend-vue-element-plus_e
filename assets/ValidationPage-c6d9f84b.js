import{_ as w,e as i,o as r,f as F,w as l,g as e,n as D,r as V,c as b,a,q as U,u as j,v as P,F as I,h as S,x as q,j as C,y as M,z as L,A as N,t as B,p as Y,k as E}from"./index-b84ad883.js";import{A as H}from"./AdminHeader-80674a6d.js";const R={};function K(u,n){const _=i("el-step"),t=i("el-steps");return r(),F(t,{active:1,"align-center":""},{default:l(()=>[e(_,{title:"Step 1",description:"Some description"}),e(_,{title:"Step 2",description:"Some description"}),e(_,{title:"Step 3",description:"Some description"})]),_:1})}const W=w(R,[["render",K]]);const G={props:["fit","imageTitle","url","Imagewidth","Imageheight"],setup(u,{emit:n}){const{fit:_,imageTitle:t,url:y,Imageheight:f,Imagewidth:s}=D(u),c=V({width:s,height:f});return{fit:_,imageTitle:t,url:y,Imageheight:f,Imagewidth:s,styleObject:c}}},J={class:"demo-image"},Q={class:"flex flex-column"};function X(u,n,_,t,y,f){const s=i("el-image");return r(),b("div",J,[a("div",Q,[e(s,{style:U(t.styleObject),src:t.url,fit:t.fit},null,8,["style","src","fit"])])])}const Z=w(G,[["render",X],["__scopeId","data-v-6768a703"]]);const $={name:"basicForm",components:{Image:Z},setup(){const u=V({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),n=V({firstname:"",lastname:""}),_=V("default"),t=V("top"),y=j({render(){return q("p",{class:"calcendar"})}}),f=V({year:"",month:"",day:"",place:""}),s=P(()=>{let x=new Date().getFullYear()-1911,m=x-100,p=[];for(var h=x;h>=m;h--){let g=h.toString();g=g.length<3?"0"+g:g,p.push(g)}return p}),c=P(()=>Array.from({length:12},(m,p)=>p+1).map(m=>m.toString().length<2?"0"+m.toString():m.toString())),d=P(()=>Array.from({length:31},(m,p)=>p+1).map(m=>m.toString().length<2?"0"+m.toString():m.toString())),v=V("");return{sizeForm:u,customPrefix:y,size:_,labelPosition:t,englishForm:n,value:v,options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],IDOptionsYear:s,initIdPlace:f,IDOptionsMonth:c,IDOptionsDay:d}}},ee={class:"flex flex-column",id:"validation"},te={class:"basicForm flex justify-center items-start"},le=a("div",{class:"w-30 basicFormInner"},[a("div",{class:"section__title",id:"id_data"},"身分資料"),a("div",{class:"section__caption"},"這裡是說明文字")],-1),oe=a("div",{class:"captionText"},"We'll never share your email with anyone else.",-1),ae={class:"flex"},ne=a("div",{class:"captionText"},"與護照相同英文名字",-1),ie=a("div",{class:"captionText"},"與護照相同英文姓氏",-1),se={class:"basicForm flex justify-center items-start"},de=a("div",{class:"w-30 basicFormInner"},[a("div",{class:"section__title",id:"id_detail"},"國民身分證"),a("div",{class:"section__caption"},"這裡是說明文字")],-1),ce=a("div",{class:"captionText"},"1碼英文+9碼數字",-1),re={class:"flex"},_e=a("div",{class:"basicForm__idTitle"},"發證民國年",-1),me=a("div",{class:"basicForm__idTitle"},"月份",-1),ue=a("div",{class:"basicForm__idTitle"},"日期",-1),pe={class:"mt-4"},fe=a("div",{class:"basicForm__idTitle"},"發證地點",-1),ve=a("div",{clas:"basicForm__idTitle"},"領補換類別",-1),he={class:"basicForm flex justify-center items-start"},ge=a("div",{class:"basicFormInner w-30"},[a("div",{class:"section__title",id:"id_image"},"雙證件影像檔"),a("div",{class:"section__caption"},"這裡是說明文字")],-1),be=a("div",{class:"basicForm__idTitle"},"國民身分證 (正面)",-1),ye={class:"flex"},xe=a("div",{class:"el-upload__text"},[C(" Drop file here or "),a("em",null,"click to upload")],-1),Ve=a("div",{class:"el-upload__tip"}," jpg/png files with a size less than 500kb ",-1);function Fe(u,n,_,t,y,f){const s=i("el-input"),c=i("el-form-item"),d=i("el-col"),v=i("el-row"),z=i("el-date-picker"),x=i("el-form"),m=i("el-divider"),p=i("el-option"),h=i("el-select"),g=i("Image"),k=i("upload-filled"),A=i("el-icon"),T=i("el-upload");return r(),b("div",ee,[a("div",te,[le,e(x,{class:"w-70",ref:"form",model:t.sizeForm,"label-width":"auto","label-position":t.labelPosition,size:t.size},{default:l(()=>[e(v,null,{default:l(()=>[e(d,{span:6},{default:l(()=>[e(c,{label:"中文姓名"},{default:l(()=>[e(s,{modelValue:t.sizeForm.name,"onUpdate:modelValue":n[0]||(n[0]=o=>t.sizeForm.name=o),placeholder:"您的中文姓名"},null,8,["modelValue"]),oe]),_:1})]),_:1})]),_:1}),a("div",ae,[e(v,null,{default:l(()=>[e(d,{span:10,style:{"margin-right":"12px"}},{default:l(()=>[e(c,{"el-form-item":"",label:"英文名字"},{default:l(()=>[e(s,{modelValue:t.englishForm.firstname,"onUpdate:modelValue":n[1]||(n[1]=o=>t.englishForm.firstname=o),placeholder:"First Name"},null,8,["modelValue"]),ne]),_:1})]),_:1}),e(d,{span:10},{default:l(()=>[e(c,{label:"英文姓氏"},{default:l(()=>[e(s,{modelValue:t.englishForm.lastname,"onUpdate:modelValue":n[2]||(n[2]=o=>t.englishForm.lastname=o),placeholder:"Last Name"},null,8,["modelValue"]),ie]),_:1})]),_:1})]),_:1})]),e(c,{label:"出生年月日"},{default:l(()=>[e(d,{span:11},{default:l(()=>[e(z,{modelValue:t.sizeForm.date1,"onUpdate:modelValue":n[3]||(n[3]=o=>t.sizeForm.date1=o),type:"date",placeholder:"選擇日期","prefix-icon":t.customPrefix,class:"date-picker",style:{width:"100%"}},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1})]),_:1},8,["model","label-position","size"])]),e(m,{"border-style":"double"}),a("div",se,[de,e(x,{class:"w-70",ref:"form",model:t.sizeForm,"label-width":"auto","label-position":t.labelPosition,size:t.size},{default:l(()=>[e(v,null,{default:l(()=>[e(d,{span:6},{default:l(()=>[e(c,{label:"身分證資料"},{default:l(()=>[e(s,{modelValue:t.sizeForm.name,"onUpdate:modelValue":n[4]||(n[4]=o=>t.sizeForm.name=o),placeholder:"身分證字號10瑪"},null,8,["modelValue"]),ce]),_:1})]),_:1})]),_:1}),a("div",re,[e(v,null,{default:l(()=>[e(d,{span:7,style:{"margin-right":"12px"}},{default:l(()=>[_e,e(h,{modelValue:t.initIdPlace.year,"onUpdate:modelValue":n[5]||(n[5]=o=>t.initIdPlace.year=o),class:"m-2",placeholder:"請選擇"},{default:l(()=>[(r(!0),b(I,null,S(t.IDOptionsYear,o=>(r(),F(p,{key:o,value:o},null,8,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{span:7,style:{"margin-right":"12px"}},{default:l(()=>[me,e(h,{modelValue:t.initIdPlace.month,"onUpdate:modelValue":n[6]||(n[6]=o=>t.initIdPlace.month=o),class:"m-2",placeholder:"請選擇"},{default:l(()=>[(r(!0),b(I,null,S(t.IDOptionsMonth,o=>(r(),F(p,{key:o,value:o},null,8,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{span:7,style:{"margin-right":"12px"}},{default:l(()=>[ue,e(h,{modelValue:t.initIdPlace.day,"onUpdate:modelValue":n[7]||(n[7]=o=>t.initIdPlace.day=o),class:"m-2",placeholder:"請選擇"},{default:l(()=>[(r(!0),b(I,null,S(t.IDOptionsDay,o=>(r(),F(p,{key:o,value:o},null,8,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),a("div",pe,[e(v,null,{default:l(()=>[e(d,{span:4,style:{"margin-right":"12px"}},{default:l(()=>[fe,e(h,{modelValue:t.initIdPlace.place,"onUpdate:modelValue":n[8]||(n[8]=o=>t.initIdPlace.place=o),class:"m-2",placeholder:"Select"},{default:l(()=>[(r(!0),b(I,null,S(t.options,o=>(r(),F(p,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{span:4,style:{"margin-right":"12px"}},{default:l(()=>[ve,e(h,{modelValue:t.value,"onUpdate:modelValue":n[9]||(n[9]=o=>t.value=o),class:"m-2",placeholder:"Select"},{default:l(()=>[(r(!0),b(I,null,S(t.options,o=>(r(),F(p,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1},8,["model","label-position","size"])]),e(m,{"border-style":"double"}),a("div",he,[ge,e(x,{class:"w-70",ref:"form",model:t.sizeForm,"label-width":"auto","label-position":t.labelPosition,size:t.size},{default:l(()=>[e(v,null,{default:l(()=>[e(d,{span:6},{default:l(()=>[be]),_:1})]),_:1}),a("div",ye,[e(v,null,{default:l(()=>[e(d,{style:{"margin-right":"12px"}},{default:l(()=>[e(g,{fit:"contain",imageTitle:"國民身分證 (正面)",url:"../../src/assets/image/container.png",Imageheight:"220px",Imagewidth:"350px",titleColor:"#1F2937"},null,8,["url"])]),_:1}),e(d,{style:{"margin-right":"12px","margin-top":"12px"}},{default:l(()=>[e(T,{class:"upload-demo",drag:"",action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:""},{tip:l(()=>[Ve]),default:l(()=>[e(A,{class:"el-icon--upload"},{default:l(()=>[e(k)]),_:1}),xe]),_:1})]),_:1})]),_:1})])]),_:1},8,["model","label-position","size"])])])}const Ie=w($,[["render",Fe]]),Se=[{text:"身分資料",active:!0,id:"id_data"},{text:"國民身分證",active:!1,id:"id_detail"},{text:"雙證件影像檔",active:!1,id:"id_image"}];const we={name:"sideNavLink",setup(){const u=V(Se),n=V(0),_=V(null),t=(f,s)=>{document.querySelector("#"+f.id).scrollIntoView({behavior:"smooth"}),n.value=s},y=f=>{f.forEach(({target:s,isIntersecting:c})=>{const d=s.getAttribute("id");c?document.querySelector(`#${d}_nav`).classList.add("active"):document.querySelector(`#${d}_nav`).classList.remove("active")})};return _.value=new IntersectionObserver(y,{root:document.querySelector(".item_link"),threshold:1}),M(()=>{document.querySelector("#validation").querySelectorAll(".basicFormInner [id]").forEach(s=>{_.value.observe(s)})}),L(()=>{_.disconnect()}),{data:u,handlerPosition:t,isActive:n,observer:_,onElementObserved:y}}},ze={class:"item_link"},Pe=["id"],Oe=["onClick"];function ke(u,n,_,t,y,f){return r(),b("div",null,[a("ul",ze,[(r(!0),b(I,null,S(t.data,(s,c)=>(r(),b("li",{class:N([t.isActive==c?"active":"","item-style"]),key:c,id:s.id+"_nav"},[a("a",{onClick:d=>t.handlerPosition(s,c)},B(s.text),9,Oe)],10,Pe))),128))])])}const Ae=w(we,[["render",ke],["__scopeId","data-v-042e4b0f"]]);const Te={name:"validation",components:{Process:W,AdminHeader:H,ValidationForm:Ie,ValidationSideMenu:Ae}},O=u=>(Y("data-v-2fa3a8a7"),u=u(),E(),u),De={class:"common-layout"},Ue={class:"left-tab"},je={class:""},qe=O(()=>a("div",{class:"title"},"實名認證 (KYC)",-1)),Ce=O(()=>a("div",{class:"title__description"},"依據《第三方支付服務業防制洗錢及打擊資恐辦法》規定，藍新有義進行客戶身分調查 ...... 完成實名認證，請放心，身分資料僅用於 ......",-1));function Me(u,n,_,t,y,f){const s=i("AdminHeader"),c=i("el-header"),d=i("ValidationSideMenu"),v=i("el-aside"),z=i("Process"),x=i("ValidationForm"),m=i("el-card"),p=i("el-main"),h=i("el-footer"),g=i("el-container");return r(),b("div",De,[e(g,null,{default:l(()=>[e(c,null,{default:l(()=>[e(s)]),_:1}),e(g,{class:"validation_container"},{default:l(()=>[e(v,{width:"200px"},{default:l(()=>[a("div",Ue,[e(d)])]),_:1}),e(g,null,{default:l(()=>[e(p,null,{default:l(()=>[e(z),a("div",je,[qe,Ce,e(m,{class:"box-card"},{default:l(()=>[e(x)]),_:1})])]),_:1}),e(h)]),_:1})]),_:1})]),_:1})])}const Be=w(Te,[["render",Me],["__scopeId","data-v-2fa3a8a7"]]);export{Be as default};