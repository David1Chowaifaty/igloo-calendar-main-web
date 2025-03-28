import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { v as v4 } from './v4.js';

const otaLabelCss = "*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px;width:100%}.label_title.sc-ota-label{min-width:max-content;padding:0;margin:0;font-weight:600}ul.sc-ota-label{margin:0 3px;padding:0;list-style:none;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}li.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}button.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-left:3px;font-size:12px;border:0}button.sc-ota-label:hover{color:#355270}";

const OtaLabel = /*@__PURE__*/ proxyCustomElement(class OtaLabel extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.maxVisibleItems = 3;
        this.showAll = false;
        this.toggleShowAll = () => {
            this.showAll = !this.showAll;
        };
    }
    render() {
        if (!this.remarks) {
            return null;
        }
        const displayedRemarks = this.showAll ? this.remarks : this.remarks.slice(0, this.maxVisibleItems);
        return (h(Host, null, h("p", { class: 'label_title' }, this.label), h("ul", null, displayedRemarks.map((remark, index) => (h("li", { key: v4() }, "- ", remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index === displayedRemarks.length - 1 && (h("button", { onClick: this.toggleShowAll }, this.showAll ? locales.entries.Lcz_ShowLess : locales.entries.Lcz_ShowMore))))))));
    }
    static get style() { return otaLabelCss; }
}, [2, "ota-label", {
        "label": [1],
        "remarks": [16],
        "maxVisibleItems": [2, "max-visible-items"],
        "showAll": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ota-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, OtaLabel);
            }
            break;
    } });
}

export { OtaLabel as O, defineCustomElement as d };
//# sourceMappingURL=ota-label2.js.map

//# sourceMappingURL=ota-label2.js.map