var X=Object.defineProperty;var y=(i,e,t)=>e in i?X(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var a=(i,e,t)=>(y(i,typeof e!="symbol"?e+"":e,t),t);import{e as x}from"./mitt-y5r8hZta.js";import{d as S,r as m,M as P,o as L,a as R,c as E,w as r,b as g,e as U,f as M,g as h,h as s,i as d,j as F,k as H,p as O,l as B,_ as A}from"./index-3m0KmRGm.js";class N{constructor(e){a(this,"canvas");a(this,"ctx");a(this,"images");a(this,"container");a(this,"positionX");a(this,"isDragging");a(this,"startX");a(this,"handleClick",e=>{this.drawTick(e)});a(this,"handleMouseDown",e=>{this.startDrag(e.clientX)});a(this,"handleMouseMove",e=>{this.drag(e.clientX)});a(this,"handleMouseUp",()=>{this.endDrag()});a(this,"handleTouchStart",e=>{e.touches.length===1&&(e.preventDefault(),this.startDrag(e.touches[0].clientX))});a(this,"handleTouchMove",e=>{e.touches.length===1&&(e.preventDefault(),this.drag(e.touches[0].clientX))});a(this,"handleTouchEnd",()=>{this.endDrag()});this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.images=[],this.positionX=0,this.isDragging=!1,this.startX=0,this.container=document.getElementById(e),this.container&&(this.container.appendChild(this.canvas),this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight)}addImage(e,t,n,o,f){const p=new Image;p.src=e,this.images.push({img:p,x:t,y:n,width:o,height:f}),this.render()}render(){this.clearRect(),this.images.forEach(e=>{const t=e.x+this.positionX;this.ctx.drawImage(e.img,t,e.y,e.width,e.height)})}clearImages(){this.images=[]}clearRect(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}drawTick(e){this.render();const t=Math.ceil((Math.abs(this.positionX)+e.offsetX)/this.images[0].width)-1,n=e.offsetX,o=e.offsetY;this.ctx.strokeStyle="red",this.ctx.lineWidth=4,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(n-10,o),this.ctx.lineTo(n,o+10),this.ctx.lineTo(n+15,o-10),this.ctx.stroke(),x.emit("imageInfo",this.images[t])}addListener(){this.canvas&&(this.canvas.addEventListener("click",this.handleClick),this.canvas.addEventListener("mousedown",this.handleMouseDown),this.canvas.addEventListener("mousemove",this.handleMouseMove),this.canvas.addEventListener("mouseup",this.handleMouseUp),this.canvas.addEventListener("touchstart",this.handleTouchStart),this.canvas.addEventListener("touchmove",this.handleTouchMove),this.canvas.addEventListener("touchend",this.handleTouchEnd))}startDrag(e){this.canvas.style.cursor="grabbing",this.canvas.style.userSelect="none",this.startX=e,this.isDragging=!0}drag(e){if(!this.isDragging)return;const t=e-this.startX,n=this.images.length*this.images[0].width-this.container.clientWidth;this.positionX=Math.max(Math.min(this.positionX+t,0),-n),this.startX=e,this.render()}endDrag(){this.canvas.style.cursor="grab",this.canvas.style.userSelect="auto",this.isDragging=!1}}var W={VITE_PORT:"8848",VITE_HIDE_HOME:"false",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"false",VITE_COMPRESSION:"none",BASE_URL:"/vue-pure-admin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const z=i=>(O("data-v-5b041a13"),i=i(),B(),i),j={class:"card-header"},Y={class:"font-medium"},G={class:"flex flex-wrap"},$=z(()=>h("div",{class:"el-upload__text"}," 可拖拽上传视频（默认截取16张帧图片，可在代码中自行修改） ",-1)),J={id:"canvas-container","element-loading-text":"温馨提示：可左右拖拽图片并单击选取所需的帧图片",class:"w-full h-[200px] overflow-hidden mt-6"},u=200,K=S({name:"VideoFrame",__name:"index",setup(i){const e=m(""),t=m(),n=m(),o=m(!1),{loadScript:f}=P(),{VITE_PUBLIC_PATH:p}=W,v=c=>`${p}wasm/${c}`,I=v("index.js"),T=v("capture.worker.js"),b=v("capture.worker.wasm");f({src:I}).then(c=>{c[0].message==="加载成功"&&(n.value=cheetahCapture.initCapture({workerPath:T,wasmPath:b}))}),L(()=>{t.value=new N("canvas-container"),x.on("imageInfo",c=>e.value=c.img.src)});function k(c){return e.value="",o.value=!0,t.value.clearImages(),n.value.then(w=>{w.capture({file:c,info:16,onChange:(l,{url:_})=>{t.value.addImage(_,u*l.url.length,0,u,u)},onSuccess:()=>{t.value.addListener(),t.value.drawTick({offsetX:u/2,offsetY:u/2}),o.value=!1},onError:()=>{o.value=!1}})}),!1}return R(()=>{x.off("imageInfo")}),(c,w)=>{const l=g("el-link"),_=g("el-upload"),D=g("el-image"),V=g("el-card"),C=U("loading");return M(),E(V,{shadow:"never"},{header:r(()=>[h("div",j,[h("span",Y,[h("p",null,[s(" 基于自定义编译 "),d(l,{href:"https://github.com/FFmpeg/FFmpeg",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>[s(" FFmpeg ")]),_:1}),s(" 的截帧工具，支持MP4、MOV、AVI、WebM、MKV等主流格式，支持 H.264（AVC）、H.265（HEVC）、MPEG-2、MPEG-4、VP8、VP9、WMV3编码格式 ")]),s(" 当然还可以支持更多视频格式，只要FFmpeg支持的，按理都能支持，您也可参考 "),d(l,{href:"https://github.com/wanwu/cheetah-capture",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>[s(" cheetah-capture ")]),_:1}),s(" 和 "),d(l,{href:"https://github.com/jordiwang/web-capture",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>[s(" web-capture ")]),_:1}),s(" 修改并编译wasm等文件（强烈推荐在Ubuntu系统进行编译） "),h("p",null,[s(" mac系统推荐安装 "),d(l,{href:"https://github.com/utmapp/UTM",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>[s(" UTM ")]),_:1}),s(" 虚拟机，windows系统推荐安装VMware虚拟机 ")]),h("p",null,[s(" 当然这只是一个视频帧截取工具，如果您想要更多操作可以研究下 "),d(l,{href:"https://ffmpegwasm.netlify.app/",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:r(()=>[s(" ffmpeg.wasm ")]),_:1}),s(" ，它是基于 FFmpeg 的纯 WebAssembly / JavaScript 工具，可以在浏览器内进行视频和音频录制、转换和流式传输等，不过通过一些实践，对于时长较长的视频性能还是不太行，不过用于时长较短的短视频还是可以上生产的 ")])])])]),default:r(()=>[h("div",G,[d(_,{drag:"","show-file-list":!1,accept:".mp4,.mov,.avi,.webm,.mkv","before-upload":k},{default:r(()=>[$]),_:1}),e.value?(M(),E(D,{key:0,src:e.value,"preview-src-list":Array.of(e.value),class:"w-[180px] h-[180px] ml-2 rounded-[6px]"},null,8,["src","preview-src-list"])):F("",!0)]),H(h("div",J,null,512),[[C,o.value]])]),_:1})}}}),ee=A(K,[["__scopeId","data-v-5b041a13"]]);export{ee as default};
