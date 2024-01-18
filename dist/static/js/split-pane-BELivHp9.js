import{d as m,W as I,h as l,i as s,r as u,m as $,S as A,F as H,M as R,c as U,w as a,b as T,e as X,f as p,p as Y,q as E,_ as G}from"./index-DuUQh2t8.js";const k=m({name:"Resizer",props:{split:{type:String,required:!0},className:{type:String,default:""}},setup(e){const n=I(()=>["splitter-pane-resizer",e.split,e.className].join(" "));return()=>l("div",{class:s(n)},null)}}),B=m({name:"SplitPane",components:{resizer:k},props:{splitSet:{type:Object,require:!0}},emits:["resize"],setup(e,n){var S,g,w,P,z;const i=u(!1),d=u(!1),c=u((S=e.splitSet)==null?void 0:S.defaultPercent),r=((g=e.splitSet)==null?void 0:g.split)==="vertical"?"width":"height",v=((w=e.splitSet)==null?void 0:w.split)==="vertical"?"left":"top",N=u(["splitter-pane splitter-paneL",(P=e.splitSet)==null?void 0:P.split]),q=u(["splitter-pane splitter-paneR",(z=e.splitSet)==null?void 0:z.split]),j=I(()=>{var t;return i.value?((t=e.splitSet)==null?void 0:t.split)==="vertical"?{cursor:"col-resize"}:{cursor:"row-resize"}:{cursor:"default"}}),x=()=>{d.value||(c.value=50,n.emit("resize",c.value))},D=()=>{i.value=!0,d.value=!1},F=()=>{i.value=!1},O=t=>{var M,y,C,b,L;if((t.buttons===0||t.which===0)&&(i.value=!1),i.value){let _=0,o=t.currentTarget;if(((M=e.splitSet)==null?void 0:M.split)==="vertical")for(;o;)_+=o.offsetLeft,o=o.offsetParent;else for(;o;)_+=o.offsetTop,o=o.offsetParent;const V=((y=e.splitSet)==null?void 0:y.split)==="vertical"?t.pageX:t.pageY,W=((C=e.splitSet)==null?void 0:C.split)==="vertical"?t.currentTarget.offsetWidth:t.currentTarget.offsetHeight,h=Math.floor((V-_)/W*1e4)/100;h>((b=e.splitSet)==null?void 0:b.minPercent)&&h<100-((L=e.splitSet)==null?void 0:L.minPercent)&&(c.value=h),n.emit("resize",c.value),d.value=!0}};return()=>{var t;return l(H,null,[l("div",{class:"vue-splitter-container clearfix",style:s(j),onMouseup:()=>F(),onMousemove:()=>O(event)},[l("div",{class:s(N),style:{[s(r)]:s(c)+"%"}},[n.slots.paneL()]),l(k,{style:`${s([v])}:${s(c)}%`,split:(t=e.splitSet)==null?void 0:t.split,onMousedown:()=>D(),onClick:()=>x()},null),l("div",{class:s(q),style:{[s(r)]:100-s(c)+"%"}},[n.slots.paneR()]),$(l("div",{class:"vue-splitter-container-mask"},null),[[A,s(i)]])])])}}}),f=e=>(Y("data-v-099618ac"),e=e(),E(),e),J=f(()=>p("div",{class:"card-header"},[p("span",{class:"font-medium"},"切割面板")],-1)),K={class:"split-pane"},Q=f(()=>p("div",{class:"dv-a"},"A",-1)),Z=f(()=>p("div",{class:"dv-b"},"B",-1)),ee=f(()=>p("div",{class:"dv-c"},"C",-1)),te=m({name:"SplitPane",__name:"split-pane",setup(e){const n=R({minPercent:20,defaultPercent:40,split:"vertical"}),i=R({minPercent:20,defaultPercent:40,split:"horizontal"});return(d,c)=>{const r=T("el-scrollbar"),v=T("el-card");return X(),U(v,{shadow:"never"},{header:a(()=>[J]),default:a(()=>[p("div",K,[l(s(B),{splitSet:n},{paneL:a(()=>[l(r,null,{default:a(()=>[Q]),_:1})]),paneR:a(()=>[l(s(B),{splitSet:i},{paneL:a(()=>[l(r,null,{default:a(()=>[Z]),_:1})]),paneR:a(()=>[l(r,null,{default:a(()=>[ee]),_:1})]),_:1},8,["splitSet"])]),_:1},8,["splitSet"])])]),_:1})}}}),le=G(te,[["__scopeId","data-v-099618ac"]]);export{le as default};
