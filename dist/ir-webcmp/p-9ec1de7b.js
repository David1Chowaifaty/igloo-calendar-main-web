import{a as e}from"./p-06203439.js";import{e as t,d as a,l as r}from"./p-bd34825c.js";import{T as o}from"./p-dfa14c12.js";import{h as n}from"./p-6c4ba7c0.js";class s extends o{async getUnassignedDates(t,a,r){try{const o=this.getToken();if(o){const{data:n}=await e.post(`/Get_UnAssigned_Dates?Ticket=${o}`,{propertyid:t,from_date:a,to_date:r});if(n.ExceptionMsg!==""){throw new Error(n.ExceptionMsg)}return this.convertUnassignedDates(n.My_Result)}else{throw new Error("Invalid Token")}}catch(e){console.error(e);throw new Error(e)}}async getUnassignedRooms(t,a,r,o,n){try{const s=this.getToken();if(s){const{data:i}=await e.post(`/Get_Aggregated_UnAssigned_Rooms?Ticket=${s}`,{propertyid:a,specific_date:r});if(i.ExceptionMsg!==""){throw new Error(i.ExceptionMsg)}return this.transformToAssignable(t,i,o,n)}else{throw new Error("Invalid Token")}}catch(e){console.error(e);throw new Error(e)}}async assignUnit(a,r,o){try{const n=this.getToken();if(n){const{data:s}=await e.post(`/Assign_Exposed_Room?Ticket=${n}`,{booking_nbr:a,identifier:r,pr_id:o,extras:t});if(s.ExceptionMsg!==""){throw new Error(s.ExceptionMsg)}console.log(s);return s["My_Result"]}else{throw new Error("Invalid token")}}catch(e){console.error(e);throw new Error(e)}}cleanSpacesAndSpecialChars(e){const t=/[^a-zA-Z0-9]+/g;return e.replace(t,"")}transformToAssignable(e,t,a,r){const o=[];t.My_Result.forEach((t=>{t.unassigned_rooms.forEach((t=>{let n={roomTypeName:t.room_type_name,ID:t.identifier,NAME:t.guest_name,identifier:t.identifier,FROM_DATE:t.unassigned_date,TO_DATE:t.unassigned_date,BOOKING_NUMBER:t.book_nbr,STATUS:"IN-HOUSE",defaultDateRange:{fromDate:undefined,toDate:undefined,fromDateTimeStamp:0,toDateTimeStamp:0,fromDateStr:"",toDateStr:"",dateDifference:0},NO_OF_DAYS:1,roomsInfo:a,legendData:r,availableRooms:[],RT_ID:this.getRoomTypeId(t.room_type_name,a)};this.updateAvailableRooms(e,t,n,r,a);this.addDefaultDateRange(n);o.push(n)}))}));return o}addDefaultDateRange(e){e.defaultDateRange.fromDate=new Date(e.FROM_DATE+"T00:00:00");e.defaultDateRange.fromDateStr=a(e.defaultDateRange.fromDate);e.defaultDateRange.fromDateTimeStamp=e.defaultDateRange.fromDate.getTime();e.defaultDateRange.toDate=new Date(e.TO_DATE+"T00:00:00");e.defaultDateRange.toDateStr=a(e.defaultDateRange.toDate);e.defaultDateRange.toDateTimeStamp=e.defaultDateRange.toDate.getTime();e.defaultDateRange.dateDifference=e.NO_OF_DAYS}getRoomTypeId(e,t){return t.find((t=>this.cleanSpacesAndSpecialChars(t.name)===this.cleanSpacesAndSpecialChars(e))).id||null}updateAvailableRooms(e,t,a,o,s){const i=[];t.assignable_units.forEach((t=>{if(t.Is_Fully_Available&&!t.Is_Not_Available){const c=r(t.from_date,t.to_date);const d=n(new Date(e.from_date)).isAfter(n(new Date(t.from_date)))?e.from_date:t.from_date;const D=n(new Date(e.to_date)).isBefore(n(new Date(t.to_date)))&&n(new Date(e.to_date)).isAfter(n(new Date(t.from_date)))?e.to_date:t.to_date;i.push({RT_ID:a.RT_ID,STATUS:"PENDING-CONFIRMATION",FROM_DATE:d,roomName:t.name,PR_ID:t.pr_id,TO_DATE:D,NO_OF_DAYS:c,ID:"NEW_TEMP_EVENT",NAME:"",NOTES:"",BALANCE:"",INTERNAL_NOTE:"",hideBubble:true,legendData:o,roomsInfo:s});a.TO_DATE=t.to_date;a.NO_OF_DAYS=c}}));a.availableRooms=i}convertUnassignedDates(e){let t={};e.forEach((e=>{let a=new Date(e.date);a.setHours(0,0,0,0);t[a.getTime()]={categories:{},dateStr:e.description}}));return t}}export{s as T};
//# sourceMappingURL=p-9ec1de7b.js.map