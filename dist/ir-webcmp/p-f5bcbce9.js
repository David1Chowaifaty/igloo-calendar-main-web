import{a as t,T as n}from"./p-f5b71ff4.js";import{i as e,b as r,c as o,e as a,d as s}from"./p-5ef8b20a.js";import{h as i}from"./p-6c4ba7c0.js";import{l as c}from"./p-3ad0bf4e.js";import{c as _}from"./p-0f9965e9.js";async function l(t){const n=[];const e=await f();for(const r of t){for(const t of r.days){for(const r of t.room_types){E(r.physicalrooms,n,e)}}}return n}function E(t,n,e){for(const r of t){for(const t in r.calendar_cell){if(r.calendar_cell[t].Is_Available===false){A(r.calendar_cell[t],n,e)}}}}const u={"004":"BLOCKED","003":"BLOCKED-WITH-DATES","002":"BLOCKED"};const T={"000":"IN-HOUSE","001":"PENDING-CONFIRMATION","002":"CONFIRMED","003":"CHECKED-OUT"};function d(t,n){if(t===null&&n===null)return"";if(n!==null&&n!==""){return`${t!==null&&t!==void 0?t:""} , ${n!==null&&n!==void 0?n:""}`}return t}async function f(){try{const n=_.token;if(n){const{data:e}=await t.post(`/Get_Setup_Entries_By_TBL_NAME_Multi?Ticket=${n}`,{TBL_NAMES:["_STAY_STATUS"]});return e.My_Result.map((t=>({code:t.CODE_NAME,value:t.CODE_VALUE_EN})))}else{throw new Error("Invalid Token")}}catch(t){console.log(t)}}function w(t,n,e){const r=new Date(t);r.setHours(n);r.setMinutes(e);return`${c.entries.Lcz_BlockedTill} ${i(r).format("MMM DD, HH:mm")}`}function h(t,n){var r,o;if(e(t.STAY_STATUS_CODE)){return{ID:t.POOL,NOTES:"",BALANCE:"",NAME:t.My_Block_Info.NOTES!==""?t.My_Block_Info.NOTES:t.STAY_STATUS_CODE==="003"?w(t.My_Block_Info.BLOCKED_TILL_DATE,t.My_Block_Info.BLOCKED_TILL_HOUR,t.My_Block_Info.BLOCKED_TILL_MINUTE):n.find((n=>n.code===t.STAY_STATUS_CODE)).value||"",RELEASE_AFTER_HOURS:t.My_Block_Info.DESCRIPTION,PR_ID:t.My_Block_Info.pr_id,ENTRY_DATE:t.My_Block_Info.BLOCKED_TILL_DATE,ENTRY_HOUR:t.My_Block_Info.BLOCKED_TILL_HOUR,ENTRY_MINUTE:t.My_Block_Info.BLOCKED_TILL_MINUTE,OPTIONAL_REASON:t.My_Block_Info.NOTES,FROM_DATE:t.DATE,TO_DATE:t.DATE,NO_OF_DAYS:1,STATUS:u[t.STAY_STATUS_CODE],POOL:t.POOL,STATUS_CODE:t.STAY_STATUS_CODE,OUT_OF_SERVICE:t.STAY_STATUS_CODE==="004",FROM_DATE_STR:t.My_Block_Info.format.from_date,TO_DATE_STR:t.My_Block_Info.format.to_date}}if(t.booking.booking_nbr==="88237899"){console.log(t)}return{ID:t.POOL,TO_DATE:t.DATE,FROM_DATE:t.DATE,NO_OF_DAYS:1,STATUS:T[(r=t.booking)===null||r===void 0?void 0:r.status.code],NAME:d(t.room.guest.first_name,t.room.guest.last_name),IDENTIFIER:t.room.identifier,PR_ID:t.pr_id,POOL:t.POOL,BOOKING_NUMBER:t.booking.booking_nbr,NOTES:t.booking.is_direct?t.booking.remark:null,is_direct:t.booking.is_direct,BALANCE:(o=t.booking.financial)===null||o===void 0?void 0:o.due_amount,channel_booking_nbr:t.booking.channel_booking_nbr}}function O(t,n){t.NO_OF_DAYS=r(t.FROM_DATE,n.DATE);t.TO_DATE=n.DATE;if(n.booking){const{arrival:e}=n.booking;Object.assign(t,{ARRIVAL_TIME:e.description})}return t}function A(t,n,e){const r=n.findIndex((n=>n.POOL===t.POOL));if(r===-1){const r=h(t,e);n.push(r)}else{const e=O(n[r],t);n[r]=e}}function y(t){let n=[];const e=n=>{const e=i();const r=i(n.to_date,"YYYY-MM-DD");const o=i(n.from_date,"YYYY-MM-DD");if(o.isSame(e,"day")&&e.hour()>=12){return T["000"]}else if(e.isAfter(o,"day")&&e.isBefore(r,"day")){return T["000"]}else if(r.isSame(e,"day")&&e.hour()<12){return T["000"]}else if(r.isSame(e,"day")&&e.hour()>=12||r.isBefore(e,"day")){return T["003"]}else{return T[(t===null||t===void 0?void 0:t.status.code)||"001"]}};const r=t.rooms.filter((t=>!!t["assigned_units_pool"]));r.forEach((r=>{var o,a;n.push({ID:r["assigned_units_pool"],TO_DATE:r.to_date,FROM_DATE:r.from_date,NO_OF_DAYS:r.days.length,ARRIVAL:t.arrival,IS_EDITABLE:true,BALANCE:(o=t.financial)===null||o===void 0?void 0:o.due_amount,STATUS:e(r),NAME:d(r.guest.first_name,r.guest.last_name),PHONE:(a=t.guest.mobile)!==null&&a!==void 0?a:"",ENTRY_DATE:"12-12-2023",RATE:r.total,RATE_PLAN:r.rateplan.name,SPLIT_BOOKING:false,RATE_PLAN_ID:r.rateplan.id,IDENTIFIER:r.identifier,RATE_TYPE:r.roomtype.id,ADULTS_COUNT:r.occupancy.adult_nbr,CHILDREN_COUNT:r.occupancy.children_nbr,PR_ID:+r.unit.id,POOL:r["assigned_units_pool"],GUEST:t.guest,ROOMS:t.rooms,BOOKING_NUMBER:t.booking_nbr,cancelation:r.rateplan.cancelation,guarantee:r.rateplan.guarantee,TOTAL_PRICE:r.gross_total,COUNTRY:t.guest.country_id,FROM_DATE_STR:t.format.from_date,TO_DATE_STR:t.format.to_date,adult_child_offering:r.rateplan.selected_variation.adult_child_offering,ARRIVAL_TIME:t.arrival.description,origin:t.origin,channel_booking_nbr:t.channel_booking_nbr,is_direct:t.is_direct,NOTES:t.is_direct?t.remark:null,SOURCE:{code:t.source.code,description:t.source.description,tag:t.source.tag},ota_notes:t.ota_notes})}));return n}async function R(t){const n=await f();return{ID:t.POOL,NOTES:"",BALANCE:"",NAME:t.NOTES!==""?t.NOTES:t.STAY_STATUS_CODE==="003"?w(t.BLOCKED_TILL_DATE,t.BLOCKED_TILL_HOUR,t.BLOCKED_TILL_MINUTE):n.find((n=>n.code===t.STAY_STATUS_CODE)).value||"",RELEASE_AFTER_HOURS:t.DESCRIPTION,PR_ID:t.pr_id,ENTRY_DATE:t.BLOCKED_TILL_DATE,ENTRY_HOUR:t.BLOCKED_TILL_HOUR,ENTRY_MINUTE:t.BLOCKED_TILL_MINUTE,OPTIONAL_REASON:t.NOTES,FROM_DATE:t.from_date,TO_DATE:t.to_date,NO_OF_DAYS:D(t.from_date,t.to_date),STATUS:u[t.STAY_STATUS_CODE],POOL:t.POOL,STATUS_CODE:t.STAY_STATUS_CODE,OUT_OF_SERVICE:t.STAY_STATUS_CODE==="004",FROM_DATE_STR:t.format.from_date,TO_DATE_STR:t.format.to_date}}function D(t,n){const e=i(t,"YYYY-MM-DD");const r=i(n,"YYYY-MM-DD");const o=r.diff(e,"days");return o}class I extends n{async getCalendarData(n,e,r){try{const s=this.getToken();if(s!==null){const{data:i}=await t.post(`/Get_Exposed_Calendar?Ticket=${s}`,{propertyid:n,from_date:e,to_date:r});if(i.ExceptionMsg!==""){throw new Error(i.ExceptionMsg)}const c=i.My_Result.months;const _=[];const E=await l(c);const u=c.map((t=>{_.push({daysCount:t.days.length,monthName:t.description});return t.days.map((n=>({day:o(n.description,t.description),currentDate:a(n.description,t.description),dayDisplayName:n.description,rate:n.room_types,unassigned_units_nbr:n.unassigned_units_nbr,occupancy:n.occupancy})))})).flat();return Promise.resolve({ExceptionCode:null,ExceptionMsg:"",My_Params_Get_Rooming_Data:{AC_ID:n,FROM:i.My_Params_Get_Exposed_Calendar.from_date,TO:i.My_Params_Get_Exposed_Calendar.to_date},days:u,months:_,myBookings:E,defaultMonths:c})}}catch(t){console.error(t)}}async fetchGuest(n){try{const e=this.getToken();if(e!==null){const{data:r}=await t.post(`/Get_Exposed_Guest?Ticket=${e}`,{email:n});if(r.ExceptionMsg!==""){throw new Error(r.ExceptionMsg)}return r.My_Result}}catch(t){console.log(t);throw new Error(t)}}async editExposedGuest(n,e){try{const r=this.getToken();if(r!==null){const{data:o}=await t.post(`/Edit_Exposed_Guest?Ticket=${r}`,Object.assign(Object.assign({},n),{book_nbr:e}));if(o.ExceptionMsg!==""){throw new Error(o.ExceptionMsg)}return o.My_Result}}catch(t){console.log(t);throw new Error(t)}}async getBookingAvailability(n,e,r,o,a,s,i){try{const c=this.getToken();if(c){const{data:_}=await t.post(`/Get_Exposed_Booking_Availability?Ticket=${c}`,{propertyid:r,from_date:n,to_date:e,adult_nbr:o.adult,child_nbr:o.child,language:a,currency_ref:i.code,room_type_ids:s});if(_.ExceptionMsg!==""){throw new Error(_.ExceptionMsg)}return _["My_Result"]}else{throw new Error("Token doesn't exist")}}catch(t){console.error(t);throw new Error(t)}}async getCountries(n){try{const e=this.getToken();if(e){const{data:r}=await t.post(`/Get_Exposed_Countries?Ticket=${e}`,{language:n});if(r.ExceptionMsg!==""){throw new Error(r.ExceptionMsg)}return r.My_Result}}catch(t){console.error(t);throw new Error(t)}}async fetchSetupEntries(){try{const n=this.getToken();if(n){const{data:e}=await t.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI?Ticket=${n}`,{TBL_NAMES:["_ARRIVAL_TIME","_RATE_PRICING_MODE","_BED_PREFERENCE_TYPE"]});if(e.ExceptionMsg!==""){throw new Error(e.ExceptionMsg)}const r=e.My_Result;return{arrivalTime:r.filter((t=>t.TBL_NAME==="_ARRIVAL_TIME")),ratePricingMode:r.filter((t=>t.TBL_NAME==="_RATE_PRICING_MODE")),bedPreferenceType:r.filter((t=>t.TBL_NAME==="_BED_PREFERENCE_TYPE"))}}}catch(t){console.error(t);throw new Error(t)}}async getBlockedInfo(){try{const n=this.getToken();if(n){const{data:e}=await t.post(`/Get_Setup_Entries_By_TBL_NAME_MULTI?Ticket=${n}`,{TBL_NAMES:["_CALENDAR_BLOCKED_TILL"]});if(e.ExceptionMsg!==""){throw new Error(e.ExceptionMsg)}return e.My_Result}}catch(t){console.error(t);throw new Error(t)}}async getUserDefaultCountry(){try{const n=this.getToken();if(n){const{data:e}=await t.post(`/Get_Country_By_IP?Ticket=${n}`,{IP:""});if(e.ExceptionMsg!==""){throw new Error(e.ExceptionMsg)}return e["My_Result"]}}catch(t){console.error(t);throw new Error(t)}}async blockUnit(n){try{const e=this.getToken();if(e){const{data:r}=await t.post(`/Block_Exposed_Unit?Ticket=${e}`,n);if(r.ExceptionMsg!==""){throw new Error(r.ExceptionMsg)}console.log(r);return r["My_Params_Block_Exposed_Unit"]}}catch(t){console.error(t);throw new Error(t)}}async getUserInfo(n){try{const e=this.getToken();if(e){const{data:r}=await t.post(`/GET_EXPOSED_GUEST?Ticket=${e}`,{email:n});if(r.ExceptionMsg!==""){throw new Error(r.ExceptionMsg)}return r.My_Result}else{throw new Error("Invalid Token")}}catch(t){console.error(t);throw new Error(t)}}async getExposedBooking(n,e){try{const r=this.getToken();if(r){const{data:o}=await t.post(`/Get_Exposed_Booking?Ticket=${r}`,{booking_nbr:n,language:e});if(o.ExceptionMsg!==""){throw new Error(o.ExceptionMsg)}return o.My_Result}else{throw new Error("Invalid Token")}}catch(t){console.error(t)}}generateDays(t,n,e){const r=new Date(t);const o=new Date(n);const a=[];while(r<o){a.push({date:r.toISOString().split("T")[0],amount:e,cost:null});r.setDate(r.getDate()+1)}return a}calculateTotalRate(t,n,e,r){if(e&&r===2){return+t}return+t/+n}async fetchExposedGuest(n,e){try{const r=this.getToken();if(r){const{data:o}=await t.post(`/Fetch_Exposed_Guests?Ticket=${r}`,{email:n,property_id:e});if(o.ExceptionMsg!==""){throw new Error(o.ExceptionMsg)}return o["My_Result"]}else{throw new Error("Token doesn't exist")}}catch(t){console.error(t);throw new Error(t)}}async fetchExposedBookings(n,e,r,o){try{const a=this.getToken();if(a){const{data:s}=await t.post(`/Fetch_Exposed_Bookings?Ticket=${a}`,{booking_nbr:n,property_id:e,from_date:r,to_date:o});if(s.ExceptionMsg!==""){throw new Error(s.ExceptionMsg)}return s["My_Result"]}else{throw new Error("Token doesn't exist")}}catch(t){console.error(t);throw new Error(t)}}async getPCICardInfoURL(n){try{const e=this.getToken();if(e){const{data:r}=await t.post(`/Get_PCI_Card_Info_URL?Ticket=${e}`,{BOOK_NBR:n});if(r.ExceptionMsg!==""){throw new Error(r.ExceptionMsg)}return r["My_Result"]}else{throw new Error("Token doesn't exist")}}catch(t){console.error(t);throw new Error(t)}}async bookUser(n,e,r,o,a,i,c,_,l,E,u,T,d,f,w){try{const h=this.getToken();if(h){const O=s(r);const A=s(o);let y={email:n.email||null,first_name:n.firstName,last_name:n.lastName,country_id:n.countryId===""?null:n.countryId,city:null,mobile:n.contactNumber===null?"":n.contactNumber,address:"",dob:null,subscribe_to_news_letter:n.emailGuest||false,cci:n.cardNumber?{nbr:n.cardNumber,holder_name:n.cardHolderName,expiry_month:n.expiryMonth,expiry_year:n.expiryYear}:null};if(n.id){y=Object.assign(Object.assign({},y),{id:n.id})}const R={assign_units:true,check_in:e,is_pms:true,is_direct:true,booking:{booking_nbr:u||"",from_date:O,to_date:A,remark:n.message||null,property:{id:_},source:c,currency:E,arrival:{code:d?d:n.selectedArrivalTime},guest:T||y,rooms:[...a.map((t=>({identifier:w||null,roomtype:{id:t.roomCategoryId,name:t.roomCategoryName,physicalrooms:null,rateplans:null,availabilities:null,inventory:t.inventory,rate:t.rate/i},rateplan:{id:t.ratePlanId,name:t.ratePlanName,rate_restrictions:null,variations:null,cancelation:t.cancelation,guarantee:t.guarantee},unit:typeof f==="undefined"&&t.roomId===""?null:{id:+f||+t.roomId},occupancy:{adult_nbr:t.adultCount,children_nbr:t.childrenCount,infant_nbr:null},bed_preference:t.preference,from_date:O,to_date:A,notes:null,days:this.generateDays(O,A,this.calculateTotalRate(t.rate,i,t.isRateModified,t.rateType)),guest:{email:null,first_name:t.guestName,last_name:null,country_id:null,city:null,mobile:null,address:null,dob:null,subscribe_to_news_letter:null}}))),...l]}};console.log("book user payload",R);const{data:D}=await t.post(`/DoReservation?Ticket=${h}`,R);if(D.ExceptionMsg!==""){throw new Error(D.ExceptionMsg)}console.log(D["My_Result"]);return D["My_Result"]}else{throw new Error("Invalid token")}}catch(t){console.error(t);throw new Error(t)}}}export{I as B,y as a,T as b,D as c,d as f,R as t};
//# sourceMappingURL=p-f5bcbce9.js.map