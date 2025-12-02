import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irUnitTagCss = ".sc-ir-unit-tag-h{display:inline-flex;box-sizing:border-box;height:fit-content;width:fit-content;padding:0;margin:0}.unit-tag__content.sc-ir-unit-tag{max-width:50px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box}.unit-tag__el.sc-ir-unit-tag{height:1.4rem;overflow:hidden}.unit-tag__el.sc-ir-unit-tag::part(base){padding-top:0;padding-bottom:0;height:fit-content;box-sizing:border-box;height:fit-content}";
const IrUnitTagStyle0 = irUnitTagCss;

const IrUnitTag = /*@__PURE__*/ proxyCustomElement(class IrUnitTag extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    unit;
    showTooltip = false;
    _id = v4();
    resizeObserver;
    contentElement;
    measurementFrame;
    setContentRef = (el) => {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        this.contentElement = el || undefined;
        if (!this.contentElement) {
            return;
        }
        this.attachResizeObserver();
        this.scheduleTooltipUpdate();
    };
    componentDidLoad() {
        this.attachResizeObserver();
        this.scheduleTooltipUpdate();
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
        if (this.measurementFrame) {
            cancelAnimationFrame(this.measurementFrame);
            this.measurementFrame = undefined;
        }
    }
    onUnitChange() {
        this.scheduleTooltipUpdate();
    }
    attachResizeObserver() {
        if (typeof window === 'undefined' || !this.contentElement || typeof ResizeObserver === 'undefined') {
            return;
        }
        if (!this.resizeObserver) {
            this.resizeObserver = new ResizeObserver(() => this.scheduleTooltipUpdate());
        }
        this.resizeObserver.observe(this.contentElement);
    }
    scheduleTooltipUpdate() {
        if (typeof window === 'undefined') {
            return;
        }
        if (this.measurementFrame) {
            cancelAnimationFrame(this.measurementFrame);
        }
        this.measurementFrame = requestAnimationFrame(() => {
            this.measurementFrame = undefined;
            this.updateTooltipState();
        });
    }
    updateTooltipState() {
        if (typeof window === 'undefined') {
            return;
        }
        const content = this.contentElement;
        if (!content || !this.unit) {
            if (this.showTooltip) {
                this.showTooltip = false;
            }
            return;
        }
        const shouldShow = content.scrollWidth > content.clientWidth;
        if (shouldShow !== this.showTooltip) {
            this.showTooltip = shouldShow;
        }
    }
    render() {
        return (h(Fragment, { key: 'd9be752ee4807ade8ec5c901d41a728ff8ebb739' }, this.showTooltip && h("wa-tooltip", { key: '97c4ac8bbc2f300fe05a52d6b2bf5de21544cdbf', for: this._id }, this.unit), h("wa-tag", { key: '967cba40d98f7d4f96bf057a24e591306bb2c262', id: this._id, class: "unit-tag__el", size: "small", appearance: "filled", variant: "brand" }, h("span", { key: '31eb6e5e0647e8e29b64c2a2acf6ee5026aa8185', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
    }
    static get watchers() { return {
        "unit": ["onUnitChange"]
    }; }
    static get style() { return IrUnitTagStyle0; }
}, [2, "ir-unit-tag", {
        "unit": [1],
        "showTooltip": [32]
    }, undefined, {
        "unit": ["onUnitChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-unit-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-unit-tag":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUnitTag);
            }
            break;
    } });
}

export { IrUnitTag as I, defineCustomElement as d };

//# sourceMappingURL=ir-unit-tag2.js.map