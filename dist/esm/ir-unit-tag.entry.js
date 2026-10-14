import { r as registerInstance, h, F as Fragment } from './index-DKZeCK8T.js';
import { v as v4 } from './v4-CK3_k8jD.js';

const irUnitTagCss = () => `.sc-ir-unit-tag-h{display:inline-flex;box-sizing:border-box;height:fit-content;width:fit-content;padding:0;margin:0}.unit-tag__content.sc-ir-unit-tag{max-width:50px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box}.unit-tag__el.sc-ir-unit-tag{height:1.4rem;overflow:hidden}.unit-tag__el.sc-ir-unit-tag::part(base),.unit-tag__el.sc-ir-unit-tag [part~="base"]{padding-top:0;padding-bottom:0;height:fit-content;box-sizing:border-box;height:fit-content}`;

const IrUnitTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Fragment, { key: '791db953be4525e4767fd32d05802461f7a944fb' }, this.showTooltip && h("wa-tooltip", { key: 'da2d74732ce32558af86b0bad4eefdf73008a705', for: this._id }, this.unit), h("wa-tag", { key: '7b495b94444d25b1116cdd13d13c18b97225242f', id: this._id, class: "unit-tag__el", size: "s", appearance: "filled", variant: "brand" }, h("span", { key: 'aee04f0daf2598327f9368f4fe1fe1a46842c93d', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
    }
    static get watchers() { return {
        "unit": [{
                "onUnitChange": 0
            }]
    }; }
};
IrUnitTag.style = irUnitTagCss();

export { IrUnitTag as ir_unit_tag };
