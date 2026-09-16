import { r as registerInstance, h, F as Fragment } from './index-CeHdrJeH.js';
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
        return (h(Fragment, { key: '0827838b53471cacf7ad239276f36e8e6bc02450' }, this.showTooltip && h("wa-tooltip", { key: '3f8591901392cabc5db3fd510877f64f6d6c9bc7', for: this._id }, this.unit), h("wa-tag", { key: 'e92efb948cf14d8516e790f57efb6deb3901efb7', id: this._id, class: "unit-tag__el", size: "s", appearance: "filled", variant: "brand" }, h("span", { key: '545d21d493892eae23fa85bfd6eefcbde365781e', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
    }
    static get watchers() { return {
        "unit": [{
                "onUnitChange": 0
            }]
    }; }
};
IrUnitTag.style = irUnitTagCss();

export { IrUnitTag as ir_unit_tag };
