import{h as n}from"./p-6c4ba7c0.js";import{i as t,l as o}from"./p-bd34825c.js";import{a as T}from"./p-06203439.js";import{l as E}from"./p-806fad31.js";import{c as _}from"./p-6bab2172.js";import{c as e}from"./p-4eb12235.js";const O={days:[],months:[],fromDate:"",toDate:""};const{state:a,onChange:A}=e(O);async function D(n){const t=[];const o=await c();for(const T of n){for(const n of T.days){for(const T of n.room_types){r(T.physicalrooms,t,o)}}}return t}function r(n,t,o){for(const T of n){for(const n in T.calendar_cell){if(T.calendar_cell[n].Is_Available===false){N(T.calendar_cell[n],t,o)}}}}const s={"004":"BLOCKED","003":"BLOCKED-WITH-DATES","002":"BLOCKED"};const i={"000":"IN-HOUSE","001":"PENDING-CONFIRMATION","002":"CONFIRMED","003":"CHECKED-OUT"};function R(n,t){if(n===null&&t===null)return"";if(t!==null&&t!==""){return`${n!==null&&n!==void 0?n:""} , ${t!==null&&t!==void 0?t:""}`}return n}async function c(){try{const n=_.token;if(n){const{data:t}=await T.post(`/Get_Setup_Entries_By_TBL_NAME_Multi?Ticket=${n}`,{TBL_NAMES:["_STAY_STATUS"]});return t.My_Result.map((n=>({code:n.CODE_NAME,value:n.CODE_VALUE_EN})))}else{throw new Error("Invalid Token")}}catch(n){console.log(n)}}function l(t,o,T){const _=new Date(t);_.setHours(o);_.setMinutes(T);return`${E.entries.Lcz_BlockedTill} ${n(_).format("MMM DD, HH:mm")}`}function Y(T,E){var _,e,O,a;if(t(T.STAY_STATUS_CODE)){const t=n(T.My_Block_Info.from_date,"YYYY-MM-DD").isAfter(T.DATE)?T.My_Block_Info.from_date:T.DATE;const _=n(T.My_Block_Info.to_date,"YYYY-MM-DD").isAfter(T.DATE)?T.My_Block_Info.to_date:T.DATE;return{ID:T.POOL,NOTES:"",BALANCE:"",NAME:T.My_Block_Info.NOTES!==""?T.My_Block_Info.NOTES:T.STAY_STATUS_CODE==="003"?l(T.My_Block_Info.BLOCKED_TILL_DATE,T.My_Block_Info.BLOCKED_TILL_HOUR,T.My_Block_Info.BLOCKED_TILL_MINUTE):E.find((n=>n.code===T.STAY_STATUS_CODE)).value||"",RELEASE_AFTER_HOURS:T.My_Block_Info.DESCRIPTION,PR_ID:T.My_Block_Info.pr_id,ENTRY_DATE:T.My_Block_Info.BLOCKED_TILL_DATE,ENTRY_HOUR:T.My_Block_Info.BLOCKED_TILL_HOUR,ENTRY_MINUTE:T.My_Block_Info.BLOCKED_TILL_MINUTE,OPTIONAL_REASON:T.My_Block_Info.NOTES,FROM_DATE:t,TO_DATE:_,NO_OF_DAYS:o(t,_),STATUS:s[T.STAY_STATUS_CODE],POOL:T.POOL,STATUS_CODE:T.STAY_STATUS_CODE,OUT_OF_SERVICE:T.STAY_STATUS_CODE==="004",FROM_DATE_STR:T.My_Block_Info.format.from_date,TO_DATE_STR:T.My_Block_Info.format.to_date,defaultDates:{from_date:T.My_Block_Info.from_date,to_date:T.My_Block_Info.to_date}}}if(T.booking.booking_nbr.toString()==="23080178267"){console.log("booking",T)}const A=n(T.room.from_date,"YYYY-MM-DD").isAfter(T.DATE)?T.room.from_date:T.DATE;const D=n(T.room.to_date,"YYYY-MM-DD").isAfter(T.DATE)?T.room.to_date:T.DATE;return{ID:T.POOL,FROM_DATE:A,TO_DATE:D,NO_OF_DAYS:o(A,D),STATUS:i[(_=T.booking)===null||_===void 0?void 0:_.status.code],NAME:R(T.room.guest.first_name,T.room.guest.last_name),IDENTIFIER:T.room.identifier,PR_ID:T.pr_id,POOL:T.POOL,BOOKING_NUMBER:T.booking.booking_nbr,NOTES:T.booking.is_direct?T.booking.remark:null,PRIVATE_NOTE:u(T.booking.extras),is_direct:T.booking.is_direct,BALANCE:(e=T.booking.financial)===null||e===void 0?void 0:e.due_amount,channel_booking_nbr:T.booking.channel_booking_nbr,ARRIVAL_TIME:T.booking.arrival.description,defaultDates:{from_date:T.room.from_date,to_date:T.room.to_date},ENTRY_DATE:T.booking.booked_on.date,PHONE_PREFIX:T.booking.guest.country_phone_prefix,IS_EDITABLE:T.booking.is_editable,ARRIVAL:T.booking.arrival,PHONE:(O=T.booking.guest.mobile)!==null&&O!==void 0?O:"",RATE:T.room.total,RATE_PLAN:T.room.rateplan.name,SPLIT_BOOKING:false,RATE_PLAN_ID:T.room.rateplan.id,RATE_TYPE:1,ADULTS_COUNT:T.room.occupancy.adult_nbr,CHILDREN_COUNT:T.room.occupancy.children_nbr,origin:T.booking.origin,GUEST:T.booking.guest,ROOMS:T.booking.rooms,cancelation:T.room.rateplan.cancelation,guarantee:T.room.rateplan.guarantee,TOTAL_PRICE:(a=T.booking.financial)===null||a===void 0?void 0:a.gross_total,COUNTRY:T.booking.guest.country_id,FROM_DATE_STR:T.booking.format.from_date,TO_DATE_STR:T.booking.format.to_date,adult_child_offering:T.room.rateplan.selected_variation.adult_child_offering,SOURCE:{code:T.booking.source.code,description:T.booking.source.description,tag:T.booking.source.tag}}}function N(n,t,o){const T=t.findIndex((t=>t.POOL===n.POOL));if(T===-1){const T=Y(n,o);t.push(T)}}function u(n){var t;if(!n){return null}return((t=n.find((n=>n.key==="private_note")))===null||t===void 0?void 0:t.value)||null}function f(t){let o=[];const T=o=>{const T=n();const E=n(o.to_date,"YYYY-MM-DD");const _=n(o.from_date,"YYYY-MM-DD");if(_.isSame(T,"day")&&T.hour()>=12){return i["000"]}else if(T.isAfter(_,"day")&&T.isBefore(E,"day")){return i["000"]}else if(E.isSame(T,"day")&&T.hour()<12){return i["000"]}else if(E.isSame(T,"day")&&T.hour()>=12||E.isBefore(T,"day")){return i["003"]}else{return i[(t===null||t===void 0?void 0:t.status.code)||"001"]}};const E=t.rooms.filter((n=>!!n["assigned_units_pool"]));E.forEach((E=>{var _,e,O;const A=n(E.from_date,"YYYY-MM-DD").isAfter(n(a.fromDate,"YYYY-MM-DD"))?E.from_date:a.fromDate;const D=n(E.to_date,"YYYY-MM-DD").isAfter(n(a.toDate,"YYYY-MM-DD"))?E.to_date:a.toDate;console.log(D,A,E.from_date,E.to_date);o.push({ID:E["assigned_units_pool"],TO_DATE:E.to_date,FROM_DATE:E.from_date,PRIVATE_NOTE:u(t.extras),NO_OF_DAYS:E.days.length,ARRIVAL:t.arrival,IS_EDITABLE:true,BALANCE:(_=t.financial)===null||_===void 0?void 0:_.due_amount,STATUS:T(E),NAME:R(E.guest.first_name,E.guest.last_name),PHONE:(e=t.guest.mobile)!==null&&e!==void 0?e:"",ENTRY_DATE:"12-12-2023",PHONE_PREFIX:t.guest.country_phone_prefix,RATE:E.total,RATE_PLAN:E.rateplan.name,SPLIT_BOOKING:false,RATE_PLAN_ID:E.rateplan.id,IDENTIFIER:E.identifier,RATE_TYPE:E.roomtype.id,ADULTS_COUNT:E.occupancy.adult_nbr,CHILDREN_COUNT:E.occupancy.children_nbr,PR_ID:+E.unit.id,POOL:E["assigned_units_pool"],GUEST:t.guest,ROOMS:t.rooms,BOOKING_NUMBER:t.booking_nbr,cancelation:E.rateplan.cancelation,guarantee:E.rateplan.guarantee,TOTAL_PRICE:(O=t.financial)===null||O===void 0?void 0:O.gross_total,COUNTRY:t.guest.country_id,FROM_DATE_STR:t.format.from_date,TO_DATE_STR:t.format.to_date,adult_child_offering:E.rateplan.selected_variation.adult_child_offering,ARRIVAL_TIME:t.arrival.description,origin:t.origin,channel_booking_nbr:t.channel_booking_nbr,is_direct:t.is_direct,NOTES:t.is_direct?t.remark:null,SOURCE:{code:t.source.code,description:t.source.description,tag:t.source.tag},ota_notes:t.ota_notes,defaultDates:{from_date:E.from_date,to_date:E.to_date}})}));return o}async function S(n){const t=await c();return{ID:n.POOL,NOTES:"",BALANCE:"",NAME:n.NOTES!==""?n.NOTES:n.STAY_STATUS_CODE==="003"?l(n.BLOCKED_TILL_DATE,n.BLOCKED_TILL_HOUR,n.BLOCKED_TILL_MINUTE):t.find((t=>t.code===n.STAY_STATUS_CODE)).value||"",RELEASE_AFTER_HOURS:n.DESCRIPTION,PR_ID:n.pr_id,ENTRY_DATE:n.BLOCKED_TILL_DATE,ENTRY_HOUR:n.BLOCKED_TILL_HOUR,ENTRY_MINUTE:n.BLOCKED_TILL_MINUTE,OPTIONAL_REASON:n.NOTES,FROM_DATE:n.from_date,TO_DATE:n.to_date,NO_OF_DAYS:d(n.from_date,n.to_date),STATUS:s[n.STAY_STATUS_CODE],POOL:n.POOL,STATUS_CODE:n.STAY_STATUS_CODE,OUT_OF_SERVICE:n.STAY_STATUS_CODE==="004",FROM_DATE_STR:n.format.from_date,TO_DATE_STR:n.format.to_date,defaultDates:{from_date:n.from_date,to_date:n.to_date}}}function d(t,o){const T=n(t,"YYYY-MM-DD");const E=n(o,"YYYY-MM-DD");const _=E.diff(T,"days");return _||1}export{f as a,i as b,a as c,d,D as e,R as f,u as g,S as t};
//# sourceMappingURL=p-074c971c.js.map