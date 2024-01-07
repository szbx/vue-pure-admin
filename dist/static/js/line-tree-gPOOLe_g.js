var N=Object.defineProperty,V=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var v=(n,t,a)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,y=(n,t)=>{for(var a in t||(t={}))T.call(t,a)&&v(n,a,t[a]);if(x)for(var a of x(t))q.call(t,a)&&v(n,a,t[a]);return n},b=(n,t)=>V(n,A(t));import{d as L,O as p,P as B,H as C,J as I,K as P,L as E,c as H,w as l,b as _,f as K,i as r,g as d,u as f,t as S,M as w,N as M}from"./index-24ofiFkH.js";const g=L({name:"ReTreeLine",props:{node:{type:Object,required:!0},data:{type:Array,default:()=>{}},treeData:{type:Array,default:()=>[]},indent:{type:Number,default:16},showLabelLine:{type:Boolean,default:!0}},setup(n,t){const{slots:a}=t;return{getScopedSlot:s=>{if(!s)return null;const i=s.split("||");let e=null;for(let o=0;o<i.length;o++){const u=i[o];e=(a||{})[u]}return e},getSlotValue:(s,i,e=null)=>B(s)?s(i)||e:s||e}},render(){const n=this.getScopedSlot("default"),t=this.getScopedSlot("node-label"),a=this.getScopedSlot("after-node-label"),m=n?this.getSlotValue(n,{node:this.node,data:this.data}):[t?this.getSlotValue(t,{node:this.node,data:this.data}):p("span",{class:"element-tree-node-label"},this.node.label),this.showLabelLine?p("span",{class:"element-tree-node-label-line"}):null,this.getSlotValue(a,{node:this.node,data:this.data})],c=[];let s=this.node;for(;s;){let e=s.parent;if(s.level===1&&!s.parent){if(!this.treeData||!Array.isArray(this.treeData))throw Error("if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data.");e={children:Array.isArray(this.treeData)?this.treeData.map(o=>b(y({},o),{key:o.id})):[],level:0,key:"node-0",parent:null}}if(e){const o=(e.children||e.childNodes).findIndex(u=>(u.key||u.id)===(s.key||s.id));c.unshift(o===(e.children||e.childNodes).length-1)}s=e}const i=[];for(let e=0;e<this.node.level;e++)i.push(p("span",{class:{"element-tree-node-line-ver":!0,"last-node-line":c[e]&&this.node.level-1!==e,"last-node-isLeaf-line":c[e]&&this.node.level-1===e},style:{left:this.indent*e+"px"}}));return p("span",{class:"element-tree-node-label-wrapper"},[m].concat(i).concat([p("span",{class:"element-tree-node-line-hor",style:{width:(this.node.isLeaf?24:8)+"px",left:(this.node.level-1)*this.indent+"px"}})]))}}),O=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," 扩展elemenet-plus的树形组件包括虚拟树组件，支持连接线 ")],-1),j=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," 普通树结构 ")],-1),z={class:"max-h-[550px] overflow-y-auto"},J={class:"text-sm"},R=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," 虚拟树结构 ")],-1),F={class:"max-h-[550px] overflow-y-auto"},G={class:"text-sm"},W=L({name:"LineTree",__name:"line-tree",setup(n){const t=C(I().wholeMenus,!0),a=P(()=>M(t)),m=E(a.value),c={value:"uniqueId",children:"children"};return(s,i)=>{const e=_("el-tree"),o=_("el-card"),u=_("el-col"),k=_("el-tree-v2"),D=_("el-row");return K(),H(o,{shadow:"never"},{header:l(()=>[O]),default:l(()=>[r(D,{gutter:24},{default:l(()=>[r(u,{xs:24,sm:24,md:12,lg:12,xl:12,class:"mb-[20px]"},{default:l(()=>[r(o,{shadow:"never"},{header:l(()=>[j]),default:l(()=>[d("div",z,[r(e,{data:a.value,props:c,"show-checkbox":"","default-expand-all":"","node-key":"uniqueId",indent:30},{default:l(({node:h})=>[r(f(g),{node:h,showLabelLine:!0},{"node-label":l(()=>[d("span",J,S(f(w)(h.data.meta.title)),1)]),_:2},1032,["node"])]),_:1},8,["data"])])]),_:1})]),_:1}),r(u,{xs:24,sm:24,md:12,lg:12,xl:12},{default:l(()=>[r(o,{shadow:"never"},{header:l(()=>[R]),default:l(()=>[d("div",F,[r(k,{data:a.value,props:c,"show-checkbox":"",height:550,"default-expanded-keys":f(m)},{default:l(({node:h})=>[r(f(g),{node:h,treeData:a.value,showLabelLine:!0,indent:30},{"node-label":l(()=>[d("span",G,S(f(w)(h.data.meta.title)),1)]),_:2},1032,["node","treeData"])]),_:1},8,["data","default-expanded-keys"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{W as default};
