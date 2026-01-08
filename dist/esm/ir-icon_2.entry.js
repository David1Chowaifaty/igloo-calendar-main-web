import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-7e96440e.js';

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
    }
    icon = 'ft-check';
    type = 'button';
    iconClickHandler;
    render() {
        return (h("button", { key: '9ca9da7dd760e2748ad0b97cd4c0a36f0f4c4f2e', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: 'b8975082769275aad7f7535d4f2c1fd7d626aaec', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    label;
    borderShown;
    displayContext = 'default';
    justifyContent = 'start';
    closeSideBar;
    get el() { return getElement(this); }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: '4828a60e1a1fe9f463d26cf9d73e6398a13ac000' }, h("h4", { key: 'e418e7e0f4e3481a3844b048b1535f6fcb313c08', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: '1c70426fbfa0dddd66eb2f5c1156214960338ec7', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '3ced2741b51f35dfd69b7f00507295e5a65ffc78', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'a99440c22ac20b1deeeaef1edda5fef41cfedd75', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: '828619aaf052c23f7b8326420b5a756ead1abcc9', class: 'title-body' }, h("slot", { key: '351efb8176baa900aaeaf7826d29c5d3e6dfd4af', name: "title-body" })))));
    }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

export { IrIcon as ir_icon, IrTitle as ir_title };

//# sourceMappingURL=ir-icon_2.entry.js.map