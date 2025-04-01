import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irSwitchCss = ".sc-ir-switch-h{display:block;position:relative;box-sizing:border-box;--ir-root-width:36px;--ir-root-height:20px}.hidden-input.sc-ir-switch{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height)}.SwitchRoot.sc-ir-switch{all:unset;padding:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height);background-color:var(--ir-root-inactive-color, #ff4961);position:relative;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;--webkit-tap-highlight-color:rgba(0, 0, 0, 0);border-radius:9999px;box-sizing:border-box}.SwitchRoot.sc-ir-switch:disabled{opacity:80%}.SwitchRoot.sc-ir-switch:focus-visible{outline:1px solid var(--ir-root-active-color, rgb(55, 188, 155));outline-offset:1px}.SwitchRoot[data-state='checked'].sc-ir-switch{background-color:var(--ir-root-active-color, rgb(55, 188, 155))}.SwitchThumb.sc-ir-switch{padding:0;margin:0;display:block;width:calc(var(--ir-root-height) - 3px);height:calc(var(--ir-root-height) - 3px);border-radius:9999px;background:white;box-shadow:rgba(0, 0, 0, 0.2) 0px;transition:transform 100ms ease 0s;transform:translateX(2px);will-change:transform}.SwitchThumb[data-state='checked'].sc-ir-switch{transform:translateX(calc(var(--ir-root-height) - 3px))}";

const IrSwitch = /*@__PURE__*/ proxyCustomElement(class IrSwitch extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.checkChange = createEvent(this, "checkChange", 7);
        this.checked = false;
        this.disabled = false;
        this._id = '';
    }
    componentWillLoad() {
        this._id = this.generateRandomId(10);
    }
    componentDidLoad() {
        if (!this.switchRoot) {
            return;
        }
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    generateRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    handleCheckChange() {
        this.checked = !this.checked;
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        this.checkChange.emit(this.checked);
    }
    render() {
        return (h(Host, { key: '471dd8e8b1920df2d1ab97919e4c73e16638e903' }, h("button", { key: '8d62f155424bf037fa4a6687b12d9d67647e1f5f', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, h("span", { key: '0b40fce290cf350b63fd6c5c65e70330c826cf5a', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), h("input", { key: '941949a55f73c20875f95113c876aa21355f4f05', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
    static get style() { return irSwitchCss; }
}, [2, "ir-switch", {
        "checked": [1028],
        "switchId": [1, "switch-id"],
        "disabled": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-switch"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-switch":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSwitch);
            }
            break;
    } });
}

export { IrSwitch as I, defineCustomElement as d };
//# sourceMappingURL=ir-switch2.js.map

//# sourceMappingURL=ir-switch2.js.map