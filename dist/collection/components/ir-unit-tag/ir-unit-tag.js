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
        return (h(Fragment, { key: '416c2e333800395b7cbc085cbfe9786c6608c2fa' }, this.showTooltip && h("wa-tooltip", { key: 'c937746435201fb0519c7e1582619e158e335a4d', for: this._id }, this.unit), h("wa-tag", { key: '87c25d50769a50f9f426bf629fbcd6656acbc692', id: this._id, class: "unit-tag__el", size: "s", appearance: "filled", variant: "brand" }, h("span", { key: 'c21654c45fd64d5d8af438a14e3bcf9112f4e56a', class: "unit-tag__content", ref: this.setContentRef }, this.unit))));
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
                "reflect": false,
                "attribute": "unit"
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
