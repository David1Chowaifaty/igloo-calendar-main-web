import{a as t}from"./p-06203439.js";import{B as o}from"./p-2b2c397a.js";import{e as r,g as e}from"./p-4dc453f7.js";class a{constructor(){this.bookingService=new o}async reallocateEvent(o,e,a,s){try{console.log(o,e,a,s);const{data:n}=await t.post(`/ReAllocate_Exposed_Room`,{pool:o,destination_pr_id:e,from_date:a,to_date:s,extras:r});if(n.ExceptionMsg!==""){throw new Error(n.ExceptionMsg)}console.log(n);return n}catch(t){console.error(t);throw new Error(t)}}async deleteEvent(o){try{const{data:r}=await t.post(`/UnBlock_Exposed_Unit`,{POOL:o});if(r.ExceptionMsg!==""){throw new Error(r.ExceptionMsg)}return r.My_Result}catch(t){console.log(t);throw new Error(t)}}async updateBlockedEvent(t){try{const o=e(+t.RELEASE_AFTER_HOURS);await this.deleteEvent(t.POOL);const r=await this.bookingService.blockUnit(Object.assign({from_date:this.formatDate(t.FROM_DATE),to_date:this.formatDate(t.TO_DATE),pr_id:t.PR_ID,STAY_STATUS_CODE:t.OUT_OF_SERVICE?"004":t.RELEASE_AFTER_HOURS===0?"002":"003",DESCRIPTION:t.RELEASE_AFTER_HOURS||"",NOTES:t.OPTIONAL_REASON||""},o));return r}catch(t){console.error(t);throw new Error(t)}}formatDate(t){return t.split("/").join("-")}}export{a as E};
//# sourceMappingURL=p-591fdd05.js.map