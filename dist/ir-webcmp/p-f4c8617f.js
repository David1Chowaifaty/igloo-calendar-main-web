import{a as t}from"./p-06203439.js";import{B as o}from"./p-aa2e4dc7.js";import{e as r,k as e}from"./p-bd34825c.js";import{T as s}from"./p-dfa14c12.js";class a extends s{constructor(){super(...arguments);this.bookingService=new o}async reallocateEvent(o,e,s,a){try{const n=this.getToken();if(n){console.log(o,e,s,a);const{data:c}=await t.post(`/ReAllocate_Exposed_Room?Ticket=${n}`,{pool:o,destination_pr_id:e,from_date:s,to_date:a,extras:r});if(c.ExceptionMsg!==""){throw new Error(c.ExceptionMsg)}console.log(c);return c}else{throw new Error("Invalid Token")}}catch(t){console.error(t);throw new Error(t)}}async deleteEvent(o){try{const r=this.getToken();if(r){const{data:e}=await t.post(`/UnBlock_Exposed_Unit?Ticket=${r}`,{POOL:o});if(e.ExceptionMsg!==""){throw new Error(e.ExceptionMsg)}return e.My_Result}else{throw new Error("Invalid Token")}}catch(t){console.log(t);throw new Error(t)}}async updateBlockedEvent(t){try{const o=this.getToken();if(o){const r=e(+t.RELEASE_AFTER_HOURS);await this.deleteEvent(t.POOL);this.bookingService.setToken(o);const s=await this.bookingService.blockUnit(Object.assign({from_date:this.formatDate(t.FROM_DATE),to_date:this.formatDate(t.TO_DATE),pr_id:t.PR_ID,STAY_STATUS_CODE:t.OUT_OF_SERVICE?"004":t.RELEASE_AFTER_HOURS===0?"002":"003",DESCRIPTION:t.RELEASE_AFTER_HOURS||"",NOTES:t.OPTIONAL_REASON||""},r));return s}else{throw new Error("Invalid Token")}}catch(t){console.error(t);throw new Error(t)}}formatDate(t){return t.split("/").join("-")}}export{a as E};
//# sourceMappingURL=p-f4c8617f.js.map