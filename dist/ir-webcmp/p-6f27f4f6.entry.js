import{r as i,h as t,H as s}from"./p-ee49d535.js";import{t as e,u as n}from"./p-32d0e309.js";import"./p-6c4ba7c0.js";const o=".sc-ir-booking-h{display:block}";const r=o;const h=class{constructor(t){i(this,t);this.propertyid=undefined;this.p=undefined;this.bookingNumber=undefined;this.token=undefined}componentWillLoad(){const i=e();if(i){this.token=i.token}}handleAuthFinish(i){this.token=i.detail.token;n({login:{method:"direct",isLoggedIn:true,token:this.token}})}render(){if(!this.token)return t(s,null,t("ir-login",{onAuthFinish:this.handleAuthFinish.bind(this)}));return t(s,null,t("ir-booking-details",{p:this.p,hasPrint:true,hasReceipt:true,propertyid:this.propertyid,hasRoomEdit:true,hasRoomDelete:true,language:"en",bookingNumber:this.bookingNumber,ticket:this.token}))}};h.style=r;export{h as ir_booking};
//# sourceMappingURL=p-6f27f4f6.entry.js.map