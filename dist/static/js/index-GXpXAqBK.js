import{d as k,K as b,r as w,dr as u,b as a,f as d,c as x,w as t,ah as i,h as C,i as s,t as V,g as m,F as B,x as S,m as z,aK as P,J as N,dz as U}from"./index-24ofiFkH.js";const E={class:"card-header"},K=k({name:"PermissionPage",__name:"index",setup(F){var n;const o=b(()=>({width:"85vw",justifyContent:"start"})),l=w((n=u())==null?void 0:n.username),_=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function p(){u().loginByUsername({username:l.value,password:"admin123"}).then(r=>{r.success&&(P().removeItem("async-routes"),N().clearAllCachePage(),U())})}return(r,c)=>{const v=a("el-tag"),f=a("el-option"),g=a("el-select"),y=a("el-card"),h=a("el-space");return d(),x(h,{direction:"vertical",size:"large"},{default:t(()=>[s(v,{style:i(o.value),size:"large",effect:"dark"},{default:t(()=>[C(" 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ")]),_:1},8,["style"]),s(y,{shadow:"never",style:i(o.value)},{header:t(()=>[m("div",E,[m("span",null,"当前角色："+V(l.value),1)])]),default:t(()=>[s(g,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),onChange:p},{default:t(()=>[(d(),z(B,null,S(_,e=>s(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{K as default};
