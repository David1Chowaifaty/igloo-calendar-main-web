import{h as n}from"./p-6c4ba7c0.js";function t(t,e){const s=`${t.split(" ")[1]} ${e}`;const r=n(s,"DD MMM YYYY");if(!r.isValid()){throw new Error("Invalid Date")}return r.format("D_M_YYYY")}function e(t,e){const s=n(t+" "+e,"ddd DD MMM YYYY").toDate();s.setHours(0,0,0,0);return s.getTime()}function s(n,t){const e=new Date(n);const s=new Date(t);return Math.ceil((s.getTime()-e.getTime())/(1e3*60*60*24))}function r(n){const t=n.getFullYear();const e=(n.getMonth()+1).toString().padStart(2,"0");const s=n.getDate().toString().padStart(2,"0");return`${t}-${e}-${s}`}function c(n){let t={};const e={"IN-HOUSE":{id:1,clsName:"IN_HOUSE"},CONFIRMED:{id:2,clsName:"CONFIRMED"},"PENDING-CONFIRMATION":{id:3,clsName:"PENDING_CONFIRMATION"},"SPLIT-UNIT":{id:4,clsName:"SPLIT_UNIT"},"CHECKED-IN":{id:5,clsName:"CHECKED_IN"},"CHECKED-OUT":{id:5,clsName:"CHECKED_OUT"},BLOCKED:{id:6,clsName:"BLOCKED"},"BLOCKED-WITH-DATES":{id:7,clsName:"BLOCKED_WITH_DATES"},NOTES:{id:8,clsName:"NOTES"},"OUTSTANDING-BALANCE":{id:9,clsName:"OUTSTANDING_BALANCE"},"TEMP-EVENT":{id:10,clsName:"PENDING_CONFIRMATION"}};n.forEach((n=>{t[n.id]=n;t.statusId=e}));return t}function o(n){return["003","002","004"].includes(n)}function a(n){const t=new Intl.NumberFormat(undefined,{style:"currency",currency:n,minimumFractionDigits:0,maximumFractionDigits:0});return t.format(0).replace(/[0-9]/g,"").trim()}const i=(n,t)=>t.find((t=>t.id===n));function u(n){const t=new Date;const e=n;t.setHours(t.getHours()+e,t.getMinutes(),0,0);return{BLOCKED_TILL_DATE:r(t),BLOCKED_TILL_HOUR:t.getHours().toString(),BLOCKED_TILL_MINUTE:t.getMinutes().toString()}}function D(t,e){const s=n(t,"D_M_YYYY");s.add(e,"days");return s.format("YYYY-MM-DD")}function Y(t){const e=n(t,"D_M_YYYY");return e.format("YYYY-MM-DD")}function N(t){return n(t).add(2,"months").format("YYYY-MM-DD")}function M(t,e="DD MMM YYYY"){const s=n(t,e).format("ddd, DD MMM YYYY");return s}function d(t){return n(t).add(1,"days").format("YYYY-MM-DD")}function E(t){return n(t,"YYYY-MM-DD").format("DD/MM ddd")}function O(t,e){let s=[];let r=n.min(n(t).add(1,"days"),n(e));let c=n.max(n(t),n(e));while(r<c){s.push(r.format("YYYY-MM-DD"));r=r.clone().add(1,"days")}return s}function f(n){return n<10?n.toString().padStart(2,"0"):n.toString()}function l(n,t){const e=a(n);return e+t.toFixed(2)}const I=[{key:"private_note",value:""},{key:"is_backend",value:true}];function T(n,t="add"){const e=JSON.parse(sessionStorage.getItem("anchor"));if(e){if(t==="add"){return sessionStorage.setItem("anchor",JSON.stringify(Object.assign(Object.assign({},e),n)))}else if(t==="remove"){const t=Object.keys(n);t.forEach((n=>{if(n in e){delete e[n]}}));return sessionStorage.setItem("anchor",JSON.stringify(e))}}else{if(t==="add"){return sessionStorage.setItem("anchor",JSON.stringify(Object.assign({},n)))}}}function _(){const n=JSON.parse(sessionStorage.getItem("anchor"));if(n){return n.login||null}return null}export{u as a,t as b,_ as c,r as d,I as e,e as f,a as g,s as h,o as i,c as j,d as k,N as l,T as m,Y as n,D as o,l as p,O as q,f as r,E as s,M as t,i as u};
//# sourceMappingURL=p-b45536f7.js.map