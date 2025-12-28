import { Fragment, h } from "@stencil/core";
import { v4 } from "uuid";
export class IrUnitTag {
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
        return (h(Fragment, { key: '2b375d7b0757f80c7e2011b8ae262ff36676a689' }, this.showTooltip && h("wa-tooltip", { key: '5fa97cb82e3193860c4edcf09056aeeff484ef52', for: this._id }, this.unit), h("wa-tag", { key: '0941e9f1217bc802ed003d752d455fe22b265775', id: this._id, class: "unit-tag__el", size: "small", appearance: "filled", variant: "brand" }, h("span", { key: 'e30367c836742f68426e2ef224fede008b31437f', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
    }
    static get is() { return "ir-unit-tag"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unit-tag.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unit-tag.css"]
        };
    }
    static get properties() {
        return {
            "unit": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "unit",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "showTooltip": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "unit",
                "methodName": "onUnitChange"
            }];
    }
}
//# sourceMappingURL=ir-unit-tag.js.map
