var Be=Object.defineProperty,Ve=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var N=Math.pow,ue=(r,e,t)=>e in r?Be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,I=(r,e)=>{for(var t in e||(e={}))Xe.call(e,t)&&ue(r,t,e[t]);if(le)for(var t of le(e))Ke.call(e,t)&&ue(r,t,e[t]);return r},j=(r,e)=>Ve(r,Ze(e));var B=(r,e,t)=>new Promise((s,n)=>{var a=o=>{try{c(t.next(o))}catch(u){n(u)}},i=o=>{try{c(t.throw(o))}catch(u){n(u)}},c=o=>o.done?s(o.value):Promise.resolve(o.value).then(a,i);c((t=t.apply(r,e)).next())});import{aj as X,r as A,E as Je,Y as Qe,d4 as et,o as tt,dI as he,i as C,b as K,dK as st,dw as nt,dz as rt,q as F,dJ as at,b8 as it,a5 as V,N as J,dL as ot,dM as ct,dN as lt,dO as ut,F as ht}from"./index-3m0KmRGm.js";import{_ as dt}from"./role.vue_vue_type_script_setup_true_lang-4XKqfWPs.js";import{_ as ft}from"./index.vue_vue_type_script_setup_true_lang-8cuQaurc.js";import{_ as gt}from"./upload.vue_vue_type_script_setup_true_lang-csQPJb6R.js";import{u as pt}from"./hooks-Tx12hwjm.js";import{g as mt,b as bt,c as yt,d as Mt}from"./system-AAo4coRS.js";import"./index-xu7POZ_p.js";import"./index-qkER60cN.js";const te=(r,e)=>r.push.apply(r,e),U=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),de=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var vt={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const fe=2050,ge=1e3,xt=vt,kt=10,St=1e4,ve=10,xe=50,ke=20,Se=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Et=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Dt=/^[A-Z\xbf-\xdf]+$/,Ee=/^[^a-z\xdf-\xff]+$/,Tt=/^[a-z\xdf-\xff]+$/,At=/^[^A-Z\xbf-\xdf]+$/,It=/[a-z\xdf-\xff]/,Ct=/[A-Z\xbf-\xdf]/,Rt=/[^A-Za-z\xbf-\xdf]/gi,wt=/^\d+$/,ne=new Date().getFullYear(),Pt={recentYear:/19\d\d|200\d|201\d|202\d/g},De=[" ",",",";",":","|","/","\\","_",".","-"],Lt=De.length;class jt{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return U(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),c=s.exec(i);if(c!=null){const o=this.mapIntegersToDayMonthYear([parseInt(c[1],10),parseInt(c[3],10),parseInt(c[4],10)]);o!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:c[2],year:o.year,month:o.month,day:o.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-ne);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const c=e.slice(a,+i+1||9e9);if(s.exec(c)){const o=[],u=c.length;if(xt[u].forEach(([p,b])=>{const y=this.mapIntegersToDayMonthYear([parseInt(c.slice(0,p),10),parseInt(c.slice(p,b),10),parseInt(c.slice(b),10)]);y!=null&&o.push(y)}),o.length>0){let p=o[0],b=n(o[0]);o.slice(1).forEach(y=>{const g=n(y);g<b&&(p=y,b=g)}),t.push({pattern:"date",token:c,i:a,j:i,separator:"",year:p.year,month:p.month,day:p.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const c=e[a];if(c>99&&c<ge||c>fe)return null;c>31&&(s+=1),c>12&&(t+=1),c<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(ge<=a&&a<=fe){const c=this.mapIntegersToDayMonth(i);return c!=null?{year:a,month:c.month,day:c.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],c=this.mapIntegersToDayMonth(i);if(c!=null)return{year:this.twoToFourDigitYear(a),month:c.month,day:c.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const w=new Uint32Array(65536),Ot=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let a=-1,i=0,c=t,o=t;for(;o--;)w[r.charCodeAt(o)]|=1<<o;for(o=0;o<s;o++){let u=w[e.charCodeAt(o)];const d=u|i;u|=(u&a)+a^a,i|=~(u|a),a&=u,i&n&&c++,a&n&&c--,i=i<<1|1,a=a<<1|~(d|i),i&=d}for(o=t;o--;)w[r.charCodeAt(o)]=0;return c},_t=(r,e)=>{const t=e.length,s=r.length,n=[],a=[],i=Math.ceil(t/32),c=Math.ceil(s/32);for(let g=0;g<i;g++)a[g]=-1,n[g]=0;let o=0;for(;o<c-1;o++){let g=0,M=-1;const D=o*32,v=Math.min(32,s)+D;for(let m=D;m<v;m++)w[r.charCodeAt(m)]|=1<<m;for(let m=0;m<t;m++){const k=w[e.charCodeAt(m)],S=a[m/32|0]>>>m&1,T=n[m/32|0]>>>m&1,Y=k|g,G=((k|T)&M)+M^M|k|T;let L=g|~(G|M),_=M&G;L>>>31^S&&(a[m/32|0]^=1<<m),_>>>31^T&&(n[m/32|0]^=1<<m),L=L<<1|S,_=_<<1|T,M=_|~(Y|L),g=L&Y}for(let m=D;m<v;m++)w[r.charCodeAt(m)]=0}let u=0,d=-1;const p=o*32,b=Math.min(32,s-p)+p;for(let g=p;g<b;g++)w[r.charCodeAt(g)]|=1<<g;let y=s;for(let g=0;g<t;g++){const M=w[e.charCodeAt(g)],D=a[g/32|0]>>>g&1,v=n[g/32|0]>>>g&1,m=M|u,k=((M|v)&d)+d^d|M|v;let S=u|~(k|d),T=d&k;y+=S>>>s-1&1,y-=T>>>s-1&1,S>>>31^D&&(a[g/32|0]^=1<<g),T>>>31^v&&(n[g/32|0]^=1<<g),S=S<<1|D,T=T<<1|v,d=T|~(m|S),u=S&m}for(let g=p;g<b;g++)w[r.charCodeAt(g)]=0;return y},Nt=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?Ot(r,e):_t(r,e)},Ut=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},Wt=(r,e,t)=>{let s=0;const n=Object.keys(e).find(a=>{const i=Ut(r,a,t);if(Math.abs(r.length-a.length)>i)return!1;const c=Nt(r,a),o=c<=i;return o&&(s=c),o});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var pe={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},Q={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class ${constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new $([...this.parents,s]));let n=this.children.get(s);for(let a=1;a<e.length;a+=1){const i=e.charAt(a);n.hasChild(i)||n.addChild(i),n=n.getChild(i)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new $([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var me=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class zt{constructor(){this.matchers={},this.l33tTable=pe,this.trieNodeRoot=me(pe,new $),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=Q,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=me(e.l33tTable,new $)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(Q).forEach(s=>{if(s in e){const n=s;Object.keys(Q[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=de(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),de(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]?console.info(`Matcher ${e} already exists`):this.matchers[e]=t}}const f=new zt;class Ft{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>j(I({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class $t{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const a=this.substr.charAt(n);if(s=s.getChild(a),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:a,lastSubLetter:i,consecutiveSubCount:c}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length){e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:a});return}const o=[...this.getAllPossibleSubsAtIndex(s)];let u=!1;for(let d=s+o.length-1;d>=s;d-=1){const p=o[d-s];if(p.isTerminal()){if(i===p.parents.join("")&&c>=3)continue;u=!0;const b=p.subs;for(const y of b){this.buffer.push(y);const g=a.concat({i:n,letter:y,substitution:p.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:d+1,subIndex:n+y.length,changes:g,lastSubLetter:p.parents.join(""),consecutiveSubCount:i===p.parents.join("")?c+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!u){const d=this.substr.charAt(s);this.buffer.push(d),this.helper({onlyFullSub:e,isFullSub:t&&!u,index:s+1,subIndex:n+1,changes:a,lastSubLetter:i,consecutiveSubCount:c}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}const Yt=(r,e,t)=>new $t({substr:r,limit:e,trieRoot:t}).getAll(),Gt=(r,e,t)=>{const n=r.changes.filter(u=>u.i<e).reduce((u,d)=>u-d.letter.length+d.substitution.length,e),a=r.changes.filter(u=>u.i>=e&&u.i<=t),i=a.reduce((u,d)=>u-d.letter.length+d.substitution.length,t-e+n),c=[],o=[];return a.forEach(u=>{c.findIndex(p=>p.letter===u.letter&&p.substitution===u.substitution)<0&&(c.push({letter:u.letter,substitution:u.substitution}),o.push(`${u.substitution} -> ${u.letter}`))}),{i:n,j:i,subs:c,subDisplay:o.join(", ")}};class qt{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,a])=>n==="subs"||a===t[n]))}match({password:e}){const t=[],s=Yt(e,f.l33tMaxSubstitutions,f.trieNodeRoot);let n=!1,a=!0;return s.forEach(i=>{if(n)return;const c=this.defaultMatch({password:i.password,useLevenshtein:a});a=!1,c.forEach(o=>{n||(n=o.i===0&&o.j===e.length-1);const u=Gt(i,o.i,o.j),d=e.slice(u.i,+u.j+1||9e9),p=I(j(I({},o),{l33t:!0,token:d}),u),b=this.isAlreadyIncluded(t,p);d.toLowerCase()!==o.matchedWord&&!b&&t.push(p)})}),t.filter(i=>i.token.length>1)}}class Ht{constructor(){this.l33t=new qt(this.defaultMatch),this.reverse=new Ft(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return U(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,a=e.toLowerCase();return Object.keys(f.rankedDictionaries).forEach(i=>{const c=f.rankedDictionaries[i],o=f.rankedDictionariesMaxWordSize[i],u=Math.min(o,n);for(let d=0;d<n;d+=1){const p=Math.min(d+u,n);for(let b=d;b<p;b+=1){const y=a.slice(d,+b+1||9e9),g=y in c;let M={};const D=d===0&&b===n-1;f.useLevenshteinDistance&&D&&!g&&t&&(M=Wt(y,c,f.levenshteinThreshold));const v=Object.keys(M).length!==0;if(g||v){const m=v?M.levenshteinDistanceEntry:y,k=c[m];s.push(I({pattern:"dictionary",i:d,j:b,token:e.slice(d,+b+1||9e9),matchedWord:y,rank:k,dictionaryName:i,reversed:!1,l33t:!1},M))}}}}),s}}class Bt{match({password:e,regexes:t=Pt}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;let i;for(;i=a.exec(e);)if(i){const c=i[0];s.push({pattern:"regex",token:c,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),U(s)}}var O={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},Vt=({token:r})=>{let e=N(kt,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=ve+1:t=xe+1,Math.max(e,t)},Zt=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-ne),ke)*365;return e&&(s*=4),s};const Xt=r=>{const e=r.split(""),t=e.filter(i=>i.match(Ct)).length,s=e.filter(i=>i.match(It)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=O.nCk(t+s,i);return n};var Kt=r=>{const e=r.replace(Rt,"");if(e.match(At)||e.toLowerCase()===e)return 1;const t=[Se,Et,Ee],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return Xt(e)};const be=(r,e)=>{let t=0,s=r.indexOf(e);for(;s>=0;)t+=1,s=r.indexOf(e,s+e.length);return t},Jt=({sub:r,token:e})=>{const t=e.toLowerCase(),s=be(t,r.substitution),n=be(t,r.letter);return{subbedCount:s,unsubbedCount:n}};var Qt=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:a,unsubbedCount:i}=Jt({sub:n,token:t});if(a===0||i===0)s*=2;else{const c=Math.min(i,a);let o=0;for(let u=1;u<=c;u+=1)o+=O.nCk(i+a,u);s*=o}}),s},es=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:a})=>{const i=r,c=Kt(n),o=Qt({l33t:t,subs:s,token:n}),u=e&&2||1;let d;return a==="diceware"?d=N(6,5)/2:d=i*c*o*u,{baseGuesses:i,uppercaseVariations:c,l33tVariations:o,calculation:d}},ts=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return N(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-ne),ke)}return 0},ss=({baseGuesses:r,repeatCount:e})=>r*e,ns=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const rs=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},as=({token:r,graph:e,turns:t})=>{const s=Object.keys(f.graphs[e]).length,n=rs(f.graphs[e]);let a=0;const i=r.length;for(let c=2;c<=i;c+=1){const o=Math.min(t,c-1);for(let u=1;u<=o;u+=1)a+=O.nCk(c-1,u-1)*s*N(n,u)}return a};var is=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=as({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let c=1;c<=Math.min(t,a);c+=1)i+=O.nCk(t+a,c);n*=i}}return Math.round(n)},os=()=>Lt;const cs=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=ve:t=xe),t},ye={bruteforce:Vt,date:Zt,dictionary:es,regex:ts,repeat:ss,sequence:ns,spatial:is,separator:os},ls=(r,e)=>ye[r]?ye[r](e):f.matchers[r]&&"scoring"in f.matchers[r]?f.matchers[r].scoring(e):0;var us=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=cs(r,e),n=ls(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return j(I(I({},r),t),{guesses:i,guessesLog10:O.log10(i)})};const E={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=us(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=O.factorial(e)*n;this.excludeAdditive||(a+=N(St,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(c=>{const o=this.optimal.g[t][c];parseInt(c,10)<=e&&o<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const c=a[i];c<n&&(s=parseInt(i,10),n=c)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var se={mostGuessableMatchSequence(r,e,t=!1){E.password=r,E.excludeAdditive=t;const s=r.length;let n=E.fillArray(s,"array");e.forEach(o=>{n[o.j].push(o)}),n=n.map(o=>o.sort((u,d)=>u.i-d.i)),E.optimal={m:E.fillArray(s,"object"),pi:E.fillArray(s,"object"),g:E.fillArray(s,"object")};for(let o=0;o<s;o+=1)n[o].forEach(u=>{u.i>0?Object.keys(E.optimal.m[u.i-1]).forEach(d=>{E.update(u,parseInt(d,10)+1)}):E.update(u,1)}),E.bruteforceUpdate(o);const a=E.unwind(s),i=a.length,c=this.getGuesses(r,i);return{password:r,guesses:c,guessesLog10:O.log10(c),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=E.optimal.g[t-1][e],s}};class hs{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),c=this.getLazyMatch(e,n);if(i==null)break;const{match:o,baseToken:u}=this.setMatchToken(i,c);if(o){const d=o.index+o[0].length-1,p=this.getBaseGuesses(u,t);s.push(this.normalizeMatch(u,d,o,p)),n=d+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>j(I({},a),{baseGuesses:i})):j(I({},a),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>se.mostGuessableMatchSequence(e,a).guesses):se.mostGuessableMatchSequence(e,s).guesses}}class ds{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const c=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=c),c!==n){const o=i-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=c}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const c=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:u}=this.getSequence(c);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:u,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Tt.test(e)?(t="lower",s=26):Dt.test(e)?(t="upper",s=26):wt.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class fs{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(f.graphs).forEach(s=>{const n=f.graphs[s];te(t,this.helper(e,n,s))}),U(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const c=e.length;for(;i<c-1;){let o=i+1,u=null,d=0;for(n=this.checkIfShifted(s,e,i);;){const p=e.charAt(o-1),b=t[p]||[];let y=!1,g=-1,M=-1;if(o<c){const D=e.charAt(o),v=b.length;for(let m=0;m<v;m+=1){const k=b[m];if(M+=1,k){const S=k.indexOf(D);if(S!==-1){y=!0,g=M,S===1&&(n+=1),u!==g&&(d+=1,u=g);break}}}}if(y)o+=1;else{o-i>2&&a.push({pattern:"spatial",i,j:o-1,token:e.slice(i,o),graph:s,turns:d,shiftedCount:n}),i=o;break}}}return a}}const gs=new RegExp(`[${De.join("")}]`);class Z{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>gs.test(n)).reduce((n,a)=>{const i=n.get(a);return i?n.set(a,i+1):n.set(a,1),n},new Map).entries()].sort(([n,a],[i,c])=>c-a);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=Z.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=Z.getSeparatorRegex(s);for(const a of e.matchAll(n)){if(a.index===void 0)continue;const i=a.index+1;t.push({pattern:"separator",token:s,i,j:i})}return t}}class ps{constructor(){this.matchers={date:jt,dictionary:Ht,regex:Bt,repeat:hs,sequence:ds,spatial:fs,separator:Z}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(f.matchers)].forEach(a=>{if(!this.matchers[a]&&!f.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:f.matchers[a].Matching,o=new i().match({password:e,omniMatch:this});o instanceof Promise?(o.then(u=>{te(t,u)}),s.push(o)):te(t,o)}),s.length>0?new Promise((a,i)=>{Promise.all(s).then(()=>{a(U(t))}).catch(c=>{i(c)})}):U(t)}}const Te=1,Ae=Te*60,Ie=Ae*60,Ce=Ie*24,Re=Ce*31,we=Re*12,ms=we*100,ee={second:Te,minute:Ae,hour:Ie,day:Ce,month:Re,year:we,century:ms};class bs{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=f.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(ee),a=n.findIndex(i=>e<ee[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/ee[t]):t="ltSecond"),this.translate(t,s)}}var ys=()=>null,Ms=()=>({warning:f.translations.warnings.dates,suggestions:[f.translations.suggestions.dates]});const vs=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=f.translations.warnings.topTen:r.rank<=100?t=f.translations.warnings.topHundred:t=f.translations.warnings.common:r.guessesLog10<=4&&(t=f.translations.warnings.similarToCommon),t},xs=(r,e)=>{let t=null;return e&&(t=f.translations.warnings.wordByItself),t},ks=(r,e)=>e?f.translations.warnings.namesByThemselves:f.translations.warnings.commonNames,Ss=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=vs(r,e):s.includes("wikipedia")?t=xs(r,e):n?t=ks(r,e):s==="userInputs"&&(t=f.translations.warnings.userInputs),t};var Es=(r,e)=>{const t=Ss(r,e),s=[],n=r.token;return n.match(Se)?s.push(f.translations.suggestions.capitalization):n.match(Ee)&&n.toLowerCase()!==n&&s.push(f.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(f.translations.suggestions.reverseWords),r.l33t&&s.push(f.translations.suggestions.l33t),{warning:t,suggestions:s}},Ds=r=>r.regexName==="recentYear"?{warning:f.translations.warnings.recentYears,suggestions:[f.translations.suggestions.recentYears,f.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Ts=r=>{let e=f.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=f.translations.warnings.simpleRepeat),{warning:e,suggestions:[f.translations.suggestions.repeated]}},As=()=>({warning:f.translations.warnings.sequences,suggestions:[f.translations.suggestions.sequences]}),Is=r=>{let e=f.translations.warnings.keyPattern;return r.turns===1&&(e=f.translations.warnings.straightRow),{warning:e,suggestions:[f.translations.suggestions.longerKeyboardPattern]}},Cs=()=>null;const Me={warning:null,suggestions:[]};class Rs{constructor(){this.matchers={bruteforce:ys,date:Ms,dictionary:Es,regex:Ds,repeat:Ts,sequence:As,spatial:Is,separator:Cs},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(f.translations.suggestions.useWords,f.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return Me;const s=f.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?a.suggestions.unshift(s):a={warning:null,suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):f.matchers[e.pattern]&&"feedback"in f.matchers[e.pattern]?f.matchers[e.pattern].feedback(e,t):Me}}const Pe=()=>new Date().getTime(),ws=(r,e,t)=>{const s=new Rs,n=new bs,a=se.mostGuessableMatchSequence(e,r),i=Pe()-t,c=n.estimateAttackTimes(a.guesses);return j(I(I({calcTime:i},a),c),{feedback:s.getFeedback(c.score,a.sequence)})},Ps=(r,e)=>(e&&f.extendUserInputsDictionary(e),new ps().match(r)),Ls=(r,e)=>{const t=Pe(),s=Ps(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return ws(s,r,t)};function Ys(r,e){const t=X({deptId:"",username:"",phone:"",status:""}),s=A(),n=A(),a=A([]),i=A(!0),c=A(),o=A({}),{switchStyle:u}=pt(),d=A(),p=A([]),b=A(!0),y=A(0),g=X({total:0,pageSize:10,currentPage:1,background:!0}),M=[{label:"勾选列",type:"selection",fixed:"left",reserveSelection:!0},{label:"用户编号",prop:"id",width:90},{label:"用户头像",prop:"avatar",cellRenderer:({row:l})=>C(K("el-image"),{fit:"cover","preview-teleported":!0,src:l.avatar,"preview-src-list":Array.of(l.avatar),class:"w-[24px] h-[24px] rounded-full align-middle"},null),width:90},{label:"用户名称",prop:"username",minWidth:130},{label:"用户昵称",prop:"nickname",minWidth:130},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:l,props:h})=>C(K("el-tag"),{size:h.size,type:l.sex===1?"danger":"",effect:"plain"},{default:()=>[l.sex===1?"女":"男"]})},{label:"部门",prop:"dept.name",minWidth:90},{label:"手机号码",prop:"phone",minWidth:90,formatter:({phone:l})=>st(l,{start:3,end:6})},{label:"状态",prop:"status",minWidth:90,cellRenderer:l=>{var h;return C(K("el-switch"),{size:l.props.size==="small"?"small":"default",loading:(h=o.value[l.index])==null?void 0:h.loading,modelValue:l.row.status,"onUpdate:modelValue":x=>l.row.status=x,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:u.value,onChange:()=>T(l)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:l})=>nt(l).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],D=Je(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),v=X({newPwd:""}),m=[{color:"#e74242",text:"非常弱"},{color:"#EFBD47",text:"弱"},{color:"#ffa500",text:"一般"},{color:"#1bbf1b",text:"强"},{color:"#008000",text:"非常强"}],k=A(),S=A([]);function T({row:l,index:h}){rt.confirm(`确认要<strong>${l.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${l.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{o.value[h]=Object.assign({},o.value[h],{loading:!0}),setTimeout(()=>{o.value[h]=Object.assign({},o.value[h],{loading:!1}),F("已成功修改用户状态",{type:"success"})},300)}).catch(()=>{l.status===0?l.status=1:l.status=0})}function Y(l){}function G(l){F(`您删除了用户编号为${l.id}的这条数据`,{type:"success"}),P()}function L(l){}function _(l){}function Le(l){y.value=l.length,r.value.setAdaptive()}function je(){y.value=0,r.value.getTableRef().clearSelection()}function Oe(){const l=r.value.getTableRef().getSelectionRows();F(`已删除用户编号为 ${at(l,"id")} 的数据`,{type:"success"}),r.value.getTableRef().clearSelection()}function P(){return B(this,null,function*(){i.value=!0;const{data:l}=yield yt(it(t));a.value=l.list,g.total=l.total,g.pageSize=l.pageSize,g.currentPage=l.currentPage,setTimeout(()=>{i.value=!1},500)})}const _e=l=>{l&&(l.resetFields(),t.deptId="",e.value.onTreeReset(),P())};function Ne({id:l,selected:h}){t.deptId=h?l:"",P()}function re(l){if(!l||!l.length)return;const h=[];for(let x=0;x<l.length;x++)l[x].disabled=l[x].status===0,re(l[x].children),h.push(l[x]);return h}function Ue(l="新增",h){var x,R,W,z,q,H,ae,ie,oe;V({title:`${l}用户`,props:{formInline:{title:l,higherDeptOptions:re(d.value),parentId:(x=h==null?void 0:h.dept.id)!=null?x:0,nickname:(R=h==null?void 0:h.nickname)!=null?R:"",username:(W=h==null?void 0:h.username)!=null?W:"",password:(z=h==null?void 0:h.password)!=null?z:"",phone:(q=h==null?void 0:h.phone)!=null?q:"",email:(H=h==null?void 0:h.email)!=null?H:"",sex:(ae=h==null?void 0:h.sex)!=null?ae:"",status:(ie=h==null?void 0:h.status)!=null?ie:1,remark:(oe=h==null?void 0:h.remark)!=null?oe:""}},width:"46%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>J(ft,{ref:s}),beforeSure:($e,{options:Ye})=>{const Ge=s.value.getRef(),qe=Ye.props.formInline;function ce(){F(`您${l}了用户名称为${qe.username}的这条数据`,{type:"success"}),$e(),P()}Ge.validate(He=>{He&&ce()})}})}function We(l){V({title:"裁剪、上传头像",width:"40%",draggable:!0,closeOnClickModal:!1,contentRenderer:()=>J(gt,{imgSrc:l.avatar,onCropper:h=>c.value=h}),beforeSure:h=>{h(),P()}})}Qe(v,({newPwd:l})=>k.value=et(l)?-1:Ls(l).score);function ze(l){V({title:`重置 ${l.username} 用户的密码`,width:"30%",draggable:!0,closeOnClickModal:!1,contentRenderer:()=>C(ht,null,[C(ot,{ref:n,model:v},{default:()=>[C(ct,{prop:"newPwd",rules:[{required:!0,message:"请输入新密码",trigger:"blur"}]},{default:()=>[C(lt,{clearable:!0,"show-password":!0,type:"password",modelValue:v.newPwd,"onUpdate:modelValue":h=>v.newPwd=h,placeholder:"请输入新密码"},null)]})]}),C("div",{class:"mt-4 flex"},[m.map(({color:h,text:x},R)=>C("div",{class:"w-[19vw]",style:{marginLeft:R!==0?"4px":0}},[C(ut,{striped:!0,"striped-flow":!0,duration:k.value===R?6:0,percentage:k.value>=R?100:0,color:h,"stroke-width":10,"show-text":!1},null),C("p",{class:"text-center",style:{color:k.value===R?h:""}},[x])]))])]),closeCallBack:()=>v.newPwd="",beforeSure:h=>{n.value.validate(x=>{x&&(F(`已成功重置 ${l.username} 用户的密码`,{type:"success"}),h(),P())})}})}function Fe(l){return B(this,null,function*(){var x,R,W,z;const h=(x=(yield Mt({userId:l.id})).data)!=null?x:[];V({title:`分配 ${l.username} 用户的角色`,props:{formInline:{username:(R=l==null?void 0:l.username)!=null?R:"",nickname:(W=l==null?void 0:l.nickname)!=null?W:"",roleOptions:(z=S.value)!=null?z:[],ids:h}},width:"400px",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>J(dt),beforeSure:(q,{options:H})=>{H.props.formInline,q()}})})}return tt(()=>B(this,null,function*(){b.value=!0,P();const{data:l}=yield mt();d.value=he(l),p.value=he(l),b.value=!1,S.value=(yield bt()).data})),{form:t,loading:i,columns:M,dataList:a,treeData:p,treeLoading:b,selectedNum:y,pagination:g,buttonClass:D,onSearch:P,resetForm:_e,onbatchDel:Oe,openDialog:Ue,onTreeSelect:Ne,handleUpdate:Y,handleDelete:G,handleUpload:We,handleReset:ze,handleRole:Fe,handleSizeChange:L,onSelectionCancel:je,handleCurrentChange:_,handleSelectionChange:Le}}export{Ys as useUser};
