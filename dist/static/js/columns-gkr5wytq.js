var v=Object.defineProperty;var l=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var r=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&r(e,a,t[a]);if(l)for(var a of l(t))b.call(t,a)&&r(e,a,t[a]);return e};import{t as x}from"./data-Oq3SvOU0.js";import{r as u,aj as f,o as w,aw as p,C as L}from"./index-3m0KmRGm.js";function M(){const e=u([]),t=u(!0),a=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],o=f({pageSize:20,currentPage:1,pageSizes:[20,40,60],total:0,align:"right",background:!0,small:!1}),s=f({text:"正在加载第一页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),c={offsetBottom:110};function g(n){}function h(n){s.text=`正在加载第${n}页...`,t.value=!0,p(600).then(()=>{t.value=!1})}return w(()=>{p(600).then(()=>{const n=[];Array.from({length:6}).forEach(()=>{n.push(L(x,!0))}),n.flat(1/0).forEach((d,m)=>{e.value.push(i({id:m},d))}),o.total=e.value.length,t.value=!1})}),{loading:t,columns:a,dataList:e,pagination:o,loadingConfig:s,adaptiveConfig:c,onSizeChange:g,onCurrentChange:h}}export{M as useColumns};
