import{h as n}from"./p-6c4ba7c0.js";function t(t,s){const c=`${t.split(" ")[1]} ${s}`;const e=n(c,"DD MMM YYYY");if(!e.isValid()){throw new Error("Invalid Date")}return e.format("D_M_YYYY")}function s(t,s){const c=n(t+" "+s,"ddd DD MMM YYYY").toDate();c.setHours(0,0,0,0);return c.getTime()}function c(n,t){const s=new Date(n);const c=new Date(t);return Math.ceil((c.getTime()-s.getTime())/(1e3*60*60*24))}function e(n){const t=n.getFullYear();const s=(n.getMonth()+1).toString().padStart(2,"0");const c=n.getDate().toString().padStart(2,"0");return`${t}-${s}-${c}`}function D(n){let t={};const s={"IN-HOUSE":{id:1,clsName:"IN_HOUSE"},CONFIRMED:{id:2,clsName:"CONFIRMED"},"PENDING-CONFIRMATION":{id:3,clsName:"PENDING_CONFIRMATION"},"SPLIT-UNIT":{id:4,clsName:"SPLIT_UNIT"},"CHECKED-IN":{id:5,clsName:"CHECKED_IN"},"CHECKED-OUT":{id:5,clsName:"CHECKED_OUT"},BLOCKED:{id:6,clsName:"BLOCKED"},"BLOCKED-WITH-DATES":{id:7,clsName:"BLOCKED_WITH_DATES"},NOTES:{id:8,clsName:"NOTES"},"OUTSTANDING-BALANCE":{id:9,clsName:"OUTSTANDING_BALANCE"},"TEMP-EVENT":{id:10,clsName:"PENDING_CONFIRMATION"}};n.forEach((n=>{t[n.id]=n;t.statusId=s}));return t}function Y(n){return["003","002","004"].includes(n)}function r(n){const t=new Intl.NumberFormat(undefined,{style:"currency",currency:n,minimumFractionDigits:0,maximumFractionDigits:0});return t.format(0).replace(/[0-9]/g,"").trim()}const a=(n,t)=>t.find((t=>t.id===n));function o(n){const t=new Date;const s=n;t.setHours(t.getHours()+s,t.getMinutes(),0,0);return{BLOCKED_TILL_DATE:e(t),BLOCKED_TILL_HOUR:t.getHours().toString(),BLOCKED_TILL_MINUTE:t.getMinutes().toString()}}function i(t,s){const c=n(t,"D_M_YYYY");c.add(s,"days");return c.format("YYYY-MM-DD")}function N(t){const s=n(t,"D_M_YYYY");return s.format("YYYY-MM-DD")}function u(t){return n(t).add(2,"months").format("YYYY-MM-DD")}function M(t,s="DD MMM YYYY"){const c=n(t,s).format("ddd, DD MMM YYYY");return c}function E(t){return n(t).add(1,"days").format("YYYY-MM-DD")}function I(t){return n(t,"YYYY-MM-DD").format("DD/MM ddd")}function d(t,s){let c=[];let e=n.min(n(t).add(1,"days"),n(s));let D=n.max(n(t),n(s));while(e<D){c.push(e.format("YYYY-MM-DD"));e=e.clone().add(1,"days")}return c}function T(n){return n<10?n.toString().padStart(2,"0"):n.toString()}function O(n,t){const s=r(n);return s+t.toFixed(2)}const C=[{key:"private_note",value:""}];export{o as a,s as b,t as c,e as d,C as e,c as f,r as g,D as h,Y as i,E as j,u as k,N as l,i as m,O as n,d as o,I as p,M as q,T as r,a as s};
//# sourceMappingURL=p-3564440f.js.map