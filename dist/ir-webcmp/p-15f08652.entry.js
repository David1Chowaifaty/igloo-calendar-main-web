import{r as e,c as i,h as t,H as s}from"./p-c8e6073c.js";import{C as a}from"./p-9262a20f.js";import{o as n}from"./p-5eeb531a.js";import{l}from"./p-3ad0bf4e.js";import"./p-f5b71ff4.js";import"./p-0f9965e9.js";import"./p-f2b1cd85.js";const c=".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";const d=c;const o=class{constructor(t){e(this,t);this.saveChannelFinished=i(this,"saveChannelFinished",7);this.closeSideBar=i(this,"closeSideBar",7);var s,n,c;this.channelService=new a;this.channel_status=null;this.ticket=undefined;this.selectedTab="";this.isLoading=false;this.headerTitles=[{id:"general_settings",name:(s=l.entries)===null||s===void 0?void 0:s.Lcz_GeneralSettings,disabled:false},{id:"mapping",name:(n=l.entries)===null||n===void 0?void 0:n.Lcz_Mapping,disabled:true},{id:"channel_booking",name:(c=l.entries)===null||c===void 0?void 0:c.Lcz_ChannelBooking,disabled:true}];this.selectedRoomType=[]}componentWillLoad(){if(this.ticket){this.channelService.setToken(this.ticket)}if(this.channel_status==="edit"){this.enableAllHeaders()}this.selectedTab=this.headerTitles[0].id;n("isConnectedToChannel",(e=>{if(!!e){this.enableAllHeaders()}}))}handleTabChange(e){e.stopPropagation();e.stopImmediatePropagation();this.selectedTab=e.detail}renderTabScreen(){switch(this.selectedTab){case"general_settings":return t("ir-channel-general",{channel_status:this.channel_status});case"mapping":return t("ir-channel-mapping",null);case"channel_booking":return t("div",null,"channel booking");default:return null}}enableAllHeaders(){this.headerTitles=this.headerTitles.map(((e,i)=>i<this.headerTitles.length-1?Object.assign(Object.assign({},e),{disabled:false}):e))}disableNonFirstTabs(){this.headerTitles=this.headerTitles.map(((e,i)=>i>0?Object.assign(Object.assign({},e),{disabled:true}):e))}async saveConnectedChannel(){try{this.isLoading=true;await this.channelService.saveConnectedChannel(null,false);this.saveChannelFinished.emit()}catch(e){console.error(e)}finally{this.isLoading=false}}render(){var e,i;return t(s,{key:"5d178eea91e2223e8437ca4874f7e4e6c58006cd",class:" d-flex flex-column h-100"},t("nav",{key:"54a482f4d79e572689540dda48a43969d60f9885",class:"position-sticky sticky-top pb-1 top-0 bg-white "},t("div",{key:"1e9c8ed2e8f0ca233d43b45ee7ebb1590df172bb",class:"d-flex align-items-center px-1 py-1  justify-content-between"},t("h3",{key:"56814492933f79c6fbf150f4d8e3ae8436097b7c",class:"text-left font-medium-2  py-0 my-0"},this.channel_status==="create"?(e=l.entries)===null||e===void 0?void 0:e.Lcz_CreateChannel:(i=l.entries)===null||i===void 0?void 0:i.Lcz_EditChannel),t("ir-icon",{key:"d84b1f2de453046ba5a041e4a20032522bdbfe97",class:"m-0 p-0 close",onIconClickHandler:()=>{this.closeSideBar.emit(null)}},t("svg",{key:"daadefa823d9a50c147ebe9b978ecad9e9e1bce8",slot:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",height:20,width:20},t("path",{key:"f1653aa0fb0a461a9ea95f2ac46dede03097e584",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})))),t("ir-channel-header",{key:"07b97ee0d36d6f6a247a38d85521c33ebf3c0991",class:"mt-1 px-0",headerTitles:this.headerTitles})),t("section",{key:"ccffab63d8ef0edddd662bc6ce1dfda7a623b9b7",class:"flex-fill tab-container px-1"},this.renderTabScreen()),t("ir-button",{key:"29a7a22288061255f9ce6997d4a88bb956b5abcb",isLoading:this.isLoading,onClickHanlder:()=>this.saveConnectedChannel(),class:"px-1 py-1 top-border",btn_styles:"w-100  justify-content-center align-items-center",text:l.entries.Lcz_Save}))}};o.style=d;export{o as ir_channel_editor};
//# sourceMappingURL=p-15f08652.entry.js.map