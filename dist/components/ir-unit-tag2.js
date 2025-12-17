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
        return (h(Fragment, { key: '379f3bf719a6e3c3875dd4dba0adf730f6314a51' }, this.showTooltip && h("wa-tooltip", { key: '2a98c144cd00c5ff6baa2d8aaeb35db2d9557ca0', for: this._id }, this.unit), h("wa-tag", { key: '948a7530ab8ccf5bf9da2d7bbfc3ba3e789232c8', id: this._id, class: "unit-tag__el", size: "small", appearance: "filled", variant: "brand" }, h("span", { key: '596ad4987e8f2cea2f04e305cdf9be255af8d75a', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
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