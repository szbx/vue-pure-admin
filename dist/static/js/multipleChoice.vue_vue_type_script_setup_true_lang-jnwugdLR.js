import{t as l}from"./data-EkXD_0VT.js";import{d as g,r as i,b as p,e as C,k as v,h as a,i as s,f as h,w as d,g as f}from"./index-DuUQh2t8.js";const k={style:{"margin-top":"20px"}},w=g({__name:"multipleChoice",setup(S){const r=i(),u=i([]),c=t=>{const{toggleRowSelection:e,clearSelection:n}=r.value.getTableRef();t?t.forEach(o=>{e(o,void 0)}):n()},m=t=>{u.value=t},_=[{type:"selection",align:"left"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const n=p("pure-table"),o=p("el-button");return C(),v("div",null,[a(n,{ref_key:"tableRef",ref:r,data:s(l),columns:_,onSelectionChange:m},null,8,["data"]),h("div",k,[a(o,{onClick:e[0]||(e[0]=b=>c([s(l)[1],s(l)[2]]))},{default:d(()=>[f(" Toggle selection status of second and third rows ")]),_:1}),a(o,{onClick:e[1]||(e[1]=b=>c())},{default:d(()=>[f("Clear selection")]),_:1})])])}}});export{w as _};
