const e=/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,t=t=>!!t&&e.test(t),n={getBirthday:e=>{if(!t(e))throw new Error("参数错误");const n=e.substring(6,14);return[n.substring(0,4),n.substring(4,6),n.substring(6)].join("-")},getYear:e=>{if(!t(e))throw new Error("参数错误");const r=n.getBirthday(e);return globalThis.parseInt(r.split("-")[0])},getMonth:e=>{if(!t(e))throw new Error("参数错误");const r=n.getBirthday(e);return globalThis.parseInt(r.split("-")[1])},getDate:e=>{if(!t(e))throw new Error("参数错误");const r=n.getBirthday(e);return globalThis.parseInt(r.split("-")[2])},getAge:e=>{if(!t(e))throw new Error("参数错误");const r=n.getYear(e),i=n.getMonth(e),l=n.getDate(e),o=new Date,s=o.getFullYear(),a=o.getMonth()+1,d=o.getDate();let c=s-r;return(a<i||a===i&&d<l)&&c--,c},getSexNum:e=>{if(!t(e))throw new Error("参数错误");const n=e.charAt(16);return globalThis.parseInt(n)%2==1?1:0},getSex:e=>1===n.getSexNum(e)?"男":"女",getInfo:e=>{if(!t(e))throw new Error("参数错误");e.substring(0,2),e.substring(2,4),e.substring(4,6),e.substring(14,16),e.charAt(17);const r={};return r.birthday=n.getBirthday(e),r.year=n.getYear(e),r.month=n.getMonth(e),r.date=n.getDate(e),r.age=n.getAge(e),r.sex=n.getSex(e),r.sexNum=n.getSexNum(e),r}},r=Object.prototype.toString,i=e=>"[object Object]"===r.call(e),l={deepCopy:e=>JSON.parse(JSON.stringify(e)),copyValue:(e,t)=>{if(!l.isObject(e)||!l.isObject(t))throw new Error("参数异常");Object.keys(e).forEach((n=>{Reflect.has(t,n)&&(e[n]=t[n])}))},isObject:i,isEmpty:e=>i(e)&&0===Object.keys(e).length,emptyStrToNull:e=>{if(!i(e))return e;const t=JSON.parse(JSON.stringify(e));if("object"==typeof t)for(let e of Object.keys(t))"string"==typeof t[e]&&""===t[e]&&(t[e]=null);return t}},o=["year","month","day","hour","minute","second"],s={format:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss",n=new Date(e);if("string"==typeof e&&e.length==="YYYY-MM-DD".length&&n.setHours(0,0,0,0),!(n instanceof Date))throw new Error("参数有误");if(t){let e=o.find((e=>e===t));if(e)switch(e){case"year":t="YYYY";break;case"month":t="YYYY-MM";break;case"day":t="yyyy-MM-dd";break;case"hour":t="YYYY-MM-DD HH";break;case"minute":t="YYYY-MM-DD HH:mm";break;default:t="YYYY-MM-DD HH:mm:ss"}}else t="YYYY-MM-DD HH:mm:ss";let r=n.getFullYear();r<1900&&(r+=1900);let i=n.getMonth()+1;i<10&&(i="0"+i);let l=n.getDate();l<10&&(l="0"+l);let s=n.getHours();s<10&&(s="0"+s);let a=n.getMinutes();a<10&&(a="0"+a);let d=n.getSeconds();d<10&&(d="0"+d);const c=r+"-"+i+"-"+l+" "+s+":"+a+":"+d,h=c.split(" "),g=h[0].split("-"),u=h[1].split(".")[0].split(":"),f=/yyyy|YYYY/,p=/MM/,m=/dd|DD/,x=/HH/,y=/mm/,w=/ss/;return t.replace(f,g[0]).replace(p,g[1]).replace(m,g[2]).replace(x,u[0]).replace(y,u[1]).replace(w,u[2])},cnWeek:e=>{if("string"==typeof e&&(e=new Date(e)),!(e instanceof Date))throw new Error("参数有误");const t=e.getDay();return new Map([[0,"日"],[1,"一"],[2,"二"],[3,"三"],[4,"四"],[5,"五"],[6,"六"]]).get(t)},realMonth:e=>{if("string"==typeof e&&(e=new Date(e)),!(e instanceof Date))throw new Error("参数有误");return e.getMonth()+1},withRealMonth:(e,t)=>{if(t<1||t>31)throw new Error("日期越界");if("string"==typeof e&&(e=new Date(e)),!(e instanceof Date))throw new Error("参数有误");let n=new Date(e);return n.setMonth(t-1),n}},a={uuid:()=>{const e="0123456789abcdef",t=e.length;return"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g,(n=>e.charAt(Math.floor(Math.random()*t))))},uuid32:()=>a.uuid().replace(/-/g,"")},d=(e,t)=>{if(!e)return!1;const n=e.lastIndexOf(".");if(n<0)return!1;const r=e.substring(n);return!!t.includes(r.toLowerCase())},c={isImg:e=>d(e,[".jpg",".jpeg",".png",".gif"]),isPdf:e=>d(e,[".pdf"])},h="id",g="parentId",u="children",f=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u;const l=t.filter((t=>t[r]===e[n]));if(l.length&&(e[i]=l),0!==l.length)for(let e of l)f(e,t,n,r,i)},p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const{childrenField:r=u}=t;return e.forEach((e=>{n.push(e);const i=e[r];i&&i.length&&p(i,t,n)})),n},m=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)throw new Error("id 参数错误");if(!t||!t.length)throw new Error("tree 参数错误");const{idFieldName:r=h,childrenFieldName:i=u}=n;let l=null;for(let n of t)n[r]===e&&(l=n);if(l)return l;for(let r of t)if(r.children&&r.children.length&&(l=m(e,r[i],n),l))return l;return l},x=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const{idField:i=h,parentIdField:l=g,childrenField:o=u}=n,s=m(e[l],t,{idFieldName:i,childrenFieldName:o});return s&&(r.push(s),x(s,t,n,r)),r},y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const{childrenField:r=u}=t;if(!e||!e[r])return n;const i=e[r];if(i&&i.length)for(let e of i)n.push(e),y(e,t,n);return n},w={toTree:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{idField:r=h,parentIdField:i=g,childrenField:l=u}=n;let o=e.filter((e=>e[i]===t));for(let t of o)f(t,e,r,i,l);return o},toList:p,findNode:m,ancestor:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{idField:r=h,childrenField:i=u}=n,l=m(e,t,{idFieldName:r,childrenFieldName:i});return l?x(l,t,n):[]},descendant:y},b=Object.prototype.toString,Y=e=>"[object Object]"===b.call(e),D={isArray:e=>"[object Array]"===b.call(e),isObject:Y,isString:e=>"[object String]"===b.call(e),isNumber:e=>"[object Number]"===b.call(e)&&e==e,isRegExp:e=>"[object RegExp]"===b.call(e),isFile:e=>"[object File]"===b.call(e),isBlob:e=>"[object Blob]"===b.call(e),isUndefined:e=>void 0===e,isNull:e=>null===e,isFunction:e=>"function"==typeof e,isEmptyObject:e=>Y(e)&&0===Object.keys(e).length,isExist:e=>!(!e&&0!==e)};function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class v{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;E(this,"sizes",[]),E(this,"total",0),E(this,"size",10),E(this,"current",1),E(this,"currentChange",(e=>{e()})),E(this,"sizeChange",(e=>{this.current=1,e()})),this.size=e}get page(){return this.current}set page(e){this.current=e}get rows(){return this.size}set rows(e){this.size=e}}const M={build:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new v(e)},pageData:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{current:r,size:i}=e,{withIndex:l=!1,indexField:o="index"}=n;if(!r||!i)return[];const s=(r-1)*i,a=s+i,d=t.slice(s,a);if(l){let e=[];for(let t=s+1;t<a+1;t++)e.push(t);d.forEach(((t,n)=>{t[o]=e[n]}))}return d},Page:v},j="1.23452384164.123412415",F=e=>{const t=document.getElementById(j);null!==t&&document.body.removeChild(t);const n=document.createElement("canvas");n.width=200,n.height=120;const r=n.getContext("2d");r.rotate(-20*Math.PI/180),r.translate(-30,20),r.font="16px Vedana",r.fillStyle="rgba(200, 200, 200, 0.20)",r.textAlign="left",r.textBaseline="middle";let i=0,l=n.height/2,o=0;for(let t=0;t<e.length;t++)i+=r.measureText(e[t]).width,i>200&&(r.fillText(e.substring(o,t),10,l),l+=18,i=0,o=t),t===e.length-1&&r.fillText(e.substring(o,t+1),10,l);const s=document.createElement("div");return s.id=j,s.style.pointerEvents="none",s.style.top="25px",s.style.left="25px",s.style.position="fixed",s.style.zIndex="100000",s.style.width=document.documentElement.clientWidth-50+"px",s.style.height=document.documentElement.clientHeight-50+"px",s.style.background="url("+n.toDataURL("image/png")+") center 50% repeat",document.body.appendChild(s),j},I={imgWatermark:async(e,t)=>{const n=await(e=>new Promise(((t,n)=>{let r=new FileReader;r.addEventListener("load",(()=>{let e=new Image;e.src=r.result,e.addEventListener("load",(()=>t(e)))})),console.log("blobToImg ",e),r.readAsDataURL(e)})))(e),r=(e=>{let t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t})(n),i=await function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image/jpeg";return new Promise(((r,i)=>{let l=e.getContext("2d");l.font="12px 宋体",l.fillStyle="#FFC82C",l.textAlign="right",console.log("text",t);const o=t.split("\n");o.reverse(),console.log("lines ",o);for(let t=0;t<o.length;t++)l.fillText(o[t],e.width-8,e.height-8-15*t);e.toBlob((e=>r(e)),n)}))}(r,t,e.type);return new File([i],e.name,{type:e.type})}},O={setWatermark:e=>{const t=document.getElementById(j);e&&!t&&(F(e),window.onresize=()=>{F(e)})},outWatermark:()=>{const e=document.getElementById(j);e&&document.body.removeChild(e)}},N={speakText:e=>{let t=window.speechSynthesis,n=new SpeechSynthesisUtterance;n.text=e,n.lang="zh-CN",n.volume=10,n.rate=1,n.pitch=1,t.speak(n)},playAudio:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Audio;return t.pause(),t.src=e,t.play(),t},download:e=>{if(!e)return"";const t=e.lastIndexOf("/")+1,n=document.createElement("a");n.download=e.substring(t),n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)}},S={IDCardUtils:n,DateUtils:s,ObjectUtils:l,UUIDUtils:a,FileUtils:c,TreeUtils:w,IsUtils:D,PageUtils:M,DomUtils:O,WebUtils:N,WatermarkUtils:I};export{s as DateUtils,O as DomUtils,c as FileUtils,n as IDCardUtils,D as IsUtils,l as ObjectUtils,M as PageUtils,w as TreeUtils,a as UUIDUtils,I as WatermarkUtils,N as WebUtils,S as default};
