import{r as d,E as i,i as t,b as s,h as o,F as m,q as r}from"./index-3m0KmRGm.js";import{t as p}from"./data-sfII4Kni.js";function g(){const a=d(""),n=i(()=>p.filter(e=>!a.value||e.name.toLowerCase().includes(a.value.toLowerCase()))),u=(e,l)=>{r(`您编辑了第 ${e} 行，数据为：${JSON.stringify(l)}`,{type:"success"})},c=(e,l)=>{r(`您删除了第 ${e} 行，数据为：${JSON.stringify(l)}`)};return{columns:[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{align:"right",headerRenderer:()=>t(s("el-input"),{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,size:"small",clearable:!0,placeholder:"Type to search"},null),cellRenderer:({index:e,row:l})=>t(m,null,[t(s("el-button"),{size:"small",onClick:()=>u(e+1,l)},{default:()=>[o("Edit")]}),t(s("el-button"),{size:"small",type:"danger",onClick:()=>c(e+1,l)},{default:()=>[o("Delete")]})])}],filterTableData:n}}export{g as useColumns};
