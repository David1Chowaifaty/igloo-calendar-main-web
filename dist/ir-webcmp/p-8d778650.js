import{c as t}from"./p-4eb12235.js";const n={days:[],months:[]};const{state:s,onChange:e}=t(n);const o={unassigned_dates:{}};let{state:c,onChange:a}=t(o);function r(t){c.unassigned_dates=Object.assign(Object.assign({},c.unassigned_dates),t);console.log(c.unassigned_dates)}function i(){return c.unassigned_dates}function u(t,n){const s=f(t);const e=f(n);Object.keys(c.unassigned_dates).forEach((t=>{const n=parseInt(t);if(s<=n&&n<=e){delete c.unassigned_dates[t]}}))}function f(t){const n=new Date(t);n.setHours(0,0,0,0);return n.getTime()}export{r as a,s as c,i as g,a as h,u as r};
//# sourceMappingURL=p-8d778650.js.map