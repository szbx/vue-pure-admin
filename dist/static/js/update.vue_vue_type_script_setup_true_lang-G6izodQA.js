var U=(k,s,d)=>new Promise((r,u)=>{var V=n=>{try{m(d.next(n))}catch(c){u(c)}},_=n=>{try{m(d.throw(n))}catch(c){u(c)}},m=n=>n.done?r(n.value):Promise.resolve(n.value).then(V,_);m((d=d.apply(k,s)).next())});import{M as f}from"./motion-_PqkcUqv.js";import{d as N,H as S,r as P,M as T,b as g,e as $,c as z,w as a,i as e,h as o,B as x,g as C,f as D,a4 as b,da as h,A as F,dt as I}from"./index-DuUQh2t8.js";import{u as R,a as M}from"./verifyCode-bvKGinaf.js";import{u as y}from"./hooks-30HOA0VR.js";import{d as B}from"./lock-fill-F0EFtWPf.js";import{d as A}from"./iphone-hX6N5AWM.js";const H={class:"w-full flex justify-between"},Q=N({__name:"update",setup(k){const{t:s}=S(),d=P(!1),r=T({phone:"",verifyCode:"",password:"",repeatPassword:""}),u=P(),{isDisabled:V,text:_}=R(),m=[{validator:(w,l,t)=>{l===""?t(new Error(b(h("login.passwordSureReg")))):r.password!==l?t(new Error(b(h("login.passwordDifferentReg")))):t()},trigger:"blur"}],n=w=>U(this,null,function*(){d.value=!0,w&&(yield w.validate((l,t)=>{if(l)setTimeout(()=>{F(b(h("login.passwordUpdateReg")),{type:"success"}),d.value=!1},2e3);else return d.value=!1,t}))});function c(){R().end(),I().SET_CURRENTPAGE(0)}return(w,l)=>{const t=g("el-input"),p=g("el-form-item"),v=g("el-button"),E=g("el-form");return $(),z(E,{ref_key:"ruleFormRef",ref:u,model:r,rules:e(M),size:"large"},{default:a(()=>[o(e(f),null,{default:a(()=>[o(p,{prop:"phone"},{default:a(()=>[o(t,{modelValue:r.phone,"onUpdate:modelValue":l[0]||(l[0]=i=>r.phone=i),clearable:"",placeholder:e(s)("login.phone"),"prefix-icon":e(y)(e(A))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:100},{default:a(()=>[o(p,{prop:"verifyCode"},{default:a(()=>[D("div",H,[o(t,{modelValue:r.verifyCode,"onUpdate:modelValue":l[1]||(l[1]=i=>r.verifyCode=i),clearable:"",placeholder:e(s)("login.smsVerifyCode"),"prefix-icon":e(y)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),o(v,{disabled:e(V),class:"ml-2",onClick:l[2]||(l[2]=i=>e(R)().start(u.value,"phone"))},{default:a(()=>[C(x(e(_).length>0?e(_)+e(s)("login.info"):e(s)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),o(e(f),{delay:150},{default:a(()=>[o(p,{prop:"password"},{default:a(()=>[o(t,{modelValue:r.password,"onUpdate:modelValue":l[3]||(l[3]=i=>r.password=i),clearable:"","show-password":"",placeholder:e(s)("login.password"),"prefix-icon":e(y)(e(B))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:200},{default:a(()=>[o(p,{rules:m,prop:"repeatPassword"},{default:a(()=>[o(t,{modelValue:r.repeatPassword,"onUpdate:modelValue":l[4]||(l[4]=i=>r.repeatPassword=i),clearable:"","show-password":"",placeholder:e(s)("login.sure"),"prefix-icon":e(y)(e(B))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(f),{delay:250},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",type:"primary",loading:d.value,onClick:l[5]||(l[5]=i=>n(u.value))},{default:a(()=>[C(x(e(s)("login.definite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),o(e(f),{delay:300},{default:a(()=>[o(p,null,{default:a(()=>[o(v,{class:"w-full",size:"default",onClick:c},{default:a(()=>[C(x(e(s)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{Q as _};
