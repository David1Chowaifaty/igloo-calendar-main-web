import{a as e}from"./p-06203439.js";import{e as t,d as a,a as r}from"./p-4dc453f7.js";import{h as o}from"./p-6c4ba7c0.js";class n{async getUnassignedDates(t,a,r){try{const{data:o}=await e.post(`/Get_UnAssigned_Dates`,{propertyid:t,from_date:a,to_date:r});if(o.ExceptionMsg!==""){throw new Error(o.ExceptionMsg)}return this.convertUnassignedDates(o.My_Result)}catch(e){console.error(e);throw new Error(e)}}async getUnassignedRooms(t,a,r,o,n){try{const{data:s}=await e.post(`/Get_Aggregated_UnAssigned_Rooms`,{propertyid:a,specific_date:r});if(s.ExceptionMsg!==""){throw new Error(s.ExceptionMsg)}return this.transformToAssignable(t,s,o,n)}catch(e){console.error(e);throw new Error(e)}}async assignUnit(a,r,o){try{const{data:n}=await e.post(`/Assign_Exposed_Room`,{booking_nbr:a,identifier:r,pr_id:o,extras:t});if(n.ExceptionMsg!==""){throw new Error(n.ExceptionMsg)}console.log(n);return n["My_Result"]}catch(e){console.error(e);throw new Error(e)}}cleanSpacesAndSpecialChars(e){const t=/[^a-zA-Z0-9]+/g;return e.replace(t,"")}transformToAssignable(e,t,a,r){const o=[];t.My_Result.forEach((t=>{t.unassigned_rooms.forEach((t=>{let n={roomTypeName:t.room_type_name,ID:t.identifier,NAME:t.guest_name,identifier:t.identifier,FROM_DATE:t.unassigned_date,TO_DATE:t.unassigned_date,BOOKING_NUMBER:t.book_nbr,STATUS:"IN-HOUSE",defaultDateRange:{fromDate:undefined,toDate:undefined,fromDateTimeStamp:0,toDateTimeStamp:0,fromDateStr:"",toDateStr:"",dateDifference:0},NO_OF_DAYS:1,roomsInfo:a,legendData:r,availableRooms:[],RT_ID:this.getRoomTypeId(t.room_type_name,a)};this.updateAvailableRooms(e,t,n,r,a);this.addDefaultDateRange(n);o.push(n)}))}));return o}addDefaultDateRange(e){e.defaultDateRange.fromDate=new Date(e.FROM_DATE+"T00:00:00");e.defaultDateRange.fromDateStr=a(e.defaultDateRange.fromDate);e.defaultDateRange.fromDateTimeStamp=e.defaultDateRange.fromDate.getTime();e.defaultDateRange.toDate=new Date(e.TO_DATE+"T00:00:00");e.defaultDateRange.toDateStr=a(e.defaultDateRange.toDate);e.defaultDateRange.toDateTimeStamp=e.defaultDateRange.toDate.getTime();e.defaultDateRange.dateDifference=e.NO_OF_DAYS}getRoomTypeId(e,t){return t.find((t=>this.cleanSpacesAndSpecialChars(t.name)===this.cleanSpacesAndSpecialChars(e))).id||null}updateAvailableRooms(e,t,a,n,s){const i=[];t.assignable_units.forEach((t=>{if(t.Is_Fully_Available&&!t.Is_Not_Available){const D=r(t.from_date,t.to_date);const d=o(new Date(e.from_date)).isAfter(o(new Date(t.from_date)))?e.from_date:t.from_date;const c=o(new Date(e.to_date)).isBefore(o(new Date(t.to_date)))&&o(new Date(e.to_date)).isAfter(o(new Date(t.from_date)))?e.to_date:t.to_date;i.push({RT_ID:a.RT_ID,STATUS:"PENDING-CONFIRMATION",FROM_DATE:d,roomName:t.name,PR_ID:t.pr_id,TO_DATE:c,NO_OF_DAYS:D,ID:"NEW_TEMP_EVENT",NAME:"",NOTES:"",BALANCE:"",INTERNAL_NOTE:"",hideBubble:true,legendData:n,roomsInfo:s});a.TO_DATE=t.to_date;a.NO_OF_DAYS=D}}));a.availableRooms=i}convertUnassignedDates(e){let t={};e.forEach((e=>{let a=new Date(e.date);a.setHours(0,0,0,0);t[a.getTime()]={categories:{},dateStr:e.description}}));return t}}export{n as T};
//# sourceMappingURL=p-5955518a.js.map