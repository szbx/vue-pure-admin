import{u}from"./index-Z5BBDMVc.js";import{u as b}from"./hooks-gfek4MGg.js";import{d as h}from"./iphone-hX6N5AWM.js";import{d as j,B as d,c as k,w as t,b as a,f as l,g as o,i as n,m as v,x as f,h as x,t as w,F as g,p as B,l as C,_ as I}from"./index-3m0KmRGm.js";var F={pkg:{dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"2.0.9","@logicflow/core":"^1.2.18","@logicflow/extension":"^1.2.19","@pureadmin/descriptions":"^1.2.0","@pureadmin/table":"^3.0.0","@pureadmin/utils":"^2.1.1","@vueuse/core":"^10.7.1","@vueuse/motion":"^2.0.0","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","@zxcvbn-ts/core":"^3.0.4","animate.css":"^4.1.1",axios:"^1.6.3","china-area-data":"^5.0.1",cropperjs:"^1.6.1",dayjs:"^1.11.10",echarts:"^5.4.3","el-table-infinite-scroll":"^3.0.3","element-plus":"^2.4.4","intro.js":"^7.2.0","js-cookie":"^3.0.5",jsbarcode:"^3.11.6",localforage:"^1.10.0","md-editor-v3":"2.7.2","mint-filter":"^4.0.3",mitt:"^3.0.1",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.1.7","pinyin-pro":"^3.18.6",qrcode:"^1.5.3",qs:"^6.11.2","responsive-storage":"^2.2.0",sortablejs:"^1.15.1",swiper:"^11.0.5",typeit:"^8.8.0","v-contextmenu":"3.0.0","v3-infinite-loading":"^1.3.1","version-rocket":"^1.7.1",vue:"^3.4.3","vue-i18n":"^9.8.0","vue-json-pretty":"^2.3.0","vue-pdf-embed":"^1.2.1","vue-router":"^4.2.5","vue-tippy":"^6.4.1","vue-types":"^5.1.1","vue-virtual-scroller":"2.0.0-beta.8","vue-waterfall-plugin-next":"^2.3.1","vue3-danmaku":"^1.6.0",vuedraggable:"^4.1.0","wavesurfer.js":"^7.6.0",xgplayer:"^3.0.11",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^18.4.3","@commitlint/config-conventional":"^18.4.3","@commitlint/types":"^18.4.3","@eslint/js":"^8.56.0","@faker-js/faker":"^8.3.1","@iconify-icons/ep":"^1.2.12","@iconify-icons/ri":"^1.2.10","@iconify/vue":"^4.1.1","@intlify/unplugin-vue-i18n":"^2.0.0","@pureadmin/theme":"^3.2.0","@types/intro.js":"^5.1.5","@types/js-cookie":"^3.0.6","@types/node":"^20.10.6","@types/nprogress":"^0.2.3","@types/qrcode":"^1.5.5","@types/qs":"^6.9.11","@types/sortablejs":"^1.15.7","@typescript-eslint/eslint-plugin":"^6.17.0","@typescript-eslint/parser":"^6.17.0","@vitejs/plugin-vue":"^5.0.2","@vitejs/plugin-vue-jsx":"^3.1.0",autoprefixer:"^10.4.16",cloc:"^2.11.0",cssnano:"^6.0.2",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-define-config":"^2.1.0","eslint-plugin-prettier":"^5.1.2","eslint-plugin-vue":"^9.19.2",husky:"^8.0.3","lint-staged":"^15.2.0",picocolors:"^1.0.0",postcss:"^8.4.32","postcss-html":"^1.5.0","postcss-import":"^15.1.0","postcss-scss":"^4.0.9",prettier:"^3.1.1",rimraf:"^5.0.5","rollup-plugin-visualizer":"^5.12.0",sass:"^1.69.6",stylelint:"^16.1.0","stylelint-config-recess-order":"^4.4.0","stylelint-config-recommended-vue":"^1.5.0","stylelint-config-standard-scss":"^12.0.0","stylelint-prettier":"^5.0.0",svgo:"^3.2.0",tailwindcss:"^3.4.0",typescript:"^5.3.3",vite:"^5.0.10","vite-plugin-cdn-import":"^0.3.5","vite-plugin-compression":"^0.5.1","vite-plugin-fake-server":"^2.0.1","vite-plugin-remove-console":"^2.2.0","vite-plugin-router-warn":"^1.0.0","vite-svg-loader":"^5.1.0","vue-eslint-parser":"^9.3.2","vue-tsc":"^1.8.27"},name:"vue-pure-admin",version:"4.5.0"},lastBuildTime:"2024-01-02 19:53:48"};const _=i=>(B("data-v-ab6caab2"),i=i(),C(),i),S=_(()=>o("div",{class:"card-header"},[o("span",{class:"font-medium"},"时间线")],-1)),T={class:"flex"},V=_(()=>o("div",{class:"message"}," vue-pure-admin是基于Vue3.0+TypeScript+Vite+Element-Plus编写的一套后台管理系统 ",-1)),q=j({name:"TimeLine",__name:"timeline",setup(i){const{lastBuildTime:s}=F,c=[{content:"支持圆点闪动",timestamp:s,icon:d(u())},{content:"支持方形闪动",timestamp:s,icon:d(u({borderRadius:0,background:"#67C23A"}))},{content:"支持默认颜色",timestamp:s},{content:"支持自定义颜色",timestamp:s,color:"#F56C6C"},{content:"支持自定义图标",timestamp:s,color:"transparent",icon:b(h,{color:"#0bbd87"})}];return(N,R)=>{const p=a("el-timeline-item"),m=a("el-timeline"),y=a("el-card");return l(),k(y,{shadow:"never"},{header:t(()=>[S]),default:t(()=>[o("div",T,[n(m,null,{default:t(()=>[(l(),v(g,null,f(c,(e,r)=>n(p,{key:r,icon:e.icon,color:e.color,timestamp:e.timestamp},{default:t(()=>[x(w(e.content),1)]),_:2},1032,["icon","color","timestamp"])),64))]),_:1}),n(m,{class:"pl-40"},{default:t(()=>[(l(),v(g,null,f(c,(e,r)=>n(p,{key:r,icon:e.icon,color:e.color,timestamp:e.timestamp,placement:"bottom"},{default:t(()=>[V]),_:2},1032,["icon","color","timestamp"])),64))]),_:1})])]),_:1})}}}),E=I(q,[["__scopeId","data-v-ab6caab2"]]);export{E as default};
