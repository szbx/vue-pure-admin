var F=(b,V,d)=>new Promise((_,p)=>{var r=n=>{try{i(d.next(n))}catch(m){p(m)}},u=n=>{try{i(d.throw(n))}catch(m){p(m)}},i=n=>n.done?_(n.value):Promise.resolve(n.value).then(r,u);i((d=d.apply(b,V)).next())});import{d as L,r as c,Y as g,c as R,w as t,b as s,f as C,i as a,h as v,m as j,x as I,t as M,F as P,q as Y}from"./index-3m0KmRGm.js";const A=L({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:visible"],setup(b,{emit:V}){const d=[{label:"网关",value:1},{label:"人工智能",value:2},{label:"CVM",value:3},{label:"防火墙",value:4},{label:"未知",value:5}],_=b,p=c(),r=c(!1),u=c(_.data),i=c(""),n=o=>F(this,null,function*(){o&&(yield o.validate(e=>{e&&(Y("提交成功",{type:"success"}),r.value=!1,m(o))}))}),m=o=>{o&&o.resetFields()},x=()=>{r.value=!1,m(p.value)},U=V;g(()=>r.value,o=>{U("update:visible",o)}),g(()=>_.visible,o=>{r.value=o}),g(()=>_.data,o=>{u.value=o});const B={name:[{required:!0,message:"请输入产品名称",trigger:"blur"}]};return(o,e)=>{const y=s("el-input"),f=s("el-form-item"),w=s("el-radio"),D=s("el-radio-group"),N=s("el-option"),O=s("el-select"),S=s("el-form"),k=s("el-button"),T=s("el-dialog");return C(),R(T,{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=l=>r.value=l),title:"新建产品",width:680,draggable:"","before-close":x},{footer:t(()=>[a(k,{onClick:x},{default:t(()=>[v("取消")]),_:1}),a(k,{type:"primary",onClick:e[5]||(e[5]=l=>n(p.value))},{default:t(()=>[v(" 确定 ")]),_:1})]),default:t(()=>[a(S,{ref_key:"ruleFormRef",ref:p,model:u.value,rules:B,"label-width":"100px"},{default:t(()=>[a(f,{label:"产品名称",prop:"name"},{default:t(()=>[a(y,{modelValue:u.value.name,"onUpdate:modelValue":e[0]||(e[0]=l=>u.value.name=l),style:{width:"480px"},placeholder:"请输入产品名称"},null,8,["modelValue"])]),_:1}),a(f,{label:"产品状态",prop:"status"},{default:t(()=>[a(D,{modelValue:u.value.status,"onUpdate:modelValue":e[1]||(e[1]=l=>u.value.status=l)},{default:t(()=>[a(w,{label:"0"},{default:t(()=>[v("已停用")]),_:1}),a(w,{label:"1"},{default:t(()=>[v("已启用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(f,{label:"产品描述",prop:"description"},{default:t(()=>[a(y,{modelValue:u.value.description,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value.description=l),style:{width:"480px"},placeholder:"请输入产品描述"},null,8,["modelValue"])]),_:1}),a(f,{label:"产品类型",prop:"type"},{default:t(()=>[a(O,{modelValue:u.value.type,"onUpdate:modelValue":e[3]||(e[3]=l=>u.value.type=l),clearable:"",style:{width:"480px"}},{default:t(()=>[(C(),j(P,null,I(d,(l,q)=>a(N,{key:q,value:l.value,label:l.label},{default:t(()=>[v(M(l.label),1)]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:"备注",prop:"mark"},{default:t(()=>[a(y,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=l=>i.value=l),type:"textarea",style:{width:"480px"},placeholder:"请输入内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{A as _};
