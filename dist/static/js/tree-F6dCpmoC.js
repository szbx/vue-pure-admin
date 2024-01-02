var Q=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var M=(o,t,n)=>t in o?Q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,g=(o,t)=>{for(var n in t||(t={}))Z.call(t,n)&&M(o,n,t[n]);if(E)for(var n of E(t))ee.call(t,n)&&M(o,n,t[n]);return o},x=(o,t)=>W(o,X(t));import{f as w,m as y,g as v,d as te,r as m,E as oe,Y as ne,b as i,e as le,k as N,i as a,w as d,u,v as ae,as as O,t as B,h as R,ah as j,aq as re,_ as se}from"./index-3m0KmRGm.js";import{u as ie}from"./hooks-gfek4MGg.js";import{d as ce}from"./git-branch-line-zmPAFode.js";import{d as de}from"./search-DTzpNWF3.js";import{d as ue}from"./more-2-fill-476mFkdN.js";import{d as he}from"./office-building-OE6SrNBX.js";const pe={width:1024,height:1024,body:'<path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"/>'},_e=pe,fe={width:"32",height:"32",viewBox:"0 0 24 24"},me=v("path",{fill:"currentColor",d:"M22 4V2H2v2h9v14.17l-5.5-5.5-1.42 1.41L12 22l7.92-7.92-1.42-1.41-5.5 5.5V4z"},null,-1),ve=[me];function ge(o,t){return w(),y("svg",fe,[...ve])}const xe={render:ge},we={width:"32",height:"32",viewBox:"0 0 24 24"},ye=v("path",{fill:"currentColor",d:"M4 2H2v20h2v-9h14.17l-5.5 5.5 1.41 1.42L22 12l-7.92-7.92-1.41 1.42 5.5 5.5H4z"},null,-1),be=[ye];function Ce(o,t){return w(),y("svg",we,[...be])}const ke={render:Ce},$e={class:"flex items-center h-[34px]"},Ie=te({__name:"tree",props:{treeLoading:Boolean,treeData:Array},emits:["tree-select"],setup(o,{expose:t,emit:n}){const b=o,D=n,C=m(),p=m(!0),h=m(""),r=m({}),{proxy:H}=re(),L={children:"children",label:"name"},q=oe(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),A=(l,e)=>l?e.name.includes(l):!0;function S(l){var s,_;const e=l.$treeNodeId;r.value[e]=(s=r.value[e])!=null&&s.highlight?Object.assign({id:e},r.value[e],{highlight:!1}):Object.assign({id:e},r.value[e],{highlight:!0}),Object.values(r.value).forEach(f=>{f.id!==e&&(f.highlight=!1)}),D("tree-select",(_=r.value[e])!=null&&_.highlight?Object.assign(x(g({},l),{selected:!0})):Object.assign(x(g({},l),{selected:!1})))}function k(l){p.value=l;const e=H.$refs.treeRef.store._getAllNodes();for(let s=0;s<e.length;s++)e[s].expanded=l}function T(){r.value={},h.value="",k(!0)}return ne(h,l=>{C.value.filter(l)}),t({onTreeReset:T}),(l,e)=>{const s=i("IconifyIconOffline"),_=i("el-icon"),f=i("el-input"),U=i("el-button"),P=i("el-dropdown-item"),Y=i("el-dropdown-menu"),F=i("el-dropdown"),G=i("el-divider"),J=i("el-tree"),K=le("loading");return N((w(),y("div",{class:"h-full bg-bg_color overflow-auto",style:j({minHeight:"calc(100vh - 133px)"})},[v("div",$e,[a(f,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=c=>h.value=c),class:"ml-2",size:"small",placeholder:"请输入部门名称",clearable:""},{suffix:d(()=>[a(_,{class:"el-input__icon"},{default:d(()=>[N(a(s,{icon:u(de)},null,8,["icon"]),[[ae,h.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),a(F,{"hide-on-click":!1},{dropdown:d(()=>[a(Y,null,{default:d(()=>[a(P,null,{default:d(()=>[a(U,{class:O(q.value),link:"",type:"primary",icon:u(ie)(p.value?u(xe):u(ke)),onClick:e[1]||(e[1]=c=>k(!p.value))},{default:d(()=>[R(B(p.value?"折叠全部":"展开全部"),1)]),_:1},8,["class","icon"])]),_:1})]),_:1})]),default:d(()=>[a(s,{class:"w-[28px] cursor-pointer",width:"18px",icon:u(ue)},null,8,["icon"])]),_:1})]),a(G),a(J,{ref_key:"treeRef",ref:C,data:b.treeData,"node-key":"id",size:"small",props:L,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":A,onNodeClick:S},{default:d(({node:c,data:$})=>{var I,z,V;return[v("span",{class:O(["pl-1","pr-1","rounded","flex","items-center","select-none","hover:text-primary",h.value.trim().length>0&&c.label.includes(h.value)&&"text-red-500",(I=r.value[c.id])!=null&&I.highlight?"dark:text-primary":""]),style:j({color:(z=r.value[c.id])!=null&&z.highlight?"var(--el-color-primary)":"",background:(V=r.value[c.id])!=null&&V.highlight?"var(--el-color-primary-light-7)":"transparent"})},[a(s,{icon:$.type===1?u(he):$.type===2?u(_e):u(ce)},null,8,["icon"]),R(" "+B(c.label),1)],6)]}),_:1},8,["data"])],4)),[[K,b.treeLoading]])}}}),Re=se(Ie,[["__scopeId","data-v-36eb53b7"]]);export{Re as default};
