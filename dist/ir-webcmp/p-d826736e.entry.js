import{r as e,h as t,H as a,g as s,c as i}from"./p-c8e6073c.js";import{h as c,H as n}from"./p-1901a80b.js";import{l as r}from"./p-3ad0bf4e.js";import"./p-f5b71ff4.js";import"./p-f2b1cd85.js";const d=".sc-ir-hk-team-h{display:block}th.sc-ir-hk-team,td.sc-ir-hk-team{text-align:left !important;width:fit-content !important}input.sc-ir-hk-team{border:none;margin:0;width:120px}input.sc-ir-hk-team:focus{outline:none}.table-container.sc-ir-hk-team{padding:10px 0;overflow-x:auto;max-width:100%;width:max-content}.table.sc-ir-hk-team,th.sc-ir-hk-team,td.sc-ir-hk-team{border-color:white !important}thead.sc-ir-hk-team{border:0 !important}table.sc-ir-hk-team{border:0 !important}.icons-container.sc-ir-hk-team{display:flex;align-items:center;justify-content:center;gap:4px}.text-center.sc-ir-hk-team{text-align:center !important}.assignments-container.sc-ir-hk-team,.unassigned-container.sc-ir-hk-team{display:flex;align-items:center}.gap-16.sc-ir-hk-team{gap:16px}.unassigned-container.sc-ir-hk-team{gap:4px}.justify-between.sc-ir-hk-team{justify-content:space-between;margin-bottom:10px}.assignments-container.sc-ir-hk-team p.sc-ir-hk-team,h4.sc-ir-hk-team{margin:0}.outline-btn.sc-ir-hk-team{background:white;border:1px solid var(--blue);color:var(--blue);border-radius:5px;font-size:12px;padding:1px 0.25rem !important;margin:0}.outline-btn.sc-ir-hk-team:hover{color:white;background:var(--blue)}@media only screen and (min-width: 900px){td.sc-ir-hk-team{min-width:140px !important;width:max-content !important}}@media only screen and (max-width: 900px){.table-container.sc-ir-hk-team{width:max-content !important}}";const l=d;var o=undefined&&undefined.__rest||function(e,t){var a={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0)a[s]=e[s];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++){if(t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i]))a[s[i]]=e[s[i]]}return a};const b=class{constructor(t){e(this,t);this.currentTrigger=null}renderAssignedUnits(e){if(e.assigned_units.length===0){return t("span",null,"0 -"," ",t("button",{class:"outline-btn",onClick:()=>this.currentTrigger={type:"unassigned_units",user:e}},r.entries.Lcz_Assign))}return t("span",null,e.assigned_units.length," -"," ",t("button",{onClick:()=>this.currentTrigger={type:"unassigned_units",user:e},class:"outline-btn"},r.entries.Lcz_Edit))}renderCurrentTrigger(){var e;switch((e=this.currentTrigger)===null||e===void 0?void 0:e.type){case"unassigned_units":return t("ir-hk-unassigned-units",{slot:"sidebar-body",user:this.currentTrigger.user});case"user":return t("ir-hk-user",{slot:"sidebar-body",user:this.currentTrigger.user,isEdit:this.currentTrigger.isEdit});default:return null}}handleCloseSideBar(e){e.stopImmediatePropagation();e.stopPropagation();this.currentTrigger=null}handleDeletion(e){this.currentTrigger={type:"delete",user:e};this.deletionTimout=setTimeout((()=>{const e=this.el.querySelector("ir-delete-modal");if(!e)return;e.openModal()}),100)}disconnectedCallback(){clearTimeout(this.deletionTimout)}render(){var e;const{assigned:s,total:i,un_assigned:n}=c.hk_criteria.units_assignments;return t(a,{key:"9b2620fd2952fcccfe60c0b1f74d0d6a20ed1044",class:"card p-1"},t("section",{key:"ac24e8647a5b75f8a8b37f47c451d88f58dcf6c7"},t("ir-title",{key:"c9ea85c59e84f629e44e2a1ca9f474520094e18c",label:r.entries.Lcz_HousekeepingTeam,justifyContent:"space-between"},t("div",{key:"17132ab77b861b5bf3fd230964aebc4ef49b6b0d",slot:"title-body",class:"assignments-container gap-16 m-0"},t("p",{key:"271a75ed3448db3f01c0545245ce431d93b135be",class:"font-weight-bold m-0 p-0"},i," ",r.entries.Lcz_TotalUnits),t("p",{key:"329af5278fb257cdba9af875df543cf2facca913",class:"m-0 p-0"},s," ",t("span",{key:"a746ed5535bba3a30ee1c5b486a71256a864612a"},r.entries.Lcz_Assigned)),n>0&&t("button",{class:"outline-btn",onClick:()=>this.currentTrigger={type:"unassigned_units",user:null}},n," ",r.entries.Lcz_Unassigned))),t("p",{key:"c1b77c2df3a8c64b0a9305c65a7c4376bdd789fc",class:"m-0 p-0"},r.entries.Lcz_AsAnOption)),t("section",{key:"6920c93b12baef2332d5bc82d07b82d9f3ffcb13",class:"table-container"},t("table",{key:"ef0d307a8b449a13cee7552ca68174c34b46b242",class:"table"},t("thead",{key:"9dda7d6be7edec49c57d09cc15aebbf2ec53ba42"},t("tr",{key:"b8f5f623e608ef90d5e4d69fc45b130c555b1aea"},t("th",{key:"2a70b5eca762eedccf573a61b6a1440d7ffafe22",class:"text-left"},r.entries.Lcz_Name),t("th",{key:"90685acdf1a43796d5897b6b0c0ebd0e8e151463"},r.entries.Lcz_Mobile),t("th",{key:"241454f66278be59a2927cb77ea17b5458b23269"},r.entries.Lcz_Username),t("th",{key:"76cf084b7b6579860d823caa6afcc9432418bbda"},r.entries.Lcz_Note),t("th",{key:"dee2973b159d27d5de7ad3257c0f432572f76d0b"},r.entries.Lcz_UnitsAssigned),t("th",{key:"83bdf8c1bfbaeef4d800fa2ded18ff479dcf772d",class:"text-center"},t("ir-icon",{key:"3e0b14225ae43b4709ce898c643a6fb216ac2134",title:r.entries.Lcz_CreateHousekeeper,onIconClickHandler:()=>{this.currentTrigger={type:"user",isEdit:false,user:null}}},t("svg",{key:"138f7086f0d86eecba31e6ba57773bb726179af8",slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"20",width:"17.5",viewBox:"0 0 448 512"},t("path",{key:"8c960ddaf66330baa9313444ddfd838e1c8576f1",fill:"currentColor",d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"})))))),t("tbody",{key:"f5f244cb4ddd51c4d76835a919e9afac7d1489c0"},c.hk_criteria.housekeepers.map((e=>t("tr",{key:e.id},t("td",{class:"text-left"},e.name),t("td",null,e.phone_prefix," ",e.mobile),t("td",null,e.username),t("td",null,e.note),t("td",null,this.renderAssignedUnits(e)),t("td",{class:"text-center"},t("div",{class:"icons-container"},t("ir-icon",{title:r.entries.Lcz_EditHousekeeper,onIconClickHandler:()=>{const t=o(e,["assigned_units","is_soft_deleted","is_active"]);this.currentTrigger={type:"user",isEdit:true,user:t}},icon:"ft-save color-ir-light-blue-hover h5 pointer sm-margin-right"},t("svg",{slot:"icon",xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",viewBox:"0 0 512 512"},t("path",{fill:"#6b6f82",d:"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"}))),t("span",null,"  "),t("ir-icon",{title:r.entries.Lcz_DeleteHousekeeper,icon:"ft-trash-2 danger h5 pointer",onIconClickHandler:()=>this.handleDeletion(e)},t("svg",{slot:"icon",fill:"#ff2441",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"14.25",viewBox:"0 0 448 512"},t("path",{d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"}))))))))))),t("ir-sidebar",{key:"d208b9e611bd20f5256a1ba3b30922fd39cb327e",showCloseButton:false,open:this.currentTrigger!==null&&this.currentTrigger.type!=="delete",onIrSidebarToggle:()=>this.currentTrigger=null,style:{"--sidebar-width":this.currentTrigger?this.currentTrigger.type==="unassigned_units"?"max-content":"40rem":"max-content"}},this.renderCurrentTrigger()),((e=this.currentTrigger)===null||e===void 0?void 0:e.type)==="delete"&&t("ir-delete-modal",{user:this.currentTrigger.user}))}get el(){return s(this)}};b.style=l;const f=".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";const u=f;const h=class{constructor(t){e(this,t);this.resetData=i(this,"resetData",7);this.housekeepingService=new n}componentWillLoad(){this.housekeepingService.setToken(c.default_properties.token)}async handleSelectChange(e){try{e.stopPropagation();e.stopImmediatePropagation();const t=e.detail;let a;if(t===""){a={is_active:false,window:-1}}else{a={is_active:true,window:+t}}await this.housekeepingService.setExposedInspectionMode(c.default_properties.property_id,a);this.resetData.emit(null)}catch(e){console.error(e)}}render(){var e;return t(a,{key:"cce077314fb8693c49ca56e85b8bcc02e620da7b",class:"card p-1"},t("ir-title",{key:"f8c297c03631a4120928826fffdf6ef017d278ca",label:r.entries.Lcz_RoomOrUnitStatus}),t("div",{key:"5bfdf202cc169428afaba9e6bb35ef38f04d7797",class:"table-container"},t("table",{key:"9d47e32f559eef9ec8d5f9dd0137f6525a34aa7f"},t("thead",{key:"87db17ce357e4ed7de751a040839cddd5bf75823"},t("tr",{key:"ce5b4779f265d71c7fa2e017dbb74ae73277e262"},t("th",{key:"521ef347fe804f44df91ba74e8811e2c9fee48d6"},r.entries.Lcz_Status),t("th",{key:"b3976f70aab0933e7ddd40122db0a781820c8531",class:"text-center"},r.entries.Lcz_Code),t("th",{key:"ad47a0bcd16c539a7ec5f1fa201d985dd25c92e4"},r.entries.Lcz_Action))),t("tbody",{key:"94485d1fef88b9c3faf482fb82ba115a282ca01f"},(e=c.hk_criteria.statuses)===null||e===void 0?void 0:e.map((e=>{var a;return t("tr",{key:e.code},t("td",null,t("div",{class:"status-container"},t("span",{class:`circle ${e.style.shape} ${e.style.color}`}),t("p",null,e.description))),t("td",null,e.code),t("td",null,t("div",{class:"action-container"},t("p",{class:"m-0"},e.action),e.code==="VAC"&&t("div",null,t("ir-select",{selectedValue:e.inspection_mode.is_active?(a=e.inspection_mode)===null||a===void 0?void 0:a.window.toString():"",LabelAvailable:false,firstOption:r.entries.Lcz_No,onSelectChange:this.handleSelectChange.bind(this),data:Array.from(Array(7+1),((e,t)=>t)).map((e=>{const t=e===0?r.entries.Lcz_YesOnTheSameDay:e===1?r.entries.Lcz_DayPrior.replace("%1",e.toString()):r.entries.Lcz_DaysPrior.replace("%1",e.toString());return{text:t,value:e.toString()}}))})))))}))))))}};h.style=u;export{b as ir_hk_team,h as ir_unit_status};
//# sourceMappingURL=p-d826736e.entry.js.map