import{c as Re,b as Pe,e as it,d as st,Q as ut,l as ot,u as lt,a as ct,f as ft}from"./QIcon.4810f2ee.js";import{c as Te,e as be,d as q,h as me,A as tt,an as rt,k as Le,v as dt,L as ht,ao as pt,m as Se,r as Z,ae as et,g as vt,s as gt}from"./index.ffecd11b.js";import{a as nt,u as at}from"./use-dark.a02d24ed.js";var bt=Re({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(i,{slots:W}){const{proxy:{$q:S}}=Le(),s=Te(tt,be);if(s===be)return console.error("QPage needs to be a deep child of QLayout"),be;if(Te(rt,be)===be)return console.error("QPage needs to be child of QPageContainer"),be;const A=q(()=>{const L=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof i.styleFn=="function"){const v=s.isContainer.value===!0?s.containerHeight.value:S.screen.height;return i.styleFn(L,v)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-L+"px":S.screen.height===0?L!==0?`calc(100vh - ${L}px)`:"100vh":S.screen.height-L+"px"}}),V=q(()=>`q-page${i.padding===!0?" q-layout-padding":""}`);return()=>me("main",{class:V.value,style:A.value},Pe(W.default))}}),kt=Re({name:"QPageContainer",setup(i,{slots:W}){const{proxy:{$q:S}}=Le(),s=Te(tt,be);if(s===be)return console.error("QPageContainer needs to be child of QLayout"),be;dt(rt,!0);const j=q(()=>{const A={};return s.header.space===!0&&(A.paddingTop=`${s.header.size}px`),s.right.space===!0&&(A[`padding${S.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(A.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(A[`padding${S.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),A});return()=>me("div",{class:"q-page-container",style:j.value},Pe(W.default))}}),mt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function xt(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Ct(i){if(i.__esModule)return i;var W=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(i).forEach(function(S){var s=Object.getOwnPropertyDescriptor(i,S);Object.defineProperty(W,S,s.get?s:{enumerable:!0,get:function(){return i[S]}})}),W}function qt(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var De={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(i,W){(function(S,s){i.exports=s()})(mt,function S(){var s=typeof self!="undefined"?self:typeof window!="undefined"?window:s!==void 0?s:{},j=!s.document&&!!s.postMessage,A=s.IS_PAPA_WORKER||!1,V={},L=0,v={parse:function(t,e){var n=(e=e||{}).dynamicTyping||!1;if(E(n)&&(e.dynamicTypingFunction=n,n={}),e.dynamicTyping=n,e.transform=!!E(e.transform)&&e.transform,e.worker&&v.WORKERS_SUPPORTED){var o=function(){if(!v.WORKERS_SUPPORTED)return!1;var d=(Y=s.URL||s.webkitURL||null,x=S.toString(),v.BLOB_URL||(v.BLOB_URL=Y.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",x,")();"],{type:"text/javascript"})))),w=new s.Worker(d),Y,x;return w.onmessage=Fe,w.id=L++,V[w.id]=w}();return o.userStep=e.step,o.userChunk=e.chunk,o.userComplete=e.complete,o.userError=e.error,e.step=E(e.step),e.chunk=E(e.chunk),e.complete=E(e.complete),e.error=E(e.error),delete e.worker,void o.postMessage({input:t,config:e,workerId:o.id})}var c=null;return v.NODE_STREAM_INPUT,typeof t=="string"?(t=function(d){return d.charCodeAt(0)===65279?d.slice(1):d}(t),c=e.download?new oe(e):new se(e)):t.readable===!0&&E(t.read)&&E(t.on)?c=new ke(e):(s.File&&t instanceof File||t instanceof Object)&&(c=new te(e)),c.stream(t)},unparse:function(t,e){var n=!1,o=!0,c=",",d=`\r
`,w='"',Y=w+w,x=!1,f=null,I=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||v.BAD_DELIMITERS.filter(function(l){return e.delimiter.indexOf(l)!==-1}).length||(c=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(n=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(x=e.skipEmptyLines),typeof e.newline=="string"&&(d=e.newline),typeof e.quoteChar=="string"&&(w=e.quoteChar),typeof e.header=="boolean"&&(o=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");f=e.columns}e.escapeChar!==void 0&&(Y=e.escapeChar+w),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(I=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(ye(w),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return re(null,t,x);if(typeof t[0]=="object")return re(f||Object.keys(t[0]),t,x)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||f),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),re(t.fields||[],t.data||[],x);throw new Error("Unable to serialize unrecognized input");function re(l,k,B){var R="";typeof l=="string"&&(l=JSON.parse(l)),typeof k=="string"&&(k=JSON.parse(k));var y=Array.isArray(l)&&0<l.length,Q=!Array.isArray(k[0]);if(y&&o){for(var N=0;N<l.length;N++)0<N&&(R+=c),R+=J(l[N],N);0<k.length&&(R+=d)}for(var p=0;p<k.length;p++){var C=y?l.length:k[p].length,O=!1,z=y?Object.keys(k[p]).length===0:k[p].length===0;if(B&&!y&&(O=B==="greedy"?k[p].join("").trim()==="":k[p].length===1&&k[p][0].length===0),B==="greedy"&&y){for(var b=[],G=0;G<C;G++){var M=Q?l[G]:G;b.push(k[p][M])}O=b.join("").trim()===""}if(!O){for(var F=0;F<C;F++){0<F&&!z&&(R+=c);var ne=y&&Q?l[F]:F;R+=J(k[p][ne],F)}p<k.length-1&&(!B||0<C&&!z)&&(R+=d)}}return R}function J(l,k){if(l==null)return"";if(l.constructor===Date)return JSON.stringify(l).slice(1,25);var B=!1;I&&typeof l=="string"&&I.test(l)&&(l="'"+l,B=!0);var R=l.toString().replace(u,Y);return(B=B||n===!0||typeof n=="function"&&n(l,k)||Array.isArray(n)&&n[k]||function(y,Q){for(var N=0;N<Q.length;N++)if(-1<y.indexOf(Q[N]))return!0;return!1}(R,v.BAD_DELIMITERS)||-1<R.indexOf(c)||R.charAt(0)===" "||R.charAt(R.length-1)===" ")?w+R+w:R}}};if(v.RECORD_SEP=String.fromCharCode(30),v.UNIT_SEP=String.fromCharCode(31),v.BYTE_ORDER_MARK="\uFEFF",v.BAD_DELIMITERS=["\r",`
`,'"',v.BYTE_ORDER_MARK],v.WORKERS_SUPPORTED=!j&&!!s.Worker,v.NODE_STREAM_INPUT=1,v.LocalChunkSize=10485760,v.RemoteChunkSize=5242880,v.DefaultDelimiter=",",v.Parser=qe,v.ParserHandle=Ce,v.NetworkStreamer=oe,v.FileStreamer=te,v.StringStreamer=se,v.ReadableStreamStreamer=ke,s.jQuery){var le=s.jQuery;le.fn.parse=function(t){var e=t.config||{},n=[];return this.each(function(d){if(!(le(this).prop("tagName").toUpperCase()==="INPUT"&&le(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var w=0;w<this.files.length;w++)n.push({file:this.files[w],inputElem:this,instanceConfig:le.extend({},e)})}),o(),this;function o(){if(n.length!==0){var d,w,Y,x,f=n[0];if(E(t.before)){var I=t.before(f.file,f.inputElem);if(typeof I=="object"){if(I.action==="abort")return d="AbortError",w=f.file,Y=f.inputElem,x=I.reason,void(E(t.error)&&t.error({name:d},w,Y,x));if(I.action==="skip")return void c();typeof I.config=="object"&&(f.instanceConfig=le.extend(f.instanceConfig,I.config))}else if(I==="skip")return void c()}var u=f.instanceConfig.complete;f.instanceConfig.complete=function(re){E(u)&&u(re,f.file,f.inputElem),c()},v.parse(f.file,f.instanceConfig)}else E(t.complete)&&t.complete()}function c(){n.splice(0,1),o()}}}function X(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var n=ue(e);n.chunkSize=parseInt(n.chunkSize),e.step||e.chunk||(n.chunkSize=null),this._handle=new Ce(n),(this._handle.streamer=this)._config=n}.call(this,t),this.parseChunk=function(e,n){if(this.isFirstChunk&&E(this._config.beforeFirstChunk)){var o=this._config.beforeFirstChunk(e);o!==void 0&&(e=o)}this.isFirstChunk=!1,this._halted=!1;var c=this._partialLine+e;this._partialLine="";var d=this._handle.parse(c,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var w=d.meta.cursor;this._finished||(this._partialLine=c.substring(w-this._baseIndex),this._baseIndex=w),d&&d.data&&(this._rowCount+=d.data.length);var Y=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(A)s.postMessage({results:d,workerId:v.WORKER_ID,finished:Y});else if(E(this._config.chunk)&&!n){if(this._config.chunk(d,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);d=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(d.data),this._completeResults.errors=this._completeResults.errors.concat(d.errors),this._completeResults.meta=d.meta),this._completed||!Y||!E(this._config.complete)||d&&d.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),Y||d&&d.meta.paused||this._nextChunk(),d}this._halted=!0},this._sendError=function(e){E(this._config.error)?this._config.error(e):A&&this._config.error&&s.postMessage({workerId:v.WORKER_ID,error:e,finished:!1})}}function oe(t){var e;(t=t||{}).chunkSize||(t.chunkSize=v.RemoteChunkSize),X.call(this,t),this._nextChunk=j?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(n){this._input=n,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),j||(e.onload=he(this._chunkLoaded,this),e.onerror=he(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!j),this._config.downloadRequestHeaders){var n=this._config.downloadRequestHeaders;for(var o in n)e.setRequestHeader(o,n[o])}if(this._config.chunkSize){var c=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+c)}try{e.send(this._config.downloadRequestBody)}catch(d){this._chunkError(d.message)}j&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(n){var o=n.getResponseHeader("Content-Range");return o===null?-1:parseInt(o.substring(o.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(n){var o=e.statusText||n;this._sendError(new Error(o))}}function te(t){var e,n;(t=t||{}).chunkSize||(t.chunkSize=v.LocalChunkSize),X.call(this,t);var o=typeof FileReader!="undefined";this.stream=function(c){this._input=c,n=c.slice||c.webkitSlice||c.mozSlice,o?((e=new FileReader).onload=he(this._chunkLoaded,this),e.onerror=he(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var c=this._input;if(this._config.chunkSize){var d=Math.min(this._start+this._config.chunkSize,this._input.size);c=n.call(c,this._start,d)}var w=e.readAsText(c,this._config.encoding);o||this._chunkLoaded({target:{result:w}})},this._chunkLoaded=function(c){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(c.target.result)},this._chunkError=function(){this._sendError(e.error)}}function se(t){var e;X.call(this,t=t||{}),this.stream=function(n){return e=n,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var n,o=this._config.chunkSize;return o?(n=e.substring(0,o),e=e.substring(o)):(n=e,e=""),this._finished=!e,this.parseChunk(n)}}}function ke(t){X.call(this,t=t||{});var e=[],n=!0,o=!1;this.pause=function(){X.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){X.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(c){this._input=c,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){o&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):n=!0},this._streamData=he(function(c){try{e.push(typeof c=="string"?c:c.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(d){this._streamError(d)}},this),this._streamError=he(function(c){this._streamCleanUp(),this._sendError(c)},this),this._streamEnd=he(function(){this._streamCleanUp(),o=!0,this._streamData("")},this),this._streamCleanUp=he(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function Ce(t){var e,n,o,c=Math.pow(2,53),d=-c,w=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,x=this,f=0,I=0,u=!1,re=!1,J=[],l={data:[],errors:[],meta:{}};if(E(t.step)){var k=t.step;t.step=function(p){if(l=p,y())R();else{if(R(),l.data.length===0)return;f+=p.data.length,t.preview&&f>t.preview?n.abort():(l.data=l.data[0],k(l,x))}}}function B(p){return t.skipEmptyLines==="greedy"?p.join("").trim()==="":p.length===1&&p[0].length===0}function R(){return l&&o&&(N("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+v.DefaultDelimiter+"'"),o=!1),t.skipEmptyLines&&(l.data=l.data.filter(function(p){return!B(p)})),y()&&function(){if(!l)return;function p(O,z){E(t.transformHeader)&&(O=t.transformHeader(O,z)),J.push(O)}if(Array.isArray(l.data[0])){for(var C=0;y()&&C<l.data.length;C++)l.data[C].forEach(p);l.data.splice(0,1)}else l.data.forEach(p)}(),function(){if(!l||!t.header&&!t.dynamicTyping&&!t.transform)return l;function p(O,z){var b,G=t.header?{}:[];for(b=0;b<O.length;b++){var M=b,F=O[b];t.header&&(M=b>=J.length?"__parsed_extra":J[b]),t.transform&&(F=t.transform(F,M)),F=Q(M,F),M==="__parsed_extra"?(G[M]=G[M]||[],G[M].push(F)):G[M]=F}return t.header&&(b>J.length?N("FieldMismatch","TooManyFields","Too many fields: expected "+J.length+" fields but parsed "+b,I+z):b<J.length&&N("FieldMismatch","TooFewFields","Too few fields: expected "+J.length+" fields but parsed "+b,I+z)),G}var C=1;return!l.data.length||Array.isArray(l.data[0])?(l.data=l.data.map(p),C=l.data.length):l.data=p(l.data,0),t.header&&l.meta&&(l.meta.fields=J),I+=C,l}()}function y(){return t.header&&J.length===0}function Q(p,C){return O=p,t.dynamicTypingFunction&&t.dynamicTyping[O]===void 0&&(t.dynamicTyping[O]=t.dynamicTypingFunction(O)),(t.dynamicTyping[O]||t.dynamicTyping)===!0?C==="true"||C==="TRUE"||C!=="false"&&C!=="FALSE"&&(function(z){if(w.test(z)){var b=parseFloat(z);if(d<b&&b<c)return!0}return!1}(C)?parseFloat(C):Y.test(C)?new Date(C):C===""?null:C):C;var O}function N(p,C,O,z){var b={type:p,code:C,message:O};z!==void 0&&(b.row=z),l.errors.push(b)}this.parse=function(p,C,O){var z=t.quoteChar||'"';if(t.newline||(t.newline=function(M,F){M=M.substring(0,1048576);var ne=new RegExp(ye(F)+"([^]*?)"+ye(F),"gm"),ae=(M=M.replace(ne,"")).split("\r"),U=M.split(`
`),ce=1<U.length&&U[0].length<ae[0].length;if(ae.length===1||ce)return`
`;for(var ie=0,P=0;P<ae.length;P++)ae[P][0]===`
`&&ie++;return ie>=ae.length/2?`\r
`:"\r"}(p,z)),o=!1,t.delimiter)E(t.delimiter)&&(t.delimiter=t.delimiter(p),l.meta.delimiter=t.delimiter);else{var b=function(M,F,ne,ae,U){var ce,ie,P,T;U=U||[",","	","|",";",v.RECORD_SEP,v.UNIT_SEP];for(var _e=0;_e<U.length;_e++){var _=U[_e],xe=0,fe=0,we=0;P=void 0;for(var pe=new qe({comments:ae,delimiter:_,newline:F,preview:10}).parse(M),ve=0;ve<pe.data.length;ve++)if(ne&&B(pe.data[ve]))we++;else{var ee=pe.data[ve].length;fe+=ee,P!==void 0?0<ee&&(xe+=Math.abs(ee-P),P=ee):P=ee}0<pe.data.length&&(fe/=pe.data.length-we),(ie===void 0||xe<=ie)&&(T===void 0||T<fe)&&1.99<fe&&(ie=xe,ce=_,T=fe)}return{successful:!!(t.delimiter=ce),bestDelimiter:ce}}(p,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);b.successful?t.delimiter=b.bestDelimiter:(o=!0,t.delimiter=v.DefaultDelimiter),l.meta.delimiter=t.delimiter}var G=ue(t);return t.preview&&t.header&&G.preview++,e=p,n=new qe(G),l=n.parse(e,C,O),R(),u?{meta:{paused:!0}}:l||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,n.abort(),e=E(t.chunk)?"":e.substring(n.getCharIndex())},this.resume=function(){x.streamer._halted?(u=!1,x.streamer.parseChunk(e,!0)):setTimeout(x.resume,3)},this.aborted=function(){return re},this.abort=function(){re=!0,n.abort(),l.meta.aborted=!0,E(t.complete)&&t.complete(l),e=""}}function ye(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qe(t){var e,n=(t=t||{}).delimiter,o=t.newline,c=t.comments,d=t.step,w=t.preview,Y=t.fastMode,x=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(x=t.escapeChar),(typeof n!="string"||-1<v.BAD_DELIMITERS.indexOf(n))&&(n=","),c===n)throw new Error("Comment character same as delimiter");c===!0?c="#":(typeof c!="string"||-1<v.BAD_DELIMITERS.indexOf(c))&&(c=!1),o!==`
`&&o!=="\r"&&o!==`\r
`&&(o=`
`);var f=0,I=!1;this.parse=function(u,re,J){if(typeof u!="string")throw new Error("Input must be a string");var l=u.length,k=n.length,B=o.length,R=c.length,y=E(d),Q=[],N=[],p=[],C=f=0;if(!u)return K();if(t.header&&!re){var O=u.split(o)[0].split(n),z=[],b={},G=!1;for(var M in O){var F=O[M];E(t.transformHeader)&&(F=t.transformHeader(F,M));var ne=F,ae=b[F]||0;for(0<ae&&(G=!0,ne=F+"_"+ae),b[F]=ae+1;z.includes(ne);)ne=ne+"_"+ae;z.push(ne)}if(G){var U=u.split(o);U[0]=z.join(n),u=U.join(o)}}if(Y||Y!==!1&&u.indexOf(e)===-1){for(var ce=u.split(o),ie=0;ie<ce.length;ie++){if(p=ce[ie],f+=p.length,ie!==ce.length-1)f+=o.length;else if(J)return K();if(!c||p.substring(0,R)!==c){if(y){if(Q=[],we(p.split(n)),ge(),I)return K()}else we(p.split(n));if(w&&w<=ie)return Q=Q.slice(0,w),K(!0)}}return K()}for(var P=u.indexOf(n,f),T=u.indexOf(o,f),_e=new RegExp(ye(x)+ye(e),"g"),_=u.indexOf(e,f);;)if(u[f]!==e)if(c&&p.length===0&&u.substring(f,f+R)===c){if(T===-1)return K();f=T+B,T=u.indexOf(o,f),P=u.indexOf(n,f)}else if(P!==-1&&(P<T||T===-1))p.push(u.substring(f,P)),f=P+k,P=u.indexOf(n,f);else{if(T===-1)break;if(p.push(u.substring(f,T)),ee(T+B),y&&(ge(),I))return K();if(w&&Q.length>=w)return K(!0)}else for(_=f,f++;;){if((_=u.indexOf(e,_+1))===-1)return J||N.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:Q.length,index:f}),ve();if(_===l-1)return ve(u.substring(f,_).replace(_e,e));if(e!==x||u[_+1]!==x){if(e===x||_===0||u[_-1]!==x){P!==-1&&P<_+1&&(P=u.indexOf(n,_+1)),T!==-1&&T<_+1&&(T=u.indexOf(o,_+1));var xe=pe(T===-1?P:Math.min(P,T));if(u.substr(_+1+xe,k)===n){p.push(u.substring(f,_).replace(_e,e)),u[f=_+1+xe+k]!==e&&(_=u.indexOf(e,f)),P=u.indexOf(n,f),T=u.indexOf(o,f);break}var fe=pe(T);if(u.substring(_+1+fe,_+1+fe+B)===o){if(p.push(u.substring(f,_).replace(_e,e)),ee(_+1+fe+B),P=u.indexOf(n,f),_=u.indexOf(e,f),y&&(ge(),I))return K();if(w&&Q.length>=w)return K(!0);break}N.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:Q.length,index:f}),_++}}else _++}return ve();function we($){Q.push($),C=f}function pe($){var Ie=0;if($!==-1){var Oe=u.substring(_+1,$);Oe&&Oe.trim()===""&&(Ie=Oe.length)}return Ie}function ve($){return J||($===void 0&&($=u.substring(f)),p.push($),f=l,we(p),y&&ge()),K()}function ee($){f=$,we(p),p=[],T=u.indexOf(o,f)}function K($){return{data:Q,errors:N,meta:{delimiter:n,linebreak:o,aborted:I,truncated:!!$,cursor:C+(re||0)}}}function ge(){d(K()),Q=[],N=[]}},this.abort=function(){I=!0},this.getCharIndex=function(){return f}}function Fe(t){var e=t.data,n=V[e.workerId],o=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var c={abort:function(){o=!0,D(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:Ee,resume:Ee};if(E(n.userStep)){for(var d=0;d<e.results.data.length&&(n.userStep({data:e.results.data[d],errors:e.results.errors,meta:e.results.meta},c),!o);d++);delete e.results}else E(n.userChunk)&&(n.userChunk(e.results,c,e.file),delete e.results)}e.finished&&!o&&D(e.workerId,e.results)}function D(t,e){var n=V[t];E(n.userComplete)&&n.userComplete(e),n.terminate(),delete V[t]}function Ee(){throw new Error("Not implemented.")}function ue(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=ue(t[n]);return e}function he(t,e){return function(){t.apply(e,arguments)}}function E(t){return typeof t=="function"}return A&&(s.onmessage=function(t){var e=t.data;if(v.WORKER_ID===void 0&&e&&(v.WORKER_ID=e.workerId),typeof e.input=="string")s.postMessage({workerId:v.WORKER_ID,results:v.parse(e.input,e.config),finished:!0});else if(s.File&&e.input instanceof File||e.input instanceof Object){var n=v.parse(e.input,e.config);n&&s.postMessage({workerId:v.WORKER_ID,results:n,finished:!0})}}),(oe.prototype=Object.create(X.prototype)).constructor=oe,(te.prototype=Object.create(X.prototype)).constructor=te,(se.prototype=Object.create(se.prototype)).constructor=se,(ke.prototype=Object.create(X.prototype)).constructor=ke,v})})(De);const Et=ht("paperDataStore",()=>{var Ie,Oe,Me,Be,ze,je,Qe,Ne,Ue;const{currentRoute:i,push:W,replace:S}=pt();function s(r,a){const h={...i.value.query};for(const g in r){const m=r[g];h[g]===m&&!(a!=null&&a.forceUpdate)||(m===null?delete h[g]:h[g]=m)}a!=null&&a.replaceState?S({query:h}):W({query:h}).catch(g=>{console.log(g)})}Se(i,(r,a)=>{var m,H,de,Ae,Ke,$e,We,Ye,He,Ve,Je,Ge,Ze,Xe;const h=r.query.paper,g=a.query.paper;h!==g&&h!==((m=A.value)==null?void 0:m.doi)&&(h==null?Ce():oe(h)),r.query.matchCase!==a.query.matchCase&&(ee.value=(H=r.query.matchCase)!=null?H:null),r.query.useRegex!==a.query.useRegex&&(K.value=(de=r.query.useRegex)!=null?de:null),r.query.searchText!==a.query.searchText&&(d.value=(Ae=r.query.searchText)!=null?Ae:""),r.query.minYear!==a.query.minYear&&(r.query.minYear!=null?y.value.min=parseInt(r.query.minYear):y.value.min=($e=(Ke=k.value)==null?void 0:Ke[0])!=null?$e:-1/0),r.query.maxYear!==a.query.maxYear&&(r.query.maxYear!=null?y.value.max=parseInt(r.query.maxYear):y.value.max=(Ye=(We=k.value)==null?void 0:We[1])!=null?Ye:1/0),r.query.filterPanelOpen!==a.query.filterPanelOpen&&(ge.value=r.query.filterPanelOpen==="true"),r.query.venueFilter!==a.query.venueFilter&&(b.value=new Set((Ve=(He=r.query.venueFilter)==null?void 0:He.split(","))!=null?Ve:[])),r.query.awardFilter!==a.query.awardFilter&&(U.value=new Set((Ge=(Je=r.query.awardFilter)==null?void 0:Je.split(","))!=null?Ge:[])),r.query.resourceFilter!==a.query.resourceFilter&&(_.value=new Set((Xe=(Ze=r.query.resourceFilter)==null?void 0:Ze.split(","))!=null?Xe:[]))},{deep:!0});const j=Z(null),A=Z(null),V=Z(null),L=Z(null),v=Z(!1),le=Z([]);function X(){L.value!==null&&te(L.value)}function oe(r){if(u.value===null)return;const a=u.value.findIndex(h=>h.doi===r);a>=0&&te(a)}function te(r){var g,m;if(u.value===null||(V.value=r,A.value=u.value[r],s({paper:(g=A.value)==null?void 0:g.doi}),le.value=[],!((m=A.value)!=null&&m.doi)))return;const a=A.value.doi,h=window.location.origin+"/data/paperLinks/"+a;De.exports.parse(h,{header:!0,dynamicTyping:!1,skipEmptyLines:!0,download:!0,comments:"#",complete:(H,de)=>{le.value=H.data}})}function se(){if(u.value!==null){if(V.value===null){te(0);return}te(Math.max(V.value-1,0))}}function ke(){if(u.value!==null){if(V.value===null){te(0);return}te(Math.min(V.value+1,u.value.length-1))}}function Ce(){A.value=null,V.value=null,s({paper:null})}function ye(){L.value=null}function qe(r){!v.value||(L.value=r)}function Fe(){!v.value||L.value!==null&&L.value!==0&&(L.value=L.value-1)}function D(){if(!!v.value){if(L.value===null){L.value=0;return}L.value!==u.value.length-1&&(L.value=L.value+1)}}const Ee=q(()=>V.value===null||u.value===null?"":`${V.value+1} of ${u.value.length}`);function ue(r){return r==="HM"?"Honorable Mention":r==="BP"?"Best Paper":r==="TT"?"Test of Time":r==="BA"?"Best Application":r==="BCS"?"Best Case Study":"Unknown Award"}function he(r){switch(r){case"paper":case"P":return"indigo";case"video":case"V":return"red";case"code":case"C":return"green-10";case"data":case"D":return"purple";case"project_website":case"PW":return"teal";default:return"blue-grey"}}function E(r){return"white"}function t(r){switch(r){case"paper":case"P":return"article";case"video":case"V":return"ondemand_video";case"code":case"C":return"code";case"data":case"D":return"storage";case"project_website":case"PW":return"language";default:return"open_in_new"}}function e(r){switch(r){case"paper":case"P":return"Paper";case"video":case"V":return"Video";case"code":case"C":return"Code";case"data":case"D":return"Data";case"project_website":case"PW":return"Website";default:return"Other"}}function n(r){const a=r.conference;return a==="Vis"?"VIS":a}function o(r){const a=r.authorNamesDeduped;return a==null?[]:a.split(";").map(g=>({displayName:g.split(" ").filter(de=>isNaN(parseInt(de))).join(" "),dedupedName:g}))}De.exports.parse(window.location.origin+"/data/papers.csv",{header:!0,dynamicTyping:!0,skipEmptyLines:!0,download:!0,comments:"#",transformHeader:c,complete:(r,a)=>{j.value=r.data,x.value=JSON.parse(JSON.stringify(j.value));const h=i.value.query.paper;h&&oe(h)}});function c(r,a){return r==="DOI"?"doi":r==="AuthorNames-Deduped"?"authorNamesDeduped":r.slice(0,1).toLowerCase()+r.slice(1)}const d=Z((Ie=i.value.query.searchText)!=null?Ie:"");Se(d,()=>{w()});const w=et(Y,1e3);function Y(){if(d.value===""){s({searchText:null},{forceUpdate:!0});return}s({searchText:d.value},{forceUpdate:!0})}const x=Z(),f=q(()=>{if(K.value===null)return I.value="",!0;try{new RegExp(d.value)}catch(r){return console.log("setting regex error string"),console.log({e:r}),I.value=r.message,!1}return I.value="",!0}),I=Z(""),u=q(()=>{let r=x.value;if(r==null)return[];if(d.value!==""){const a=ee.value===null;let h=null;if(K.value!==null)try{h=a?new RegExp(d.value,"mi"):new RegExp(d.value,"m")}catch{return[]}let g=d.value;a&&(g=g.toLowerCase()),r=r.filter(m=>pe(h!=null?h:g,m))}return re.value&&(r=r.filter(a=>{var h,g,m,H;return a.year>=((g=(h=y.value)==null?void 0:h.min)!=null?g:-1/0)&&a.year<=((H=(m=y.value)==null?void 0:m.max)!=null?H:1/0)})),b.value.size>0&&(r=r.filter(a=>b.value.has(n(a)))),U.value.size>0&&(r=r.filter(a=>{for(const h of $(a.award))if(U.value.has(ue(h)))return!0;return!1})),_.value.size>0&&(r=r.filter(a=>{for(const h of $(a.resources))if(_.value.has(e(h)))return!0;return!1})),r}),re=q(()=>!(y.value==null||k.value==null||y.value.min===-1/0&&y.value.max===1/0||y.value.min===k.value[0]&&y.value.max===k.value[1]));function J(){y.value={min:-1/0,max:1/0}}const l=q(()=>{const r=new Map;if(u.value==null)return[];for(const h of u.value){const g=h.year;r.has(g)||r.set(g,0),r.set(g,r.get(g)+1)}const a=[];for(const[h,g]of r.entries())a.push({year:h,count:g});return a}),k=q(()=>{if(x.value==null)return null;const r=x.value.map(a=>a.year);return[Math.min(...r),Math.max(...r)]});let B=null;i.value.query.minYear&&(B=parseInt(i.value.query.minYear));let R=null;i.value.query.maxYear&&(R=parseInt(i.value.query.maxYear));const y=Z({min:B!=null?B:-1/0,max:R!=null?R:1/0});Se(k,()=>{k.value!==null&&(y.value.min===-1/0&&(y.value.min=k.value[0]),y.value.max===1/0&&(y.value.max=k.value[1]))},{deep:!0}),Se(y,()=>{Q()},{deep:!0});const Q=et(N,1e3);function N(){re.value?(console.log("setting yearFilterState"),console.log(y.value),s({minYear:y.value.min.toString(),maxYear:y.value.max.toString()})):s({minYear:null,maxYear:null})}const p=q(()=>{if(u.value==null)return 0;const r=Math.max(...l.value.map(a=>a.count));return l.value.find(a=>a.count===r)}),C=q(()=>{if(x.value==null)return[];const r=new Set;for(const a of x.value)r.add(n(a));return Array.from(r)}),O=q(()=>{var h;const r=new Map;for(const g of C.value)r.set(g,0);for(const g of(h=u.value)!=null?h:[]){const m=n(g);r.set(m,r.get(m)+1)}const a=[];for(const[g,m]of r.entries())a.push({venue:g,count:m});return a.sort((g,m)=>g.venue<m.venue?-1:g.venue>m.venue?1:0),a}),z=q(()=>O.value.length===0?0:Math.max(...O.value.map(r=>r.count))),b=Z(new Set((Me=(Oe=i.value.query.venueFilter)==null?void 0:Oe.split(","))!=null?Me:[]));function G(r){b.value.has(r)?b.value.delete(r):b.value.add(r);const a=Array.from(b.value).sort();if(a.length===0){s({venueFilter:null});return}s({venueFilter:a.join(",")})}function M(){b.value.clear(),s({venueFilter:null})}const F=q(()=>{if(x.value==null)return[];const r=new Set;for(const a of x.value)for(const h of $(a.award))r.add(ue(h));return r.delete("Unknown Award"),Array.from(r)}),ne=q(()=>{var g;const r=new Map;for(const m of F.value)r.set(m,0);for(const m of(g=u.value)!=null?g:[])for(const H of $(m.award)){const de=ue(H);r.set(de,r.get(de)+1)}r.delete("Unknown Award");const a=[];for(const[m,H]of r.entries())a.push({award:m,count:H});const h=[ue("TT"),ue("BP"),ue("HM"),ue("BA"),ue("BCS")];return a.sort((m,H)=>h.indexOf(m.award)-h.indexOf(H.award)),a}),ae=q(()=>ne.value.length===0?0:Math.max(...ne.value.map(r=>r.count))),U=Z(new Set((ze=(Be=i.value.query.awardFilter)==null?void 0:Be.split(","))!=null?ze:[]));function ce(r){U.value.has(r)?U.value.delete(r):U.value.add(r);const a=Array.from(U.value).sort();if(a.length===0){s({awardFilter:null});return}s({awardFilter:a.join(",")})}function ie(){U.value.clear(),s({awardFilter:null})}const P=q(()=>{if(x.value==null)return[];const r=new Set;for(const a of x.value)for(const h of $(a.resources))r.add(h);return Array.from(r)}),T=q(()=>{var h;const r=new Map;for(const g of P.value)r.set(g,0);for(const g of(h=u.value)!=null?h:[])for(const m of $(g.resources))r.set(m,r.get(m)+1);const a=[];for(const[g,m]of r.entries()){const H=e(g);a.push({resource:H,count:m,key:g})}return a}),_e=q(()=>T.value.length===0?0:Math.max(...T.value.map(r=>r.count))),_=Z(new Set((Qe=(je=i.value.query.resourceFilter)==null?void 0:je.split(","))!=null?Qe:[]));function xe(r){_.value.has(r)?_.value.delete(r):_.value.add(r);const a=Array.from(_.value).sort();if(a.length===0){s({resourceFilter:null});return}s({resourceFilter:a.join(",")})}function fe(){_.value.clear(),s({resourceFilter:null})}const we=q(()=>{if(u.value===null)return[];if(u.value.length===0)return[];const r=window.location.href;return u.value.map(a=>{const h=new URL(r);return h.searchParams.set("paper",a.doi),{...a,link:h.toString()}})});function pe(r,a){var m,H,de;const h=[],g=o(a);for(const Ae of g)h.push((m=Ae.displayName)!=null?m:"");return h.push((H=a.title)!=null?H:""),h.push((de=a.abstract)!=null?de:""),ve(r,h.join("\xB6"))}function ve(r,a){return typeof r!="string"?r.test(a):(ee.value===null&&(a=a.toLowerCase()),a.includes(r))}const ee=Z((Ne=i.value.query.matchCase)!=null?Ne:null);Se(ee,()=>{if(ee.value===null){s({matchCase:null});return}s({matchCase:ee.value})});const K=Z((Ue=i.value.query.useRegex)!=null?Ue:null);Se(K,()=>{if(K.value===null){s({useRegex:null});return}s({useRegex:K.value})});const ge=Z(i.value.query.filterPanelOpen==="true");Se(ge,()=>{if(!ge.value){s({filterPanelOpen:null});return}s({filterPanelOpen:ge.value.toString()})});function $(r){return r?r.split(";"):[]}return{allData:j,selectedPaper:A,selectedPaperResourceLinks:le,previousPaper:se,nextPaper:ke,searchFocused:v,clearFocusedPaper:ye,focusPaper:qe,focusPreviousPaper:Fe,focusNextPaper:D,selectedPaperIndex:V,focusedPaperIndex:L,progressDisplay:Ee,selectPaper:te,selectFocusedPaper:X,deselectPaper:Ce,getKeyList:$,getAward:ue,getResourceColor:he,getResourceTextColor:E,getResourceIcon:t,getConference:n,getAuthors:o,papers:u,paperYearCounts:l,maxPapersInYear:p,yearFilter:y,yearFilterSet:re,clearYearFilter:J,yearExtent:k,papersWithLinks:we,searchText:d,matchCase:ee,useRegex:K,validRegex:f,regexErrorString:I,filterPanelOpen:ge,venueCounts:O,maxVenueCount:z,venueFilter:b,toggleVenueFilter:G,clearVenueFilter:M,awardCounts:ne,maxAwardCount:ae,awardFilter:U,toggleAwardFilter:ce,clearAwardFilter:ie,resourceCounts:T,maxResourceCount:_e,resourceFilter:_,toggleResourceFilter:xe,clearResourceFilter:fe}});var St=Re({name:"QAvatar",props:{...it,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(i,{slots:W}){const S=st(i),s=q(()=>"q-avatar"+(i.color?` bg-${i.color}`:"")+(i.textColor?` text-${i.textColor} q-chip--colored`:"")+(i.square===!0?" q-avatar--square":i.rounded===!0?" rounded-borders":"")),j=q(()=>i.fontSize?{fontSize:i.fontSize}:null);return()=>{const A=i.icon!==void 0?[me(ut,{name:i.icon})]:void 0;return me("div",{class:s.value,style:S.value},[me("div",{class:"q-avatar__content row flex-center overflow-hidden",style:j.value},ot(W.default,A))])}}}),Rt=Re({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(i,{slots:W}){const S=q(()=>`q-item__section column q-item__section--${i.avatar===!0||i.side===!0||i.thumbnail===!0?"side":"main"}`+(i.top===!0?" q-item__section--top justify-start":" justify-center")+(i.avatar===!0?" q-item__section--avatar":"")+(i.thumbnail===!0?" q-item__section--thumbnail":"")+(i.noWrap===!0?" q-item__section--nowrap":""));return()=>me("div",{class:S.value},Pe(W.default))}}),Ot=Re({name:"QItem",props:{...nt,...lt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(i,{slots:W,emit:S}){const{proxy:{$q:s}}=Le(),j=at(i,s),{hasLink:A,linkAttrs:V,linkClass:L,linkTag:v,navigateOnClick:le}=ct(),X=Z(null),oe=Z(null),te=q(()=>i.clickable===!0||A.value===!0||i.tag==="label"),se=q(()=>i.disable!==!0&&te.value===!0),ke=q(()=>"q-item q-item-type row no-wrap"+(i.dense===!0?" q-item--dense":"")+(j.value===!0?" q-item--dark":"")+(A.value===!0&&i.active===null?L.value:i.active===!0?` q-item--active${i.activeClass!==void 0?` ${i.activeClass}`:""}`:"")+(i.disable===!0?" disabled":"")+(se.value===!0?" q-item--clickable q-link cursor-pointer "+(i.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(i.focused===!0?" q-manual-focusable--focused":""):"")),Ce=q(()=>{if(i.insetLevel===void 0)return null;const D=s.lang.rtl===!0?"Right":"Left";return{["padding"+D]:16+i.insetLevel*56+"px"}});function ye(D){se.value===!0&&(oe.value!==null&&(D.qKeyEvent!==!0&&document.activeElement===X.value?oe.value.focus():document.activeElement===oe.value&&X.value.focus()),le(D))}function qe(D){if(se.value===!0&&vt(D,13)===!0){gt(D),D.qKeyEvent=!0;const Ee=new MouseEvent("click",D);Ee.qKeyEvent=!0,X.value.dispatchEvent(Ee)}S("keyup",D)}function Fe(){const D=ft(W.default,[]);return se.value===!0&&D.unshift(me("div",{class:"q-focus-helper",tabindex:-1,ref:oe})),D}return()=>{const D={ref:X,class:ke.value,style:Ce.value,role:"listitem",onClick:ye,onKeyup:qe};return se.value===!0?(D.tabindex=i.tabindex||"0",Object.assign(D,V.value)):te.value===!0&&(D["aria-disabled"]="true"),me(v.value,D,Fe())}}}),Ft=Re({name:"QList",props:{...nt,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(i,{slots:W}){const S=Le(),s=at(i,S.proxy.$q),j=q(()=>"q-list"+(i.bordered===!0?" q-list--bordered":"")+(i.dense===!0?" q-list--dense":"")+(i.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(i.padding===!0?" q-list--padding":""));return()=>me(i.tag,{class:j.value},Pe(W.default))}}),It=Re({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(i,{slots:W}){const S=q(()=>parseInt(i.lines,10)),s=q(()=>"q-item__label"+(i.overline===!0?" q-item__label--overline text-overline":"")+(i.caption===!0?" q-item__label--caption text-caption":"")+(i.header===!0?" q-item__label--header":"")+(S.value===1?" ellipsis":"")),j=q(()=>i.lines!==void 0&&S.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":S.value}:null);return()=>me("div",{style:j.value,class:s.value},Pe(W.default))}});export{Ft as Q,Ot as a,Rt as b,St as c,mt as d,qt as e,It as f,xt as g,kt as h,bt as i,Ct as j,De as p,Et as u};
