import{a as t}from"./p-06203439.js";import{T as n}from"./p-dfa14c12.js";class r extends n{async AddPayment(n,r){try{const o=this.getToken();if(o!==null){const{data:a}=await t.post(`/Do_Payment?Ticket=${o}`,{payment:Object.assign(Object.assign({},n),{book_nbr:r})});if(a.ExceptionMsg!==""){throw new Error(a.ExceptionMsg)}return a.My_Result}}catch(t){console.log(t);throw new Error(t)}}async CancelPayment(n){try{const r=this.getToken();if(r!==null){const{data:o}=await t.post(`/Cancel_Payment?Ticket=${r}`,{id:n});if(o.ExceptionMsg!==""){throw new Error(o.ExceptionMsg)}return o.My_Result}}catch(t){console.log(t);throw new Error(t)}}async GetExposedCancelationDueAmount(n){try{const r=this.getToken();if(r!==null){const{data:o}=await t.post(`/Get_Exposed_Cancelation_Due_Amount?Ticket=${r}`,n);if(o.ExceptionMsg!==""){throw new Error(o.ExceptionMsg)}return o.My_Result}}catch(t){console.log(t);throw new Error(t)}}}export{r as P};
//# sourceMappingURL=p-e9f5563a.js.map