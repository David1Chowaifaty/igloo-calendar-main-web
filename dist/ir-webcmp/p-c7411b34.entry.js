import{r as t,h as e,H as s}from"./p-jhiFt_tX.js";import{l as a}from"./p-DRfRlSCW.js";import{k as i}from"./p-Xv5_FAQM.js";import{h as r}from"./p-Mki5YqAR.js";import"./p-vROPuQAY.js";import"./p-DeW5X45W.js";import"./p-BSI30sps.js";import"./p-BFTU3MAI.js";import"./p-CT3GgrvE.js";const o=".sc-ir-date-view-h{display:block;font-size:13.65px !important;width:100%}.mx-01.sc-ir-date-view{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";const c=class{constructor(e){t(this,e);this.showDateDifference=true;this.dateOption="YYYY-MM-DD"}componentWillLoad(){this.initializeDates()}handleFromDateChange(t,e){if(t!==e){this.initializeDates()}}handleToDateChange(t,e){if(t!==e){this.initializeDates()}}initializeDates(){this.convertDate("from_date",this.from_date);this.convertDate("to_date",this.to_date);const t=r(this.dates.from_date,"MMM DD, YYYY").format("YYYY-MM-DD");const e=r(this.dates.to_date,"MMM DD, YYYY").format("YYYY-MM-DD");this.dates.date_difference=i(t,e)}convertDate(t,e){this.dates=this.dates||{from_date:"",to_date:"",date_difference:0};if(!e){return}if(typeof e==="string"){this.dates[t]=r(e,this.dateOption).format("MMM DD, YYYY")}else if(e instanceof Date){this.dates[t]=r(e).format("MMM DD, YYYY")}else if(r.isMoment(e)){this.dates[t]=e.format("MMM DD, YYYY")}else{console.error("Unsupported date type")}}render(){return e(s,{key:"00ec092c875abd4d71fe0792df4306d564b0c28c",class:"d-flex align-items-center"},e("span",{key:"e3fd01c86881d6bca6f6fc0686935b1abcdde9c0"},this.dates.from_date)," ",e("svg",{key:"7f09d1811ffaad42a28f113ce253d52aa088a2e0",xmlns:"http://www.w3.org/2000/svg",class:"mx-01",height:"14",width:"14",viewBox:"0 0 512 512"},e("path",{key:"9d914f948486b64c2684ad7a5e4e75977f63a00e",fill:"currentColor",d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})),e("span",{key:"b84aba5dc038c91cebc346e717d010c284030f5a"},this.dates.to_date," ",this.showDateDifference&&e("span",{key:"f00d0abc5e330e72852883b5416ae62e73d7e8e8",class:"mx-01"},this.dates.date_difference,"   ",this.dates.date_difference>1?` ${a.entries.Lcz_Nights}`:` ${a.entries.Lcz_Night}`)))}static get watchers(){return{from_date:["handleFromDateChange"],to_date:["handleToDateChange"]}}};c.style=o;export{c as ir_date_view};
//# sourceMappingURL=p-c7411b34.entry.js.map