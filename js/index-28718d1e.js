import{h as e,c as A,j as s,k as t,m as a,t as n,w as m}from"./index-269002a4.js";import{u as i}from"./index-edf9582b.js";import{t as d,g as o,w as u,v as c}from"./vue-72c29318.js";const[r,g]=A("count-down");const l=m(d({name:r,props:{time:t(0),format:a("HH:mm:ss"),autoStart:n,millisecond:Boolean},emits:["change","finish"],setup(A,{emit:t,slots:a}){const{start:n,pause:m,reset:d,current:r}=s({time:+A.time,millisecond:A.millisecond,onChange:e=>t("change",e),onFinish:()=>t("finish")}),l=o((()=>function(A,s){const{days:t}=s;let{hours:a,minutes:n,seconds:m,milliseconds:i}=s;if(A.includes("DD")?A=A.replace("DD",e(t)):a+=24*t,A.includes("HH")?A=A.replace("HH",e(a)):n+=60*a,A.includes("mm")?A=A.replace("mm",e(n)):m+=60*n,A.includes("ss")?A=A.replace("ss",e(m)):i+=1e3*m,A.includes("S")){const s=e(i,3);A=A.includes("SSS")?A.replace("SSS",s):A.includes("SS")?A.replace("SS",s.slice(0,2)):A.replace("S",s.charAt(0))}return A}(A.format,r.value))),D=()=>{d(+A.time),A.autoStart&&n()};return u((()=>A.time),D,{immediate:!0}),i({start:n,pause:m,reset:D}),()=>c("div",{role:"timer","class":g()},[a["default"]?a["default"](r.value):l.value])}}));var D="data:image/png;base64,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";export{l as C,D as _};