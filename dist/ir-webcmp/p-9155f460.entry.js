import{r as t,c as i,h as r,H as o}from"./p-a62d0400.js";const a=".sc-ir-switch-h{display:block;position:relative;box-sizing:border-box;--ir-root-width:36px;--ir-root-height:20px}.hidden-input.sc-ir-switch{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height)}.SwitchRoot.sc-ir-switch{all:unset;padding:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height);background-color:var(--ir-root-inactive-color, #ff4961);position:relative;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;--webkit-tap-highlight-color:rgba(0, 0, 0, 0);border-radius:9999px;box-sizing:border-box}.SwitchRoot.sc-ir-switch:disabled{opacity:80%}.SwitchRoot.sc-ir-switch:focus-visible{outline:1px solid var(--ir-root-active-color, rgb(55, 188, 155));outline-offset:1px}.SwitchRoot[data-state='checked'].sc-ir-switch{background-color:var(--ir-root-active-color, rgb(55, 188, 155))}.SwitchThumb.sc-ir-switch{padding:0;margin:0;display:block;width:calc(var(--ir-root-height) - 3px);height:calc(var(--ir-root-height) - 3px);border-radius:9999px;background:white;box-shadow:rgba(0, 0, 0, 0.2) 0px;transition:transform 100ms ease 0s;transform:translateX(2px);will-change:transform}.SwitchThumb[data-state='checked'].sc-ir-switch{transform:translateX(calc(var(--ir-root-height) - 3px))}";const e=a;const s=class{constructor(r){t(this,r);this.checkChange=i(this,"checkChange",7);this._id="";this.checked=false;this.switchId=undefined;this.disabled=false}componentWillLoad(){this._id=this.generateRandomId(10)}componentDidLoad(){if(!this.switchRoot){return}this.switchRoot.setAttribute("aria-checked",this.checked?"true":"false")}generateRandomId(t){let i="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";const o=r.length;for(let a=0;a<t;a++){i+=r.charAt(Math.floor(Math.random()*o))}return i}handleCheckChange(){this.checked=!this.checked;this.switchRoot.setAttribute("aria-checked",this.checked?"true":"false");this.checkChange.emit(this.checked)}render(){return r(o,{key:"5adf6db4d0e2760903955848d0fedb79258cc196"},r("button",{key:"afa0c4510952972cb9dec550d161fd3575a22135",disabled:this.disabled,ref:t=>this.switchRoot=t,type:"button",id:this.switchId||this._id,onClick:this.handleCheckChange.bind(this),role:"switch","data-state":this.checked?"checked":"unchecked",value:"on",class:"SwitchRoot"},r("span",{key:"ebab7b3dcab23255c685de6704b648dc4b57fa0d",class:"SwitchThumb","data-state":this.checked?"checked":"unchecked"})),r("input",{key:"d2639074d91993d30c5570c6136a3f31adcc1c8d",type:"checkbox",checked:this.checked,"aria-hidden":"true",tabIndex:-1,value:"on",class:"hidden-input"}))}};s.style=e;export{s as ir_switch};
//# sourceMappingURL=p-9155f460.entry.js.map