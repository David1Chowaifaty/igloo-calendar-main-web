import{r as t,c as i,h as e,H as s}from"./p-ee49d535.js";import{P as l,p as n}from"./p-02bdb8e5.js";import{i as o}from"./p-c71f0e9e.js";import{l as a}from"./p-806fad31.js";import{L as r}from"./p-213fedad.js";import"./p-06203439.js";import"./p-4eb12235.js";const c=".sc-ir-option-details-h{display:block}.money-transfer-form.sc-ir-option-details{min-height:250px !important}";const d=c;const h=class{constructor(e){t(this,e);this.closeModal=i(this,"closeModal",7);this.toast=i(this,"toast",7);this.paymentOptionService=new l;this.propertyId=undefined;this.localizationIdx=undefined;this.selectedLanguage=null;this.invalid=false}async componentWillLoad(){var t;if(n.selectedOption.code!=="005"){return}if(!n.languages){const t=await this.paymentOptionService.GetExposedLanguages();n.languages=t}const i=(t=n.selectedOption.localizables)!==null&&t!==void 0?t:[];this.selectedLanguage=n.languages[0].id.toString();if(i.length===0){i.push(this.createBankTransferInfoObject(n.languages[0]))}this.localizationIdx=n.selectedOption.code==="005"?i===null||i===void 0?void 0:i.findIndex((t=>t.language.id.toString()===this.selectedLanguage)):null;n.selectedOption=Object.assign(Object.assign({},n.selectedOption),{localizables:i})}createBankTransferInfoObject(t){return{code:"BANK_TRANSFER_INFO",description:"",id:null,language:t}}async saveOption(t){var i,e;t.preventDefault();t.stopPropagation();t.stopImmediatePropagation();let s=Object.assign(Object.assign({},n.selectedOption),{property_id:this.propertyId,is_active:n.mode==="create"?true:(i=n.selectedOption.is_active)!==null&&i!==void 0?i:false});if((s===null||s===void 0?void 0:s.code)==="005"){const t=(e=s.localizables.find((t=>t.language.code.toLowerCase()==="en")))===null||e===void 0?void 0:e.description;if(!t||t.trim()===""||this.isEditorEmpty(t.trim())){this.selectedLanguage=n.languages.find((t=>t.code.toLowerCase()==="en")).id.toString();this.localizationIdx=n.selectedOption.localizables.findIndex((t=>t.language.id.toString()===this.selectedLanguage));this.invalid=true;return}}if(s.is_payment_gateway){s.display_order=0;const t=s.data.some((t=>!t.value||t.value===""));if(t){this.invalid=true;return}}await this.paymentOptionService.HandlePaymentMethod(s);this.toast.emit({type:"success",description:"",title:a.entries.Lcz_Saved,position:"top-right"});this.closeModal.emit(s)}isEditorEmpty(t){const i=t.replace(/<\/?[^>]+(>|$)/g,"").replace(/&nbsp;/g,"").trim();return i.length===0}handleSelectChange(t){var i;t.stopImmediatePropagation();t.stopPropagation();if(n.selectedOption.code!=="005"){return}this.selectedLanguage=t.detail;let e=n.selectedOption.localizables.findIndex((t=>t.language.id.toString()===this.selectedLanguage));const s=(i=n.selectedOption.localizables)!==null&&i!==void 0?i:[];if(e===-1){s.push(this.createBankTransferInfoObject(n.languages.find((t=>t.id.toString()===this.selectedLanguage))));n.selectedOption=Object.assign(Object.assign({},n.selectedOption),{localizables:s});e=s.length-1}this.localizationIdx=e}handleTextAreaChange(t){const i=t.detail;if(i.trim()!==""&&this.invalid){this.invalid=false}const e=[...n.selectedOption.localizables];e[this.localizationIdx]=Object.assign(Object.assign({},e[this.localizationIdx]),{description:i});n.selectedOption=Object.assign(Object.assign({},n.selectedOption),{localizables:e})}handlePaymentGatewayInfoChange(t,i){const e=t.detail;const s=[...n.selectedOption.data];s[i]=Object.assign(Object.assign({},s[i]),{value:e});n.selectedOption=Object.assign(Object.assign({},n.selectedOption),{data:s})}render(){var t,i,l,c;if(!n.selectedOption){return null}return e(s,null,e("form",{class:"p-1 mt-2",onSubmit:this.saveOption.bind(this)},n.selectedOption.code==="005"?e("div",null,e("div",{class:"mb-1"},e("ir-select",{selectedValue:this.selectedLanguage,LabelAvailable:false,showFirstOption:false,data:n.languages.map((t=>({text:t.description,value:t.id.toString()})))})),e("div",null,this.invalid&&e("p",{class:"text-danger p-0 m-0"},a.entries.Lcz_YouMustFillEnglishField),e("ir-text-editor",{plugins:[r],pluginsMode:"add",toolbarItemsMode:"add",toolbarItems:["|","link"],style:{"--ir-editor-height":"250px"},error:this.invalid,value:this.localizationIdx!==null?(l=(i=(t=n.selectedOption)===null||t===void 0?void 0:t.localizables[this.localizationIdx])===null||i===void 0?void 0:i.description)!==null&&l!==void 0?l:"":"",onTextChange:this.handleTextAreaChange.bind(this)}))):e("div",null,(c=n.selectedOption.data)===null||c===void 0?void 0:c.map(((t,i)=>{var s,l;return e("fieldset",{key:t.key},e("ir-input-text",{value:t.value,onTextChange:t=>this.handlePaymentGatewayInfoChange(t,i),id:`input_${t.key}`,label:t.key.replace(/_/g," "),placeholder:"",labelWidth:4,"aria-invalid":this.invalid&&(t.value===null||((l=(s=t.value)!==null&&s!==void 0?s:"")===null||l===void 0?void 0:l.trim())==="")?"true":"false"}))}))),e("div",{class:"d-flex flex-column flex-sm-row mt-3"},e("ir-button",{onClick:()=>this.closeModal.emit(null),btn_styles:"justify-content-center",class:`mb-1 mb-sm-0 flex-fill mr-sm-1`,icon:"",text:a.entries.Lcz_Cancel,btn_color:"secondary",btn_type:"button"}),e("ir-button",{btn_type:"submit",btn_styles:"justify-content-center align-items-center",class:"m-0 flex-fill text-center",icon:"",isLoading:o("/Handle_Payment_Method"),text:a.entries.Lcz_Save,btn_color:"primary"}))))}};h.style=d;export{h as ir_option_details};
//# sourceMappingURL=p-1c95ed03.entry.js.map