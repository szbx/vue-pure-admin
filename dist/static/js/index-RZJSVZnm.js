import ee from"./tree-F6dCpmoC.js";import{useUser as oe}from"./hook-W2N_9Odj.js";import{R as te,D as le,P as ne}from"./refresh-v7C1j1DX.js";import{u as s}from"./hooks-gfek4MGg.js";import{d as ae}from"./admin-line-8g4DVr6a.js";import{d as re}from"./edit-pen-A29bH4uw.js";import{d as ie}from"./search-DTzpNWF3.js";import{d as se}from"./add-circle-line-ROzhCHIm.js";import{d as ce,r as _,b as a,e as de,f as R,m as D,i as o,u as e,g as h,w as t,h as i,t as me,k as pe,j as ue,as as g,_ as fe}from"./index-3m0KmRGm.js";import"./git-branch-line-zmPAFode.js";import"./more-2-fill-476mFkdN.js";import"./office-building-OE6SrNBX.js";import"./role.vue_vue_type_script_setup_true_lang-4XKqfWPs.js";import"./index-xu7POZ_p.js";import"./index.vue_vue_type_script_setup_true_lang-8cuQaurc.js";import"./hooks-Tx12hwjm.js";import"./upload.vue_vue_type_script_setup_true_lang-csQPJb6R.js";import"./index-qkER60cN.js";import"./system-AAo4coRS.js";import"./epTheme-H_5vdO_c.js";import"./sortable.esm-budB5lo5.js";const _e={width:24,height:24,body:'<path fill="currentColor" d="M3 19h18v2H3v-2ZM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485l-1.414 1.415L13 5.827Z"/>'},he=_e,ge={width:24,height:24,body:'<path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1ZM5 10v10h14V10H5Zm6 4h2v2h-2v-2Zm-4 0h2v2H7v-2Zm8 0h2v2h-2v-2Zm1-6V7a4 4 0 0 0-8 0v1h8Z"/>'},Ce=ge,ve={width:1024,height:1024,body:'<path fill="currentColor" d="M176 416a112 112 0 1 1 0 224a112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224z"/>'},ye=ve,be={class:"flex justify-between"},ke={class:"w-[calc(100%-200px)]"},xe={key:0,class:"bg-[var(--el-fill-color-light)] w-full h-[46px] mb-2 pl-4 flex items-center"},Ve={class:"flex-auto"},we={style:{"font-size":"var(--el-font-size-base)"},class:"text-[rgba(42,46,54,0.5)] dark:text-[rgba(220,220,242,0.5)]"},$e=ce({name:"User",__name:"index",setup(Se){const C=_(),v=_(),y=_(),{form:c,loading:b,columns:z,dataList:U,treeData:Z,treeLoading:L,selectedNum:k,pagination:P,buttonClass:u,onSearch:x,resetForm:M,onbatchDel:N,openDialog:V,onTreeSelect:T,handleUpdate:B,handleDelete:H,handleUpload:j,handleReset:I,handleRole:E,handleSizeChange:F,onSelectionCancel:q,handleCurrentChange:A,handleSelectionChange:G}=oe(y,C);return(Re,r)=>{const w=a("el-input"),p=a("el-form-item"),$=a("el-option"),J=a("el-select"),n=a("el-button"),K=a("el-form"),S=a("el-popconfirm"),f=a("el-dropdown-item"),O=a("el-dropdown-menu"),Q=a("el-dropdown"),W=a("pure-table"),X=de("motion-fade");return R(),D("div",be,[o(ee,{ref_key:"treeRef",ref:C,class:"min-w-[200px] mr-2",treeData:e(Z),treeLoading:e(L),onTreeSelect:e(T)},null,8,["treeData","treeLoading","onTreeSelect"]),h("div",ke,[o(K,{ref_key:"formRef",ref:v,inline:!0,model:e(c),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:t(()=>[o(p,{label:"用户名称：",prop:"username"},{default:t(()=>[o(w,{modelValue:e(c).username,"onUpdate:modelValue":r[0]||(r[0]=l=>e(c).username=l),placeholder:"请输入用户名称",clearable:"",class:"!w-[160px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"手机号码：",prop:"phone"},{default:t(()=>[o(w,{modelValue:e(c).phone,"onUpdate:modelValue":r[1]||(r[1]=l=>e(c).phone=l),placeholder:"请输入手机号码",clearable:"",class:"!w-[160px]"},null,8,["modelValue"])]),_:1}),o(p,{label:"状态：",prop:"status"},{default:t(()=>[o(J,{modelValue:e(c).status,"onUpdate:modelValue":r[2]||(r[2]=l=>e(c).status=l),placeholder:"请选择",clearable:"",class:"!w-[160px]"},{default:t(()=>[o($,{label:"已开启",value:"1"}),o($,{label:"已关闭",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(p,null,{default:t(()=>[o(n,{type:"primary",icon:e(s)(e(ie)),loading:e(b),onClick:e(x)},{default:t(()=>[i(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(n,{icon:e(s)(e(te)),onClick:r[3]||(r[3]=l=>e(M)(v.value))},{default:t(()=>[i(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(ne),{title:"用户管理（仅演示，操作后不生效）",columns:e(z),onRefresh:e(x)},{buttons:t(()=>[o(n,{type:"primary",icon:e(s)(e(se)),onClick:r[4]||(r[4]=l=>e(V)())},{default:t(()=>[i(" 新增用户 ")]),_:1},8,["icon"])]),default:t(({size:l,dynamicColumns:Y})=>[e(k)>0?pe((R(),D("div",xe,[h("div",Ve,[h("span",we," 已选 "+me(e(k))+" 项 ",1),o(n,{type:"primary",text:"",onClick:e(q)},{default:t(()=>[i(" 取消选择 ")]),_:1},8,["onClick"])]),o(S,{title:"是否确认删除?",onConfirm:e(N)},{reference:t(()=>[o(n,{type:"danger",text:"",class:"mr-1"},{default:t(()=>[i(" 批量删除 ")]),_:1})]),_:1},8,["onConfirm"])])),[[X]]):ue("",!0),o(W,{ref_key:"tableRef",ref:y,"row-key":"id",adaptive:"","align-whole":"center","table-layout":"auto",loading:e(b),size:l,data:e(U),columns:Y,pagination:e(P),paginationSmall:l==="small","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e(G),onPageSizeChange:e(F),onPageCurrentChange:e(A)},{operation:t(({row:d})=>[o(n,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(s)(e(re)),onClick:m=>e(V)("编辑",d)},{default:t(()=>[i(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(S,{title:`是否确认删除用户编号为${d.id}的这条数据`,onConfirm:m=>e(H)(d)},{reference:t(()=>[o(n,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(s)(e(le))},{default:t(()=>[i(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"]),o(Q,null,{dropdown:t(()=>[o(O,null,{default:t(()=>[o(f,null,{default:t(()=>[o(n,{class:g(e(u)),link:"",type:"primary",size:l,icon:e(s)(e(he)),onClick:m=>e(j)(d)},{default:t(()=>[i(" 上传头像 ")]),_:2},1032,["class","size","icon","onClick"])]),_:2},1024),o(f,null,{default:t(()=>[o(n,{class:g(e(u)),link:"",type:"primary",size:l,icon:e(s)(e(Ce)),onClick:m=>e(I)(d)},{default:t(()=>[i(" 重置密码 ")]),_:2},1032,["class","size","icon","onClick"])]),_:2},1024),o(f,null,{default:t(()=>[o(n,{class:g(e(u)),link:"",type:"primary",size:l,icon:e(s)(e(ae)),onClick:m=>e(E)(d)},{default:t(()=>[i(" 分配角色 ")]),_:2},1032,["class","size","icon","onClick"])]),_:2},1024)]),_:2},1024)]),default:t(()=>[o(n,{class:"ml-3 mt-[2px]",link:"",type:"primary",size:l,icon:e(s)(e(ye)),onClick:m=>e(B)(d)},null,8,["size","icon","onClick"])]),_:2},1024)]),_:2},1032,["loading","size","data","columns","pagination","paginationSmall","header-cell-style","onSelectionChange","onPageSizeChange","onPageCurrentChange"])]),_:1},8,["columns","onRefresh"])])])}}}),Qe=fe($e,[["__scopeId","data-v-5a5be40f"]]);export{Qe as default};
