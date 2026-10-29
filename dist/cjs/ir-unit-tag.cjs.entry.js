'use strict';

var index = require('./index-IDeZZwEK.js');
var v4 = require('./v4-_2BfiRUa.js');

const irUnitTagCss = () => `.sc-ir-unit-tag-h{display:inline-flex;box-sizing:border-box;height:fit-content;width:fit-content;padding:0;margin:0}.unit-tag__content.sc-ir-unit-tag{max-width:50px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box}.unit-tag__el.sc-ir-unit-tag{height:1.4rem;overflow:hidden}.unit-tag__el.sc-ir-unit-tag::part(base),.unit-tag__el.sc-ir-unit-tag [part~="base"]{padding-top:0;padding-bottom:0;height:fit-content;box-sizing:border-box;height:fit-content}`;

const IrUnitTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    unit;
    showTooltip = false;
    _id = v4.v4();
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
        return (index.h(index.Fragment, { key: 'b8589f9ea3b8d0d86d805981582d9b89a8363d24' }, this.showTooltip && index.h("wa-tooltip", { key: 'e536be6dadfebe804942dc34befd9b32b4e4b314', for: this._id }, this.unit), index.h("wa-tag", { key: 'b6ceb5ecb37953a5ee4e8dec0b0da04897b6a17a', id: this._id, class: "unit-tag__el", size: "s", appearance: "filled", variant: "brand" }, index.h("span", { key: '0d15c2a5e29db2cb0106885e1821a0662a0a046f', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
    }
    static get watchers() { return {
        "unit": [{
                "onUnitChange": 0
            }]
    }; }
};
IrUnitTag.style = irUnitTagCss();

exports.ir_unit_tag = IrUnitTag;
